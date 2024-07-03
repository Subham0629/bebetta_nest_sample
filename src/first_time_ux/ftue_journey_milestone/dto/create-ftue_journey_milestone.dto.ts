import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateFtueJourneyMilestoneDto {
  @IsInt()
  journey_id: number;

  @IsInt()
  category_id: number;

  @IsString()
  name: string;

  @IsString()
  display_name: string;

  @IsInt()
  level: number;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;

  @IsInt()
  reward_currency: number;

  @IsInt()
  reward_units: number;
}
