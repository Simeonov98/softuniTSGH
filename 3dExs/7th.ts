class Counter{
    private static count: number = 0;
    public static increment(): void{
        Counter.count++;
    }
    public static getCount(){
        return Counter.count
    }

}
Counter.increment();
Counter.increment();
console.log(Counter.getCount())