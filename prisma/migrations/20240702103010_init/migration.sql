-- CreateTable
CREATE TABLE "tbl_ftue_category" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl_ftue_category_pkey" PRIMARY KEY ("id")
);
