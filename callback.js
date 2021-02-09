// function letMeKnowWhenComplete(size, callback) {
//     var reducer = 0


//     for(var i = 1; i < size; i++){
//         reducer = Math.sin(reducer * i);

//     }

//     callback();  
// }

// letMeKnowWhenComplete(1000000000, function(){
//     console.log('Great it completed');
// })

console.log('Let\'s begin')


setTimeout( () => {
    console.log('I waited and am done now.')
}, 3000);

console.log('Did I finish yet ')


const myPromise = new Promise((resolve, reject)  => {
    setTimeout( () => {
        resolve('I completed successfully')
        //reject('I failed');
    }, 500)
});


myPromise
    .then(done => {
        console.log(done);
    })
    .catch ( err => {
        console.log(err)
    });