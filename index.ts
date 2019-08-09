
class IterableArray<T> {
    array: T[];

    constructor(array: T[]) {
        this.array = array;
    }
    [Symbol.iterator]() : Iterator<T> {
        return new IterableArrayIterator(this);
    }
}

class IterableArrayIterator<T> implements Iterator<T> {
    readonly array: IterableArray<T>;
    index: number;

    constructor(array: IterableArray<T>) {
        this.index = 0;
        this.array = array;
    }

    next (_?:any) : IteratorResult<T> {
        if(this.index < this.array.array.length) {
            let currentIndex = this.index;
            this.index++;
            return {value: this.array.array[currentIndex], done: false};
        } 
        return {value: null, done: true}
    }
}

for(let x of new IterableArray([1,2,3,5,7])) {
    console.log(x);
}

