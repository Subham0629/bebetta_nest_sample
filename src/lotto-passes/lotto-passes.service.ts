import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLottoPassDto } from './dto/create-lotto-pass.dto';
import { UpdateLottoPassDto } from './dto/update-lotto-pass.dto';

@Injectable()
export class LottoPassesService {
  constructor(private prisma: PrismaService) {}

  async create(createLottoPassDto: CreateLottoPassDto) {
    return this.prisma.tbl_lotto_passes.create({
      data: createLottoPassDto,
    });
  }

  async findAll(variant_id: number, searchTerm?: string, page = 1, limit = 10) {
    const skip = (page - 1) * limit;
    const take = limit;
  
    if (searchTerm) {
      const searchTermStr = searchTerm.toString();
      return this.prisma.$queryRaw`
        SELECT * FROM tbl_lotto_passes
        WHERE variant_id = ${variant_id}
        AND CAST(pass_number AS TEXT) LIKE CONCAT('%', ${searchTermStr}, '%')
        LIMIT ${take} OFFSET ${skip}
      `;
    } else {
      return this.prisma.tbl_lotto_passes.findMany({
        where: {
          variant_id,
        },
        skip,
        take,
      });
    }
  }

  // async findOne(id: number) {
  //   return this.prisma.tbl_lotto_passes.findUnique({
  //     where: { id },
  //   });
  // }

  async update(id: number, updateLottoPassDto: UpdateLottoPassDto) {
    return this.prisma.tbl_lotto_passes.update({
      where: { id },
      data: updateLottoPassDto,
    });
  }


  private async generateUniquePassNumber(variant_id: number): Promise<number> {
    let passNumber: number;
    let isUnique = false;

    while (!isUnique) {
      passNumber = Math.floor(10000000 + Math.random() * 90000000);
      const existingPass = await this.prisma.tbl_lotto_passes.findFirst({
        where: {
          pass_number: passNumber,
          variant_id,
        },
      });

      if (!existingPass) {
        isUnique = true;
      }
    }

    return passNumber;
  }

  async createMultiplePasses(product_id: number) {
    const variants = await this.prisma.tbl_lotto_variants.findMany({
      where: { product_id },
    });

    const passesData = [];

    for (const variant of variants) {
      for (let i = 0; i < variant.passes_limit; i++) {
        const passNumber = await this.generateUniquePassNumber(variant.id);
        passesData.push({
          product_id,
          variant_id: variant.id,
          pass_number: passNumber,
          is_exhausted: false,
          is_active: true,
        });
      }
    }

    return this.prisma.tbl_lotto_passes.createMany({
      data: passesData,
    });
  }

  async getRandomPassNumbers(variant_id: number, rank: number, winners_count: number) {
    // Validate winners_count
    if (winners_count <= 0) {
      throw new BadRequestException('winners_count must be greater than 0.');
    }

 
    const passes = await this.prisma.tbl_lotto_passes.findMany({
      where: {
        variant_id,
      },
    });

 
    const shuffledPasses = passes.sort(() => 0.5 - Math.random());
    const selectedPasses = shuffledPasses.slice(0, winners_count);


    return selectedPasses.map(pass => ({
      pass_number: pass.pass_number,
      rank,
      variant_id
    }));
  }
}
