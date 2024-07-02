-- CreateTable
CREATE TABLE "tbl_inapp_store_product_variant" (
    "id" SERIAL NOT NULL,
    "inapp_store_product_id" INTEGER NOT NULL,
    "display_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price_units" INTEGER NOT NULL,
    "icon_url" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_inapp_store_product_variant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbl_inapp_store_product_variant" ADD CONSTRAINT "tbl_inapp_store_product_variant_inapp_store_product_id_fkey" FOREIGN KEY ("inapp_store_product_id") REFERENCES "tbl_inapp_store_products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
