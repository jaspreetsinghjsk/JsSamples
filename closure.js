
 function x() {
    this.counter = 10
    this.count = function () 
    {
        ++this.counter
        return this.counter
    }
}

//x = add()
y = new x();
console.log(y.count())
console.log(y.count())
console.log(y.count())
console.log(y.count())
