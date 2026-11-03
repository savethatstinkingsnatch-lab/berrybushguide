export const STAGE_IDS = [
  "gather",
  "dormancy",
  "sow",
  "seedling",
  "site",
  "establish",
  "prune",
  "fruit",
  "save",
] as const;

export type StageId = (typeof STAGE_IDS)[number];

export type StageCopy = { body: string; action: string };

export type SoilNeed = "acid" | "mild" | "adaptable" | "alkaline";

export type BushGroup = "Heath" | "Bramble" | "Ribes" | "Other shrubs";

export type Bush = {
  id: string;
  name: string;
  latin: string;
  family: string;
  aka: string;
  group: BushGroup;
  fruit: string;
  habit: string;
  zones: readonly [number, number];
  ph: readonly [number, number];
  sun: string;
  water: string;
  height: string;
  thorns: string;
  pollination: string;
  yearsPlant: string;
  yearsSeed: string;
  nurseryYears: number;
  soilNeed: SoilNeed;
  partShade: boolean;
  shade: boolean;
  alkalineOk: boolean;
  catchNote?: string;
  lead: string;
  kitchen: string;
  caution: string;
  stages: Record<StageId, StageCopy>;
  year: readonly { m: string; t: string }[];
  mistakes: readonly string[];
};

export const STAGES: readonly {
  id: StageId;
  n: string;
  name: string;
  lesson: string;
  lessonAction: string;
}[] = [
  {
    id: "gather",
    n: "01",
    name: "Gather",
    lesson:
      "Every berry holds seed, and almost every named berry on a nursery tag was not grown from one. A seed makes a new individual. A cutting, sucker, or layered cane makes the same individual again. If you want the berry you tasted, follow the clone. If you want a new berry and you can wait, follow the seed. Either way, label the year and the parent. Memory is a bad filing system.",
    lessonAction: "Decide before you start: are you copying a plant, or breeding a new one?",
  },
  {
    id: "dormancy",
    n: "02",
    name: "Dormancy",
    lesson:
      "Most temperate berry seed will not sprout the week you pick it. It is waiting through a winter it cannot see. You imitate that winter with a barely damp medium in the refrigerator, not a soaking wet one, for one to four months depending on the species. Some, elder and serviceberry among them, want a warm spell first and a cold spell second. Dry seed in a jar is storage. It is not stratification.",
    lessonAction: "Chill seed that is just moist. Wet seed rots. Bone-dry seed never counts the days.",
  },
  {
    id: "sow",
    n: "03",
    name: "Sow",
    lesson:
      "Tiny seed (blueberry, cranberry, lingonberry) sits on the surface, because it needs light. Larger seed goes in about as deep as the seed is thick. Warmth after the chill is what opens the seed, usually somewhere near room temperature, with the mix never allowed to dry. A clear lid holds moisture. It also holds mold if you never vent it. Clones skip this chapter: you plant a cane, a cutting, or a rooted layer straight into the ground.",
    lessonAction: "Surface-sow dust-fine seed. Bury only seed you can actually see.",
  },
  {
    id: "seedling",
    n: "04",
    name: "Seedling",
    lesson:
      "The first year of a seedling is a nursery year. Shade it from hard afternoon sun, pot it on before the roots circle, and do not judge the fruit by a plant the size of a spoon. Ericaceous babies (blueberry and its cousins) need an acid mix from the first pot. Brambles need drainage. Nothing in this book wants to stand in a saucer of water for a week.",
    lessonAction: "Pot on when roots reach the drain hole. Starve no seedling, and force none.",
  },
  {
    id: "site",
    n: "05",
    name: "Site",
    lesson:
      "Match the bush to the ground you have, or change a bed you can actually manage. Blueberry, cranberry, lingonberry, and evergreen huckleberry want acid soil, roughly pH 4.5 to 5.5. Goji is the opposite and likes a sweeter, even limy soil. Most of the rest sit happily between 5.5 and 7. Sun makes fruit. Shade makes leaves. Drainage matters as much as water: brambles rot where water sits, cranberries stall where the sand dries out.",
    lessonAction: "Test pH before you dig. Do not lime an acid bed, and do not plant a blueberry into a goji bed.",
  },
  {
    id: "establish",
    n: "06",
    name: "Establish",
    lesson:
      "The early years are for roots and wood. Water in dry weeks, mulch so the surface stays cool, and keep grass off the root zone. A blossom in year one feels like a prize. On a small plant it is often a tax. Many growers pinch those first flowers so the bush spends the season on structure. Fertilizer is a light hand, not a lawn program. Compost in spring covers most of these shrubs if the soil was decent to begin with.",
    lessonAction: "Water, mulch, and weed. Take the first flowers off any plant that is still smaller than the pot you bought it in.",
  },
  {
    id: "prune",
    n: "07",
    name: "Prune",
    lesson:
      "Pruning is how you choose which wood is allowed to fruit. Summer-bearing raspberries and blackberries fruit on last year's canes. Fall-bearing raspberries can fruit on this year's canes. Black currants fruit mostly on young wood. Red currants and gooseberries fruit on spurs of older wood. Blueberries fruit on last year's shoots and get tired after about six years of cane. Cut the wrong wood and you cut the crop. Learn the one rule for the bush in your hand before you open the shears.",
    lessonAction: "Name the wood that fruits, then remove something else.",
  },
  {
    id: "fruit",
    n: "08",
    name: "Fruit",
    lesson:
      "Color is not the same thing as ripe. Blueberries turn blue before they are sweet. Raspberries let go when they are ready and leave the core on the cane. Blackberries come away with the core inside. Taste one. Then pick often. Soft fruit left hanging invites birds and the fruit flies that show up when berries soften. A second cultivar nearby is not fussiness for blueberry, honeyberry, elderberry, or lingonberry. It is how you get a real crop.",
    lessonAction: "Taste before you harvest the row. Net the crop the week it colors, not the week it is gone.",
  },
  {
    id: "save",
    n: "09",
    name: "Save",
    lesson:
      "Closing the circle means you can start again without a catalog. Clones close it faithfully: a sucker, a hardwood cutting, a tip that rooted where it touched soil. Seed closes it as a new generation, labeled, cleaned, and put back into dormancy. Hybrids such as boysenberry and jostaberry will not come true from seed. Save their next plant with a layer or a cutting. Dry seed in a paper envelope, not a sealed damp bag, and write the name and the year on it.",
    lessonAction: "Clone what you love. Sow seed when you are willing to meet a stranger.",
  },
];

export const ALSO: readonly { name: string; latin: string; note: string }[] = [
  {
    name: "Strawberry",
    latin: "Fragaria × ananassa",
    note: "A low perennial herb, not a bush. Runners, not canes. Left out on purpose so this book stays about shrubs.",
  },
  {
    name: "Mulberry",
    latin: "Morus",
    note: "A tree. Wonderful fruit, different pruning, different life. Not a bush you tuck into a border.",
  },
  {
    name: "Sea buckthorn",
    latin: "Hippophae rhamnoides",
    note: "A thorny shrub that fruits only if you plant a female and a separate male. Tart orange berries, and a nitrogen-fixer. Worth its own book.",
  },
  {
    name: "Cloudberry",
    latin: "Rubus chamaemorus",
    note: "A bog specialist of the far north. Rarely happy in an ordinary garden, however carefully you sow it.",
  },
  {
    name: "Salmonberry and thimbleberry",
    latin: "Rubus spectabilis, Rubus parviflorus",
    note: "Wild brambles of cool, moist woods. They fruit, and they also run. Better left where they already grow unless you have the room and the climate.",
  },
  {
    name: "Wineberry",
    latin: "Rubus phoenicolasius",
    note: "A handsome bramble with red hairy canes. It fruits well and is invasive across much of the eastern United States. Do not plant it where it can escape.",
  },
  {
    name: "Loganberry and tayberry",
    latin: "Rubus hybrids",
    note: "Trailing cousins of the boysenberry. Same trellis, same rule: keep the variety by tip-layering, not by seed.",
  },
  {
    name: "Chilean guava",
    latin: "Ugni molinae",
    note: "A small evergreen shrub for mild winters. Aromatic berries, not a cold-country plant.",
  },
];

export type Ground = {
  zone: number;
  soil: "acid" | "average" | "alkaline";
  light: "full" | "half" | "shade";
  hurry: boolean;
};

export type Verdict = { bush: Bush; fit: "yes" | "if" | "no"; reason: string };

export function judge(bush: Bush, ground: Ground): Verdict {
  const [lo, hi] = bush.zones;
  if (ground.zone < lo || ground.zone > hi) {
    return {
      bush,
      fit: "no",
      reason: `Listed for zones ${lo}–${hi}. Zone ${ground.zone} is outside that range.`,
    };
  }
  if (ground.light === "shade" && !bush.shade) {
    return {
      bush,
      fit: "no",
      reason: "Mostly shade will not ripen a real crop. This one wants sun.",
    };
  }
  if (ground.soil === "alkaline" && bush.soilNeed === "acid") {
    return {
      bush,
      fit: "no",
      reason: "An acid-soil plant. Limy ground starves it even when you water faithfully.",
    };
  }
  if (ground.soil === "average" && bush.soilNeed === "acid") {
    return {
      bush,
      fit: "if",
      reason: "Only if you can hold a bed near pH 4.5–5.5. Ordinary garden soil is too sweet.",
    };
  }
  if (ground.soil === "acid" && bush.soilNeed === "alkaline") {
    return {
      bush,
      fit: "if",
      reason: "Prefers neutral to limy soil. An acid bed is the wrong neighborhood.",
    };
  }
  if (ground.soil === "acid" && bush.soilNeed === "mild") {
    return {
      bush,
      fit: "if",
      reason: "Happier nearer pH 6 than in a sharply acid bed.",
    };
  }
  if (ground.soil === "alkaline" && !bush.alkalineOk) {
    return {
      bush,
      fit: "if",
      reason: "Happier under pH 7. A raised bed of milder mix is the honest way to grow it on limy ground.",
    };
  }
  if (ground.light === "half" && !bush.partShade) {
    return {
      bush,
      fit: "if",
      reason: "It will live in half-day sun and fruit less. All-day sun is the crop.",
    };
  }
  if (ground.hurry && bush.nurseryYears > 2) {
    return {
      bush,
      fit: "if",
      reason: `A nursery plant takes about ${bush.yearsPlant} for a real crop, and seed is slower.`,
    };
  }
  if (bush.catchNote) {
    return { bush, fit: "if", reason: bush.catchNote };
  }
  return { bush, fit: "yes", reason: "Zone, soil, and light line up." };
}

export function yearOf(lines: readonly string[]): { m: string; t: string }[] {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  if (lines.length !== 12) throw new Error("A year needs twelve lines.");
  return months.map((m, i) => ({ m, t: lines[i]! }));
}

export function bushById(bushes: readonly Bush[], id: string): Bush | undefined {
  return bushes.find((bush) => bush.id === id);
}
