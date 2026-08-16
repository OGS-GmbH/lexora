"use client";

import { useContext } from "react";
import { translate } from "../shared/translate.js";
import type { Scopes, TranslateFnArgs, Translation } from "../shared/types.js";
import { LexoraContext, LexoraLangContext } from "./context.js";
import type { LexoraLangContextValue, UseTranslationReturn } from "./types.js";

function useLang(): LexoraLangContextValue {
  return useContext(LexoraLangContext)!;
}

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
    translate: ({ token, scope }: TranslateFnArgs): Translation =>
      translate({
        token,
        scope,
        translations
      })
  };
}

export { useTranslation, useLang };
