function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

function* iterable(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterable(["David", "Sheni", "Fani", "Sire", "Rafa"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
