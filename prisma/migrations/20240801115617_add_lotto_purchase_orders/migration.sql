-- CreateEnum
CREATE TYPE "currency" AS ENUM ('coin', 'money');

-- CreateTable
CREATE TABLE "tbl_lotto_purchase_orders" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "variant_id" INTEGER NOT NULL,
    "price_units" INTEGER NOT NULL,
    "purchase_currency" "currency" NOT NULL,
    "win_rank" INTEGER DEFAULT 0,
    "is_active" BOOLEAN DEFAULT true,
    "pass_number" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_lotto_purchase_orders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbl_lotto_purchase_orders" ADD CONSTRAINT "tbl_lotto_purchase_orders_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "tbl_lotto_products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_lotto_purchase_orders" ADD CONSTRAINT "tbl_lotto_purchase_orders_variant_id_fkey" FOREIGN KEY ("variant_id") REFERENCES "tbl_lotto_variants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
