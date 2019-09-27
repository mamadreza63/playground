function a(resolve) {
    setTimeout(function() {
        console.log('a');
        resolve();
    }, 3000);
}

function b() {
    console.log('b');
}

var promise = new Promise(function(resolve, reject) {
    a(resolve);
});

promise.then(function() {
    b();
})
