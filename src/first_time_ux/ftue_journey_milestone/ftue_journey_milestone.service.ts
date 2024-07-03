import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateFtueJourneyMilestoneDto } from './dto/create-ftue_journey_milestone.dto';
import { UpdateFtueJourneyMilestoneDto } from './dto/update-ftue_journey_milestone.dto';
import { FilterFtueJourneyMilestoneDto } from './dto/filter-ftue_journey_milestone.dto';

@Injectable()
export class FtueJourneyMilestoneService {
  constructor(private prisma: PrismaService) {}

  create(createFtueJourneyMilestoneDto: CreateFtueJourneyMilestoneDto) {
    return this.prisma.tbl_ftue_journey_milestones.create({
      data: createFtueJourneyMilestoneDto,
    });
  }

  async findAll(query: FilterFtueJourneyMilestoneDto) {
    const { page = 1, limit, sort = 'id', order = 'asc' } = query;

    const skip = (page - 1) * (limit ?? 0);
    const take = limit ? +limit : undefined;
    return await this.prisma.tbl_ftue_journey_milestones.findMany({
      skip,
      take,
      where: { is_active: true },
      orderBy: {
        [sort]: order,
      },
      include: {
        journey: true,
        category: true,
        currency: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.tbl_ftue_journey_milestones.findUnique({
      where: { id },
      include: {
        journey: true,
        category: true,
        currency: true,
      },
    });
  }

  update(
    id: number,
    updateFtueJourneyMilestoneDto: UpdateFtueJourneyMilestoneDto,
  ) {
    return this.prisma.tbl_ftue_journey_milestones.update({
      where: { id },
      data: updateFtueJourneyMilestoneDto,
    });
  }
}
