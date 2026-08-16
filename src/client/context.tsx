"use client";

import { createContext } from "react";
import type { LexoraContextValue, LexoraLangContextValue } from "./types.js";

/**
 * React Context to provide {@link Translation}s for the client-side.
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Client-side
 */
const LexoraContext = createContext<LexoraContextValue | null>(null);

const LexoraLangContext = createContext<LexoraLangContextValue | null>(null);

export { LexoraContext, LexoraLangContext };
