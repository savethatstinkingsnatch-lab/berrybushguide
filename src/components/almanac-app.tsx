import { useEffect, useMemo, useState } from "react";
import { BookOpen, Leaf, Menu, X } from "lucide-react";
import { ALSO, BUSHES, getBush, judge, STAGES } from "@/data/almanac";
import type { Bush, Ground, StageId } from "@/data/almanac";
import { loadPatch, savePatch, type PatchEntry } from "@/lib/patch-store";

type PageId =
  | "cover"
  | "howto"
  | "cycle"
  | "match"
  | "compare"
  | "patch"
  | "others"
  | "project"
  | (string & {});

const FRONT: { id: PageId; label: string }[] = [
  { id: "howto", label: "How to use this book" },
  { id: "cycle", label: "The cycle" },
  { id: "match", label: "Match your ground" },
];

const BACK: { id: PageId; label: string }[] = [
  { id: "compare", label: "Side by side" },
  { id: "patch", label: "Your patch" },
  { id: "others", label: "Beyond this book" },
  { id: "project", label: "The project" },
];

function cx(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function readingOrder(): PageId[] {
  return [...FRONT.map((item) => item.id), ...BUSHES.map((bush) => bush.id), ...BACK.map((item) => item.id)];
}

export function AlmanacApp() {
  const [page, setPage] = useState<PageId>("cover");
  const [stage, setStage] = useState<StageId>("gather");
  const [menu, setMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [patch, setPatch] = useState<PatchEntry[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [ground, setGround] = useState<Ground>({
    zone: 6,
    soil: "average",
    light: "full",
    hurry: false,
  });
  const [compareIds, setCompareIds] = useState<string[]>(["blueberry", "raspberry", "elderberry"]);
  const [cycleBush, setCycleBush] = useState("blueberry");

  useEffect(() => {
    setPatch(loadPatch());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    savePatch(patch);
  }, [patch, hydrated]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  function open(next: PageId) {
    setPage(next);
    setMenu(false);
  }

  if (page === "cover") {
    return (
      <Cover onOpen={() => open("howto")} />
    );
  }

  return (
    <div className="min-h-screen bg-paper text-ink lg:grid lg:grid-cols-[17rem_minmax(0,1fr)]">
      <aside className="no-print sticky top-0 hidden h-screen overflow-y-auto border-r border-line bg-paper lg:block">
        <Contents page={page} query={query} setQuery={setQuery} open={open} />
      </aside>
      <div className="min-w-0">
        <header className="no-print sticky top-0 z-20 flex items-center gap-3 border-b border-line bg-paper px-4 py-2">
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center border border-line lg:hidden"
            aria-label="Open contents"
            onClick={() => setMenu(true)}
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
          <button type="button" className="min-h-11 text-left" onClick={() => open("cover")}>
            <span className="block font-display text-lg leading-none">Seed to Seed</span>
            <span className="text-xs tracking-wide text-muted">Jessica McIntosh</span>
          </button>
        </header>
        {menu ? (
          <div className="no-print fixed inset-0 z-40 flex flex-col bg-paper lg:hidden">
            <div className="flex items-center justify-between border-b border-line px-4 py-2">
              <p className="font-display text-lg">Contents</p>
              <button
                type="button"
                className="inline-flex min-h-11 min-w-11 items-center justify-center"
                aria-label="Close contents"
                onClick={() => setMenu(false)}
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <div className="overflow-y-auto">
              <Contents page={page} query={query} setQuery={setQuery} open={open} />
            </div>
          </div>
        ) : null}
        <main className="mx-auto w-full max-w-3xl px-5 py-8 sm:px-8 sm:py-10">
          <PageBody
            page={page}
            stage={stage}
            setStage={setStage}
            ground={ground}
            setGround={setGround}
            compareIds={compareIds}
            setCompareIds={setCompareIds}
            cycleBush={cycleBush}
            setCycleBush={setCycleBush}
            patch={patch}
            setPatch={setPatch}
            open={open}
          />
        </main>
      </div>
    </div>
  );
}

function Cover({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-2">
      <section className="flex flex-col justify-between gap-16 bg-leaf px-6 py-10 text-paper sm:px-10 lg:min-h-screen lg:px-12 lg:py-12">
        <p className="text-xs tracking-widest text-mist uppercase">A grower’s almanac</p>
        <div>
          <p className="mb-4 flex items-center gap-2 text-sm text-mist">
            <Leaf className="size-4" aria-hidden="true" />
            Sixteen bushes
          </p>
          <h1 className="font-display text-6xl leading-[0.92] font-medium sm:text-7xl">Seed to Seed</h1>
          <p className="mt-5 max-w-sm text-lg text-mist">
            Berry bushes, from the seed you hold to the seed you save.
          </p>
        </div>
        <p className="font-display text-2xl font-medium">Jessica McIntosh</p>
      </section>
      <section className="flex flex-col justify-center gap-8 bg-paper px-6 py-10 text-ink sm:px-10 lg:px-12">
        <p className="max-w-md text-lg leading-relaxed">
          A field book for growing your own fruit. Sixteen bushes, from the seed you hold to the seed you save.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 bg-leaf px-5 text-sm font-medium text-paper"
            onClick={onOpen}
          >
            <BookOpen className="size-4" aria-hidden="true" />
            Open the book
          </button>
        </div>
        <dl className="grid max-w-md grid-cols-2 gap-px bg-line">
          {[
            ["Bushes", "16"],
            ["Stages", "9"],
            ["Edition", "Open"],
            ["Author", "McIntosh"],
          ].map(([label, value]) => (
            <div key={label} className="bg-paper px-3 py-3">
              <dt className="text-xs tracking-widest text-muted uppercase">{label}</dt>
              <dd className="mt-1 font-display text-2xl">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="max-w-md text-sm text-muted">
          Land, photos, hands-on days, storage, and recipes come later.
        </p>
      </section>
    </div>
  );
}

function Contents({
  page,
  query,
  setQuery,
  open,
}: {
  page: PageId;
  query: string;
  setQuery: (value: string) => void;
  open: (id: PageId) => void;
}) {
  const needle = query.trim().toLowerCase();
  const bushes = BUSHES.filter((bush) => {
    if (!needle) return true;
    return (
      bush.name.toLowerCase().includes(needle) ||
      bush.latin.toLowerCase().includes(needle) ||
      bush.aka.toLowerCase().includes(needle)
    );
  });
  const groups = ["Heath", "Bramble", "Ribes", "Other shrubs"] as const;

  return (
    <nav aria-label="Contents" className="px-3 py-4">
      <button type="button" className="mb-3 min-h-11 px-2 text-left" onClick={() => open("cover")}>
        <span className="block font-display text-xl leading-none">Seed to Seed</span>
        <span className="text-xs text-muted">Jessica McIntosh</span>
      </button>
      <label className="mb-4 block px-2">
        <span className="sr-only">Search bushes</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search bushes"
          className="min-h-11 w-full border border-line bg-paper px-3 text-sm"
        />
      </label>
      <ol className="space-y-1">
        {FRONT.map((item, index) => (
          <li key={item.id}>
            <ChapterLink n={index + 1} label={item.label} active={page === item.id} onClick={() => open(item.id)} />
          </li>
        ))}
      </ol>
      {groups.map((group) => {
        const items = bushes.filter((bush) => bush.group === group);
        if (!items.length) return null;
        return (
          <div key={group} className="mt-5">
            <p className="px-2 text-xs tracking-widest text-muted uppercase">{group}</p>
            <ol className="mt-1 space-y-1">
              {items.map((bush) => (
                <li key={bush.id}>
                  <ChapterLink
                    n={readingOrder().indexOf(bush.id) + 1}
                    label={bush.name}
                    latin={bush.latin}
                    fruit={bush.fruit}
                    active={page === bush.id}
                    onClick={() => open(bush.id)}
                  />
                </li>
              ))}
            </ol>
          </div>
        );
      })}
      <ol className="mt-5 space-y-1">
        {BACK.map((item) => (
          <li key={item.id}>
            <ChapterLink
              n={readingOrder().indexOf(item.id) + 1}
              label={item.label}
              active={page === item.id}
              onClick={() => open(item.id)}
            />
          </li>
        ))}
      </ol>
    </nav>
  );
}

function ChapterLink({
  n,
  label,
  latin,
  fruit,
  active,
  onClick,
}: {
  n: number;
  label: string;
  latin?: string;
  fruit?: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-current={active ? "page" : undefined}
      onClick={onClick}
      className={cx(
        "flex min-h-11 w-full items-center gap-3 px-2 text-left",
        active && "bg-moss",
      )}
    >
      <span className="w-6 shrink-0 font-display text-sm text-muted tabular-nums">{n}</span>
      {fruit ? <span className="fruit-dot" data-fruit={fruit} aria-hidden="true" /> : null}
      <span className="min-w-0">
        <span className="block truncate">{label}</span>
        {latin ? <span className="block truncate text-xs text-muted italic">{latin}</span> : null}
      </span>
    </button>
  );
}

function PageBody(props: {
  page: PageId;
  stage: StageId;
  setStage: (stage: StageId) => void;
  ground: Ground;
  setGround: (ground: Ground) => void;
  compareIds: string[];
  setCompareIds: (ids: string[]) => void;
  cycleBush: string;
  setCycleBush: (id: string) => void;
  patch: PatchEntry[];
  setPatch: (entries: PatchEntry[]) => void;
  open: (id: PageId) => void;
}) {
  const bush = getBush(props.page);
  if (bush) {
    return (
      <BushChapter
        bush={bush}
        stage={props.stage}
        setStage={props.setStage}
        open={props.open}
      />
    );
  }
  if (props.page === "howto") return <HowTo open={props.open} />;
  if (props.page === "cycle") {
    return (
      <Cycle
        stage={props.stage}
        setStage={props.setStage}
        cycleBush={props.cycleBush}
        setCycleBush={props.setCycleBush}
        open={props.open}
      />
    );
  }
  if (props.page === "match") {
    return <Match ground={props.ground} setGround={props.setGround} open={props.open} />;
  }
  if (props.page === "compare") {
    return (
      <Compare
        ids={props.compareIds}
        setIds={props.setCompareIds}
        open={props.open}
      />
    );
  }
  if (props.page === "patch") {
    return <Patch patch={props.patch} setPatch={props.setPatch} open={props.open} />;
  }
  if (props.page === "others") return <Others />;
  return <Project />;
}

function ChapterHead({ kicker, title, dek }: { kicker: string; title: string; dek?: string }) {
  return (
    <header className="mb-8 border-b border-line pb-6">
      <p className="text-xs tracking-widest text-muted uppercase">{kicker}</p>
      <h1 className="mt-2 font-display text-4xl font-medium sm:text-5xl">{title}</h1>
      {dek ? <p className="mt-3 max-w-xl text-lg text-muted">{dek}</p> : null}
    </header>
  );
}

function HowTo({ open }: { open: (id: PageId) => void }) {
  return (
    <article className="rise">
      <ChapterHead
        kicker="Chapter 1"
        title="How to use this book"
        dek="Same nine beats for every bush, so a blueberry and a goji can be compared without learning a new outline."
      />
      <div className="space-y-4 text-base">
        <p>
          Seed to seed is the biological circle: gather the seed, carry it through dormancy, sow it, raise the
          seedling, put it in the right ground, keep it alive, prune the wood that fruits, pick the fruit, and
          save the next seed. For most named berries the faithful copy is not a seed at all. It is a cutting, a
          sucker, or a cane tip that rooted. This book tells both truths.
        </p>
        <p>
          Each bush chapter opens with a field card — zones, pH, years — then the nine stages. The line under
          each stage is the thing to do, not a slogan. The year at the end is a calendar, not a promise about
          your weather. USDA zones say how cold a plant can take. They do not say whether your July will cook it.
        </p>
        <p>
          Match your ground if you have not chosen a bush. Side by side if you are deciding between two. Your
          patch is a private notebook kept on this device: what you planted, and which stage it is actually in.
        </p>
      </div>
      <h2 className="mt-10 font-display text-2xl font-medium">The sixteen</h2>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {BUSHES.map((bush) => (
          <li key={bush.id}>
            <button
              type="button"
              onClick={() => open(bush.id)}
              className="flex min-h-11 w-full items-center gap-3 border border-line px-3 py-3 text-left"
            >
              <span className="fruit-dot" data-fruit={bush.fruit} aria-hidden="true" />
              <span className="min-w-0">
                <span className="block font-display text-xl leading-tight">{bush.name}</span>
                <span className="block truncate text-sm text-muted italic">{bush.latin}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
      <Pager page="howto" open={open} />
    </article>
  );
}

function StageBar({ stage, setStage }: { stage: StageId; setStage: (stage: StageId) => void }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Stages">
      {STAGES.map((item) => {
        const on = item.id === stage;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={on}
            onClick={() => setStage(item.id)}
            className={cx(
              "inline-flex min-h-11 shrink-0 items-center gap-2 border px-3 text-sm",
              on ? "border-ink bg-ink text-paper" : "border-line bg-paper text-ink",
            )}
          >
            <span className="font-display tabular-nums">{item.n}</span>
            {item.name}
          </button>
        );
      })}
    </div>
  );
}

function Cycle({
  stage,
  setStage,
  cycleBush,
  setCycleBush,
  open,
}: {
  stage: StageId;
  setStage: (stage: StageId) => void;
  cycleBush: string;
  setCycleBush: (id: string) => void;
  open: (id: PageId) => void;
}) {
  const lesson = STAGES.find((item) => item.id === stage) ?? STAGES[0];
  const bush = getBush(cycleBush) ?? BUSHES[0];
  const copy = bush?.stages[stage];
  return (
    <article className="rise">
      <ChapterHead
        kicker="Chapter 2"
        title="The cycle"
        dek="Nine stages that belong to every bush in the book. The details change. The order does not."
      />
      <StageBar stage={stage} setStage={setStage} />
      <div className="mt-6 space-y-4">
        <h2 className="font-display text-3xl font-medium">
          {lesson.n} {lesson.name}
        </h2>
        <p>{lesson.lesson}</p>
        <p className="border border-line bg-moss px-4 py-3 text-sm">
          <span className="font-medium">Do this. </span>
          {lesson.lessonAction}
        </p>
      </div>
      {bush && copy ? (
        <div className="mt-8 border border-line p-4 sm:p-5">
          <label className="block text-xs tracking-widest text-muted uppercase" htmlFor="cycle-bush">
            The same stage, on one bush
          </label>
          <select
            id="cycle-bush"
            value={bush.id}
            onChange={(event) => setCycleBush(event.target.value)}
            className="mt-2 min-h-11 w-full border border-line bg-paper px-3"
          >
            {BUSHES.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <h3 className="mt-4 font-display text-2xl font-medium">{bush.name}</h3>
          <p className="mt-2">{copy.body}</p>
          <p className="mt-3 text-sm text-muted">{copy.action}</p>
          <button
            type="button"
            className="mt-4 inline-flex min-h-11 items-center border border-ink px-4 text-sm"
            onClick={() => open(bush.id)}
          >
            Open the {bush.name.toLowerCase()} chapter
          </button>
        </div>
      ) : null}
      <Pager page="cycle" open={open} />
    </article>
  );
}

function Match({
  ground,
  setGround,
  open,
}: {
  ground: Ground;
  setGround: (ground: Ground) => void;
  open: (id: PageId) => void;
}) {
  const verdicts = useMemo(() => BUSHES.map((bush) => judge(bush, ground)), [ground]);
  const yes = verdicts.filter((item) => item.fit === "yes");
  const maybe = verdicts.filter((item) => item.fit === "if");
  const no = verdicts.filter((item) => item.fit === "no");

  return (
    <article className="rise">
      <ChapterHead
        kicker="Chapter 3"
        title="Match your ground"
        dek="Zones are a cold-hardiness sketch. pH is not optional. Answer for the bed you will actually plant, not the bed you wish you had."
      />
      <div className="space-y-6">
        <fieldset>
          <legend className="text-sm font-medium">USDA zone</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {[2, 3, 4, 5, 6, 7, 8, 9].map((zone) => (
              <button
                key={zone}
                type="button"
                aria-pressed={ground.zone === zone}
                onClick={() => setGround({ ...ground, zone })}
                className={cx(
                  "inline-flex min-h-11 min-w-11 items-center justify-center border px-3 text-sm tabular-nums",
                  ground.zone === zone ? "border-ink bg-ink text-paper" : "border-line",
                )}
              >
                {zone}
              </button>
            ))}
          </div>
        </fieldset>
        <ChoiceRow
          legend="Soil you will plant in"
          value={ground.soil}
          options={[
            ["acid", "Acid, about 4.5–5.5"],
            ["average", "Ordinary, about 6–7"],
            ["alkaline", "Limy, over 7"],
          ]}
          onChange={(soil) => setGround({ ...ground, soil })}
        />
        <ChoiceRow
          legend="Light"
          value={ground.light}
          options={[
            ["full", "All-day sun"],
            ["half", "Half the day"],
            ["shade", "Mostly shade"],
          ]}
          onChange={(light) => setGround({ ...ground, light })}
        />
        <ChoiceRow
          legend="Patience"
          value={ground.hurry ? "hurry" : "wait"}
          options={[
            ["wait", "I can wait"],
            ["hurry", "Fruit within two years of a nursery plant"],
          ]}
          onChange={(value) => setGround({ ...ground, hurry: value === "hurry" })}
        />
      </div>
      <VerdictList title="Plant these" items={yes} open={open} empty="Nothing is a clean yes. Look at the compromises, or change one answer." />
      <VerdictList title="Only if you change one thing" items={maybe} open={open} empty="No compromises on this combination." />
      <details className="mt-8 border-t border-line pt-4">
        <summary className="min-h-11 cursor-pointer text-sm font-medium">Not this bed ({no.length})</summary>
        <ul className="mt-3 space-y-3">
          {no.map((item) => (
            <li key={item.bush.id} className="text-sm">
              <button type="button" className="font-medium underline-offset-2" onClick={() => open(item.bush.id)}>
                {item.bush.name}
              </button>
              <span className="text-muted"> — {item.reason}</span>
            </li>
          ))}
        </ul>
      </details>
      <Pager page="match" open={open} />
    </article>
  );
}

function ChoiceRow<T extends string>({
  legend,
  value,
  options,
  onChange,
}: {
  legend: string;
  value: T;
  options: readonly (readonly [T, string])[];
  onChange: (value: T) => void;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-medium">{legend}</legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map(([id, label]) => (
          <button
            key={id}
            type="button"
            aria-pressed={value === id}
            onClick={() => onChange(id)}
            className={cx(
              "inline-flex min-h-11 items-center border px-3 text-left text-sm",
              value === id ? "border-ink bg-ink text-paper" : "border-line bg-paper",
            )}
          >
            {label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function VerdictList({
  title,
  items,
  open,
  empty,
}: {
  title: string;
  items: ReturnType<typeof judge>[];
  open: (id: PageId) => void;
  empty: string;
}) {
  return (
    <section className="mt-8">
      <h2 className="font-display text-2xl font-medium">{title}</h2>
      {items.length === 0 ? <p className="mt-2 text-sm text-muted">{empty}</p> : null}
      <ul className="mt-3 space-y-3">
        {items.map((item) => (
          <li key={item.bush.id}>
            <button
              type="button"
              onClick={() => open(item.bush.id)}
              className="flex w-full min-h-11 items-start gap-3 border border-line px-3 py-3 text-left"
            >
              <span className="fruit-dot mt-1" data-fruit={item.bush.fruit} aria-hidden="true" />
              <span>
                <span className="block font-display text-xl">{item.bush.name}</span>
                <span className="mt-1 block text-sm text-muted">{item.reason}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function BushChapter({
  bush,
  stage,
  setStage,
  open,
}: {
  bush: Bush;
  stage: StageId;
  setStage: (stage: StageId) => void;
  open: (id: PageId) => void;
}) {
  const copy = bush.stages[stage];
  const lesson = STAGES.find((item) => item.id === stage);
  const specs: [string, string][] = [
    ["Zones", `${bush.zones[0]}–${bush.zones[1]}`],
    ["Soil pH", `${bush.ph[0]}–${bush.ph[1]}`],
    ["Light", bush.sun],
    ["Water", bush.water],
    ["Habit", bush.habit],
    ["Height", bush.height],
    ["Thorns", bush.thorns],
    ["Pollination", bush.pollination],
    ["From a plant", bush.yearsPlant],
    ["From seed", bush.yearsSeed],
    ["Family", bush.family],
    ["Also called", bush.aka],
  ];
  return (
    <article className="rise">
      <p className="text-xs tracking-widest text-muted uppercase">
        Chapter {readingOrder().indexOf(bush.id) + 1} · {bush.group}
      </p>
      <div className="mt-2 flex items-center gap-3">
        <span className="fruit-dot" data-fruit={bush.fruit} aria-hidden="true" />
        <h1 className="font-display text-4xl font-medium sm:text-5xl">{bush.name}</h1>
      </div>
      <p className="mt-2 font-display text-lg text-muted italic">{bush.latin}</p>
      <p className="mt-4 max-w-xl">{bush.lead}</p>
      <dl className="mt-6 grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
        {specs.map(([label, value]) => (
          <div key={label} className="bg-paper px-3 py-3">
            <dt className="text-xs tracking-widest text-muted uppercase">{label}</dt>
            <dd className="mt-1 text-sm">{value}</dd>
          </div>
        ))}
      </dl>
      <h2 className="mt-10 font-display text-2xl font-medium">Seed to seed</h2>
      <div className="mt-4">
        <StageBar stage={stage} setStage={setStage} />
      </div>
      <div className="mt-6 space-y-4">
        <h3 className="font-display text-3xl font-medium">
          {lesson?.n} {lesson?.name}
        </h3>
        <p>{copy.body}</p>
        <p className="border border-line bg-moss px-4 py-3 text-sm">
          <span className="font-medium">Do this. </span>
          {copy.action}
        </p>
      </div>
      <h2 className="mt-10 font-display text-2xl font-medium">The year</h2>
      <ol className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {bush.year.map((item) => (
          <li key={item.m} className="border border-line px-3 py-3">
            <p className="text-xs tracking-widest text-muted uppercase">{item.m}</p>
            <p className="mt-1 text-sm">{item.t}</p>
          </li>
        ))}
      </ol>
      <h2 className="mt-10 font-display text-2xl font-medium">Three mistakes</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-5">
        {bush.mistakes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
      <h2 className="mt-10 font-display text-2xl font-medium">Kitchen</h2>
      <p className="mt-3">{bush.kitchen}</p>
      <h2 className="mt-8 font-display text-2xl font-medium">Careful</h2>
      <p className="mt-3 border-l-4 border-wine bg-wine-soft px-4 py-3 text-sm">{bush.caution}</p>
      <Pager page={bush.id} open={open} />
    </article>
  );
}

function Compare({
  ids,
  setIds,
  open,
}: {
  ids: string[];
  setIds: (ids: string[]) => void;
  open: (id: PageId) => void;
}) {
  const chosen = ids.map((id) => getBush(id)).filter((bush): bush is Bush => Boolean(bush));
  function toggle(id: string) {
    if (ids.includes(id)) {
      setIds(ids.filter((item) => item !== id));
      return;
    }
    if (ids.length >= 3) return;
    setIds([...ids, id]);
  }
  const rows: [string, (bush: Bush) => string][] = [
    ["Latin", (bush) => bush.latin],
    ["Zones", (bush) => `${bush.zones[0]}–${bush.zones[1]}`],
    ["pH", (bush) => `${bush.ph[0]}–${bush.ph[1]}`],
    ["Light", (bush) => bush.sun],
    ["Height", (bush) => bush.height],
    ["Thorns", (bush) => bush.thorns],
    ["Pollination", (bush) => bush.pollination],
    ["From a plant", (bush) => bush.yearsPlant],
    ["From seed", (bush) => bush.yearsSeed],
    ["Water", (bush) => bush.water],
  ];
  return (
    <article className="rise">
      <ChapterHead
        kicker={`Chapter ${readingOrder().indexOf("compare") + 1}`}
        title="Side by side"
        dek="Three bushes at a time. The fruit does not care which one you prefer. The soil does."
      />
      <ul className="flex flex-wrap gap-2">
        {BUSHES.map((bush) => {
          const on = ids.includes(bush.id);
          const disabled = !on && ids.length >= 3;
          return (
            <li key={bush.id}>
              <button
                type="button"
                aria-pressed={on}
                disabled={disabled}
                onClick={() => toggle(bush.id)}
                className={cx(
                  "inline-flex min-h-11 items-center gap-2 border px-3 text-sm disabled:cursor-not-allowed disabled:opacity-40",
                  on ? "border-ink bg-ink text-paper" : "border-line",
                )}
              >
                <span className="fruit-dot" data-fruit={bush.fruit} aria-hidden="true" />
                {bush.name}
              </button>
            </li>
          );
        })}
      </ul>
      {chosen.length === 0 ? (
        <p className="mt-6 text-muted">Choose at least one bush.</p>
      ) : (
        <div className="mt-6 overflow-x-auto border border-line">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line">
                <th className="px-3 py-3 font-medium text-muted"> </th>
                {chosen.map((bush) => (
                  <th key={bush.id} className="px-3 py-3 font-display text-lg font-medium">
                    <button type="button" className="min-h-11 text-left" onClick={() => open(bush.id)}>
                      {bush.name}
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, read]) => (
                <tr key={label} className="border-b border-line align-top">
                  <th className="px-3 py-3 font-medium">{label}</th>
                  {chosen.map((bush) => (
                    <td key={bush.id} className="px-3 py-3">
                      {read(bush)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Pager page="compare" open={open} />
    </article>
  );
}

function Patch({
  patch,
  setPatch,
  open,
}: {
  patch: PatchEntry[];
  setPatch: (entries: PatchEntry[]) => void;
  open: (id: PageId) => void;
}) {
  const [bushId, setBushId] = useState(BUSHES[0]?.id ?? "blueberry");
  const [nickname, setNickname] = useState("");
  const [year, setYear] = useState(String(new Date().getFullYear()));
  const [stage, setStage] = useState<StageId>("site");
  const [notes, setNotes] = useState("");

  function add() {
    const bush = getBush(bushId);
    if (!bush) return;
    const key =
      typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : String(Date.now());
    setPatch([
      {
        key,
        bushId,
        nickname: nickname.trim() || bush.name,
        year: year.trim(),
        stage,
        notes: notes.trim(),
      },
      ...patch,
    ]);
    setNickname("");
    setNotes("");
  }

  function update(key: string, next: Partial<PatchEntry>) {
    setPatch(patch.map((entry) => (entry.key === key ? { ...entry, ...next } : entry)));
  }

  return (
    <article className="rise">
      <ChapterHead
        kicker={`Chapter ${readingOrder().indexOf("patch") + 1}`}
        title="Your patch"
        dek="A notebook kept on this device only. It does not create an account, and it does not leave the browser."
      />
      <form
        className="grid gap-3 border border-line p-4"
        onSubmit={(event) => {
          event.preventDefault();
          add();
        }}
      >
        <label className="block text-sm">
          Bush
          <select
            value={bushId}
            onChange={(event) => setBushId(event.target.value)}
            className="mt-1 min-h-11 w-full border border-line bg-paper px-3"
          >
            {BUSHES.map((bush) => (
              <option key={bush.id} value={bush.id}>
                {bush.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          Name in your patch
          <input
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
            placeholder="North fence blueberries"
            className="mt-1 min-h-11 w-full border border-line bg-paper px-3"
          />
        </label>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block text-sm">
            Year planted
            <input
              value={year}
              onChange={(event) => setYear(event.target.value)}
              className="mt-1 min-h-11 w-full border border-line bg-paper px-3"
            />
          </label>
          <label className="block text-sm">
            Stage now
            <select
              value={stage}
              onChange={(event) => setStage(event.target.value as StageId)}
              className="mt-1 min-h-11 w-full border border-line bg-paper px-3"
            >
              {STAGES.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.n} {item.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="block text-sm">
          Notes
          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            rows={3}
            className="mt-1 w-full border border-line bg-paper px-3 py-2"
          />
        </label>
        <button type="submit" className="inline-flex min-h-11 items-center justify-center bg-leaf px-4 text-sm font-medium text-paper">
          Add to the patch
        </button>
      </form>
      {patch.length === 0 ? (
        <p className="mt-6 text-muted">
          Nothing planted yet. Add a bush when it actually goes in the ground, then keep the stage honest.
        </p>
      ) : (
        <ul className="mt-6 space-y-4">
          {patch.map((entry) => {
            const bush = getBush(entry.bushId);
            return (
              <li key={entry.key} className="border border-line p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-display text-2xl">{entry.nickname}</h2>
                    <p className="text-sm text-muted">{bush ? bush.name : "Unknown bush"} · planted {entry.year || "—"}</p>
                  </div>
                  <button
                    type="button"
                    className="inline-flex min-h-11 items-center px-2 text-sm text-wine"
                    onClick={() => setPatch(patch.filter((item) => item.key !== entry.key))}
                  >
                    Remove
                  </button>
                </div>
                <label className="mt-3 block text-sm">
                  Stage
                  <select
                    value={entry.stage}
                    onChange={(event) => update(entry.key, { stage: event.target.value as StageId })}
                    className="mt-1 min-h-11 w-full border border-line bg-paper px-3"
                  >
                    {STAGES.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.n} {item.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="mt-3 block text-sm">
                  Notes
                  <textarea
                    value={entry.notes}
                    onChange={(event) => update(entry.key, { notes: event.target.value })}
                    rows={3}
                    className="mt-1 w-full border border-line bg-paper px-3 py-2"
                  />
                </label>
                {bush ? (
                  <button
                    type="button"
                    className="mt-3 inline-flex min-h-11 items-center text-sm underline-offset-2"
                    onClick={() => open(bush.id)}
                  >
                    Read the {bush.name.toLowerCase()} chapter
                  </button>
                ) : null}
              </li>
            );
          })}
        </ul>
      )}
      <Pager page="patch" open={open} />
    </article>
  );
}

function Others() {
  return (
    <article className="rise">
      <ChapterHead
        kicker={`Chapter ${readingOrder().indexOf("others") + 1}`}
        title="Beyond this book"
        dek="Berries that are not bush crops, or that should not be planted casually."
      />
      <ul className="space-y-4">
        {ALSO.map((item) => (
          <li key={item.name} className="border-b border-line pb-4">
            <h2 className="font-display text-2xl font-medium">{item.name}</h2>
            <p className="text-sm text-muted italic">{item.latin}</p>
            <p className="mt-2">{item.note}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}

const LATER = [
  {
    when: "Now",
    title: "This book, free",
    body: "Sixteen berry bushes, seed to seed. Read them, match them to your ground, and keep a patch notebook on this device. The reading stays open.",
  },
  {
    when: "When there is land",
    title: "Show the work",
    body: "Photos and videos from the ground, so a person can see the prune, the fruit, and the mistakes. Then hands-on days, once the place can hold people.",
  },
  {
    when: "After the harvest",
    title: "Storage, then recipes",
    body: "Keeping what you grew comes first. Cooking it comes after. Both will be added to the books. They are not in this edition.",
  },
] as const;

function Project() {
  return (
    <article className="rise">
      <ChapterHead
        kicker="The work"
        title="The project"
        dek="Teach people to grow their own food. This almanac is the part that exists today."
      />
      <ol className="space-y-6">
        {LATER.map((item, index) => (
          <li key={item.title} className="border-b border-line pb-6">
            <p className="text-xs tracking-widest text-muted uppercase">
              {String(index + 1).padStart(2, "0")} · {item.when}
            </p>
            <h2 className="mt-2 font-display text-2xl font-medium">{item.title}</h2>
            <p className="mt-2">{item.body}</p>
          </li>
        ))}
      </ol>
      <p className="mt-8 text-sm text-muted">© 2026 Jessica McIntosh.</p>
    </article>
  );
}

function Pager({ page, open }: { page: PageId; open: (id: PageId) => void }) {
  const order = readingOrder();
  const index = order.indexOf(page);
  const prev = index > 0 ? order[index - 1] : undefined;
  const next = index >= 0 && index < order.length - 1 ? order[index + 1] : undefined;
  return (
    <nav className="no-print mt-10 flex flex-wrap justify-between gap-3 border-t border-line pt-4" aria-label="Chapters">
      {prev ? (
        <button type="button" className="inline-flex min-h-11 items-center px-1 text-sm" onClick={() => open(prev)}>
          ← {labelFor(prev)}
        </button>
      ) : (
        <span />
      )}
      {next ? (
        <button type="button" className="inline-flex min-h-11 items-center px-1 text-sm" onClick={() => open(next)}>
          {labelFor(next)} →
        </button>
      ) : null}
    </nav>
  );
}

function labelFor(id: PageId): string {
  const front = FRONT.find((item) => item.id === id);
  if (front) return front.label;
  const back = BACK.find((item) => item.id === id);
  if (back) return back.label;
  return getBush(id)?.name ?? "Chapter";
}
