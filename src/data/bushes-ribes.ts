import { yearOf, type Bush } from "@/data/model";

const rust =
  "Gooseberries, currants, and jostaberries are Ribes. They can host white pine blister rust. Some places still restrict them to protect five-needle pines. Check your state before you order plants.";

export const ribesBushes: Bush[] = [
  {
    id: "gooseberry",
    name: "Gooseberry",
    latin: "Ribes uva-crispa",
    family: "Grossulariaceae",
    aka: "European gooseberry. American gooseberry is Ribes hirtellum, often tougher against mildew.",
    group: "Ribes",
    fruit: "gooseberry",
    habit: "Thorny deciduous shrub, open vase",
    zones: [3, 7],
    ph: [6, 6.8],
    sun: "Sun, or afternoon shade where summers are hot",
    water: "Even moisture. Dry shade makes small fruit and mildew.",
    height: "3–5 ft",
    thorns: "Thorny at the nodes. Wear gloves.",
    pollination: "Self-fruitful.",
    yearsPlant: "2–3 years",
    yearsSeed: "3–4 years, not the cultivar",
    nurseryYears: 3,
    soilNeed: "mild",
    partShade: true,
    shade: true,
    alkalineOk: false,
    lead:
      "Gooseberries fruit on spurs of older wood and at the base of last year’s shoots. That is why you keep a framework of branches instead of cutting the shrub to the ground. They like a cool climate. Heat and stagnant air invite American powdery mildew. " +
      rust,
    kitchen:
      "Underripe green fruit is the traditional tart pie berry. Fully ripe fruit softens and sweetens, gold, pink, or red depending on the cultivar. Cook what the birds do not take. The thorns make gloves part of the recipe.",
    caution: rust + " Do not plant a mildew-prone European cultivar against a wall with no air.",
    stages: {
      gather: {
        body: "Named bushes come from cuttings or layers. Seed from ripe fruit can be rinsed out of the pulp and dried for a few days. It produces a gooseberry, not ‘Invicta’ or whichever cultivar you picked. Hardwood cuttings in autumn are the usual way to copy a bush: a pencil-thick shoot of this year’s wood, about eight inches, stuck into soil.",
        action: "Take a cutting to copy the bush. Keep seed only for a seedling.",
      },
      dormancy: {
        body: "Seed wants a long chill, about three to four months, cold and barely moist. Cuttings taken in late autumn root slowly outdoors over winter or in a cold frame. Do not let either one dry, and do not keep seed in a warm kitchen and call it stratified.",
        action: "Chill seed for a full season of cold, or set hardwood cuttings in autumn and leave them.",
      },
      sow: {
        body: "In spring, sow chilled seed a quarter inch deep in a drained, moist mix. Germination can be uneven. Cuttings want two nodes buried and one or two above the soil, in a shady nursery row. Plants from a nursery go in at the same depth they grew, in early spring or autumn.",
        action: "Bury two nodes of a cutting. Do not leave the whole stick on the surface.",
      },
      seedling: {
        body: "Seedlings are small and often thornier than you hoped. Pot them on, and do not crowd them; mildew finds crowded Ribes early. A rooted cutting is a year ahead and is the cultivar you meant.",
        action: "Give seedlings air and sun, not a humid dome all summer.",
      },
      site: {
        body: "Zones 3 to 7, cooler being better. pH about 6 to 6.8. Full sun in a cool climate, afternoon shade where summers cook. Space bushes 4 to 5 feet apart so the center can stay open. Avoid a frost pocket if you can: they flower early. Air matters more than a windbreak that traps humidity.",
        action: "Choose air and a cool root run. Check the local rule on Ribes before the plant is in the ground.",
      },
      establish: {
        body: "Water in dry spells the first two summers. Mulch, but keep it off the crown. A compost dressing in spring is enough. Flowers may appear in year two. Let a strong young bush carry a few; strip them if the plant is still a twig. Watch for imported gooseberry sawfly, which can strip leaves in days. Hand-pick the little caterpillars or you will have a bare bush by June.",
        action: "Check the undersides of leaves in late spring for sawfly larvae.",
      },
      prune: {
        body: "In late winter, make an open vase. Cut out dead wood, branches that cross the center, and wood older than about three or four years, which is thick, dark, and less fruitful. Shorten last year’s side shoots to a few buds. Leave the leaders longer. Do not shear the outside into a hedge. Summer pruning, shortening side shoots to five leaves, is optional and helps size the fruit and the air.",
        action: "Keep a goblet of younger wood. Cut out a few of the oldest stems each winter.",
      },
      fruit: {
        body: "Fruit hangs along the old wood, sometimes singly, sometimes in twos and threes. Pick green and firm for cooking, or wait until the berry colors and softens for eating. A nursery bush often fruits lightly in year two or three. Birds, especially where the fruit sweetens, will help themselves. Gloves. The thorns are not decorative.",
        action: "Decide green-for-pies or ripe-for-eating, and pick before the fruit splits in a wet week.",
      },
      save: {
        body: "Take hardwood cuttings again in autumn from wood you liked, and the cultivar continues. A low branch can be layered: peg it down, nick the underside, and sever it next year. Seed goes through the rinse, the dry, the label, and another long chill. It is a new gooseberry. Write the parent cultivar on the envelope only as a note of where it came from, not as the seedling’s name.",
        action: "Stick cuttings the autumn you have fruit, so the next plant is already started.",
      },
    },
    year: yearOf([
      "Order bushes. Seed should already be cold if you want spring germination.",
      "Prune to an open vase before the buds swell. Plant bare-root bushes.",
      "Mulch. Last chance to plant before growth is soft.",
      "Flowers. A late frost can take them; a cover on a cold night saves a crop.",
      "Sawfly season. Look under the leaves.",
      "Green fruit sizes. Water if the month is dry. Optional summer shortening of side shoots.",
      "Pick green fruit for cooking, or wait for color.",
      "Ripe fruit. Net if the birds found it. Mildew shows on soft new tips in humid heat.",
      "Remove badly mildewed tips if a cultivar is susceptible. Do not compost a heap of infected shoot tips next to the bush.",
      "Take hardwood cuttings. Rinse seed if you are keeping any.",
      "Plant cuttings in a nursery row. Mulch bushes after the ground cools.",
      "Leave the buds. Winter pruning can wait until the worst cold has a date on the calendar.",
    ]),
    mistakes: [
      "Cutting the shrub to the ground and expecting spur-borne fruit.",
      "Ignoring sawfly until the bush is a skeleton.",
      "Planting Ribes without checking whether your county still restricts them.",
    ],
  },
  {
    id: "black-currant",
    name: "Black currant",
    latin: "Ribes nigrum",
    family: "Grossulariaceae",
    aka: "Cassis. The Ben series is a common set of cultivars.",
    group: "Ribes",
    fruit: "black-currant",
    habit: "Multi-stem suckering shrub",
    zones: [3, 7],
    ph: [6, 6.5],
    sun: "Sun or a good deal of shade, with more fruit in more light",
    water: "Moist soil. They are thirstier than red currants.",
    height: "4–6 ft",
    thorns: "None worth mentioning",
    pollination: "Self-fruitful. A second cultivar can still help the set.",
    yearsPlant: "The second summer",
    yearsSeed: "Not worth it for named fruit",
    nurseryYears: 2,
    soilNeed: "mild",
    partShade: true,
    shade: true,
    alkalineOk: false,
    lead:
      "Black currants fruit mostly on wood that grew last year. That single fact separates them from red currants and gooseberries, which fruit on older spurs. Keep young stems coming from the base, and do not treasure a thick old trunk. The smell of the leaves is part of the plant. Some people love it and some people think a cat got involved. " +
      rust,
    kitchen:
      "High in vitamin C, strong, and better cooked. Cordial, jam, and jelly are the point. A few raw berries are plenty for most people. Sugar is not a moral failure here.",
    caution: rust + " Big bud mite swells buds into round balls that fail to open. Those buds should be picked off and not ignored.",
    stages: {
      gather: {
        body: "Buy a named bush, or take a hardwood cutting from one you trust. Seed from the fruit is possible and unfaithful to the cultivar. Ripe fruit for seed is fully black and soft. For cuttings, wait until autumn and take this year’s shoots.",
        action: "Start with a plant or a cutting. The Ben-named bushes are clones.",
      },
      dormancy: {
        body: "Seed needs two to three months of cold moisture. Cuttings and bare-root bushes are already dormant wood. Keep roots wrapped and damp. A cutting stuck in autumn uses winter as its rooting time.",
        action: "Use winter as the rooting season for cuttings, not as a delay.",
      },
      sow: {
        body: "Sow chilled seed lightly covered in spring. Plant bushes in autumn or early spring, a little deeper than they stood in the pot if you want extra shoots from the base, in soil that does not dry. Space them 5 feet apart. They will become a thicket if you plant them as if they were lettuce.",
        action: "Give each bush room to send up a fan of young stems.",
      },
      seedling: {
        body: "Seedlings vary, and a crowded flat of them molds. Pot the strongest on. A cutting that leafs out in spring is the plant you wanted and can go to its permanent spot the following autumn if the roots are strong.",
        action: "Keep only seedlings you have space to fruit and judge. The rest are compost.",
      },
      site: {
        body: "Zones 3 to 7. Moist, reasonably rich soil, pH around 6 to 6.5. They tolerate more shade than a raspberry and crop more in sun. Avoid a dry south slope. Air should move, because still corners collect mildew, but they are less fussy than European gooseberries. Check the Ribes rule where you live.",
        action: "Plant in moisture you can keep. A dry fence line is the wrong kindness.",
      },
      establish: {
        body: "Water the first summer without fail. Mulch. A spring feed of compost suits them; they are hungrier than gooseberries. In year one, let the new shoots grow from the base. You can fruit in the second summer on that wood. Do not prune those new shoots off in a tidy-up.",
        action: "Protect the young basal shoots. They are next year’s crop.",
      },
      prune: {
        body: "In late winter, cut out about a third of the bush: the oldest, darkest stems, at the base. Keep a mix of one-, two-, and three-year wood. Little is gained by keeping stems past three or four years. Do not tip every shoot or you remove fruiting buds. This is the opposite of the red currant prune. If you remember only one line, remember this one.",
        action: "Remove old stems at the ground. Leave the young wood long.",
      },
      fruit: {
        body: "Strings of black fruit ripen in midsummer. They do not all color the same week. A berry is ready when it is fully black and comes off the string without tearing. The leaves smell strong when you brush them. Birds take ripe fruit. Net, or pick promptly. A nursery bush often crops in its second summer.",
        action: "Pick fully black strings. Do not wait for every berry on the bush to match.",
      },
      save: {
        body: "Hardwood cuttings in autumn, eight inches of healthy one-year wood, renew the exact bush. Suckers from a healthy plant can be dug if they have roots. Seed can be washed, dried, and chilled, and the seedlings are unnamed. Big-bud-mite bushes are a poor source of cuttings. Start those over from a clean plant.",
        action: "Take cuttings from a bush whose buds look slim and pointed, not swollen and round.",
      },
    },
    year: yearOf([
      "Order plants. Throw out swollen round buds if you already grow the bush.",
      "Prune out the oldest stems. Plant bare-root bushes.",
      "Mulch and compost. Cuttings stuck last fall should be left alone.",
      "Flowers on last year’s wood. A frost cover is worth it on a still, cold night.",
      "Water if May is dry. They notice drought early.",
      "Fruit colors from green to purple to black. Net.",
      "Harvest. Pick every few days.",
      "Remove any broken stem. Water through a late drought so next year’s buds form.",
      "Stop feeding. Let the wood ripen.",
      "Take hardwood cuttings. Wash seed if you are keeping it.",
      "Plant cuttings. Mulch after the soil cools.",
      "Rest. Do not prune in a holiday rush unless you already know which stems are oldest.",
    ]),
    mistakes: [
      "Pruning it like a red currant and keeping only old wood.",
      "Letting the soil dry in early summer, then blaming the cultivar for a small crop.",
      "Propagating from a bush full of swollen big buds.",
    ],
  },
  {
    id: "red-currant",
    name: "Red currant",
    latin: "Ribes rubrum",
    family: "Grossulariaceae",
    aka: "White currant is a pale form of the same fruit. Pink currants too.",
    group: "Ribes",
    fruit: "red-currant",
    habit: "Upright shrub with a permanent framework",
    zones: [3, 7],
    ph: [6, 6.8],
    sun: "Sun to light shade. More sun than a black currant wants.",
    water: "Even moisture, not a bog",
    height: "3–5 ft",
    thorns: "None",
    pollination: "Self-fruitful.",
    yearsPlant: "2–3 years",
    yearsSeed: "Not true to cultivar",
    nurseryYears: 3,
    soilNeed: "mild",
    partShade: true,
    shade: false,
    alkalineOk: false,
    lead:
      "Red currants fruit on short spurs of older wood, the way gooseberries do, not on long young shoots the way black currants do. White currants are the same plant in a different color and get the same care. They are jewels when they are ripe and sour when they are not. " +
      rust,
    kitchen:
      "Jelly is the classic, because the seeds are noticeable and the juice is clear and tart. A strip of fruit on a stem is also a good thing eaten off the bush when fully colored. They freeze well still attached to their strings.",
    caution: rust,
    stages: {
      gather: {
        body: "Buy a plant, or take a hardwood cutting in autumn from a bush whose fruit you have tasted. Seed from ripe strings can be rinsed, and it will not repeat the cultivar. White and red can be saved the same way. Do not mix the labels.",
        action: "Copy the bush by a cutting. Label red and white separately if you grow both.",
      },
      dormancy: {
        body: "Seed needs roughly three months of cold moisture. Bare-root plants and cuttings spend winter dormant and root as the soil cools or, for spring planting, as soon as the ground works. Keep the roots damp.",
        action: "Chill seed, or let a cutting spend winter in the soil.",
      },
      sow: {
        body: "Cover chilled seed lightly in spring. Plant shrubs in autumn or early spring, spaced about 4 to 5 feet apart, at the depth they grew before. A cutting wants most of its length in the soil and a couple of buds above it.",
        action: "Plant at the old soil line. Do not bury the whole crown of a potted bush.",
      },
      seedling: {
        body: "Seedlings grow steadily and tell you nothing about fruit quality for a few years. Give them air. A rooted cutting transplanted at a year old is the better juvenile.",
        action: "Do not crowd Ribes seedlings. Mildew likes the huddle.",
      },
      site: {
        body: "Zones 3 to 7, pH about 6 to 6.8, sun or light shade, soil that holds moisture without standing water. They flower early. A spot that always frosts in late spring will take the strings some years. Afternoon shade helps at the warm edge of the range. Still, hot corners are a mildew invitation.",
        action: "Avoid the lowest frost pocket in the yard, and avoid a heat trap.",
      },
      establish: {
        body: "Water and mulch for two summers. Build a framework of six to ten main branches over the first years, and resist the urge to let every sucker become a trunk. A light crop may show in year two or three. Sawfly can find them as it finds gooseberries. Check the leaves.",
        action: "Choose the permanent branches early. Rub off extras at the base.",
      },
      prune: {
        body: "Late winter. Keep the main framework. Shorten side shoots to a bud or two so fruiting spurs stay close to the branch. Cut out dead wood and any main branch older and weaker than the rest, replacing it with a young shoot you saved on purpose. Do not prune this like a black currant. If you remove all the older wood, you remove the spurs.",
        action: "Shorten the side shoots. Keep the older framework that carries the spurs.",
      },
      fruit: {
        body: "Translucent strings ripen in early to mid summer, red or pale gold if it is a white currant. They are ripe when the last berry on the string has colored and the fruit tastes sharp-sweet rather than simply sour. Birds are serious about this crop. Net before full color. A nursery plant fruits in earnest by about year three.",
        action: "Net when the first berries color. Pick whole strings, not one berry at a time.",
      },
      save: {
        body: "Autumn hardwood cuttings continue the cultivar, red or white as labeled. Layering a low branch works too. Seed can be washed from ripe fruit, dried, and returned to a chill. It is how you would breed, not how you keep ‘Jonkheer van Tets’ or any other named bush.",
        action: "Take cuttings the year the fruit convinces you. Label the color.",
      },
    },
    year: yearOf([
      "Order plants. Keep seed in the chill if you sow in spring.",
      "Prune side shoots back to spurs. Plant bare-root stock.",
      "Mulch. Frost cloth within reach if you know your hollow frosts.",
      "Flowers. Cover on a clear cold night.",
      "Sawfly watch. Water in a dry spell.",
      "Strings color. Net now.",
      "Harvest whole strings. White currants are ready when they are translucent, not when they turn red, because they will not.",
      "Remove netting so the wood can ripen in the light. Water if the month is hot.",
      "Let growth harden. No late fertilizer.",
      "Hardwood cuttings. Rinse seed.",
      "Set cuttings in a nursery row.",
      "Leave the framework alone until late winter.",
    ]),
    mistakes: [
      "Pruning it like a black currant and throwing away the fruiting spurs.",
      "Waiting to net until the strings are already picked clean by birds.",
      "Expecting a white currant to blush red when it is ripe.",
    ],
  },
  {
    id: "jostaberry",
    name: "Jostaberry",
    latin: "Ribes × nidigrolaria",
    family: "Grossulariaceae",
    aka: "A hybrid of black currant and gooseberry",
    group: "Ribes",
    fruit: "josta",
    habit: "Vigorous thornless shrub",
    zones: [3, 8],
    ph: [6, 7],
    sun: "Full sun to part shade",
    water: "Moist, drained, not neglected in July",
    height: "5–6 ft",
    thorns: "Thornless",
    pollination: "Self-fruitful.",
    yearsPlant: "2–3 years",
    yearsSeed: "Will not come true",
    nurseryYears: 2,
    soilNeed: "adaptable",
    partShade: true,
    shade: false,
    alkalineOk: true,
    lead:
      "Jostaberry was bred to keep the black currant taste, lose the worst of the mildew and the thorns, and stand a little farther from white pine blister rust than its parents. It is still a Ribes. Check the local rule. It is vigorous, thornless, and self-fruitful, and it does not exist as a seed you can trust.",
    kitchen:
      "Dark berries in small clusters, milder than a black currant and sharper than a blueberry. Jam, juice, and a handful in yogurt. They pick easier than gooseberries because nothing stabs you.",
    caution: rust,
    stages: {
      gather: {
        body: "Buy a plant from a nursery that names it jostaberry. There is no true seed. If you already grow one, gather hardwood cuttings in autumn or a layered branch. Fruit is for eating. A seedling raised from it is some other Ribes.",
        action: "Start with a plant. Plan to copy it by a cutting, not a berry.",
      },
      dormancy: {
        body: "Bare-root plants ship dormant. Plant them before the buds open, roots damp. Cuttings taken in late autumn root over winter in the ground. There is no stratification recipe you need, because you are not sowing.",
        action: "Plant while the bush is still asleep.",
      },
      sow: {
        body: "Set the plant in early spring or autumn, in a hole wide enough for the roots, at the same depth it grew, and water it in. Space it 6 feet from the next shrub. It will try to become larger than the tag suggests. A cutting is set with two buds above the soil.",
        action: "Leave six feet. This hybrid is not a tidy currant.",
      },
      seedling: {
        body: "If someone gives you a seedling and calls it a jostaberry, believe the fruit later, not the story. Grow named plants from cuttings. A rooted cutting can be potted or lined out for a year, then moved.",
        action: "Do not fill the row with seedlings from the jam pot.",
      },
      site: {
        body: "Zones 3 to 8. Sun or part shade, soil that holds moisture, pH near 6 to 7. It is more forgiving than blueberry and less precise than a classic gooseberry. Air and room matter because the bush is big. The rust caveat still applies.",
        action: "Give it orchard spacing, not herb-garden spacing.",
      },
      establish: {
        body: "Water the first two summers. Mulch. Let basal shoots grow; you will fruit on young wood much as you do with black currant. A light crop can appear in the second year. Do not prune the young plant into a lollipop.",
        action: "Mulch and let the base fill with several strong stems.",
      },
      prune: {
        body: "Treat it more like a black currant than a gooseberry. In late winter, remove a few of the oldest stems at the base and keep a fountain of younger wood. It does not need the detailed spur-pruning of a red currant. Thinning is the job. A crowded jostaberry is a shade tree with little fruit inside.",
        action: "Cut out old stems. Leave young ones full length.",
      },
      fruit: {
        body: "Berries ripen dark in mid to late summer, a few in a cluster rather than a long string of currants. Taste them. They are ready when sweet-tart and fully colored, and they do not all ripen on the same day. Birds notice. A nursery plant can fruit by year two or three.",
        action: "Pick over the bush more than once. Net if you want the jam yourself.",
      },
      save: {
        body: "Hardwood cuttings in autumn are the true next generation. A low branch layered in spring roots by the next year. Seed from the fruit should not be called jostaberry even if you grow it out of curiosity. Label it as a Ribes seedling or do not keep it. The hybrid ends where the seed begins.",
        action: "Take two cuttings every few years so a hard winter cannot end the plant.",
      },
    },
    year: yearOf([
      "Order a named plant. Ignore seed listings that promise this hybrid.",
      "Prune out an oldest stem on established bushes. Plant bare-root stock.",
      "Mulch a wide circle. Give the canes room to leaf out.",
      "Flowers. Water if spring is dry.",
      "Tie nothing; it stands. Just keep grass off the roots.",
      "Green fruit. Thin a crossing stem only if the center is already a cave.",
      "Color starts. Net if birds are already in the currants.",
      "Harvest in passes.",
      "Water after harvest if the soil is dust. Next year’s buds are forming.",
      "Take hardwood cuttings from healthy one-year wood.",
      "Set the cuttings. Mulch the mother bush.",
      "Leave it. Winter work is the late-winter thinning, not a December haircut.",
    ]),
    mistakes: [
      "Buying seed labeled jostaberry and expecting the hybrid.",
      "Spur-pruning it like a gooseberry until there is nothing left to fruit.",
      "Planting it two feet from a path and then fighting it every July.",
    ],
  },
];
