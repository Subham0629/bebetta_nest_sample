import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCurrencyVariantDto } from './dto/create-currency_variant.dto';
import { UpdateCurrencyVariantDto } from './dto/update-currency_variant.dto';

@Injectable()
export class CurrencyVariantsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCurrencyVariantDto: CreateCurrencyVariantDto) {
    return await this.prisma.tbl_currency_variants.create({
      data: createCurrencyVariantDto,
    });
  }

  async findAll() {
    return this.prisma.tbl_currency_variants.findMany({
      
      where: { is_active: true },
      include: {
        currency: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.tbl_currency_variants.findUnique({
      where: { id, is_active: true },
      include: {
        currency: true,
      },
    });
  }

  async update(id: number, updateCurrencyVariantDto: UpdateCurrencyVariantDto) {
    return await this.prisma.tbl_currency_variants.update({
      where: { id, is_active: true },
      data: updateCurrencyVariantDto,
    });
  }
}
