var str1 = "welcome to javascript";
document.getElementById('head1').innerHTML= str1;
//document.getElementById('head1').innerHTML= str.length;
console.log('str1 value-->', str1);
console.log('string length -->',str1.length);
console.log('char at-->',str1.charAt(5));
//alert(str1.length);
//alert(str1.charAt(19));
function Palendrome() {
    var checkstr = document.getElementById('strreverse').value;
    var reversethestr='';
    for (var i = checkstr.length - 1; i >= 0; i--) {
          reversethestr=reversethestr + checkstr[i];
      };
      if (checkstr== reversethestr) {
        alert('palindrome');
      }
      else {
        alert('not a palindrome');
      }
}