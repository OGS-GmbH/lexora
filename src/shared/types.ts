import {
  type GetLangFn,
  type SetLangFn,
  type GetLangsFn,
  type GetDefaultLangFn
} from "../server/lang.js";
import { type GetTranslationsFn } from "../server/translation.js";

/**
 * `Record` of token-to-translatables
 *
 * @category Types
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type Translation = string | number;

type TranslationsByToken = Record<string, Translation>;

type ScopedTranslationsByToken<TScopes extends Scopes = Scopes> = Record<
  TScopes[number],
  TranslationsByToken
>;

/**
 * Scopes, that'll be passed down to adapters
 *
 * @category Types
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type Scopes = string[];

/**
 * Path, that can be used to pick a translation inside {@link Translatables}
 *
 * @category Types
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type Path = string[];

type Lang = {
  name: string;
  code: string;
  default: boolean;
};

/**
 * Args for a {@link TranslateFn}, that is able to translate
 *
 * @since 1.0.0
 * @category Types
 * @author Simon Kovtyk
 */
type TranslateFnArgs = {
  token: string;
  scope: string;
};

/**
 * {@link TranslateFnArgs} with known {@link Translatables}
 *
 * @since 1.0.0
 * @category Types
 * @author Simon Kovtyk
 */
type TranslateFnArgsWithTranslations = TranslateFnArgs & {
  translations: ScopedTranslationsByToken;
};

/**
 * Fn, that is able to translate
 *
 * @since 1.0.0
 * @category Types
 * @author Simon Kovtyk
 */
type TranslateFn = (args: TranslateFnArgs) => unknown;

/**
 * Operation args for {@link AdapterOperationFn}
 *
 * @since 1.0.0
 * @category Types
 * @author Simon Kovtyk
 */
type AdapterTranslationsFnArgs = {
  scopes: Scopes;
  lang: string;
};

/**
 * Sync result of {@link AdapterOperationFn}
 *
 * @since 1.0.0
 * @category Types
 * @author Simon Kovtyk
 */
type SyncAdapterTranslationsFnReturn = ScopedTranslationsByToken;

/**
 * Async result of {@link AdapterOperationFn}
 *
 * @since 1.0.0
 * @category Types
 * @author Simon Kovtyk
 */
type AsyncAdapterTranslationsFnReturn = Promise<SyncAdapterTranslationsFnReturn>;

/**
 * Combined result of {@link AdapterOperationFn} with async & sync support
 *
 * @since 1.0.0
 * @category Types
 * @author Simon Kovtyk
 */
type AdapterTranslationsFnReturn = MaybePromise<SyncAdapterTranslationsFnReturn>;

/**
 * Fn, that is able to provide {@link Translatables}
 *
 * @since 1.0.0
 * @category Types
 * @author Simon Kovtyk
 */
type AdapterTranslationsFn = (args: AdapterTranslationsFnArgs) => AdapterTranslationsFnReturn;

type SyncAdapterLangsFnReturn = Lang[];

type AsyncAdapterLangsFnReturn = Promise<SyncAdapterLangsFnReturn>;

type AdapterLangsFnReturn = MaybePromise<SyncAdapterLangsFnReturn>;

type AdapterLangsFn = () => AdapterLangsFnReturn;

type SyncAdapterDefaultLangFnReturn = Lang;

type AsyncAdapterDefaultLangFnReturn = Promise<SyncAdapterDefaultLangFnReturn>;

type AdapterDefaultLangFnReturn = MaybePromise<SyncAdapterDefaultLangFnReturn>;

type AdapterDefaultLangFn = () => AdapterDefaultLangFnReturn;

/**
 * Utility type, that makes a type an optional promise.
 *
 * @since 1.0.0
 * @category Types
 * @author Simon Kovtyk
 */
type MaybePromise<T> = T | Promise<T>;

/**
 * Sync result of {@link AdapterFn}
 *
 * @remarks
 * Currently, only a function named `get` is required but this might change in future
 *
 * @since 1.0.0
 * @category Types
 * @author Simon Kovtyk
 */
type SyncAdapterFnReturn = {
  /**
   * An {@link AdapterOperationFn}, that'll be used to get translations
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  getTranslations: AdapterTranslationsFn;
  getLangs: AdapterLangsFn;
  getDefaultLang: AdapterDefaultLangFn;
};

/**
 * Async result of {@link AdapterFn}
 *
 * @since 1.0.0
 * @category Types
 * @author Simon Kovtyk
 */
type AsyncAdapterFnReturn = Promise<SyncAdapterFnReturn>;

/**
 * Result of {@link AdapterFn}
 *
 * @since 1.0.0
 * @category Types
 * @author Simon Kovtyk
 */
type AdapterFnReturn = MaybePromise<SyncAdapterFnReturn>;

/**
 * An adapter fn, that takes unknown args and returns {@link AdapterFnReturn} as a result.
 *
 * @since 1.0.0
 * @category Types
 * @author Simon Kovtyk
 */
type AdapterFn = (...args: unknown[]) => AdapterFnReturn;

type LexoraInstance = {
  getTranslations: GetTranslationsFn;
  getLangs: GetLangsFn;
  getDefaultLang: GetDefaultLangFn;
  getLang: GetLangFn;
  setLang: SetLangFn;
  translate: TranslateFn;
};

export type {
  Translation,
  TranslationsByToken,
  ScopedTranslationsByToken,
  Scopes,
  Path,
  Lang,
  TranslateFnArgs,
  TranslateFnArgsWithTranslations,
  TranslateFn,
  AdapterTranslationsFnArgs,
  MaybePromise,
  SyncAdapterTranslationsFnReturn,
  AsyncAdapterTranslationsFnReturn,
  AdapterTranslationsFnReturn,
  AdapterTranslationsFn,
  SyncAdapterFnReturn,
  AsyncAdapterFnReturn,
  SyncAdapterLangsFnReturn,
  AsyncAdapterLangsFnReturn,
  AdapterLangsFnReturn,
  AdapterLangsFn,
  SyncAdapterDefaultLangFnReturn,
  AsyncAdapterDefaultLangFnReturn,
  AdapterDefaultLangFnReturn,
  AdapterDefaultLangFn,
  AdapterFnReturn,
  AdapterFn,
  LexoraInstance
};
