

describe('Palindrome spec', ()=>{

    it('Should validate when is palindrome',()=>{
        expect(isPalindrome('anita lava la tina')).toBe(true);
    });

    it('Should validate when is not palindrome',()=>{
        expect(isPalindrome('cualquier frase')).toBe(false);
    });
});