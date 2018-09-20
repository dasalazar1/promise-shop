function alwaysThrows(){
  throw new Error('OH NOES');
}

function iterate(anInt){
  console.log(anInt);
  return anInt + 1;
}

Promise.resolve(iterate(1))
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(alwaysThrows)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .then(iterate)
  .catch(err => console.log(err.message))