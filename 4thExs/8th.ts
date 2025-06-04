type FunctionKeys<T> = {
    [Key in keyof T]:T[Key] extends Function ? Key : never
}[keyof T]

type AllFunctions<T> =Pick<T, FunctionKeys<T>>;


type test = {
    name: string;
    age: number;
    test:()=> string;
    print:()=> void;
}
type extracted = AllFunctions<test>