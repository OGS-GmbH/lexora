import type { TranslateFnArgsWithTranslations, Translation } from "./types.js";

/**
 * Fn, that is used both on client and server side to translate a token while using other factors like a scope
 *
 * @param args - An `Object` of {@link TranslateFnArgsWithTranslations}
 * @returns A translated token
 *
 * @since 1.0.0
 * @category Internal
 * @author Simon Kovtyk
 */
function translate({ token, scope, translations }: TranslateFnArgsWithTranslations): Translation {
  return translations[scope]![token]!;
}

export { translate };
