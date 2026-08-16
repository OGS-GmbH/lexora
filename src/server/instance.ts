import { translate } from "../shared/translate.js";
import { getDefaultLangCallback, getLangsCallback, getLangStore } from "./lang.js";
import { getTranslationsCallback } from "./translation.js";
import type { LexoraArgs, LexoraInstance } from "./types.js";

async function lexora({ adapters }: LexoraArgs): Promise<LexoraInstance> {
  const resolvedAdapters = await Promise.all(adapters.map((adapter) => Promise.resolve(adapter)));
  const { get, set } = getLangStore();

  return {
    getTranslations: getTranslationsCallback({ adapters: resolvedAdapters }),
    getLangs: getLangsCallback({ adapters: resolvedAdapters }),
    getDefaultLang: getDefaultLangCallback({ adapters: resolvedAdapters }),
    getLang: get,
    setLang: set,
    translate
  };
}

export { lexora };
