function all(promise1, promise2){
  return new Promise(function(fulfill){
    var settled = 0;

    var values = [];

    promise1.then((value) => {
      values.push(value);
      settled++;
      if(settled == 2){
          fulfill(values);
      }
    });

    promise2.then((value) => {
      values.push(value);
      settled++;
      if(settled == 2){
          fulfill(values);
      }
    });
  })
}

all(getPromise1(), getPromise2()).then(console.log);