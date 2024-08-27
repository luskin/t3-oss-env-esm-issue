import { fakeTest } from "."

describe('test', () => {
    it('should return a value', () => {
        expect(fakeTest()).toBe('MY_TEST_VALUE')
    })
})