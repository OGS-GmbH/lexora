import { translate } from "../shared/translate.js";
import type { AdapterFnReturn } from "../shared/types.js";
import { getLangsCallback, getLangStore } from "./lang.js";
import { getTranslationsCallback } from "./translation.js";

type LexoraArgs = {
  /**
   * An `Array` of {@link AdapterFnReturn}, where adapters are registered.
   *
   * @author Simon Kovtyk
   * @since 1.0.0
   */
  adapters: AdapterFnReturn[];
};

async function lexora({ adapters }: LexoraArgs) {
  const resolvedAdapters = await Promise.all(adapters.map((adapter) => Promise.resolve(adapter)));
  const { get, set } = getLangStore();

  return {
    getTranslations: getTranslationsCallback({ adapters: resolvedAdapters }),
    getLangs: getLangsCallback({ adapters: resolvedAdapters }),
    getLang: get,
    setLang: set,
    translate: translate
  };
}

export { lexora };

export type { LexoraArgs };
