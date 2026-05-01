"use client";

import { createContext } from "react";
import type { Lang, ScopedTranslationsByToken, Scopes } from "../shared/types.js";

type LexoraContextValue<TScopes extends Scopes = Scopes> = {
  /**
   * Contains {@link Translatables}
   *
   * @author Simon Kovtyk
   * @since 1.0.0
   */
  translations: ScopedTranslationsByToken<TScopes>;
  /**
   * Contains {@link Scopes}
   */
  scopes: Scopes;
};

/**
 * React Context to provide {@link Translatables} for the client-side.
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Client-side
 */
const LexoraContext = createContext<LexoraContextValue | null>(null);

const LexoraLangContext = createContext<Lang | null>(null);

export { LexoraContext, LexoraLangContext };

export type { LexoraContextValue };
