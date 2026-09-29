export type Language = 'en' | 'ti'

export const LANGUAGES: Language[] = ['en', 'ti']

// Tigrinya imperatives use the plural form: polite and gender-neutral.
const en = {
  titleTagline: 'Guided Habesha Cooking',
  titleCredit: 'Real cook times — your pace, your kitchen',
  startCooking: 'Start Cooking',

  chooseDish: 'Choose Your Dish',
  pickerSubheading: 'A guided walkthrough from prep to plate',
  vegetarian: 'Vegetarian',
  prepStepsCount: (n: number) => `${n} prep steps`,
  cookStepsCount: (n: number) => `${n} cook steps`,
  cookThis: 'Cook This',
  back: '← Back',

  phasePrep: 'Prep',
  phaseCook: 'Cook',
  phaseServe: 'Serve',
  stepsCount: (n: number) => `${n} steps`,
  enjoy: 'enjoy!',
  chooseAnother: '← Choose Another',
  beginPrep: 'Begin Prep →',

  labelPrep: 'PREP',
  labelCook: 'COOK',
  labelRead: 'READ',
  realCookTime: 'Real cook time',
  startStep: 'Start Step',
  startTimer: (duration: string) => `Start Timer (${duration})`,
  pauseTimer: 'Pause Timer',
  resumeTimer: 'Resume Timer',
  timerDone: 'Timer finished — check your pot!',
  finishPhase: (phase: string) => `Finish ${phase} →`,
  nextStep: 'Next Step →',
  backToMenu: '← Back to Menu',

  serveTitle: "Bruch'o!",
  serveSubtitle: 'Beautifully done!',
  cookAnother: 'Cook Another Dish',
  mainMenu: 'Main Menu',

  musicTurnOn: 'Turn music on',
  musicTurnOff: 'Turn music off',
  musicOn: 'Music on',
  musicOff: 'Music off',

  languageToggleLabel: 'ትግ',
  languageToggleAria: 'Switch to Tigrinya',
}

export type Strings = typeof en

const ti: Strings = {
  titleTagline: 'ብመምርሒ ሃበሻዊ ምግቢ ምስራሕ',
  titleCredit: 'ሓቀኛ ግዜ ምስራሕ — ብናትኩም ቅልጣፈ፡ ኣብ ናትኩም ክሽነ',
  startCooking: 'ምስራሕ ጀምሩ',

  chooseDish: 'ምግብኹም ምረጹ',
  pickerSubheading: 'ካብ ምድላው ክሳብ መኣዲ ብመምርሒ',
  vegetarian: 'ናይ ጾም',
  prepStepsCount: (n) => `${n} ስጉምቲ ምድላው`,
  cookStepsCount: (n) => `${n} ስጉምቲ ምስራሕ`,
  cookThis: 'እዚ ስርሑ',
  back: '← ተመለሱ',

  phasePrep: 'ምድላው',
  phaseCook: 'ምስራሕ',
  phaseServe: 'ምቕራብ',
  stepsCount: (n) => `${n} ስጉምቲ`,
  enjoy: 'ተሓጐሱ!',
  chooseAnother: '← ካልእ ምረጹ',
  beginPrep: 'ምድላው ጀምሩ →',

  labelPrep: 'ምድላው',
  labelCook: 'ምስራሕ',
  labelRead: 'ኣንብቡ',
  realCookTime: 'ሓቀኛ ግዜ ምስራሕ',
  startStep: 'ስጉምቲ ጀምሩ',
  startTimer: (duration) => `ቆጻሪ ጀምሩ (${duration})`,
  pauseTimer: 'ቆጻሪ ደው ኣብሉ',
  resumeTimer: 'ቆጻሪ ቀጽሉ',
  timerDone: 'ግዜ ተወዲኡ — ድስትኹም ርኣዩ!',
  finishPhase: (phase) => `${phase} ወድኡ →`,
  nextStep: 'ዝቕጽል ስጉምቲ →',
  backToMenu: '← ናብ ዝርዝር ተመለሱ',

  serveTitle: 'ይበል!',
  serveSubtitle: 'ብጽቡቕ ተሰሪሑ!',
  cookAnother: 'ካልእ ምግቢ ስርሑ',
  mainMenu: 'ቀንዲ ዝርዝር',

  musicTurnOn: 'ሙዚቃ ወልዑ',
  musicTurnOff: 'ሙዚቃ ኣጥፍኡ',
  musicOn: 'ሙዚቃ ይጻወት ኣሎ',
  musicOff: 'ሙዚቃ ጠፊኡ',

  languageToggleLabel: 'EN',
  languageToggleAria: 'ናብ እንግሊዝኛ ቀይሩ',
}

export const strings: Record<Language, Strings> = { en, ti }

export function localizeDuration(label: string, lang: Language): string {
  if (lang === 'en') return label
  return label
    .replace(/min rest(ing)?/g, 'ደቒቕ ምዕራፍ')
    .replace(/min/g, 'ደቒቕ')
}
