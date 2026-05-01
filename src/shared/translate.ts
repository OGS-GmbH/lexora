import type { Translation, TranslateFnArgsWithTranslations } from "./types.js";

type TranslateFn = (args: TranslateFnArgsWithTranslations) => unknown;

/**
 * Fn, that is used both on client and server side to translate a token while using other factors like a scope
 *
 * @param args - An `Object` of {@link TranslateFnArgsWithTranslatables}
 * @returns A translated token
 *
 * @since 1.0.0
 * @category Internal
 * @author Simon Kovtyk
 */
function translate({ token, scope, translations }: TranslateFnArgsWithTranslations): Translation {
  return translations[scope]![token]!;
}

export type { TranslateFn };

export { translate };
