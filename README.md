1.  Clone repository
2. Install dependencies (pnpm install)
3. Run tests: `pnpm test`

Issue:
```bash
    SyntaxError: Cannot use import statement outside a module

    > 1 | import { createEnv } from '@t3-oss/env-core'
        | ^
      2 | import { z } from 'zod'
      3 |
      4 | export const env = createEnv({

      at Runtime.createScriptFromCode (node_modules/.pnpm/jest-runtime@29.7.0/node_modules/jest-runtime/build/index.js:1505:14)
      at Object.<anonymous> (env.ts:1:1)
      at Object.<anonymous> (index.ts:1:1)
      at Object.<anonymous> (index.unit.test.ts:1:1)
```
