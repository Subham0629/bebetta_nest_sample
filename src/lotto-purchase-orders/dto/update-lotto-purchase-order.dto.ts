import { PartialType } from '@nestjs/mapped-types';
import { CreateLottoPurchaseOrderDto } from './create-lotto-purchase-order.dto';

export class UpdateLottoPurchaseOrderDto extends PartialType(CreateLottoPurchaseOrderDto) {}
