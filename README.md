# Javascript-training
this repository is just for training Javascript, to get deep knowledge of it


## JavaScript - Errors and Exception Handling

Errors can happen and in JavaScript, they do happen most of the time! There are multiple causes that show this annoying red message:

1. Syntax error: we can spend time reviewing our code and we never realized that there was a missing semicolon or brackets.
2. Range error: this error is out of range or undefined. It can be an invalid date or an invalid array length.
3. Reference error: this error occurs when we assign a value to a variable that doesn’t exist. It could be an undefined x or assignment to an undeclared variable x.
4. Type error: there’s an error when the value is unexpected type.

So, when that happens, the code doesn’t run and it’s stuck. How can we fix these errors? With this!

**Try... Catch can save the code**

When an error occurs, the JavaScript code stops running and shows an error message. Try… catch is a block of code and it will be the solution.

We use try when testing a block of code to see if there is an error during its execution. Then, the catch statement will be executed in case there is an error. The err from catch(err) — can be named as you preferred — defines an error object and provide details of how to handle this error. When the catch registers an error, we will use console.error() instead of console.log(). This is the correct way in order to report an error and add it to the error list which occurs on the page.

When there is an error, JavaScript stops running and it throws an exception or error. The error object can have two properties:

Error name can return different values:

1. Eval Error has occurred in the eval() function. However, new Javascript versions don’t use this error. Instead, we can use SyntaxError.
2. Range Error: when there a number out of range.
3. Reference Error: when a variable is not declared.
4. Syntax Error: when a syntax error occurs. It’s so typical to miss a semicolon for example.
5. Type Error: when a value is out of range because of the type of variable. For example, a number can’t be uppercase.
6. URI Error: when there’s an error in encodeURI() — Uniform Resource Identifier. URI is a sequence of characters which identifies the resources used by aweb technologies.

An error message provides information about the error.

If the error object is not needed, we can use catch{} instead of catch(err){}.

If we want that try… catch works, you must ensure the code is valid and runnable — no syntax error such as unmatched curly braces. Once it’s readable, the engine reads and runs the code. Then, it will execute the try… catch when it can’t understand this code.

```js
try {
 // code
} catch (err) {
 console.error(err.message);
}
```

This is an example of how we can use try…catch. This example calls a function which returns an array of months depending on the function’s previous value. If the value is not a month number between 1 and 12, it will throw an exception called ‘InvalidMonthNo’ and the catch block will convert the variable monthName to ‘unkown’.

```js
function getMonthName(mo) {
 mo = mo - 1;
 let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', ... 'Dec'];
 
 if (months[mo]) {
   return months[mo];
 } else {
   throw 'InvalidMonthNo';
 }
}

try {
  monthName = getMonthName(myMonth);
} catch (e) {
  monthName = 'unknown';
  logMyErrors(e);
}
```
