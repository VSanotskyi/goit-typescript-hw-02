/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
}

// variant 1
// function compare(obj1: Pick<AllType, 'name' | 'color'>, obj2: Pick<AllType, 'position' | 'weight'>): AllType {
//     return {
//         name: obj1.name,
//         color: obj1.color,
//         position: obj2.position,
//         weight: obj2.weight
//     }
// }
// const result1 = compare({name: 'AAA', color: 'red'}, {position: 10, weight: 20})
// console.log(result1)
// variant 2
// function compare<A extends {
//     name: string,
//     color: string
// }, B extends { position: number, weight: number }>(obj1: A, obj2: B): AllType {
//     return {
//         ...obj1,
//         ...obj2,
//     }
// }
// const obj1: Pick<AllType, 'name' | 'color'> = {
//     name: 'AAAA',
//     color: 'red',
// }
// const obj2: Omit<AllType, 'name' | 'color'> = {
//     position: 10,
//     weight: 20,
// }
// const result1 = compare(obj1, obj2)
// console.log(result1)
// variant 3
function compare<A extends Pick<AllType, 'color' | 'name'>, B extends Pick<AllType, 'position' | 'weight'>>(obj1: A, obj2: B): AllType {
    return {
        ...obj1,
        ...obj2,
    }
}

const result1 = compare({color: 'red', name: "aaa"}, {position: 10, weight: 10})
console.log(result1)

export {};