-- CreateTable
CREATE TABLE "tbl_ftue_journeys" (
    "id" SERIAL NOT NULL,
    "expiry_time" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_ftue_journeys_pkey" PRIMARY KEY ("id")
);
