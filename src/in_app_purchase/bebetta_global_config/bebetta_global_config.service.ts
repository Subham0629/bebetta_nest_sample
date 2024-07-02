import { Injectable } from '@nestjs/common';
import { CreateBebettaGlobalConfigDto } from './dto/create-bebetta_global_config.dto';
import { UpdateBebettaGlobalConfigDto } from './dto/update-bebetta_global_config.dto';
import { FilterBebettaGlobalConfigDto } from './dto/filter-bebetta_global_config.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class BebettaGlobalConfigService {
  constructor(private prisma: PrismaService) {}

  async create(createBebettaGlobalConfigDto: CreateBebettaGlobalConfigDto) {
    return await this.prisma.tbl_bebetta_global_config.create({
      data: createBebettaGlobalConfigDto,
    });
  }

  async findAll(query: FilterBebettaGlobalConfigDto) {
    const { page = 1, limit , sort = 'id', order = 'asc' } = query;

    const skip = (page - 1) * (limit ?? 0);
    const take = limit?+limit:undefined;

    return await this.prisma.tbl_bebetta_global_config.findMany({
      skip,
      take,
      where: { is_active: true },
      orderBy: {
        [sort]: order,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.tbl_bebetta_global_config.findUnique({
      where: { id, is_active: true },
    });
  }

  async update(
    id: number,
    updateBebettaGlobalConfigDto: UpdateBebettaGlobalConfigDto,
  ) {
    return await this.prisma.tbl_bebetta_global_config.update({
      where: { id, is_active: true },
      data: updateBebettaGlobalConfigDto,
    });
  }
}
