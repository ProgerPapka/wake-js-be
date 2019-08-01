import { getSafe } from './get-safe';

describe('util: get-safe', () => {

    const defaultValue = {
        firstValue: 1,
        secondValue: 2
    };

    it('get value with expected value', () => {
        const calculatedVal = getSafe(() => (defaultValue.firstValue));
        expect(calculatedVal).toEqual(1);
    });

    it('get value with undefined', () => {
        const calculatedVal = getSafe(() => undefined);
        expect(calculatedVal).toBeUndefined();
    });

    it('get value with undefined and default props', () => {
        const calculatedVal = getSafe(() => undefined, 1);
        expect(calculatedVal).toBe(1);
    });

    it('get value with error default value', () => {
        const calculatedVal = getSafe(() => { throw new Error(); }, { test: 1 });
        expect(calculatedVal).toEqual({test: 1});
    });
});
