const accountId = 144553
let accountEmail = "singh11@gmail.com"
var accountPassword = "12345"
accountCity = "Ghaziabad"
let accountState;

// accountId = 2 // not allowed


accountEmail = "mohit10@gmail.com"
accountPassword = "21212121"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])