/*let n = parseInt(prompt('Enter n '));
function fibo(){
    let a = 1;
    let b = 1;
    for(let i=2; i<n; i++){
       let c=a+b;
        a=b;
        b=c;
    }
    return b;
    
}
alert(fibo());
console.log(fibo());*/
let n = parseInt(prompt('Enter n '))
function fibo(n) {
  return n <= 1 ? n : fibo(n - 1) + fibo(n - 2);
}
alert(fibo(n));
