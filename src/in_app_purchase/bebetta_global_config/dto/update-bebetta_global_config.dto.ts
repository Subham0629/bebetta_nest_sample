import { PartialType } from '@nestjs/mapped-types';
import { CreateBebettaGlobalConfigDto } from './create-bebetta_global_config.dto';

export class UpdateBebettaGlobalConfigDto extends PartialType(CreateBebettaGlobalConfigDto) {}
