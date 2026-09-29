import type { Recipe } from '../types/game'

export const recipes: Recipe[] = [
  {
    id: 'tsebhi-dorho',
    name: 'Tsebhi Dorho',
    nameAmharic: 'ጸብሒ ዶርሆ',
    tagline: 'Spiced chicken stew',
    description: 'A celebratory Tigrinya classic — slow-braised chicken in berbere, served with injera.',
    intro:
      'Tsebhi Dorho is the dish of celebration in Eritrean homes. Families gather around the mesob for holidays, weddings, and Sundays. The secret is patience: onions cooked down until sweet, berbere bloomed in tesmi, and chicken that falls off the bone.',
    culturalNote:
      'Traditionally served on a large communal platter. Hard-boiled eggs are added near the end — one per guest is a sign of hospitality.',
    prepSteps: [
      {
        id: 'prep-chicken',
        instruction: 'Prepare the chicken',
        detail: 'Rinse pieces, pat dry, and score shallow cuts so the sauce can penetrate the meat.',
        durationMinutes: 15,
        durationLabel: '~15 min',
        emoji: '🍗',
      },
      {
        id: 'marinate-chicken',
        instruction: 'Marinate the chicken',
        detail: 'Rub with lemon juice, salt, and a pinch of berbere. Refrigerate while you prep the rest.',
        durationMinutes: 30,
        durationLabel: '~30 min resting',
        emoji: '🍋',
      },
      {
        id: 'chop-onions',
        instruction: 'Chop the onions',
        detail: 'Finely dice a generous amount of red onion — they cook down into the sauce base.',
        durationMinutes: 20,
        durationLabel: '15–20 min',
        emoji: '🧅',
      },
      {
        id: 'mix-berbere',
        instruction: 'Make the berbere paste',
        detail: 'Mix berbere spice with a splash of water until you have a thick, fragrant paste.',
        durationMinutes: 5,
        durationLabel: '~5 min',
        emoji: '🌶️',
      },
      {
        id: 'boil-eggs',
        instruction: 'Hard-boil the eggs',
        detail: 'Boil eggs until firm, then cool in cold water. Peel just before adding to the stew.',
        durationMinutes: 12,
        durationLabel: '~12 min',
        emoji: '🥚',
      },
    ],
    cookSteps: [
      {
        id: 'saute-onions',
        instruction: 'Sauté the onions',
        detail: 'Cook slowly in tesmi (clarified butter) over medium-low heat until deep golden and sweet. Do not rush.',
        durationMinutes: 28,
        durationLabel: '25–30 min',
        emoji: '🧅',
      },
      {
        id: 'add-berbere',
        instruction: 'Bloom the berbere',
        detail: 'Stir the berbere paste into the onions. Cook until dark red and deeply fragrant.',
        durationMinutes: 5,
        durationLabel: '~5 min',
        emoji: '🌶️',
      },
      {
        id: 'braise-chicken',
        instruction: 'Braise the chicken',
        detail: 'Nestle chicken into the sauce, add a little water if needed, cover, and simmer on low.',
        durationMinutes: 20,
        durationLabel: '~20 min',
        emoji: '🍗',
      },
      {
        id: 'add-eggs-simmer',
        instruction: 'Add eggs & slow simmer',
        detail: 'Place peeled eggs in the stew. Pierce each lightly. Simmer uncovered until sauce thickens.',
        durationMinutes: 52,
        durationLabel: '45–60 min',
        emoji: '🥚',
      },
      {
        id: 'rest',
        instruction: 'Rest before serving',
        detail: 'Let the tsebhi settle for a few minutes so the flavors meld and the sauce sets.',
        durationMinutes: 10,
        durationLabel: '~10 min',
        emoji: '🍲',
      },
    ],
    serveMessage: 'Bruch\'o! Your Tsebhi Dorho is ready.',
    serveTip: 'Serve hot on injera with soft cheese on the side.',
    palette: {
      primary: '#8b1a1a',
      secondary: '#c44b2a',
      accent: '#078930',
      bg: '#fdf8f4',
    },
  },
  {
    id: 'tibs',
    name: 'Classic Beef Tibs',
    nameAmharic: 'ቲብስ',
    tagline: 'Sautéed beef with aromatics',
    description: 'Tender beef cubes seared hot with onion, peppers, rosemary, and niter kibbeh.',
    intro:
      'Tibs is everyday Habesha comfort — quick, sizzling, and full of aroma. Classic beef tibs hits the pan hard: cubes of meat, softened onions, fresh rosemary, and garlic added at the very end so it stays bright.',
    culturalNote:
      'Often served sizzling from the pan, with injera to scoop. Tibs te tibs (with bread) is a popular street variation — but at home, injera is king.',
    prepSteps: [
      {
        id: 'cube-beef',
        instruction: 'Trim and cube the beef',
        detail: 'Cut into bite-sized cubes, trimming excess fat. Pat dry for a better sear.',
        durationMinutes: 10,
        durationLabel: '~10 min',
        emoji: '🥩',
      },
      {
        id: 'slice-veg',
        instruction: 'Slice onions & peppers',
        detail: 'Cut red onion into wedges and slice jalapeño or green pepper. Keep pieces similar in size.',
        durationMinutes: 10,
        durationLabel: '~10 min',
        emoji: '🫑',
      },
      {
        id: 'mince-aromatics',
        instruction: 'Mince garlic & ginger',
        detail: 'Finely mince garlic and ginger. Have fresh rosemary sprigs ready to strip.',
        durationMinutes: 5,
        durationLabel: '~5 min',
        emoji: '🧄',
      },
      {
        id: 'season-beef',
        instruction: 'Season the beef',
        detail: 'Toss beef with salt, black pepper, and a pinch of mitmita. Rest briefly at room temperature.',
        durationMinutes: 15,
        durationLabel: '5 min + 10 min rest',
        emoji: '✨',
      },
    ],
    cookSteps: [
      {
        id: 'heat-pan',
        instruction: 'Heat the pan',
        detail: 'Warm niter kibbeh (or oil) in a wide skillet over medium-high until shimmering.',
        durationMinutes: 2,
        durationLabel: '~2 min',
        emoji: '🧈',
      },
      {
        id: 'sear-beef',
        instruction: 'Sear the beef',
        detail: 'Working in batches, sear cubes without crowding until browned on all sides. Set aside.',
        durationMinutes: 10,
        durationLabel: '8–10 min',
        emoji: '🥩',
      },
      {
        id: 'saute-veg',
        instruction: 'Sauté onions & peppers',
        detail: 'In the same pan, cook onions and peppers until softened and lightly charred at the edges.',
        durationMinutes: 7,
        durationLabel: '5–7 min',
        emoji: '🧅',
      },
      {
        id: 'finish-tibs',
        instruction: 'Combine & finish',
        detail: 'Return beef, add rosemary, then stir in garlic and ginger for the last minute. Taste for salt.',
        durationMinutes: 5,
        durationLabel: '~5 min',
        emoji: '🌿',
      },
      {
        id: 'rest-tibs',
        instruction: 'Rest briefly',
        detail: 'Let the tibs sit one minute off heat so the juices redistribute before serving.',
        durationMinutes: 3,
        durationLabel: '~3 min',
        emoji: '🍽️',
      },
    ],
    serveMessage: 'Betam konjo! Your tibs are sizzling and ready.',
    serveTip: 'Serve straight from the pan on injera, with awaze on the side if you like heat.',
    palette: {
      primary: '#6b3a2a',
      secondary: '#9c5c3c',
      accent: '#da121a',
      bg: '#faf6f0',
    },
  },
  {
    id: 'shiro',
    name: 'Shiro',
    nameAmharic: 'ሽሮ',
    tagline: 'Vegetarian chickpea stew',
    description: 'A velvety, protein-rich fasting favorite — ground chickpea flour simmered with garlic, ginger, and berbere.',
    intro:
      'Shiro feeds communities during fasting seasons and quiet weeknights alike. No meat, no dairy — just chickpea flour whisked into a smooth slurry, then cooked low and slow until thick, creamy, and deeply comforting.',
    culturalNote:
      'Beloved across Eritrea and Ethiopia during Orthodox fasting. Every household has its own blend — some add tomato, others keep it pure shiro and spice.',
    prepSteps: [
      {
        id: 'measure-shiro',
        instruction: 'Measure the shiro flour',
        detail: 'Scoop fine chickpea flour into a bowl. This is the heart of the stew — measure carefully.',
        durationMinutes: 5,
        durationLabel: '~5 min',
        emoji: '🥣',
      },
      {
        id: 'chop-onions-shiro',
        instruction: 'Chop onions',
        detail: 'Finely dice red onion. Shiro needs a good aromatic base, same as any wat.',
        durationMinutes: 10,
        durationLabel: '~10 min',
        emoji: '🧅',
      },
      {
        id: 'mince-aromatics-shiro',
        instruction: 'Mince garlic & ginger',
        detail: 'Pound or mince garlic and ginger together until fragrant and paste-like.',
        durationMinutes: 5,
        durationLabel: '~5 min',
        emoji: '🧄',
      },
      {
        id: 'mix-slurry',
        instruction: 'Whisk the shiro slurry',
        detail: 'Slowly add cold water to the flour, whisking constantly until completely smooth with no lumps.',
        durationMinutes: 8,
        durationLabel: '~8 min',
        emoji: '💧',
      },
    ],
    cookSteps: [
      {
        id: 'saute-base-shiro',
        instruction: 'Sauté the base',
        detail: 'Cook onions, garlic, and ginger in oil over medium heat until soft and golden.',
        durationMinutes: 10,
        durationLabel: '8–10 min',
        emoji: '🧄',
      },
      {
        id: 'add-slurry',
        instruction: 'Pour in the shiro slurry',
        detail: 'Add berbere to the pan, then pour in the slurry in a steady stream while stirring constantly.',
        durationMinutes: 5,
        durationLabel: '~5 min',
        emoji: '🌶️',
      },
      {
        id: 'simmer-thick',
        instruction: 'Simmer until thick',
        detail: 'Reduce heat to low. Stir often as the shiro transforms from liquid to velvety stew.',
        durationMinutes: 22,
        durationLabel: '20–25 min',
        emoji: '🍲',
      },
      {
        id: 'season-finish-shiro',
        instruction: 'Season & finish',
        detail: 'Taste and adjust salt. Add a knob of tesmi if you are not fasting. The shiro should coat a spoon.',
        durationMinutes: 5,
        durationLabel: '~5 min',
        emoji: '✨',
      },
    ],
    serveMessage: 'Bruch\'o! Your shiro is creamy and ready.',
    serveTip: 'Ladle over fresh injera. A sprinkle of mitmita adds gentle heat.',
    palette: {
      primary: '#b8860b',
      secondary: '#d4a843',
      accent: '#078930',
      bg: '#f8faf4',
    },
  },
]

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((r) => r.id === id)
}

export function getDishEmoji(id: string): string {
  if (id === 'tsebhi-dorho') return '🍗'
  if (id === 'tibs') return '🥩'
  if (id === 'shiro') return '🥣'
  return '🍲'
}
