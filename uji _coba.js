function skilled (){
    return{
        quote:"saya"

    };
}
console.log(skilled().quote);
// hasil "saya"

var products= [
    { name: 'clean code', price:60},
    { name: 'eloquent js', price: 10},
    { name: 'the eloquent js', price: 35 },
    { name: 'the eloquent js 2', price: 60 },
    { name: 'the eloquent js 3', price: 15 },

];
var cheapboooks = products
.filter(function (book) {
    return book.price <50;

})
.map(function (book) {
    return book.name;
});

console.log(cheapboooks);

// hasil Array["eloquent js", "the eloquent js", "the eloquent js 3"]

var arr =[];
arr[0] ="a";
arr[1] = "b";
arr.foo ="c";
console.log(arr.length);

// 2

'codecodecodecode'.match(/co[d]{2,}e/g).length

// Error: Cannot read property 'length' of null

function getData (){
    return Promise.reject(new Error("Oops"));
}

function main () {
    return Promise.resolve()
    .then(function() {
        return getData();
    })
    .then (function() {
    return 2 + 3;
    })
    .catch(function (err) {
        return err.message.length;
    })
    .then(function(x) {
        return x + 100;
    });
}

main ()
.then(function(x){
    console.log(x);
});

// 104

var x= 4,
obj = {
    x: 3,
    bar: function () {
        var x = 2;
        setTimeout(function() {
            var x= 1;   
        console.log(this.x);
    }, 1000);
}
};
obj.bar();

//undifined

var a=[
    {price:10},
    {name: 'book', price:15},
    {price:20 , id: 123},

];

var b= a.reduce(function(x,y) {
    return Object.assign(x,y);
}, {})
console.log(b);

// Object { price: 20, name: "book", id: 123 }

function getSomething () {
    return{};
}
var a= getSomething();
var b= getSomething();
console.log(a === b)

// false

var people =['a', 'j', 'b', 'k', 'm', 'c'];
people.concat([]).sort(function(a,b){
    return a[0].charCodeAt() - b[0].charCodeAt();
});
console.log(people);

// Array["a", "j", "b", "k", "m", "c"]

function foo() {}
delete foo.length;
alert(typeof foo.length);

// alent muncul number