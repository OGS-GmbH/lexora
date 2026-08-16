import type { Lang, ScopedTranslationsByToken, Scopes, TranslateFn } from "../shared/types.js";

type LexoraContextValue<TScopes extends Scopes = Scopes> = {
  /**
   * Contains {@link Translation}s
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

type LexoraLangContextValue = {
  current: Lang;
  all: Lang[];
};

/**
 * Result of {@link useTranslation} hook
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Client-side
 */
type UseTranslationReturn<TScopes extends Scopes = Scopes> = {
  translations: ScopedTranslationsByToken<TScopes>;
  translate: TranslateFn;
  scopes: Scopes;
};

export type { LexoraContextValue, LexoraLangContextValue, UseTranslationReturn };
