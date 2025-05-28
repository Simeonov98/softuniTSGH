function evenSum(a: number, b: number, c: number): boolean {
    const sum: number = a + b + c;
    return sum % 2 === 0;
}
// console.log(evenSum(1,1,2))
// console.log(evenSum(2,2,3))


function dow(a: number): void {
    enum Days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    };

    console.log(Days[a] || "Error")
    console.log("____________")

}
// dow(1)
// dow(2)
// dow(8)

function formatPerson(personInfo: [string, number]): string {

    return `Hello my name is ${personInfo[0]} and my age is ${personInfo[1]}`
}
// console.log(formatPerson(['Ivan',20]))
// console.log("____________")


function convertArr(words: string[]): [string, number] {

    const text = words.join('')

    return [text, text.length]
}
// console.log(convertArr(['how','are','you?']))
// console.log("____________")


function summarizePerson(
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    middleName?: string,
    hobbies?: string[],
    workInfo?: [string, number]
): [number, string, number, string, string] {

    const fullName = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`
    const hobbiesString = hobbies ? hobbies.join(', ') : '-'
    const wjobStr = workInfo ? `${workInfo[0]} -> ${workInfo[1]}` : '-'
    return [
        id,
        fullName,
        age,
        hobbiesString,
        wjobStr
    ]

}
// console.log(summarizePerson(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing'] ))

function revertedDayOfTheWeek(day: string): void {

    enum Days {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday

    }

    console.log(Days[day as keyof typeof Days] || 'error')
}
//revertedDayOfTheWeek('Tuesday')

function unknownReponse(x: unknown): string {
    if ('value' in (x as any) && typeof (x as any).value === 'string') {
        return (x as any).value
    }
    return '-'
}
// console.log(unknownReponse({ code: 200, text: 'Ok', value: [1, 2, 3] }))
// console.log(unknownReponse({ code: 301, text: 'Moved Permanently', value: 'New Url' } ))

function customTypeGuard(arg: unknown): arg is string[] {
    return Array.isArray(arg) && arg.length >= 1 && arg.every(el => typeof el === 'string')
}

let arr: unknown = ['test', '123'];

if (customTypeGuard(arr)) {

    //console.log(arr.length); // allowed

}

function friday13(arr: unknown[]): void {

enum Months {
        January = 1,
        February,
        March,
        April,
        May,
        June,
        July,
        August,
        September,
        October,
        November,
        December

    }

    for(const date of arr){
        if(date instanceof Date){
            const monthDay = date.getDate()
            const weekDay = date.getDay()
            const monthNum = date.getMonth()

            if(monthDay===13 && weekDay===5){
                console.log(`${monthDay}-${Months[monthNum]}-${date.getFullYear()}`)
            }
        }
    }

}

friday13([
    {},
    new Date(2025, 4, 13),
    null,
    new Date(2025, 5, 13),
    '13-09-2023',
    new Date(2025, 6, 13),
])