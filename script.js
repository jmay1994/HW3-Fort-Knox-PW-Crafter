// Assignment Code

var generateBtn = document.querySelector("#generate");

var lengthinput = function () {
  var newlength = prompt(
    "Please enter a password length between 8 and 128 characters long!"
  );
  console.log(newlength);
  if (lengthcheck(parseInt(newlength))) {
    return newlength;
  } else {
    alert("Length isn't right, please try again!");
    return lengthinput();
  }
};
//lengthinput();
var charactertype = function () {
  var newchartype = prompt(
    "Please type which of the following you would like to include in your random password: lowercase, uppercase, numeric, and/or specialcharacters. Separate by commas",
    "Be precise with your typing and separate by commas with no spaces between the word and comma. For example: lowercase,uppercase,numeric,speicalcharacters"
  );
  console.log(newchartype);
  var foundNeededTypes = false;
  if (newchartype.split(",").includes("lowercase")) {
    foundNeededTypes = true;
  }
  if (newchartype.split(",").includes("uppercase")) {
    foundNeededTypes = true;
  }
  if (newchartype.split(",").includes("numeric")) {
    foundNeededTypes = true;
  }
  if (newchartype.split(",").includes("specialcharacters")) {
    foundNeededTypes = true;
  }
  if (foundNeededTypes === true) {
    return newchartype.split(",");
  } else {
    alert("Didn't find what we're looking for");
    return charactertype();
  }
};
//var charactertypes = [
//  (lowercaseL = "lowercase"),
//  (uppercaseU = "uppercase"),
//  (numericN = "numeric"),
//  (specialC = "specialcharacters"),
//];
//var newcharactertype = charactertype.split(",");
//var newcharactertypetostring = newcharactertype.toString();
var lengthcheck = function (x) {
  if (x >= 8 && x <= 128) {
    return true;
  }
  if (x <= 8 && x >= 128) {
    return false;
  }
};

//console.log(newcharactertypetostring);
var charactercheck = function () {
  for (let i = 0; i < newcharactertype.length; i++)
    if (charactertypes.indexOf(newcharactertypetostring));
  {
    //console.log("buckets");
  }
};
//charactercheck();
function finalcheck(x) {
  if (lengthcheck() != true) {
    return lengthcheck();
  }
  if (lengthcheck() == true) {
    confirm("Your inputs match the criteria");
    return true;
  }
}
//finalcheck();
//var newcharset = "";
//var lowercaselist = "abcdefghijklmnopqrstuvwxyz";
//var uppercaselist = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//var numericlist = "123456789";
//var specialcharacterslist = "!@#$%^&*()+={}";

var finalcharactercheck = function (x) {
  let newcharset = "";
  console.log("newcharset", newcharset);
  console.log("x", x);
  var lowercaselist = "abcdefghijklmnopqrstuvwxyz";
  var uppercaselist = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericlist = "123456789";
  var specialcharacterslist = "!@#$%^&*()+={}";
  var newx = x.toString();
  console.log("newx", newx);
  if (x.includes("lowercase")) {
    newcharset += lowercaselist;
    console.log("BUTTS", x.includes("lowercase"));
  }
  if (x.includes("uppercase")) {
    newcharset += uppercaselist;
    console.log("Stuff", x.includes("uppercase"));
  }
  if (x.includes("numeric")) {
    newcharset += numericlist;
    console.log("BIGBUTTS", x.includes("numeric"));
  }
  if (x.includes("specialcharacters")) {
    newcharset += specialcharacterslist;
    console.log("Special", x.includes("specialcharacters"));
  }
  console.log(x);
  console.log("newcharset", newcharset);
  return newcharset;
};
//finalcharactercheck("lowercase");
//finalcharactercheck();
var retVal = "";
function generatePassword() {
  var lastlength = lengthinput();
  var lastchar = charactertype();
  var charimport = finalcharactercheck(lastchar);
  for (let i = 0, n = charimport.length; i < lastlength; ++i) {
    retVal += charimport.charAt(Math.random() * n);
  }
  if (charimport === null) {
    lengthinput();
  }
  console.log("retVal", retVal);
  return retVal;
}
var promptCriteria = function () {
  var finallength = lengthinput();
  var finalchartype = charactertype();
  return finallength;
};
//promptCriteria();
//console.log(promptCriteria());
//generatePassword();
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

//var FINALPW = alert("Congrats! Here is your new password: " + retVal);
//console.log(FINALPW);
//audit();
writePassword();
