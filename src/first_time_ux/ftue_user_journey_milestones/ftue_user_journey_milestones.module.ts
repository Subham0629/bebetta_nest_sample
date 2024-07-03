import { Module } from '@nestjs/common';
import { FtueUserJourneyMilestonesService } from './ftue_user_journey_milestones.service';
import { FtueUserJourneyMilestonesController } from './ftue_user_journey_milestones.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FtueUserJourneyMilestonesController],
  providers: [FtueUserJourneyMilestonesService, PrismaService],
})
export class FtueUserJourneyMilestonesModule {}
