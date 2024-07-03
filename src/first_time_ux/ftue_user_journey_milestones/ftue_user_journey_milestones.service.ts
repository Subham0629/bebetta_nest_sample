import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateFtueUserJourneyMilestoneDto } from './dto/create-ftue_user_journey_milestone.dto';
import { UpdateFtueUserJourneyMilestoneDto } from './dto/update-ftue_user_journey_milestone.dto';
import { FilterFtueUserJourneyMilestoneDto } from './dto/filter-ftue_user_journey_milestone.dto';

@Injectable()
export class FtueUserJourneyMilestonesService {
  constructor(private prisma: PrismaService) {}
  async create(ftueusermilestoneData: {
    user_id: number;
    journey_id: number;
    last_completed_milestone_level?: number;
    rewards_collected?: number;
    is_active?: boolean;
  }) {
    try {
      // Checking if a record with the same user_id exists
      const existingRecord =
        await this.prisma.tbl_ftue_user_journey_milestones.findFirst({
          where: {
            user_id: ftueusermilestoneData.user_id,
          },
        });

      if (existingRecord) {
        let res = `Record with user_id ${ftueusermilestoneData.user_id} already exists.`;
        return res;
      } else {
        // Inserting the new record
        const insertResult =
          await this.prisma.tbl_ftue_user_journey_milestones.create({
            data: ftueusermilestoneData,
          });
        return insertResult;
      }
    } catch (err) {
      console.error('Error adding ftue user milestone order:', err);
      return null;
    }
  }

  async findAll(query: FilterFtueUserJourneyMilestoneDto) {
    const { page = 1, limit, sort = 'id', order = 'asc' } = query;

    const skip = (page - 1) * (limit ?? 0);
    const take = limit ? +limit : undefined;

    return await this.prisma.tbl_ftue_user_journey_milestones.findMany({
      skip,
      take,
      orderBy: {
        [sort]: order,
      },
      where: { is_active: true },
      include: {
        journey: true,
      },
    });
  }

  async findOne(id: number) {
    const userJourneyData =
      await this.prisma.tbl_ftue_user_journey_milestones.findFirst({
        where: { user_id: id, is_active: true },
      });

    if (!userJourneyData) {
      const latestJourney = await this.prisma.tbl_ftue_journeys.findFirst({
        where: { is_active: true },
        orderBy: { id: 'desc' },
      });

      if (!latestJourney) {
        console.error('No journey found in tbl_ftue_journeys.');
        return null;
      }

      const ftueUserMilestoneData = {
        user_id: id,
        journey_id: latestJourney.id,
      };

      await this.prisma.tbl_ftue_user_journey_milestones.create({
        data: ftueUserMilestoneData,
      });

      return this.findOne(id);
    }

    const lastCompletedMilestoneLevel =
      userJourneyData.last_completed_milestone_level;
    const journeyData = await this.prisma.$queryRaw<
      Array<{
        id: number;
        journey_id: number;
        category_id: number;
        name: string;
        display_name: string;
        level: number;
        is_active: boolean;
        reward_currency: number;
        reward_units: number;
        created_at: Date;
        updated_at: Date;
        is_completed: boolean | null;
        expiry_time: string;
        type: string;
      }>
    >`
      SELECT 
        journey.id, 
        journey.journey_id, 
        journey.category_id, 
        journey.name, 
        journey.display_name, 
        journey.level, 
        journey.is_active, 
        journey.reward_currency, 
        journey.reward_units, 
        journey.created_at, 
        journey.updated_at, 
        CASE
          WHEN journey.level <= ${lastCompletedMilestoneLevel} THEN TRUE
          ELSE NULL
        END as is_completed,
        journeys.expiry_time,
        category.type
      FROM tbl_ftue_journey_milestones as journey
      INNER JOIN tbl_ftue_journeys as journeys ON journey.journey_id = journeys.id
      INNER JOIN tbl_ftue_category as category ON journey.category_id = category.id
      WHERE journey.journey_id = ${userJourneyData.journey_id}
    `;

    return journeyData;
  }

  update(
    id: number,
    updateFtueUserJourneyMilestoneDto: UpdateFtueUserJourneyMilestoneDto,
  ) {
    return this.prisma.tbl_ftue_user_journey_milestones.update({
      where: { id, is_active: true },
      data: updateFtueUserJourneyMilestoneDto,
    });
  }
}
