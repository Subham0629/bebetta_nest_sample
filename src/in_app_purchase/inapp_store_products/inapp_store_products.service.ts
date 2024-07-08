import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateInappStoreProductDto } from './dto/create-inapp_store_product.dto';
import { FilterInappStoreProductDto } from './dto/filter-inapp_store_product.dto';
import { UpdateInappStoreProductDto } from './dto/update-inapp_store_product.dto';

@Injectable()
export class InappStoreProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createInappStoreProductDto: CreateInappStoreProductDto) {
    return await this.prisma.tbl_inapp_store_products.create({
      data: createInappStoreProductDto,
    });
  }

  async findAll(query: FilterInappStoreProductDto) {
    const { page = 1, limit, sort = 'id', order = 'asc' } = query;

    const skip = (page - 1) * (limit ?? 0);
    const take = limit ? +limit : undefined;

    return await this.prisma.tbl_inapp_store_products.findMany({
      skip,
      take,
      orderBy: {
        [sort]: order,
      },
      where: { is_active: true },
      include: {
        exchangeCurrency: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.tbl_inapp_store_products.findUnique({
      where: { id, is_active: true },
      include: {
        exchangeCurrency: true,
      },
    });
  }

  async update(
    id: number,
    updateInappStoreProductDto: UpdateInappStoreProductDto,
  ) {
    return await this.prisma.tbl_inapp_store_products.update({
      where: { id, is_active: true },
      data: updateInappStoreProductDto,
    });
  }
}
