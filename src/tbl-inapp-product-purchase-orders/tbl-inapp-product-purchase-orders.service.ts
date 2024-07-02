import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTblInappProductPurchaseOrderDto } from './dto/create-tbl-inapp-product-purchase-order.dto';
import { UpdateTblInappProductPurchaseOrderDto } from './dto/update-tbl-inapp-product-purchase-order.dto';
import { FilterTblInappProductPurchaseOrderDto } from './dto/filter-tbl-inapp-product-purchase-order.dto';

@Injectable()
export class TblInappProductPurchaseOrdersService {
  constructor(private prisma: PrismaService) {}

  async create(
    createTblInappProductPurchaseOrderDto: CreateTblInappProductPurchaseOrderDto,
  ) {
    return await this.prisma.tbl_inapp_product_purchase_orders.create({
      data: createTblInappProductPurchaseOrderDto,
    });
  }

  async findAll(query: FilterTblInappProductPurchaseOrderDto) {
    const { page = 1, limit, sort = 'id', order = 'asc' } = query;

    const skip = (page - 1) * (limit ?? 0);
    const take = limit ? +limit : undefined;
    return await this.prisma.tbl_inapp_product_purchase_orders.findMany({
      skip,
      take,
      orderBy: {
        [sort]: order,
      },
      where: { is_active: true },
      include: {
        product: true,
        variant: true,
        currency: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.tbl_inapp_product_purchase_orders.findFirst({
      where: { id, is_active: true },
      include: {
        product: true,
        variant: true,
        currency: true,
      },
    });
  }

  async update(
    id: number,
    updateTblInappProductPurchaseOrderDto: UpdateTblInappProductPurchaseOrderDto,
  ) {
    return await this.prisma.tbl_inapp_product_purchase_orders.updateMany({
      where: { id, is_active: true },
      data: updateTblInappProductPurchaseOrderDto,
    });
  }
}
