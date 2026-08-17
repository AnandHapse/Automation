
//Multiple Condition

let  Age = 26
// Age > 18 -> he will go goa, else not else
// drink > 25 yes, else no

let Is_Anand_Enjoy = Age > 18 ? (Age > 26 ? "Drink" : "No") : false;
console.log(Is_Anand_Enjoy);
console.log(`Can Anand Drink? : ${Is_Anand_Enjoy}`);

// IMP Question 1
let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";



console.log(`Status ${statusCode}: ${category}`);
console.log("Status :" + statusCode, category);