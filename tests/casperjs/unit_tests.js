function checkBase(b,a){for(var e=numalph(),d=b.toString().split(""),c=0;c<d.length;c++)if(e[d[c]]>=a)return alert("One or more digits are larger than the base value.\nPlease enter a valid input/base combination"),!1;return!0}function numalph(){for(var b={},a=0;10>a;a++)b[a.toString()]=a;for(a=10;16>a;a++)b[String.fromCharCode(a+55)]=a;return b};
function fromDecimal(d,e){for(var c="",b=parseInt(d),a;0!=b;)a=b%e,9<a&&(a=String.fromCharCode(55+a)),c=a.toString()+c,b=Math.floor(b/e);"0"==d&&(c="0");return c}function toDecimal(d,e){for(var c=numalph(),b=d.toString().toUpperCase().split("").reverse().join(""),a=0,f=0;f<b.length;f++)a+=c[b[f]]*Math.pow(e,f);return a.toString()};

casper.test.begin("checkBase() can reject digits that exceed their radix", 4, function suite(test) {
   
   test.assertEquals(checkBase("0102",3),true, "0102 is a valid number for base 3");
   test.assertEquals(checkBase("053A",2),false, "053A is not a valid number for base 2");
   test.assertEquals(checkBase("215qzx5",2),false, "checkBase() excludes inputs with characters above F");
   test.assertEquals(checkBase("CBA",2)==checkBase("CBA",2),true, "checkBase() is indiscriminate to capitalization");
   
   test.done(); 
  
});

casper.test.begin("fromDecimal() conversions", 4, function suite(test) {
   test.assertEquals(fromDecimal("6458961",16),"628E51", "Correctly converts from decimal to hexadecimal");
   test.assertEquals(fromDecimal("12115135",14),"18751CB", "Correctly converts from decimal to base 14");
   test.assertEquals(fromDecimal("26197",8),"63125", "Correctly converts from decimal to octal");
   test.assertEquals(fromDecimal("84436135",2),"101000010000110010010100111", "Correctly converts from decimal to binary");
   
   test.done();
});

casper.test.begin("toDecimal() conversions", 4, function suite(test) {
   test.assertEquals(toDecimal("628E51",16),"6458961", "Correctly converts from hexadecimal to decimal");
   test.assertEquals(toDecimal("18751CB",14),"12115135", "Correctly converts from base 14 to decimal");
   test.assertEquals(toDecimal("63125",8),"26197", "Correctly converts from octal to decimal");
   test.assertEquals(toDecimal("101000010000110010010100111",2),"84436135", "Correctly converts to binary to decimal");
   
   test.done();
});