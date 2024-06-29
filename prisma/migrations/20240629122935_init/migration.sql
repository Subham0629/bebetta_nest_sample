-- CreateEnum
CREATE TYPE "Category" AS ENUM ('game', 'bids', 'rewards');

-- CreateTable
CREATE TABLE "tbl_inapp_store_products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "display_name" TEXT,
    "description" TEXT,
    "info_details_html" TEXT,
    "exchange_currency_id" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl_inapp_store_products_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbl_inapp_store_products" ADD CONSTRAINT "tbl_inapp_store_products_exchange_currency_id_fkey" FOREIGN KEY ("exchange_currency_id") REFERENCES "tbl_currencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
