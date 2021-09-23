// ? Task:Log Time from Date


// Solution 1
const timeFromDate = date => date.toTimeString().slice(0, 8);

console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0))); 
console.log(timeFromDate(new Date())); 
// Result: "17:30:00"
// current time

// ! Explanation: We can log time, in the format hour::minutes::seconds from a given date.
