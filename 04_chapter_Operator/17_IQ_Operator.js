// Equality Operator (Question1)
console.log(5 == "5");
console.log(5 != "5");
console.log(5 != "5"); // lose 
console.log(5 !== "5");  // strict

// Ternary Operator with strict equality operator (question2)
let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "✅ PASS" : "❌ FAIL";
console.log(testResult);

// Ternary Operator with strict equality operator (question3)
let environment = "staging";
let baseUrl = environment === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
console.log(baseUrl);

// Ternary Operator with strict equality operator (boolean) (question4)
let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in:", browserMode, "mode");

// Question5
let responseTime = 850;  // ms
let sla = 1000;          // ms (Service Level Agreement)
let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response: ${responseTime}ms — ${slaStatus}`);
// Template Literal (```)
console.log(`What is the SLA time ? - ${sla}`);

// Question6
let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);