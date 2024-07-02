-- CreateTable
CREATE TABLE "tbl_inapp_product_purchase_orders" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "variant_id" INTEGER NOT NULL,
    "price_units" INTEGER NOT NULL,
    "currency_id" INTEGER NOT NULL,
    "details" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_inapp_product_purchase_orders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbl_inapp_product_purchase_orders" ADD CONSTRAINT "tbl_inapp_product_purchase_orders_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "tbl_inapp_store_products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_inapp_product_purchase_orders" ADD CONSTRAINT "tbl_inapp_product_purchase_orders_variant_id_fkey" FOREIGN KEY ("variant_id") REFERENCES "tbl_inapp_store_product_variant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_inapp_product_purchase_orders" ADD CONSTRAINT "tbl_inapp_product_purchase_orders_currency_id_fkey" FOREIGN KEY ("currency_id") REFERENCES "tbl_currencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
