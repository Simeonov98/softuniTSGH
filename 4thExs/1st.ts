function swap<T>(arr1: T[], index1: number, arr2: T[], index2: number): void {
    const temp = arr1[index1];
    arr1[index1] = arr2[index2];
    arr2[index2] = temp;
}

let a = ['test', '123'];
let b = ['a', 'b', 'c'];
swap<string>(a, 0, b, 2);
console.log(a)
console.log(b)
