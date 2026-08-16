import type { Lang } from "../shared/types.js";
import type {
  GetDefaultLangCallbackArgs,
  GetDefaultLangFn,
  GetDefaultLangReturn,
  GetLangsCallbackArgs,
  GetLangsFn,
  GetLangsReturn,
  GetLangStoreReturn
} from "./types.js";

function getLangsCallback({ adapters }: GetLangsCallbackArgs): GetLangsFn {
  return async function getLangs(): GetLangsReturn {
    const langs: Lang[] = [];

    for (const adapter of adapters) {
      const adapterLangs = await Promise.resolve(adapter.getLangs());

      langs.push(...adapterLangs);
    }

    return langs;
  };
}

function getLangStore(): GetLangStoreReturn {
  let currentLang: Lang | null = null;

  return {
    set: (lang: Lang) => {
      currentLang = lang;
    },
    get: (): Lang | null => currentLang
  };
}

function getDefaultLangCallback({ adapters }: GetDefaultLangCallbackArgs): GetDefaultLangFn {
  return async (): GetDefaultLangReturn => {
    let defaultLang: Lang;

    for (const adapter of adapters) defaultLang = await Promise.resolve(adapter.getDefaultLang());

    return defaultLang!;
  };
}

export { getLangsCallback, getLangStore, getDefaultLangCallback };
