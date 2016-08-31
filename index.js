
var a = Number(prompt('Enter val a'));
var b = Number(prompt('Enter val b'));
var c = Number(prompt('Enter val c'));

    function myD (a,b,c) {
        var D = (b*b)-(4*a*c);
        if (D > 0){
           var x1 = (-b + Math.sqrt(D))/(2*a);
           var x2 = (-b - Math.sqrt(D))/(2*a);
            return {
                x1:x1, 
                x2:x2
            };
        } else if (D === 0){
          var x = -b/(2*a);
            return x;
        } else {
           alert ('Дійсних коренів немає');
        }
       
}
var result = myD(a,b,c)
document.write('x1 = ' + result.x1);
document.write('<br>');
document.write('x2 = ' + result.x2);





 