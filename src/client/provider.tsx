"use client";

import { type ReactNode } from "react";
import type { Lang, ScopedTranslationsByToken, Scopes } from "../shared/types.js";
import { LexoraContext, type LexoraContextValue, LexoraLangContext } from "./context.js";

type LexoraLangProviderProps = {
  lang: Lang;
  children: ReactNode;
};

function LexoraLangProvider({ lang, children }: LexoraLangProviderProps) {
  return <LexoraLangContext.Provider value={lang}>{children}</LexoraLangContext.Provider>;
}

/**
 * Props for {@link LexoraProvider}
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Client-side
 */
type LexoraTranslationsProviderProps<TScopes extends Scopes> = LexoraContextValue<TScopes> & {
  translations: ScopedTranslationsByToken;
  /**
   * Children of {@link LexoraProvider}
   *
   * @author Simon Kovtyk
   * @since 1.0.0
   */
  children: ReactNode;
};

/**
 * Provider for {@link Translatables}, that'll be exposed for the client-side.
 *
 * @param props - Props of {@link LexoraProviderProps}
 * @returns Provider of {@link LexoraContext} containing children
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Client-side
 */
function LexoraTranslationsProvider<const TScopes extends Scopes = Scopes>({
  children,
  ...props
}: LexoraTranslationsProviderProps<TScopes>) {
  return <LexoraContext.Provider value={props}>{children}</LexoraContext.Provider>;
}

export type { LexoraTranslationsProviderProps, LexoraLangProviderProps };

export { LexoraTranslationsProvider, LexoraLangProvider };
