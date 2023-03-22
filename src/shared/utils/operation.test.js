import { addition, checkEvenOdd, makeCapiltal } from "./operations"

test("to check 2 is Even", () => {
    let result = checkEvenOdd(2);
    expect(result).toBe("Even")
})


// test("to check 28 is Even", () => {
//     let result = checkEvenOdd(28);
//     expect(result).toBe("Even")
// })


// test("to check 23 is Odd", () => {
//     let result = checkEvenOdd(23);
//     expect(result).toBe("Odd")
// })

// test("to check undefined is null", () => {
//     let result = checkEvenOdd();
//     expect(result).toBeNull()
// })

// test("to check null is null", () => {
//     let result = checkEvenOdd(null);
//     expect(result).toBeNull()
// })


// test("to check '' is null", () => {
//     let result = checkEvenOdd('');
//     expect(result).toBeNull()
// })



// test("to check 'sagar' is null", () => {
//     let result = checkEvenOdd('sagar');
//     expect(result).toBeNull()
// })













// test("to check 'sagar' is Sagar", () => {
//     let result = makeCapiltal('sagar');
//     expect(result).toBe("Sagar")
// })


// test("to check 'SAGAR' is Sagar", () => {
//     let result = makeCapiltal('SAGAR');
//     expect(result).toBe("Sagar")
// })


// test("to check 'saGAR' is Sagar", () => {
//     let result = makeCapiltal('saGAR');
//     expect(result).toBe("Sagar")
// })


// test("to check 'SAGar' is Sagar", () => {
//     let result = makeCapiltal('SAGar');
//     expect(result).toBe("Sagar")
// })

// test("to check '' is ''", () => {
//     let result = makeCapiltal('');
//     expect(result).toBe("")
// })


// test("to check null is null", () => {
//     let result = makeCapiltal(null);
//     expect(result).toBeNull()
// })

// test("to check  undefined is null", () => {
//     let result = makeCapiltal();
//     expect(result).toBeNull()
// })

// test("to check  'sagar12312' is Sagar12312", () => {
//     let result = makeCapiltal('sagar12312');
//     expect(result).toBe('Sagar12312')
// })



// test("to check  4,5' is 9", () => {
//     let result = addition(4,5);
//     expect(result).toBeGreaterThan(6)
//     expect(result).toBeGreaterThan(4)
//     expect(result).toBeGreaterThan(5)
// })

