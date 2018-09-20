var promise = new Promise(function (fulfill, reject) {
  setTimeout(() => {
    var err = new Error('REJECTED!');
    reject(err);
  }, 300);
});

function onReject (error) {
  console.log(error.message);
}

promise
.then( (data) => {}, onReject);