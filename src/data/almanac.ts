import { brambleBushes } from "@/data/bushes-bramble";
import { heathBushes } from "@/data/bushes-heath";
import { otherBushes } from "@/data/bushes-other";
import { ribesBushes } from "@/data/bushes-ribes";
import { bushById, type Bush } from "@/data/model";

export const BUSHES: readonly Bush[] = [
  ...heathBushes,
  ...brambleBushes,
  ...ribesBushes,
  ...otherBushes,
];

export function getBush(id: string): Bush | undefined {
  return bushById(BUSHES, id);
}

export {
  ALSO,
  judge,
  STAGE_IDS,
  STAGES,
} from "@/data/model";
export type { Bush, Ground, StageId, Verdict } from "@/data/model";
