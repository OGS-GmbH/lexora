/**
 * `Record` of token-to-translatables
 *
 * @category Types
 * @since 1.0.0
 * @author Simon Kovtyk
 */
type Translatables = Record<string, unknown>;

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

/**
 * Args for a {@link TranslateFn}, that is able to translate
 *
 * @since 1.0.0
 * @category Types
 * @author Simon Kovtyk
 */
type TranslateFnArgs = {
  token: string;
  scope?: string;
};

/**
 * {@link TranslateFnArgs} with known {@link Translatables}
 *
 * @since 1.0.0
 * @category Types
 * @author Simon Kovtyk
 */
type TranslateFnArgsWithTranslatables = TranslateFnArgs & {
  translatables: Translatables;
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
type AdapterOperationFnArgs = {
  scopes?: Scopes;
  locale: string;
};

/**
 * Sync result of {@link AdapterOperationFn}
 *
 * @since 1.0.0
 * @category Types
 * @author Simon Kovtyk
 */
type SyncAdapterOperationFnReturn = Translatables;

/**
 * Async result of {@link AdapterOperationFn}
 *
 * @since 1.0.0
 * @category Types
 * @author Simon Kovtyk
 */
type AsyncAdapterOperationFnReturn = Promise<SyncAdapterOperationFnReturn>;

/**
 * Combined result of {@link AdapterOperationFn} with async & sync support
 *
 * @since 1.0.0
 * @category Types
 * @author Simon Kovtyk
 */
type AdapterOperationFnReturn = MaybePromise<SyncAdapterOperationFnReturn>;

/**
 * Fn, that is able to provide {@link Translatables}
 *
 * @since 1.0.0
 * @category Types
 * @author Simon Kovtyk
 */
type AdapterOperationFn = (args: AdapterOperationFnArgs) => AdapterOperationFnReturn;

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
  get: AdapterOperationFn;
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

export type {
  Translatables,
  Scopes,
  Path,
  TranslateFnArgs,
  TranslateFnArgsWithTranslatables,
  TranslateFn,
  AdapterOperationFnArgs,
  MaybePromise,
  SyncAdapterOperationFnReturn,
  AsyncAdapterOperationFnReturn,
  AdapterOperationFnReturn,
  AdapterOperationFn,
  SyncAdapterFnReturn,
  AsyncAdapterFnReturn,
  AdapterFnReturn,
  AdapterFn
};
