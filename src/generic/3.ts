/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object>(objA: T, objB: T): T {
    return Object.assign(objA, objB);
}

const result1 = merge({a: 1}, {b: 2})
// const result2 = merge({a: 1}, '1') // error
console.log(result1)

export {}