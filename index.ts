import { env } from './env'

export function fakeTest(): string {
    const testValue = env.TEST_ENV_VAR
    return testValue
}