// var hello = 'Hello World';
// alert(hello);
// document.write(hello);
// console.log(hello);

// var num = 10;
// var str = 'hello';
// var result = num + str;
// document.write(result);

// function sum (a, b){
//     var result = a + b;
//     return result;
    
// }

// function print(val){
//     document.write(val);
//     document.write('<br>');  
// }

// function lg(a, b){
//     if (a>b){
//       return a; 
//     } else {
//       return b; 
//     }
    
// }

// var var1 = 100;
//     var2 = 200;

// var result1 = sum (2, 3);
// var result2 = sum (var1, var2);
// print(result1);
// print(result2);

// print(lg(10,20));
// print(lg(-1,100));
// print(lg(-10,20));

var num = prompt('Enter val a');
 
    function myNum(a) {
        a = Math.sqrt(num);
        if (a > 0){
            document.write('Your result'+' '+ a);
        } else {
           document.write('Error');
        }
}
myNum();
