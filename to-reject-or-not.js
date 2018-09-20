var promise = new Promise(function (fulfill, reject) {
  fulfill('I FIRED')
  var err = new Error('I DID NOT FIRE');
  reject(err);
});

function onReject (error) {
  console.log(error.message);
}

promise
.then( (data) => {console.log(data)}, onReject);