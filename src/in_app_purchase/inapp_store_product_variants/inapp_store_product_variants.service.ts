import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateInappStoreProductVariantDto } from './dto/create-inapp_store_product_variant.dto';
import { UpdateInappStoreProductVariantDto } from './dto/update-inapp_store_product_variant.dto';
import { FilterInappStoreProductVariantDto } from './dto/filter-inapp_store_product_variant.dto';

@Injectable()
export class InappStoreProductVariantsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createInappStoreProductVariantDto: CreateInappStoreProductVariantDto,
  ) {
    return await this.prisma.tbl_inapp_store_product_variant.create({
      data: {
        inapp_store_product_id:
          createInappStoreProductVariantDto.inapp_store_product_id,
        display_name: createInappStoreProductVariantDto.display_name,
        description: createInappStoreProductVariantDto.description,
        price_units: createInappStoreProductVariantDto.price_units,
        icon_url: createInappStoreProductVariantDto.icon_url,
        is_active: true,
      },
    });
  }

  async findAll(query: FilterInappStoreProductVariantDto) {
    const { page = 1, limit, sort = 'id', order = 'asc' } = query;

    const skip = (page - 1) * (limit ?? 0);
    const take = limit ? +limit : undefined;

    return await this.prisma.tbl_inapp_store_product_variant.findMany({
      skip,
      take,
      orderBy: {
        [sort]: order,
      },
      where: { is_active: true },
      include: {
        inappStoreProduct: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.tbl_inapp_store_product_variant.findUnique({
      where: { id, is_active: true },
      include: {
        inappStoreProduct: true,
      },
    });
  }

  async update(
    id: number,
    updateInappStoreProductVariantDto: UpdateInappStoreProductVariantDto,
  ) {
    return await this.prisma.tbl_inapp_store_product_variant.update({
      where: { id, is_active: true },
      data: updateInappStoreProductVariantDto,
    });
  }
}
