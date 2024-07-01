CREATE TABLE "tbl_currency_variants" (
    "id" SERIAL NOT NULL,
    "currency_id" INTEGER NOT NULL,
    "variant" TEXT NOT NULL,
    "exchange_rate" INTEGER,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_currency_variants_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "tbl_currency_variants_currency_id_idx" ON "tbl_currency_variants"("currency_id");

ALTER TABLE "tbl_currency_variants" ADD CONSTRAINT "tbl_currency_variants_currency_id_fkey" FOREIGN KEY ("currency_id") REFERENCES "tbl_currencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;