"use client";

import { useContext } from "react";
import { translate } from "../shared/translate.js";
import type {
  ScopedTranslationsByToken,
  Scopes,
  TranslateFn,
  TranslateFnArgs
} from "../shared/types.js";
import { LexoraContext, LexoraLangContext, type LexoraLangContextValue } from "./context.js";

function useLang(): LexoraLangContextValue {
  return useContext(LexoraLangContext)!;
}

/**
 * Result of {@link useTranslation} hook
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Client-side
 */
type UseTranslationReturn<TScopes extends Scopes = Scopes> = {
  translations: ScopedTranslationsByToken<TScopes>;
  translate: TranslateFn;
  scopes: Scopes;
};

/**
 * React hook for translating a token.
 * @returns A callback of {@link UseTranslationReturn}, that takes {@link TranslateFnArgs} and returns the translation.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Client-side
 */
function useTranslation<TScopes extends Scopes = Scopes>(): UseTranslationReturn<TScopes> {
  const { translations, scopes } = useContext(LexoraContext)!;

  return {
    scopes,
    translations,
    translate: ({ token, scope }: TranslateFnArgs): unknown =>
      translate({
        token,
        scope,
        translations
      })
  };
}

export type { UseTranslationReturn };

export { useTranslation, useLang };
