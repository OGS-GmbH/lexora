import { translate as internalTranslate } from "../shared/translate.js";
import type {
  Scopes,
  SyncAdapterFnReturn,
  ScopedTranslationsByToken,
  TranslateFnArgsWithTranslations
} from "../shared/types.js";

type GetTranslationsArgs<TScopes extends Scopes> = {
  /**
   * Possible {@link Scopes}, that'll be passed down to each adapter
   *
   * @author Simon Kovtyk
   * @since 1.0.0
   */
  scopes: TScopes;
  /**
   * Locale of the language (e.g. en-US)
   *
   * @author Simon Kovtyk
   * @since 1.0.0
   */
  lang: string;
};

type GetTranslationsReturn<TScopes extends Scopes> = Promise<ScopedTranslationsByToken<TScopes>>;

/**
 * Args for {@link getTranslations}
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Server-side
 */
type GetTranslationsCallbackArgs = {
  /**
   * An `Array` of {@link AdapterFnReturn}, where adapters are registered.
   *
   * @author Simon Kovtyk
   * @since 1.0.0
   */
  adapters: SyncAdapterFnReturn[];
};

/**
 * Load translations by configured adapters
 *
 * @param options - An `Object` of {@link GetTranslationsArgs}
 * @returns A `Promise` containing {@link Translatables}
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Server-side
 */
function getTranslationsCallback({ adapters }: GetTranslationsCallbackArgs) {
  return async function getTranslation<const TScopes extends Scopes>({
    lang,
    scopes
  }: GetTranslationsArgs<TScopes>): GetTranslationsReturn<typeof scopes> {
    const translations: ScopedTranslationsByToken<TScopes> =
      {} as ScopedTranslationsByToken<TScopes>;

    for (const adapter of adapters) {
      const adapterTranslations = await Promise.resolve(
        adapter.getTranslatables({
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
 * @param args - {@link TranslateFnArgsWithTranslatables}
 * @returns Translated value
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Server-side
 */
function translate(args: TranslateFnArgsWithTranslations): unknown {
  return internalTranslate(args);
}

export type { GetTranslationsCallbackArgs, GetTranslationsArgs, GetTranslationsReturn };

export { getTranslationsCallback, translate };
