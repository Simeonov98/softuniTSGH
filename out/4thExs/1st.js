"use strict";
function swap(arr1, index1, arr2, index2) {
    const temp = arr1[index1];
    arr1[index1] = arr2[index2];
    arr2[index2] = temp;
}
let a = ['test', '123'];
let b = ['a', 'b', 'c'];
swap(a, 0, b, 2);
console.log(a);
console.log(b);
//# sourceMappingURL=1st.js.map