-- CreateTable
CREATE TABLE "tbl_lotto_variants" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "display_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "real_money_price" INTEGER NOT NULL,
    "coin_price" INTEGER NOT NULL,
    "icon_url" TEXT NOT NULL,
    "bet_coin_purchase_limit" INTEGER NOT NULL,
    "passes_limit" INTEGER NOT NULL,
    "is_active" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_lotto_variants_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbl_lotto_variants" ADD CONSTRAINT "tbl_lotto_variants_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "tbl_lotto_products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
