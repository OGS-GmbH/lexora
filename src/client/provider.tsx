"use client";

import { type ReactNode } from "react";
import type { Translatables } from "../shared/types.js";
import { LexoraContext } from "./context.js";

/**
 * Props for {@link LexoraProvider}
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Client-side
 */
type LexoraProviderProps = {
  /**
   * Contains {@link Translatables}
   *
   * @author Simon Kovtyk
   * @since 1.0.0
   */
  data: Translatables;
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
function LexoraProvider({ data, children }: LexoraProviderProps) {
  return <LexoraContext.Provider value={data}>{children}</LexoraContext.Provider>;
}

export type { LexoraProviderProps };

export { LexoraProvider };
