/*
@Topic: Boolean
@Description: The most basic datatype is the simple true/false value,
                which JavaScript and TypeScript (as well as other languages) call a 'boolean' value.
*/
var isDone = false;
var height = 6;
var name = "Avnesh Shakya";
var list = [1, 2, 3,];
var stringList = ['avnesh', "sdff", 12, 23];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var test = 4;
test = "avnesh shakya";
var anyObj = [1, 'arg1', 'arg2'];
anyObj[1] = 100;
anyObj['arg1'] = 'avnesh shakya';
function warnUser() {
    alert("This is my warning message");
}
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
