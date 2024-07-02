import { Injectable } from '@nestjs/common';
import { CreateInappProductPurchaseOrderDto } from './dto/create-inapp-product-purchase-order.dto';
import { UpdateInappProductPurchaseOrderDto } from './dto/update-inapp-product-purchase-order.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { FilterInappProductPurchaseOrderDto } from './dto/filter-inapp-product-purchase-order.dto';
@Injectable()
export class InappProductPurchaseOrdersService {
  constructor(private prisma: PrismaService) {}
  async create(createInappProductPurchaseOrderDto: CreateInappProductPurchaseOrderDto) {
    
      return await this.prisma.tbl_inapp_product_purchase_orders.create({
        data: createInappProductPurchaseOrderDto,
      });
  }

  async findAll(query: FilterInappProductPurchaseOrderDto) {
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
    updateTblInappProductPurchaseOrderDto: UpdateInappProductPurchaseOrderDto,
  ) {
    return await this.prisma.tbl_inapp_product_purchase_orders.updateMany({
      where: { id, is_active: true },
      data: updateTblInappProductPurchaseOrderDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} inappProductPurchaseOrder`;
  }
}
