var q = require('q-io/http');

q.read('http://localhost:1337').then(buf => {
  console.log(JSON.parse(buf.toString()));
})
.then(null, console.error);