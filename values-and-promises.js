function attachTitle(firstargument){
  return 'DR. ' + firstargument;
}

var name = Promise.resolve('MANHATTAN');

name.then(attachTitle).then(console.log);