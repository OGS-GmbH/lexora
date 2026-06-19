import type { Lang, SyncAdapterFnReturn } from "../shared/types.js";

type GetLangsCallbackArgs = {
  adapters: SyncAdapterFnReturn[];
};

type GetLangsReturn = Promise<Lang[]>;

type GetLangsFn = () => GetLangsReturn;

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

type SetLangFn = (lang: Lang) => void;
type GetLangFn = () => Lang | null;

type GetLangStoreReturn = {
  set: SetLangFn;
  get: GetLangFn;
};

function getLangStore(): GetLangStoreReturn {
  let currentLang: Lang | null = null;

  return {
    set: (lang: Lang) => {
      currentLang = lang;
    },
    get: (): Lang | null => currentLang
  };
}

type GetDefaultLangCallbackArgs = {
  adapters: SyncAdapterFnReturn[];
};

type GetDefaultLangReturn = Promise<Lang>;

type GetDefaultLangFn = () => GetDefaultLangReturn;

function getDefaultLangCallback({ adapters }: GetDefaultLangCallbackArgs): GetDefaultLangFn {
  return async (): GetDefaultLangReturn => {
    let defaultLang: Lang;

    for (const adapter of adapters) defaultLang = await Promise.resolve(adapter.getDefaultLang());

    return defaultLang!;
  };
}

export type {
  GetLangsCallbackArgs,
  GetLangsReturn,
  GetLangsFn,
  SetLangFn,
  GetLangFn,
  GetLangStoreReturn,
  GetDefaultLangCallbackArgs,
  GetDefaultLangFn,
  GetDefaultLangReturn
};

export { getLangsCallback, getLangStore, getDefaultLangCallback };
