import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateFtueJourneyDto {
  @IsString()
  expiry_time: string;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}
