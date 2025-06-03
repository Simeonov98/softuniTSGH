import { textChangeRangeIsUnchanged } from "../node_modules/typescript/lib/typescript";

interface CountableSet<T> {
  add(item: T): void;
  remove(item: T): void;
  contains(item: T): void;
  getNumberOfCopies(item: T): void;
}

class CountedSet<T> implements CountableSet<T> {
  private items: Map<T, number> = new Map();

  add(item: T): void {
    const currentCount = this.items.get(item);
    if (currentCount) {
      this.items.set(item, currentCount + 1);
    } else {
      this.items.set(item, 1);
    }
  }
  remove(item: T): void {
    const currentCount = this.items.get(item);
    if (currentCount) {
      this.items.set(item, currentCount - 1);
    }
  }
  contains(item: T): boolean {
    const currentCount = this.items.get(item);
    return currentCount !== undefined && currentCount > 0;
  }
  getNumberOfCopies(item: T): number {
    return this.items.get(item) ?? 0;
  }
}

let countedSet = new CountedSet<string>();
countedSet.add("test");
countedSet.add("test");
console.log(countedSet.contains("test"));
console.log(countedSet.getNumberOfCopies("test"));
countedSet.remove("test");
countedSet.remove("test");
countedSet.remove("test");
console.log(countedSet.getNumberOfCopies("test"));
console.log(countedSet.contains("test"));
