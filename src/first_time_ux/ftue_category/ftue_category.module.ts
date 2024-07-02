import { Module } from '@nestjs/common';
import { FtueCategoryService } from './ftue_category.service';
import { FtueCategoryController } from './ftue_category.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  imports: [PrismaModule],
  controllers: [FtueCategoryController],
  providers: [FtueCategoryService],
})
export class FtueCategoryModule {}
