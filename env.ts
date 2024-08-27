import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  server: {
    TEST_ENV_VAR: z.string().optional().default('MY_TEST_VALUE'),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
})
