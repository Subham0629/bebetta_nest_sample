-- CreateTable
CREATE TABLE "tbl_lotto_passes" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "variant_id" INTEGER NOT NULL,
    "pass_number" INTEGER NOT NULL,
    "is_exhausted" BOOLEAN DEFAULT false,
    "is_active" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_lotto_passes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbl_lotto_passes" ADD CONSTRAINT "tbl_lotto_passes_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "tbl_lotto_products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_lotto_passes" ADD CONSTRAINT "tbl_lotto_passes_variant_id_fkey" FOREIGN KEY ("variant_id") REFERENCES "tbl_lotto_variants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
