import { Module } from '@nestjs/common';
import { FtueJourneysService } from './ftue_journeys.service';
import { FtueJourneysController } from './ftue_journeys.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FtueJourneysController],
  providers: [FtueJourneysService, PrismaService],
})
export class FtueJourneysModule {}
