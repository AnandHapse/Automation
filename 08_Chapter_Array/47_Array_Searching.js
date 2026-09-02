//Searching

let results = ["pass", "fail", "pass", "error", "fail"];

// indexOf — returns first index, or -1 if not found

results.indexOf("fail"); //1 return index of the first occurrence of the value
results.indexOf("skip");  // -1 return -1 if the value is not found

// lastIndexOf — searches from the end
results.lastIndexOf("fail"); // 4 return index of the last occurrence of the value

// includes — returns boolean
results.includes("error"); // true return true if the value is found
results.includes("skip"); // false return false if the value is not found