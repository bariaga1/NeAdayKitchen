import type { Recipe, RecipeStep } from '../types/game'
import { localizeDuration, type Language } from './strings'

type StepText = Pick<RecipeStep, 'instruction' | 'detail'>

interface RecipeTranslation {
  name: string
  tagline: string
  description: string
  intro: string
  culturalNote: string
  serveMessage: string
  serveTip: string
  steps: Record<string, StepText>
}

export type LocalizedRecipe = Recipe & {
  /** Name shown as the secondary line: Ge'ez in English mode, English in Tigrinya mode. */
  altName: string
}

const ti: Record<string, RecipeTranslation> = {
  'tsebhi-dorho': {
    name: 'ጸብሒ ደርሆ',
    tagline: 'ብቅመም ዝተሰርሐ ጸብሒ ደርሆ',
    description: 'ናይ በዓል ክላሲክ — ብበርበረ ብቐስታ ዝበሰለ ደርሆ፡ ምስ ጣይታ ዝቐርብ።',
    intro:
      'ጸብሒ ደርሆ ኣብ ኤርትራውያን ኣባይቲ ናይ በዓል መግቢ እዩ። ስድራቤታት ንበዓላት፡ መርዓታትን ሰናብትን ኣብ ዙርያ መሶብ ይእከባ። ምስጢሩ ትዕግስቲ እዩ፦ ክሳብ ዝምቅር ዝበሰለ ሽጉርቲ፡ ኣብ ጠስሚ ዝተላዕለ በርበረ፡ ካብ ዓጽሚ ዝፍለ ደርሆ።',
    culturalNote:
      'ብባህሊ ኣብ ዓቢ ናይ ሓባር መኣዲ ይቐርብ። ቀረባ መወዳእታ ዝተቐቕለ እንቋቑሖ ይውሰኽ — ንነፍሲ ወከፍ ጋሻ ሓደ እንቋቑሖ ናይ ምቕባል ምልክት እዩ።',
    serveMessage: 'ይበል! ጸብሒ ደርሆኹም ቅሩብ እዩ።',
    serveTip: 'ምስ ጣይታን ኣጅቦን ውዑዩ ኣቕርብዎ።',
    steps: {
      'prep-chicken': {
        instruction: 'ደርሆ ኣዳልዉ',
        detail: 'ቁራጽ ደርሆ ሕጸቡ፡ ኣንቅጹ፡ እቲ ጸብሒ ክኣትዎ ድማ ብቢላዋ ቀሊል ምቑራጽ ግበሩ።',
      },
      'marinate-chicken': {
        instruction: 'ደርሆ ኣጥልቑ',
        detail: 'ብጽማቕ ለሚን፡ ጨውን ቁሩብ በርበረን ለኽዩ። ካልእ ከተዳልዉ ከለኹም ኣብ ፍሪጅ ኣቐምጥዎ።',
      },
      'chop-onions': {
        instruction: 'ሽጉርቲ ከትፉ',
        detail: 'ብዙሕ ቀይሕ ሽጉርቲ ብደቒቕ ከትፉ — ናይ ጸብሒ መሰረት ኮይኑ ይበስል።',
      },
      'mix-berbere': {
        instruction: 'ለጥፊ በርበረ ኣዳልዉ',
        detail: 'በርበረ ምስ ቁሩብ ማይ ሕወሱ፡ ክሳብ ረጒድ ጨና ዘለዎ ለጥፊ ዝኸውን።',
      },
      'boil-eggs': {
        instruction: 'እንቋቑሖ ቀቕሉ',
        detail: 'እንቋቑሖ ክሳብ ዝተሪ ቀቕሉ፡ ብዝሑል ማይ ኣዝሕሉ። ናብ ጸብሒ ቅድሚ ምእታው ቅራፉ ኣውጽኡ።',
      },
      'saute-onions': {
        instruction: 'ሽጉርቲ ኣብስሉ',
        detail: 'ብጠስሚ ኣብ ማእከላይ-ትሑት ሓዊ ብቐስታ ኣብስሉ፡ ክሳብ ወርቃዊ ሕብርን ምቕረትን ዝሕዝ። ኣይትሃወኹ።',
      },
      'add-berbere': {
        instruction: 'በርበረ ኣላዕሉ',
        detail: 'ለጥፊ በርበረ ናብቲ ሽጉርቲ ሕወሱ። ክሳብ ጸሊም ቀይሕ ኮይኑ ጨናኡ ዝወጽእ ኣብስሉ።',
      },
      'braise-chicken': {
        instruction: 'ደርሆ ኣብስሉ',
        detail: 'ደርሆ ኣብቲ ጸብሒ ኣእትዉ፡ እንተ ኣድልዩ ቁሩብ ማይ ወስኹ፡ ክደንዎ፡ ብትሑት ሓዊ ድማ ኣፍልሑ።',
      },
      'add-eggs-simmer': {
        instruction: 'እንቋቑሖ ወሲኽኩም ብቐስታ ኣፍልሑ',
        detail: 'ዝተቐርፈ እንቋቑሖ ናብ ጸብሒ ኣእትዉ። ነፍሲ ወከፍ ቀሊል ውግኡ። ክሳብ እቲ ጸብሒ ዝረጉድ ከይከደንኩም ኣፍልሑ።',
      },
      rest: {
        instruction: 'ቅድሚ ምቕራብ ኣዕርፍዎ',
        detail: 'ጨናታት ክሕወሱን ጸብሒ ክረግእን ንቑሩብ ደቓይቕ ኣዕርፍዎ።',
      },
    },
  },
  tibs: {
    name: 'ጥብሲ',
    tagline: 'ምስ ቅመማት ዝተጠብሰ ስጋ ብዕራይ',
    description: 'ልሙዕ ቁራጽ ስጋ ምስ ሽጉርቲ፡ ቃርያ፡ ሮዝመሪን ጠስምን ብልዑል ሓዊ ዝተጠብሰ።',
    intro:
      'ጥብሲ ናይ መዓልታዊ ሃበሻዊ ምቾት እዩ — ቅልጡፍ፡ ዝንጨርጨር፡ ጨና ዝመልኦ። ክላሲክ ጥብሲ ብሓይሊ ይጥበስ፦ ቁራጽ ስጋ፡ ዝለሓመ ሽጉርቲ፡ ሓድሽ ሮዝመሪ፡ ከምኡ’ውን ኣብ መወዳእታ ዝውሰኽ ጻዕዳ ሽጉርቲ።',
    culturalNote:
      'መብዛሕትኡ ግዜ ካብ መጥበሲ እናንጨርጨረ ምስ ጣይታ ይቐርብ። ምስ ባኒ ዝቐርብ ጥብሲ ኣብ ጎደናታት ፍሉጥ እዩ — ኣብ ገዛ ግን ጣይታ ንጉስ እያ።',
    serveMessage: 'ኣዝዩ ጽቡቕ! ጥብስኹም እናንጨርጨረ ቅሩብ እዩ።',
    serveTip: 'ካብ መጥበሲ ብቐጥታ ኣብ ልዕሊ ጣይታ ኣቕርብዎ። ምሕራር እንተ ፈቲኹም ኣዋዜ ኣብ ጎኑ።',
    steps: {
      'cube-beef': {
        instruction: 'ስጋ ኣጽርዩ ቈራርጹ',
        detail: 'ብዓቐን ሓደ ጉርዒ ቈራርጹ፡ ዝበዝሐ ስብሒ ኣልግሱ። ጽቡቕ ክጥበስ ኣንቅጽዎ።',
      },
      'slice-veg': {
        instruction: 'ሽጉርትን ቃርያን ቈራርጹ',
        detail: 'ቀይሕ ሽጉርቲ ብነዊሕ ቈራርጹ፡ ቃርያ ድማ ብቐጢን ቁረጹ። ዓቐን ቁራጻት ተመሳሳሊ ይኹን።',
      },
      'mince-aromatics': {
        instruction: 'ጻዕዳ ሽጉርትን ጂንጂብልን ድቘሱ',
        detail: 'ጻዕዳ ሽጉርትን ጂንጂብልን ብደቒቕ ድቘሱ። ሓድሽ ሮዝመሪ ድማ ኣዳልዉ።',
      },
      'season-beef': {
        instruction: 'ስጋ ቀመሙ',
        detail: 'ስጋ ምስ ጨው፡ ጸሊም በርበረን ቁሩብ ሚጥሚጣን ሕወሱ። ኣብ ሙቐት ክፍሊ ንሓጺር ግዜ ኣዕርፍዎ።',
      },
      'heat-pan': {
        instruction: 'መጥበሲ ኣውዕዩ',
        detail: 'ጠስሚ (ወይ ዘይቲ) ኣብ ሰፊሕ መጥበሲ ብማእከላይ-ልዑል ሓዊ ክሳብ ዝበርቕ ኣውዕዩ።',
      },
      'sear-beef': {
        instruction: 'ስጋ ጥበሱ',
        detail: 'ከይተጸቓቐጠ ብክፋል ጥበሱ፡ ክሳብ ኩሉ ጎድኑ ቡናዊ ሕብሪ ዝሕዝ። ንጎኒ ኣቐምጥዎ።',
      },
      'saute-veg': {
        instruction: 'ሽጉርትን ቃርያን ኣብስሉ',
        detail: 'ኣብቲ ሓደ መጥበሲ ሽጉርትን ቃርያን ክሳብ ዝለሓምን ጫፉ ቁሩብ ዝሓርርን ኣብስሉ።',
      },
      'finish-tibs': {
        instruction: 'ሓዊስኩም ወድኡ',
        detail: 'ስጋ ምለሱ፡ ሮዝመሪ ወስኹ፡ ኣብ ናይ መወዳእታ ደቒቕ ድማ ጻዕዳ ሽጉርትን ጂንጂብልን ሕወሱ። ጨው ጥዐሙ።',
      },
      'rest-tibs': {
        instruction: 'ንሓጺር ኣዕርፍዎ',
        detail: 'ማይ ስጋ ክዝርጋሕ ካብ ሓዊ ኣውሪድኩም ሓንቲ ደቒቕ ኣዕርፍዎ።',
      },
    },
  },
  shiro: {
    name: 'ሽሮ',
    tagline: 'ናይ ጾም ጸብሒ ሽሮ',
    description: 'ልሙዕ፡ ፕሮቲን ዝበዝሖ ናይ ጾም ፍቱው — ምስ ጻዕዳ ሽጉርቲ፡ ጂንጂብልን በርበረን ዝበሰለ ጠሓን ሽምብራ።',
    intro:
      'ሽሮ ኣብ ግዜ ጾምን ኣብ ህዱእ ምሸታትን ንሕብረተሰብ ይምግብ። ስጋ የለን፡ ጸባ የለን — ምስ ማይ ልሙዕ ዝተሃንጠወ ሽሮ፡ ክሳብ ዝረጉድን ዝልምዕን ብቐስታ ዝበሰለ።',
    culturalNote:
      'ኣብ ኤርትራን ኢትዮጵያን ኣብ ግዜ ኦርቶዶክሳዊ ጾም ዝፍቶ እዩ። ነፍሲ ወከፍ ስድራ ናታ ኣገባብ ኣለዋ — ገሊኦም ኮሚደረ ይውስኹ፡ ገሊኦም ድማ ሽሮን ቅመምን ጥራይ።',
    serveMessage: 'ይበል! ሽሮኹም ልሙዕን ቅሩብን እዩ።',
    serveTip: 'ኣብ ልዕሊ ሓድሽ ጣይታ ኣቕርብዎ። ቁሩብ ሚጥሚጣ ልኩዕ ምሕራር ይውስኽ።',
    steps: {
      'measure-shiro': {
        instruction: 'ሽሮ ለክዑ',
        detail: 'ደቂቕ ሽሮ ናብ ሳሕኒ ኣእትዉ። እዚ ልቢ ናይቲ ጸብሒ እዩ — ብጥንቃቐ ለክዑ።',
      },
      'chop-onions-shiro': {
        instruction: 'ሽጉርቲ ከትፉ',
        detail: 'ቀይሕ ሽጉርቲ ብደቒቕ ከትፉ። ሽሮ ከም ዝኾነ ጸብሒ ጽቡቕ መሰረት የድልዮ።',
      },
      'mince-aromatics-shiro': {
        instruction: 'ጻዕዳ ሽጉርትን ጂንጂብልን ድቘሱ',
        detail: 'ጻዕዳ ሽጉርትን ጂንጂብልን ብሓባር ክሳብ ጨና ዘለዎ ለጥፊ ዝኸውን ድቘሱ።',
      },
      'mix-slurry': {
        instruction: 'ሽሮ ምስ ማይ ሕወሱ',
        detail: 'ቀስ ብቐስ ዝሑል ማይ ናብቲ ሽሮ ወስኹ፡ ብዘይ ምቁራጽ እናሃንጠኹም ክሳብ ብዘይ ጕብጕብ ዝልምዕ።',
      },
      'saute-base-shiro': {
        instruction: 'መሰረት ኣብስሉ',
        detail: 'ሽጉርቲ፡ ጻዕዳ ሽጉርትን ጂንጂብልን ብዘይቲ ኣብ ማእከላይ ሓዊ ክሳብ ዝለሓምን ወርቃዊ ዝኸውንን ኣብስሉ።',
      },
      'add-slurry': {
        instruction: 'ሽሮ ኣፍስሱ',
        detail: 'በርበረ ናብ ድስቲ ወስኹ፡ ድሕሪኡ እናሓወስኩም ሽሮ ብቐጻሊ ኣፍስሱ።',
      },
      'simmer-thick': {
        instruction: 'ክሳብ ዝረጉድ ኣፍልሑ',
        detail: 'ሓዊ ኣንክዩ። ሽሮ ካብ ፈሳሲ ናብ ልሙዕ ጸብሒ ክቕየር ከሎ ብተደጋጋሚ ሕወሱ።',
      },
      'season-finish-shiro': {
        instruction: 'ቀመሙ ወድኡ',
        detail: 'ጥዒምኩም ጨው ኣስተኻኽሉ። ዘይጸምኩም እንተ ኴንኩም ቁሩብ ጠስሚ ወስኹ። ሽሮ ንማንካ ክሽፍኖ ኣለዎ።',
      },
    },
  },
}

function localizeStep(step: RecipeStep, lang: Language, tr?: RecipeTranslation): RecipeStep {
  return {
    ...step,
    ...tr?.steps[step.id],
    durationLabel: localizeDuration(step.durationLabel, lang),
  }
}

export function localizeRecipe(recipe: Recipe, lang: Language): LocalizedRecipe {
  if (lang === 'en') return { ...recipe, altName: recipe.nameAmharic }

  const tr = ti[recipe.id]
  return {
    ...recipe,
    ...(tr && {
      name: tr.name,
      tagline: tr.tagline,
      description: tr.description,
      intro: tr.intro,
      culturalNote: tr.culturalNote,
      serveMessage: tr.serveMessage,
      serveTip: tr.serveTip,
    }),
    altName: tr ? recipe.name : recipe.nameAmharic,
    prepSteps: recipe.prepSteps.map((s) => localizeStep(s, lang, tr)),
    cookSteps: recipe.cookSteps.map((s) => localizeStep(s, lang, tr)),
  }
}
