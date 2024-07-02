-- CreateTable
CREATE TABLE "tbl_inapp_product_purchase_redemption" (
    "id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "activate_at" TIMESTAMP(3),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_inapp_product_purchase_redemption_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbl_inapp_product_purchase_redemption" ADD CONSTRAINT "tbl_inapp_product_purchase_redemption_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "tbl_inapp_product_purchase_orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
