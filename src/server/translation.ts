import { translate as internalTranslate } from "../shared/translate.js";
import type {
  Scopes,
  ScopedTranslationsByToken,
  TranslateFnArgsWithTranslations
} from "../shared/types.js";
import type {
  GetTranslationsArgs,
  GetTranslationsCallbackArgs,
  GetTranslationsFn,
  GetTranslationsReturn
} from "./types.js";

/**
 * Load translations by configured adapters
 *
 * @param options - An `Object` of {@link GetTranslationsArgs}
 * @returns A `Promise` containing {@link Translation}s
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Server-side
 */
function getTranslationsCallback({ adapters }: GetTranslationsCallbackArgs): GetTranslationsFn {
  return async function getTranslations<const TScopes extends Scopes>({
    lang,
    scopes
  }: GetTranslationsArgs<TScopes>): GetTranslationsReturn<typeof scopes> {
    const translations: ScopedTranslationsByToken<TScopes> =
      {} as ScopedTranslationsByToken<TScopes>;

    for (const adapter of adapters) {
      const adapterTranslations = await Promise.resolve(
        adapter.getTranslations({
          lang,
          scopes
        })
      );

      for (const scope in adapterTranslations)
        translations[scope as TScopes[number]] = adapterTranslations[scope]!;
    }

    return translations;
  };
}

/**
 * Translate a token
 *
 * @param args - {@link TranslateFnArgsWithTranslations}
 * @returns Translated value
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Server-side
 */
function translate(args: TranslateFnArgsWithTranslations): unknown {
  return internalTranslate(args);
}

export { getTranslationsCallback, translate };
