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

export type {
  GetLangsCallbackArgs,
  GetLangsReturn,
  GetLangsFn,
  SetLangFn,
  GetLangFn,
  GetLangStoreReturn
};

export { getLangsCallback, getLangStore };
