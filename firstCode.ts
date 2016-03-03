/*
@Topic: Boolean
@Description: The most basic datatype is the simple true/false value, 
				which JavaScript and TypeScript (as well as other languages) call a 'boolean' value.
*/


var isDone: boolean = false;
var height: number = 6;
var name: string = "Avnesh Shakya";
var list: Array<number> = [1, 2, 3, ];
var stringList: Array<any> = ['avnesh', "sdff", 12, 23];

enum Color { Red, Green, Blue };
var c: Color = Color.Green;
console.log(c);


var test: any = 4;
test = "avnesh shakya";


var anyObj: any[] = [1, 'arg1', 'arg2'];
anyObj[1] = 100;
anyObj['arg1'] = 'avnesh shakya';


function warnUser(): void {
    alert("This is my warning message");
}



// test stst ats 
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

var myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);