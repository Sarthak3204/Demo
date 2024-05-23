let firstName = null;
let lastName = null;
let nickName = "Chico";

// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Chico

// shows the first truthy value:
console.log(firstName || lastName || nickName || "Anonymous"); // Chico

//Note || doesn't differentiate bewteen false, 0, empty string, null, undefined

let num = 0;

console.log(num || 10); // 10
console.log(num ?? 10); // 0