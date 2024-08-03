import { Module } from '@nestjs/common';
import { LottoPassesService } from './lotto-passes.service';
import { LottoPassesController } from './lotto-passes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LottoPassesController],
  providers: [LottoPassesService],
})
export class LottoPassesModule {}
