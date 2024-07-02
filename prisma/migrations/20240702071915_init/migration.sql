-- CreateEnum
CREATE TYPE "SupportedBebettaConfig" AS ENUM ('string', 'timestamp', 'integer', 'float', 'object');

-- CreateTable
CREATE TABLE "tbl_bebetta_global_config" (
    "id" SERIAL NOT NULL,
    "bucket" TEXT,
    "property_name" TEXT,
    "property_value" TEXT,
    "property_data_type" "SupportedBebettaConfig" NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl_bebetta_global_config_pkey" PRIMARY KEY ("id")
);
