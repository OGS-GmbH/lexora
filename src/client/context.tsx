"use client";

import { createContext } from "react";
import type { Scopes, Translatables } from "../shared/types.js";

type LexoraContextValue = {
  /**
   * Contains {@link Translatables}
   *
   * @author Simon Kovtyk
   * @since 1.0.0
   */
  translatables: Translatables;
  /**
   * Contains {@link Scopes}
   */
  scopes?: Scopes[];
};

/**
 * React Context to provide {@link Translatables} for the client-side.
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Client-side
 */
const LexoraContext = createContext<LexoraContextValue | null>(null);

const LexoraLocaleContext = createContext<string | null>(null);

export { LexoraContext, LexoraLocaleContext };

export type { LexoraContextValue };
