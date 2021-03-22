

const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', ()=> {
    it('produces the same hash with the same input arguments in any order', ()=>{
        expect(cryptoHash('one', 'two', 'three')).toEqual(cryptoHash('three','two', 'one'));
    });
});