let timerId = setInterval(() => console.log("Hello"), 1000);
setTimeout(() => clearInterval(timerId), 4000);

for (var i = 0; i < 3; i++) {// 3 3 3
  setTimeout(() => console.log(i), 1000);
}

for (let i = 0; i < 3; i++) {// 0 1 2 
  setTimeout(() => console.log(i), 1000);
}