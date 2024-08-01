-- CreateTable
CREATE TABLE "tbl_lotto_products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "info_details_html" TEXT NOT NULL,
    "is_active" BOOLEAN DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_lotto_products_pkey" PRIMARY KEY ("id")
);
