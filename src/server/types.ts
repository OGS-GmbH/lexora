import type {
  AdapterFnReturn,
  Lang,
  ScopedTranslationsByToken,
  Scopes,
  SyncAdapterFnReturn,
  TranslateFnWithTranslations
} from "../shared/types.js";

type GetLangsCallbackArgs = {
  adapters: SyncAdapterFnReturn[];
};

type GetLangsReturn = Promise<Lang[]>;

type GetLangsFn = () => GetLangsReturn;

type SetLangFn = (lang: Lang) => void;
type GetLangFn = () => Lang | null;

type GetLangStoreReturn = {
  set: SetLangFn;
  get: GetLangFn;
};

type GetDefaultLangCallbackArgs = {
  adapters: SyncAdapterFnReturn[];
};

type GetDefaultLangReturn = Promise<Lang>;

type GetDefaultLangFn = () => GetDefaultLangReturn;

type GetTranslationsArgs<TScopes extends Scopes> = {
  /**
   * Possible {@link Scopes}, that'll be passed down to each adapter
   *
   * @author Simon Kovtyk
   * @since 1.0.0
   */
  scopes: TScopes;
  /**
   * Locale of the language (e.g. en-US)
   *
   * @author Simon Kovtyk
   * @since 1.0.0
   */
  lang: string;
};

type GetTranslationsReturn<TScopes extends Scopes> = Promise<ScopedTranslationsByToken<TScopes>>;

type GetTranslationsFn = (args: GetTranslationsArgs<Scopes>) => GetTranslationsReturn<Scopes>;

/**
 * Args for {@link GetTranslationsFn}
 *
 * @author Simon Kovtyk
 * @since 1.0.0
 * @category Server-side
 */
type GetTranslationsCallbackArgs = {
  /**
   * An `Array` of {@link AdapterFnReturn}, where adapters are registered.
   *
   * @author Simon Kovtyk
   * @since 1.0.0
   */
  adapters: SyncAdapterFnReturn[];
};

type LexoraArgs = {
  /**
   * An `Array` of {@link AdapterFnReturn}, where adapters are registered.
   *
   * @author Simon Kovtyk
   * @since 1.0.0
   */
  adapters: AdapterFnReturn[];
};

type LexoraInstance = {
  getTranslations: GetTranslationsFn;
  getLangs: GetLangsFn;
  getDefaultLang: GetDefaultLangFn;
  getLang: GetLangFn;
  setLang: SetLangFn;
  translate: TranslateFnWithTranslations;
};

export type {
  LexoraArgs,
  GetLangsCallbackArgs,
  GetLangsReturn,
  GetLangsFn,
  SetLangFn,
  GetLangFn,
  GetLangStoreReturn,
  GetDefaultLangCallbackArgs,
  GetDefaultLangReturn,
  GetDefaultLangFn,
  GetTranslationsArgs,
  GetTranslationsReturn,
  GetTranslationsFn,
  GetTranslationsCallbackArgs,
  LexoraInstance
};
