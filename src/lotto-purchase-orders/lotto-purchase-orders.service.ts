import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLottoPurchaseOrderDto } from './dto/create-lotto-purchase-order.dto';
import { UpdateLottoPurchaseOrderDto } from './dto/update-lotto-purchase-order.dto';

@Injectable()
export class LottoPurchaseOrdersService {
  constructor(private prisma: PrismaService) {}

  generateEightDigitNumber(): number {
    return Math.floor(10000000 + Math.random() * 90000000);
  }

  async create(createLottoPurchaseOrderDto: CreateLottoPurchaseOrderDto) {
    const variant = await this.prisma.tbl_lotto_variants.findUnique({
      where: { id: createLottoPurchaseOrderDto.variant_id },
    });

    if (!variant) {
      throw new BadRequestException('Invalid variant_id.');
    }

    // Checking if the purchase currency is coin
    if (createLottoPurchaseOrderDto.purchase_currency === 'coin') {
      // Counting the existing orders for the given variant_id
      const existingOrdersCount =
        await this.prisma.tbl_lotto_purchase_orders.count({
          where: {
            variant_id: createLottoPurchaseOrderDto.variant_id,
            user_id: createLottoPurchaseOrderDto.user_id,
          },
        });

      // Comparing the count with bet_coin_purchase_limit
      if (existingOrdersCount >= variant.bet_coin_purchase_limit) {
        throw new BadRequestException(
          'Purchase limit exceeded for this LOTTO.',
        );
      }
    }
    // Generating an 8-digit random number for pass_number
    let passNumber = this.generateEightDigitNumber();

    // Checking if the generated pass_number already exists
    let existingPassNumber =
      await this.prisma.tbl_lotto_purchase_orders.findFirst({
        where: {
          pass_number: passNumber,
        },
      });

    // If the pass_number already exists, generating a new one until a unique one is found
    while (existingPassNumber) {
      passNumber = this.generateEightDigitNumber();
      existingPassNumber =
        await this.prisma.tbl_lotto_purchase_orders.findFirst({
          where: {
            pass_number: passNumber,
          },
        });
    }

    createLottoPurchaseOrderDto.pass_number = passNumber;
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

  async updateByIdOrPassNumber(
    id: number | null,
    pass_number: number | null,
    updateLottoPurchaseOrderDto: UpdateLottoPurchaseOrderDto,
  ) {
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
      throw new BadRequestException(
        'Either id or pass_number must be provided.',
      );
    }
  }

  async getUsersOrderCountByVariantId(
    variant_id: number,
    page: number = 1,
    limit: number = 10,
  ) {
    const skip = (page - 1) * limit;

    const usersOrderCount = await this.prisma.tbl_lotto_purchase_orders.groupBy(
      {
        by: ['user_id'],
        where: { variant_id },
        _count: {
          user_id: true,
        },
        skip,
        take: limit,
        orderBy: {
          user_id: 'asc',
        },
      },
    );

    const usersWinCount = await this.prisma.tbl_lotto_purchase_orders.groupBy({
      by: ['user_id'],
      where: {
        variant_id,
        win_rank: {
          not: 0,
        },
      },
      _count: {
        user_id: true,
      },
      orderBy: {
        user_id: 'asc',
      },
    });

    const winCountMap = usersWinCount.reduce((acc, curr) => {
      acc[curr.user_id] = curr._count.user_id;
      return acc;
    }, {});

    const result = usersOrderCount.map((user) => {
      const winCount = winCountMap[user.user_id] || 0;
      return {
        user_id: user.user_id,
        passes: user._count.user_id,
        win_count: winCount,
      };
    });

    const totalWinCount = result.reduce((acc, curr) => acc + curr.win_count, 0);

    // Counting total records for pagination
    const totalRecords = await this.prisma.tbl_lotto_purchase_orders.count({
      where: { variant_id },
    });

    return {
      users: result,
      total_win_count: totalWinCount,
      total_records: totalRecords,
      current_page: page,
      total_pages: Math.ceil(totalRecords / limit),
    };
  }

  async findPassNumbersByUserAndVariant(
    user_id: number,
    variant_id: number,
    page: number,
    limit: number,
  ) {
    const skip = (page - 1) * limit;
    const take = limit;

    const [data, total] = await this.prisma.$transaction([
      this.prisma.tbl_lotto_purchase_orders.findMany({
        where: {
          user_id,
          variant_id,
        },
        select: {
          pass_number: true,
          created_at: true,
        },
        skip,
        take,
        orderBy: {
          user_id: 'asc',
        },
      }),
      this.prisma.tbl_lotto_purchase_orders.count({
        where: {
          user_id,
          variant_id,
        },
      }),
    ]);

    return {
      data,
      total,
      page,
      pageCount: Math.ceil(total / limit),
    };
  }

  async findOrdersByVariantAndWinRank(variant_id: number, win_rank: number) {
    return this.prisma.tbl_lotto_purchase_orders.findMany({
      where: {
        variant_id,
        win_rank,
      },
      include: {
        product: true,
        variant: true,
      },
    });
  }
}
