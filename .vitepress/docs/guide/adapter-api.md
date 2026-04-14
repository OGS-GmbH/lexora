# Adapter API

`lexora` lets you easily write your own custom adapters by providing a developer-friendly Adapter-API.

If you haven't found an adapter for your needs, then here's how to do it:

## Setup

Create a ESM-compatible project.

You can use [`_react-template`](https://github.com/OGS-GmbH/_react-template) for a quickstart.

## Add `lexora` as dependency

::: code-group

```sh [npm]
$ npm add @ogs-gmbh/lexora
```

```sh [pnpm]
$ pnpm add @ogs-gmbh/lexora
```

```sh [yarn]
$ yarn add @ogs-gmbh/lexora
```

```sh [bun]
$ bun add @ogs-gmbh/lexora
```

:::

## Create your main function

Since `lexora` is fully TypeScript-compatible, we also provide types for your adapter.

Here we use [`AdapterFn`](/reference/Types/AdapterFn), but you just need to ascertain, that [`AdapterFnReturn`](/reference/Types/AdapterFnReturn) will be returned from your custom adapter.

Keep in mind, that your `AdapterFn` and `AdapterOperationFn` doesn't need to be `async`, but it's a nice-to-have regarding initialization/business logic.

```ts [custom-adapter.ts]
import { type AdapterFn, type AdapterOperationFnArgs } from "@ogs-gmbh/lexora";

const customAdapter: AdapterFn = async function customAdapter() {
  // Custom intiialization logic goes here (for example a db connection) ...
  return {
    get: async function ({ locale, scopes }: AdapterOperationFnArgs) {
      // Get your translations here ...
      // (You can use locale and scopes for resolving them)
    }
  };
};

export { customAdapter };
```

## Use your adapter

Now, your custom adapter is declared and you can simply import it and use it with `lexora`.

```ts [layout.tsx]
import { getTranslations } from "@ogs-gmbh/lexora/server";
import { LexoraProvider } from "@ogs-gmbh/lexora/client";
import { customAdapter } from "./custom-adapter";

function RootLayout () {
  const translations = await getTranslations({
    locale: "en-US",
    adapters: [
      customAdapter(
        // Optional: Configure parameters for your adapter
      )
    ]
  });

  return (
    <html>
      <body>
        <LexoraProvider data={translations}>
          {children}
        </LexoraProvider>
      </body>
    </html>
  )
}

export default RootLayout;
```
