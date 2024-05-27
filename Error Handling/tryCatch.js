try {
  idk;// It should we valid JS otherwise we would get Parse-time error
} catch (error) {
  console.log(error);
} finally {
  console.log("Finished Execution");// runs in all cases wheter there is a return or error in try 
}

setTimeout(function () {// we should use try catch block inside setTimeout/ setInterval block
  try {
    idk;
  } catch (error) {
    console.log(error);
  }
}, 1000);

// throw operator
function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Must not be negative, and also an integer.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
let num = -1;
try {
  res = fib(num);
  console.log(res);
} catch (error) {
  console.log(error);
}