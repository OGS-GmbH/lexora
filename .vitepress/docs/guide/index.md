---
prev: false
next: false
---

# Getting started

## Installation

### Prerequisites

- Node.js version 18 or higher.
- A package manager: e.g. npm, pnpm, ...

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

### Usage

`lexora` provides a general facility for adapters and server/client integration, but it does not handle the loading of translations. Please refer to [adapters](/guide/adapters) for getting a better understanding. In the following example, we use [`lexora-postgres-adapter`](https://github.com/OGS-GmbH/lexora-postgres-adapter) inside a [Next.js layout](https://nextjs.org/docs/app/getting-started/layouts-and-pages), that will load translations from a Postgres database.

```tsx [layout.tsx]
import { getTranslations } from "@ogs-gmbh/lexora/server";
import { LexoraProvider } from "@ogs-gmbh/lexora/client";
import { postgresAdapter } from "@ogs-gmbh/lexora-postgres-adapter";

function RootLayout() {
  const translations = await getTranslations({
    locale: "de",
    adapters: [postgresAdapter("postgres://admin:root@127.0.0.1:5432/default")]
  });

  return (
    <html>
      <body>
        <LexoraProvider data={translations}>{children}</LexoraProvider>
      </body>
    </html>
  );
}

export default RootLayout;
```

You're now able to translate by server and client components. Enjoy ⭐.
