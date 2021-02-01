const { Customer, startingBalance  } = require("./Customer");

let gokhan; 
beforeEach(() => {
    gokhan = new Customer('gokhan', '123', 'cinarli09')
    
});

describe('customer initiate', () => {
   
    it('should create a new customer object', () => {
    const gokhan = new Customer('gokhan', '123')
    expect(gokhan).toBeInstanceOf(Object);
    })

    it('customer should have a name', () => {
    const gokhan = new Customer('gokhan', '123')
    expect(gokhan.name).toBe('gokhan');
    })

    it('customer should have account ID', () => {
         const gokhan = new Customer('Gokhan', '123')
         expect(gokhan.accountID).toBe('123');
    })
    
    it('customer should have transaction history', () => {
        const gokhan = new Customer('Gokhan', '123')
        expect(gokhan.accountBalance).toBe(startingBalance);
    })

})


describe('view account balance', () => {
   
    it('view account balance', () => {
    const gokhan = new Customer('gokhan', '123')
    let testBalance = gokhan.viewBalance 
    expect(testBalance).toBe(startingBalance);
    })

})

describe('should log in', () => {
   
    it('view account balance', () => {
    let gokhan = new Customer('gokhan', '123', 'cinarli09')
    gokhan.logIn('123', 'cinarli09')
    expect(gokhan.online).toBe(true);
    })

})


describe('deposit', () => {
   
    it('depsoit money', () => {
    let gokhan = new Customer('gokhan', '123')
    gokhan.deposit(200)
    expect(gokhan.accountBalance).toBe(300);
    })

})

 describe('withdraw', () => {
   
     it('withdraw money', () => {
     let gokhan = new Customer('gokhan', '123', 'cinarli09')
     gokhan.logIn('123', 'cinarli09')
     expect(() => gokhan.withdraw(200)).toThrowError('Insufficient Fund - Please Add Funds');
     })

})

describe('withdraw', () => {
   
    it('withdraw money', () => {
    let gokhan = new Customer('gokhan', '123')
    gokhan.logIn('123', 'cinarli09')
    gokhan.withdraw(50)
    expect(gokhan.accountBalance).toBe(50);
    })

})

