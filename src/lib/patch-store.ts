import { STAGE_IDS, type StageId } from "@/data/model";

const PATCH_KEY = "seed-to-seed-patch";

export type PatchEntry = {
  key: string;
  bushId: string;
  nickname: string;
  year: string;
  stage: StageId;
  notes: string;
};

function isStage(value: unknown): value is StageId {
  return typeof value === "string" && (STAGE_IDS as readonly string[]).includes(value);
}

function isEntry(value: unknown): value is PatchEntry {
  if (!value || typeof value !== "object") return false;
  const entry = value as Record<string, unknown>;
  return (
    typeof entry.key === "string" &&
    typeof entry.bushId === "string" &&
    typeof entry.nickname === "string" &&
    typeof entry.year === "string" &&
    typeof entry.notes === "string" &&
    isStage(entry.stage)
  );
}

export function loadPatch(): PatchEntry[] {
  try {
    const raw = localStorage.getItem(PATCH_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isEntry);
  } catch {
    return [];
  }
}

export function savePatch(entries: readonly PatchEntry[]) {
  localStorage.setItem(PATCH_KEY, JSON.stringify(entries));
}
