import { translate as internalTranslate } from "../shared/translate.js";
import type {
  Translatables,
  Scopes,
  TranslateFnArgsWithTranslatables,
  AdapterFnReturn
} from "../shared/types.js";

/**
 * Args for {@link getTranslations}
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Server-side
 */
type GetTranslationsArgs = {
  /**
   * An `Array` of {@link AdapterFnReturn}, where adapters are registered.
   *
   * @author Simon Kovtyk
   * @since 1.0.0
   */
  adapters: AdapterFnReturn[];
  /**
   * Possible {@link Scopes}, that'll be passed down to each adapter
   *
   * @author Simon Kovtyk
   * @since 1.0.0
   */
  scopes?: Scopes;
  /**
   * Locale of the language (e.g. en-US)
   *
   * @author Simon Kovtyk
   * @since 1.0.0
   */
  locale: string;
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
async function getTranslations({
  adapters,
  scopes,
  locale
}: GetTranslationsArgs): Promise<Translatables> {
  const translatables: Translatables = {};

  for (const adapter of adapters) {
    const adapterReturn = await Promise.resolve(adapter);

    const currentTranslatables = await Promise.resolve(
      adapterReturn.get({
        locale,
        scopes
      })
    );

    for (const key in currentTranslatables) translatables[key] = currentTranslatables[key];
  }

  return translatables;
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
function translate(args: TranslateFnArgsWithTranslatables): unknown {
  return internalTranslate(args);
}

export type { GetTranslationsArgs };

export { getTranslations, translate };
