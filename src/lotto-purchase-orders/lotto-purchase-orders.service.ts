import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLottoPurchaseOrderDto } from './dto/create-lotto-purchase-order.dto';
import { UpdateLottoPurchaseOrderDto } from './dto/update-lotto-purchase-order.dto';

@Injectable()
export class LottoPurchaseOrdersService {
  constructor(private prisma: PrismaService) {}

  async create(createLottoPurchaseOrderDto: CreateLottoPurchaseOrderDto) {

    const variant = await this.prisma.tbl_lotto_variants.findUnique({
      where: { id: createLottoPurchaseOrderDto.variant_id },
    });

    if (!variant) {
      throw new BadRequestException('Invalid variant_id.');
    }

    // Check if the purchase currency is coin
    if (createLottoPurchaseOrderDto.purchase_currency === 'coin') {
      // Count the existing orders for the given variant_id
      const existingOrdersCount = await this.prisma.tbl_lotto_purchase_orders.count({
        where: { variant_id: createLottoPurchaseOrderDto.variant_id,
          user_id: createLottoPurchaseOrderDto.user_id },
      });
      
      // Compare the count with bet_coin_purchase_limit
      if (existingOrdersCount >= variant.bet_coin_purchase_limit) {
        throw new BadRequestException('Purchase limit exceeded for this LOTTO.');
      }
    }

    const existingPassNumber = await this.prisma.tbl_lotto_purchase_orders.findFirst({
      where: {
        pass_number: createLottoPurchaseOrderDto.pass_number,
      },
    });

    if (existingPassNumber) {
      throw new BadRequestException('Pass number already exists for this LOTTO');
    }
    return this.prisma.tbl_lotto_purchase_orders.create({
      data: createLottoPurchaseOrderDto,
    });
  }

  async findAll() {
    return this.prisma.tbl_lotto_purchase_orders.findMany({
      include: {
        product: true,
        variant: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.tbl_lotto_purchase_orders.findUnique({
      where: { id },
      include: {
        product: true,
        variant: true,
      },
    });
  }

  async findByVariant(variant_id: number) {
    return this.prisma.tbl_lotto_purchase_orders.findMany({
      where: { variant_id },
    });
  }

  async updateByIdOrPassNumber(id: number | null, pass_number: number | null, updateLottoPurchaseOrderDto: UpdateLottoPurchaseOrderDto) {
    if (id) {
      return this.prisma.tbl_lotto_purchase_orders.update({
        where: { id },
        data: updateLottoPurchaseOrderDto,
      });
    } else if (pass_number) {
      return this.prisma.tbl_lotto_purchase_orders.updateMany({
        where: { pass_number },
        data: updateLottoPurchaseOrderDto,
      });
    } else {
      throw new BadRequestException('Either id or pass_number must be provided.');
    }
  }
  

}
