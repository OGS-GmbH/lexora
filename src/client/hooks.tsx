"use client";

import { useContext } from "react";
import { translate } from "../shared/translate.js";
import type { TranslateFn, TranslateFnArgs } from "../shared/types.js";
import { LexoraContext } from "./context.js";

/**
 * Result of {@link useTranslation} hook
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Client-side
 */
type UseTranslationReturn = TranslateFn;

/**
 * React hook for translating a token.
 * @returns A callback of {@link UseTranslationReturn}, that takes {@link TranslateFnArgs} and returns the translation.
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Client-side
 */
function useTranslation(): UseTranslationReturn {
  const translatables = useContext(LexoraContext)!;

  return ({ token, scope }: TranslateFnArgs): unknown =>
    translate({
      token,
      scope,
      translatables
    });
}

export type { UseTranslationReturn };

export { useTranslation };
