import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateInappProductPurchaseRedemptionDto } from './dto/create-inapp-product-purchase-redemption.dto';
import { UpdateInappProductPurchaseRedemptionDto } from './dto/update-inapp-product-purchase-redemption.dto';
import { FilterInappProductPurchaseRedemptionDto } from './dto/filter-inapp-product-purchase-redemption.dto';

@Injectable()
export class InappProductPurchaseRedemptionService {
  constructor(private prisma: PrismaService) {}

  async create(
    createInappProductPurchaseRedemptionDto: CreateInappProductPurchaseRedemptionDto,
  ) {
    const { activate_at, ...data } = createInappProductPurchaseRedemptionDto;
    const isoDate = new Date(activate_at).toISOString();

    return await this.prisma.tbl_inapp_product_purchase_redemption.create({
      data: {
        ...data,
        activate_at: isoDate,
      },
    });
  }

  async findAll(query: FilterInappProductPurchaseRedemptionDto) {
    const { page = 1, limit, sort = 'id', order = 'asc' } = query;

    const skip = (page - 1) * (limit ?? 0);
    const take = limit ? +limit : undefined;
    return await this.prisma.tbl_inapp_product_purchase_redemption.findMany({
      skip,
      take,
      orderBy: {
        [sort]: order,
      },
      where: { is_active: true },
      include: { order: true },
    });
  }

  async findOne(id: number) {
    return await this.prisma.tbl_inapp_product_purchase_redemption.findFirst({
      where: { id, is_active: true },
      include: { order: true },
    });
  }

  async update(
    id: number,
    updateInappProductPurchaseRedemptionDto: UpdateInappProductPurchaseRedemptionDto,
  ) {
    const { activate_at, ...data } = updateInappProductPurchaseRedemptionDto;
    const isoDate = new Date(activate_at).toISOString();

    return await this.prisma.tbl_inapp_product_purchase_redemption.updateMany({
      where: { id, is_active: true },
      data: {
        ...data,
        activate_at: isoDate,
      },
    });
  }
}
