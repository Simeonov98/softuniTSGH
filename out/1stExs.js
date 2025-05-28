"use strict";
function evenSum(a, b, c) {
    const sum = a + b + c;
    return sum % 2 === 0;
}
// console.log(evenSum(1,1,2))
// console.log(evenSum(2,2,3))
function dow(a) {
    let Days;
    (function (Days) {
        Days[Days["Monday"] = 1] = "Monday";
        Days[Days["Tuesday"] = 2] = "Tuesday";
        Days[Days["Wednesday"] = 3] = "Wednesday";
        Days[Days["Thursday"] = 4] = "Thursday";
        Days[Days["Friday"] = 5] = "Friday";
        Days[Days["Saturday"] = 6] = "Saturday";
        Days[Days["Sunday"] = 7] = "Sunday";
    })(Days || (Days = {}));
    ;
    console.log(Days[a] || "Error");
    console.log("____________");
}
// dow(1)
// dow(2)
// dow(8)
function formatPerson(personInfo) {
    return `Hello my name is ${personInfo[0]} and my age is ${personInfo[1]}`;
}
// console.log(formatPerson(['Ivan',20]))
// console.log("____________")
function convertArr(words) {
    const text = words.join('');
    return [text, text.length];
}
// console.log(convertArr(['how','are','you?']))
// console.log("____________")
function summarizePerson(id, firstName, lastName, age, middleName, hobbies, workInfo) {
    const fullName = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;
    const hobbiesString = hobbies ? hobbies.join(', ') : '-';
    const wjobStr = workInfo ? `${workInfo[0]} -> ${workInfo[1]}` : '-';
    return [
        id,
        fullName,
        age,
        hobbiesString,
        wjobStr
    ];
}
// console.log(summarizePerson(20, 'Mary', 'Trent', 25, undefined, ['fitness', 'rowing'] ))
function revertedDayOfTheWeek(day) {
    let Days;
    (function (Days) {
        Days[Days["Monday"] = 1] = "Monday";
        Days[Days["Tuesday"] = 2] = "Tuesday";
        Days[Days["Wednesday"] = 3] = "Wednesday";
        Days[Days["Thursday"] = 4] = "Thursday";
        Days[Days["Friday"] = 5] = "Friday";
        Days[Days["Saturday"] = 6] = "Saturday";
        Days[Days["Sunday"] = 7] = "Sunday";
    })(Days || (Days = {}));
    console.log(Days[day] || 'error');
}
//revertedDayOfTheWeek('Tuesday')
function unknownReponse(x) {
    if ('value' in x && typeof x.value === 'string') {
        return x.value;
    }
    return '-';
}
// console.log(unknownReponse({ code: 200, text: 'Ok', value: [1, 2, 3] }))
// console.log(unknownReponse({ code: 301, text: 'Moved Permanently', value: 'New Url' } ))
function customTypeGuard(arg) {
    return Array.isArray(arg) && arg.length >= 1 && arg.every(el => typeof el === 'string');
}
let arr = ['test', '123'];
if (customTypeGuard(arr)) {
    //console.log(arr.length); // allowed
}
function friday13(arr) {
    let Months;
    (function (Months) {
        Months[Months["January"] = 1] = "January";
        Months[Months["February"] = 2] = "February";
        Months[Months["March"] = 3] = "March";
        Months[Months["April"] = 4] = "April";
        Months[Months["May"] = 5] = "May";
        Months[Months["June"] = 6] = "June";
        Months[Months["July"] = 7] = "July";
        Months[Months["August"] = 8] = "August";
        Months[Months["September"] = 9] = "September";
        Months[Months["October"] = 10] = "October";
        Months[Months["November"] = 11] = "November";
        Months[Months["December"] = 12] = "December";
    })(Months || (Months = {}));
    for (const date of arr) {
        if (date instanceof Date) {
            const monthDay = date.getDate();
            const weekDay = date.getDay();
            const monthNum = date.getMonth();
            if (monthDay === 13 && weekDay === 5) {
                console.log(`${monthDay}-${Months[monthNum]}-${date.getFullYear()}`);
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
]);
//# sourceMappingURL=1stExs.js.map