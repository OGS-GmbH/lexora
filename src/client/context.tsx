"use client";

import { createContext } from "react";
import type { Translatables } from "../shared/types.js";

/**
 * React Context to provide {@link Translatables} for the client-side.
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Client-side
 */
const LexoraContext = createContext<Translatables | null>(null);

export { LexoraContext };
