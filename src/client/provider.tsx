"use client";

import { type ReactNode } from "react";
import type { Scopes } from "../shared/types.js";
import { LexoraContext, LexoraLangContext } from "./context.js";
import type { LexoraContextValue, LexoraLangContextValue } from "./types.js";

type LexoraLangProviderProps = LexoraLangContextValue & {
  children: ReactNode;
};

function LexoraLangProvider({ current, all, children }: LexoraLangProviderProps) {
  return (
    <LexoraLangContext.Provider value={{ current, all }}>{children}</LexoraLangContext.Provider>
  );
}

/**
 * Props for {@link LexoraTranslationsProvider}
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Client-side
 */
type LexoraTranslationsProviderProps<TScopes extends Scopes> = LexoraContextValue<TScopes> & {
  /**
   * Children of {@link LexoraTranslationsProvider}
   *
   * @author Simon Kovtyk
   * @since 1.0.0
   */
  children: ReactNode;
};

/**
 * Provider for {@link Translation}s, that'll be exposed for the client-side.
 *
 * @param props - Props of {@link LexoraTranslationsProviderProps}
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
