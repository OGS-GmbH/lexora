"use client";

import { type ReactNode } from "react";
import { LexoraContext, LexoraLocaleContext, type LexoraContextValue } from "./context.js";

type LexoraLocaleProviderProps = {
  locale: string;
  children: ReactNode;
};

function LexoraLocalProvider({ locale, children }: LexoraLocaleProviderProps) {
  return <LexoraLocaleContext.Provider value={locale}>{children}</LexoraLocaleContext.Provider>;
}

/**
 * Props for {@link LexoraProvider}
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Client-side
 */
type LexoraProviderProps = LexoraContextValue & {
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
function LexoraProvider({ children, ...props }: LexoraProviderProps) {
  return <LexoraContext.Provider value={props}>{children}</LexoraContext.Provider>;
}

export type { LexoraProviderProps, LexoraLocaleProviderProps };

export { LexoraProvider, LexoraLocalProvider };
