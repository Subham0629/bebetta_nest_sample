import { Injectable } from '@nestjs/common';
import { CreateFtueCategoryDto } from './dto/create-ftue_category.dto';
import { UpdateFtueCategoryDto } from './dto/update-ftue_category.dto';
import { FilterFtueCategoryDto } from './dto/filter-ftue_category.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class FtueCategoryService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateFtueCategoryDto) {
    return this.prisma.tbl_ftue_category.create({ data });
  }

  async findAll(query: FilterFtueCategoryDto) {
    const { page = 1, limit, sort = 'id', order = 'asc' } = query;

    const skip = (page - 1) * (limit ?? 0);
    const take = limit ? +limit : undefined;

    return this.prisma.tbl_ftue_category.findMany({
      skip,
      take,
      where: { is_active: true },
      orderBy: {
        [sort]: order,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.tbl_ftue_category.findUnique({
      where: { id, is_active: true },
    });
  }

  async update(id: number, data: UpdateFtueCategoryDto) {
    return this.prisma.tbl_ftue_category.update({
      where: { id, is_active: true },
      data,
    });
  }
}
