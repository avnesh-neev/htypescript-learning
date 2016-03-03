/*
@Topic: Any
@Description: We may need to describe the type of variables that we may not know when we are wriing the application.
        These values may come from dynamic content, eg from the user or 3rd party library.
        In these cases, we want to opt-out of type-checking and let the values pass through compile-time checks.
        To do so, we label these with the 'any' type:
*/
var notSure = 4;
notSure = "It can be a String";
notSure = true; // can be a boolean
/*
    ** The 'any' type is a powerful way to work with existing JavaScript,
        allowing you to gradually opt-in and opt-out of type-checking during compilation.

    ** The 'any' type is also handy if you know some part of the type,
        but perhaps not all of it.
        For example, you may have an array but the array has a mix of different types:
*/
var anyList = [1, true, "free"];
anyList[1] = 100;
anyList['free'] = 'Avnesh Shakya';
// But you cannot use key as default keyword like here:
// anyList[true] = 'Avnesh Shakya'    
//<= it will through "Error: An index expression argument must be of type 'string', 'number', 'symbol', or 'any'." 
