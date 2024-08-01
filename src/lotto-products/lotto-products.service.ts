import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLottoProductDto } from './dto/create-lotto-product.dto';
import { UpdateLottoProductDto } from './dto/update-lotto-product.dto';

@Injectable()
export class LottoProductsService {
  constructor(private prisma: PrismaService) {}

  create(createLottoProductDto: CreateLottoProductDto) {
    return this.prisma.tbl_lotto_products.create({
      data: createLottoProductDto,
    });
  }

  findAll() {
    return this.prisma.tbl_lotto_products.findMany({
      where: { is_active: true }
    });
  }

  findOne(id: number) {
    return this.prisma.tbl_lotto_products.findUnique({
      where: { id , is_active: true },
    });
  }

  update(id: number, updateLottoProductDto: UpdateLottoProductDto) {
    return this.prisma.tbl_lotto_products.update({
      where: { id },
      data: updateLottoProductDto,
    });
  }

}
