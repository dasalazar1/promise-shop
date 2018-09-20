var q = require('q-io/http');


q.read('http://localhost:7000')
.then(idBuf => {
  var id = idBuf.toString();
  //console.log('http://localhost:7001/' + id);
  return q.read('http://localhost:7001/' + id)
})
.then(userBuf => {
  console.log(JSON.parse(userBuf.toString()));
})