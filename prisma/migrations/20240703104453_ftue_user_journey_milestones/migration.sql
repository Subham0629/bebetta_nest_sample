-- CreateTable
CREATE TABLE "tbl_ftue_user_journey_milestones" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "journey_id" INTEGER NOT NULL,
    "last_completed_milestone_level" INTEGER NOT NULL DEFAULT 0,
    "rewards_collected" INTEGER NOT NULL DEFAULT 0,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tbl_ftue_user_journey_milestones_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tbl_ftue_user_journey_milestones" ADD CONSTRAINT "tbl_ftue_user_journey_milestones_journey_id_fkey" FOREIGN KEY ("journey_id") REFERENCES "tbl_ftue_journeys"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
