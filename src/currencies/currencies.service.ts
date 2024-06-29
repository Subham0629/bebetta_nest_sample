// currencies.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';

@Injectable()
export class CurrenciesService {
  constructor(private prisma: PrismaService) {}

  create(createCurrencyDto: CreateCurrencyDto) {
    return this.prisma.tbl_currencies.create({
      data: createCurrencyDto,
    });
  }

  findAll() {
    return this.prisma.tbl_currencies.findMany({
      where: { is_active: true },
    });
  }

  findOne(id: number) {
    return this.prisma.tbl_currencies.findUnique({
      where: { id, is_active: true },
    });
  }

  update(id: number, updateCurrencyDto: UpdateCurrencyDto) {
    return this.prisma.tbl_currencies.update({
      where: { id, is_active: true },
      data: updateCurrencyDto,
    });
  }

  // remove(id: number) {
  //   return this.prisma.tbl_currencies.delete({
  //     where: { id },
  //   });
  // }
}
