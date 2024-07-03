import { IsBoolean, IsInt, IsOptional } from 'class-validator';

export class CreateFtueUserJourneyMilestoneDto {
  @IsInt()
  user_id: number;

  @IsInt()
  journey_id: number;

  @IsInt()
  @IsOptional()
  last_completed_milestone_id?: number;

  @IsInt()
  @IsOptional()
  rewards_collected?: number;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}
