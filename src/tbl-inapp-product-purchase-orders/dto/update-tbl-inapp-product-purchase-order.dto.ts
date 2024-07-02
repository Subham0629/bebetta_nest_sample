import { PartialType } from '@nestjs/mapped-types';
import { CreateTblInappProductPurchaseOrderDto } from './create-tbl-inapp-product-purchase-order.dto';

export class UpdateTblInappProductPurchaseOrderDto extends PartialType(CreateTblInappProductPurchaseOrderDto) {}
