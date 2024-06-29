-- CreateEnum
CREATE TYPE "CurrencyType" AS ENUM ('coin', 'key');

-- CreateTable
CREATE TABLE "tbl_currencies" (
    "id" SERIAL NOT NULL,
    "type" "CurrencyType" NOT NULL,
    "name" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl_currencies_pkey" PRIMARY KEY ("id")
);
