import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLottoPrizeVariantDto } from './dto/create-lotto-prize-variant.dto';
import { UpdateLottoPrizeVariantDto } from './dto/update-lotto-prize-variant.dto';

@Injectable()
export class LottoPrizeVariantsService {
  constructor(private prisma: PrismaService) {}

  async create(createLottoPrizeVariantDto: CreateLottoPrizeVariantDto) {
    return this.prisma.tbl_lotto_prize_variants.create({
      data: createLottoPrizeVariantDto,
    });
  }

  async findAll() {
    return this.prisma.tbl_lotto_prize_variants.findMany({
      include: {
        product: true,
        variant: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.tbl_lotto_prize_variants.findUnique({
      where: { id },
      include: {
        product: true,
        variant: true,
      },
    });
  }

  async update(id: number, updateLottoPrizeVariantDto: UpdateLottoPrizeVariantDto) {
    return this.prisma.tbl_lotto_prize_variants.update({
      where: { id },
      data: updateLottoPrizeVariantDto,
    });
  }

  async findByVariantId(variant_id: number) {
    return this.prisma.tbl_lotto_prize_variants.findMany({
      where: { variant_id },
      include: {
        product: true,
        variant: true,
      },
    });
  }
}
