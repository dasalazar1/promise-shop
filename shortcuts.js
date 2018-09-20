var promise = Promise.resolve('FULFILLED!')

var promise2 = Promise.reject(new Error('REJECTED!'));

promise.then((data) => {console.log(data)})

promise2.catch((err) => {console.log(err.message)});