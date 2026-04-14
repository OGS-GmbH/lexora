import type { Translatables, TranslateFnArgsWithTranslatables } from "./types.js";

/**
 * Fn, that is used both on client and server side to translate a token while using other factors like a scope
 *
 * @param args - An `Object` of {@link TranslateFnArgsWithTranslatables}
 * @returns A translated token
 *
 * @since 1.0.0
 * @category Internal
 * @author Simon Kovtyk
 */
function translate({ token, scope, translatables }: TranslateFnArgsWithTranslatables): unknown {
  let tokenRecord = translatables;

  if (scope !== undefined) tokenRecord = tokenRecord[scope] as Translatables;

  return tokenRecord[token]! as unknown;
}

export { translate };
