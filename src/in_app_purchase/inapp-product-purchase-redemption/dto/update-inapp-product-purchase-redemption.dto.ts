import { PartialType } from '@nestjs/mapped-types';
import { CreateInappProductPurchaseRedemptionDto } from './create-inapp-product-purchase-redemption.dto';

export class UpdateInappProductPurchaseRedemptionDto extends PartialType(CreateInappProductPurchaseRedemptionDto) {}
