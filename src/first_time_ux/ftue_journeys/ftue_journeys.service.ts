import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateFtueJourneyDto } from './dto/create-ftue_journey.dto';
import { UpdateFtueJourneyDto } from './dto/update-ftue_journey.dto';
import { FilterFtueJourneyDto } from './dto/filter-ftue_journey.dto';

@Injectable()
export class FtueJourneysService {
  constructor(private prisma: PrismaService) {}

  create(createFtueJourneyDto: CreateFtueJourneyDto) {
    return this.prisma.tbl_ftue_journeys.create({
      data: createFtueJourneyDto,
    });
  }

  findAll(query: FilterFtueJourneyDto) {
    const { page = 1, limit, sort = 'id', order = 'asc' } = query;

    const skip = (page - 1) * (limit ?? 0);
    const take = limit ? +limit : undefined;
    return this.prisma.tbl_ftue_journeys.findMany({
      skip,
      take,
      where: { is_active: true },
      orderBy: {
        [sort]: order,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.tbl_ftue_journeys.findUnique({
      where: { id },
    });
  }

  update(id: number, updateFtueJourneyDto: UpdateFtueJourneyDto) {
    return this.prisma.tbl_ftue_journeys.update({
      where: { id, is_active: true },
      data: updateFtueJourneyDto,
    });
  }

  remove(id: number) {
    return this.prisma.tbl_ftue_journeys.delete({
      where: { id },
    });
  }
}
