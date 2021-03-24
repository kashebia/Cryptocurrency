

const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', ()=> {
    it('produces the same hash with the same input arguments in any order', ()=>{
        expect(cryptoHash('one', 'two', 'three')).toEqual(cryptoHash('three','two', 'one'));
    });

    it('produces a unique hash when the properties have changed on an input',()=>{
       const foo = {};
       const originalHash = cryptoHash(foo);
       foo['a']='a'; 

       expect(cryptoHash(foo)).not.toEqual(originalHash);
    });

});