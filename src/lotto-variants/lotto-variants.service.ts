import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLottoVariantDto } from './dto/create-lotto-variant.dto';
import { UpdateLottoVariantDto } from './dto/update-lotto-variant.dto';

@Injectable()
export class LottoVariantsService {
  constructor(private prisma: PrismaService) {}

  async create(createLottoVariantDto: CreateLottoVariantDto) {
    return this.prisma.tbl_lotto_variants.create({
      data: createLottoVariantDto,
    });
  }

  async findAll() {
    return this.prisma.tbl_lotto_variants.findMany({
      where: { is_active: true },
      include: {
        product: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.tbl_lotto_variants.findUnique({
      where: { id , is_active: true },
      include: {
        product: true,
      },
    });
  }

  async update(id: number, updateLottoVariantDto: UpdateLottoVariantDto) {
    return this.prisma.tbl_lotto_variants.update({
      where: { id , is_active: true },
      data: updateLottoVariantDto,
    });
  }

}
