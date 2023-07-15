(function () {
    var string1='This is a string with global scope';
    let string2='string created with block scope';
    const string3='this is a constant string never gets changed';
    console.log(string1.length);
	console.log(string2.length);
	console.log(string3.length);
 });