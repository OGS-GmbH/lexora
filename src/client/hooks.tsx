"use client";

import { useContext } from "react";
import { translate } from "../shared/translate.js";
import type { Scopes, Translatables, TranslateFn, TranslateFnArgs } from "../shared/types.js";
import { LexoraContext, LexoraLocaleContext } from "./context.js";

function useLocale(): string {
  return useContext(LexoraLocaleContext)!;
}

/**
 * Result of {@link useTranslation} hook
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Client-side
 */
type UseTranslationReturn = {
  translatables: Translatables;
  translate: TranslateFn;
  scopes?: Scopes[];
};

/**
 * React hook for translating a token.
 * @returns A callback of {@link UseTranslationReturn}, that takes {@link TranslateFnArgs} and returns the translation.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Client-side
 */
function useTranslation(): UseTranslationReturn {
  const { translatables, scopes } = useContext(LexoraContext)!;

  return {
    scopes,
    translatables,
    translate: ({ token, scope }: TranslateFnArgs): unknown =>
      translate({
        token,
        scope,
        translatables
      })
  };
}

export type { UseTranslationReturn };

export { useTranslation, useLocale };
