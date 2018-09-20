var argJson = process.argv[2];

function parsePromised(inputJson){
  return new Promise(function (fulfill, reject) {
    try {
      var parsed = JSON.parse(inputJson);
      fulfill(parsed);
    } catch (error) {
      reject(error)
    }
  });
}

parsePromised(argJson).then(console.log).then(null, (err) => console.log(err.message));