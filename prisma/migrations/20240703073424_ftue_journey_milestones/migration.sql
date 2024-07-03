-- CreateTable
CREATE TABLE "tbl_ftue_journey_milestones" (
    "id" SERIAL NOT NULL,
    "journey_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "reward_currency" INTEGER NOT NULL,
    "reward_units" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_ftue_journey_milestones_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbl_ftue_journey_milestones" ADD CONSTRAINT "tbl_ftue_journey_milestones_journey_id_fkey" FOREIGN KEY ("journey_id") REFERENCES "tbl_ftue_journeys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_ftue_journey_milestones" ADD CONSTRAINT "tbl_ftue_journey_milestones_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "tbl_ftue_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_ftue_journey_milestones" ADD CONSTRAINT "tbl_ftue_journey_milestones_reward_currency_fkey" FOREIGN KEY ("reward_currency") REFERENCES "tbl_currencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
