// currencies.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { FilterCurrencyDto } from './dto/filter-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';

@Injectable()
export class CurrenciesService {
  constructor(private prisma: PrismaService) {}

  create(createCurrencyDto: CreateCurrencyDto) {
    return this.prisma.tbl_currencies.create({
      data: createCurrencyDto,
    });
  }

  findAll(query: FilterCurrencyDto) {
    const { page = 1, limit, sort = 'id', order = 'asc' } = query;

    const skip = (page - 1) * (limit ?? 0);
    const take = limit ? +limit : undefined;
    return this.prisma.tbl_currencies.findMany({
      skip,
      take,
      where: { is_active: true },
      orderBy: {
        [sort]: order,
      },
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
}
