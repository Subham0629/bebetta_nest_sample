-- CreateTable
CREATE TABLE "tbl_lotto_prize_variants" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "variant_id" INTEGER NOT NULL,
    "rank" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_lotto_prize_variants_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbl_lotto_prize_variants" ADD CONSTRAINT "tbl_lotto_prize_variants_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "tbl_lotto_products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_lotto_prize_variants" ADD CONSTRAINT "tbl_lotto_prize_variants_variant_id_fkey" FOREIGN KEY ("variant_id") REFERENCES "tbl_lotto_variants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
