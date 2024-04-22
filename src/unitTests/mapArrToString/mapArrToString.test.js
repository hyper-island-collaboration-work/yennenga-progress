const { expect, test } = require('@jest/globals');
const mapArrToString  = require('./mapArrToString');

describe('mapArrToString', () => {
    test('correct value', () => {
       expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3'])
    });
    test('mix of value types', () => {
        expect(mapArrToString([1, 2, 3, undefined, null])).toEqual(['1', '2', '3'])
     });
     test('not equal', () => {
        expect(mapArrToString([1, 2, 3,])).not.toEqual(['1', '2', '3', '4'])
     });
})
