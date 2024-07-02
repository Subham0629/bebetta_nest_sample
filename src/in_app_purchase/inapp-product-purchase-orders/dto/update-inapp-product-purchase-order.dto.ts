import { PartialType } from '@nestjs/mapped-types';
import { CreateInappProductPurchaseOrderDto } from './create-inapp-product-purchase-order.dto';

export class UpdateInappProductPurchaseOrderDto extends PartialType(CreateInappProductPurchaseOrderDto) {}
