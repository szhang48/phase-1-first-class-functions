function receivesAFunction(callback) {
    callback();
}
function returnsANamedFunction() {
    return function named() {
        console.log('this is a named function');
    }
}
function returnsAnAnonymousFunction() {
    return() => console.log("this is a anonymous function");
    
}