# Adapters

Adapters are the main idea of `lexora`. They enable fetching data from any possible source. Even from the filesystem or your kernel (if you really need to do it), because they run on the server.

> [!TIP] Adapter-API
> `lexora` offers an Adapter-API, that'll let you easily write your own custom adapters. Check [Adapter-API](/guide/adapter-api) for getting a depper understanding.

We already provide two pre-defined adapters:

| Name                                                                             | Description                                 |
| -------------------------------------------------------------------------------- | ------------------------------------------- |
| [`lexora-adapter-postgres`](https://github.com/OGS-GmbH/lexora-postgres-adapter) | Uses Postgres                               |
| [`lexora-adapter-json`](https://github.com/OGS-GmbH/lexora-json-adapter)         | Uses simple JSON-files from your filesystem |

Each adapter has its own documentation, so just check it out.
