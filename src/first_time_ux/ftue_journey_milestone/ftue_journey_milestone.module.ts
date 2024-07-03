import { Module } from '@nestjs/common';
import { FtueJourneyMilestoneService } from './ftue_journey_milestone.service';
import { FtueJourneyMilestoneController } from './ftue_journey_milestone.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FtueJourneyMilestoneController],
  providers: [FtueJourneyMilestoneService, PrismaService],
})
export class FtueJourneyMilestoneModule {}
