function checkBase(b,a){for(var e=numalph(),d=b.toString().split(""),c=0;c<d.length;c++)if(e[d[c]]>=a)return alert("One or more digits are larger than the base value.\nPlease enter a valid input/base combination"),!1;return!0}function numalph(){for(var b={},a=0;10>a;a++)b[a.toString()]=a;for(a=10;16>a;a++)b[String.fromCharCode(a+55)]=a;return b};

casper.test.begin("checkBase can reject digits that exceed their radix", 2, function suite(test) {
   
   test.assertEquals(checkBase("0102",3),true, "0102 is a valid number for base 3");
   test.assertEquals(checkBase("053A",2),false, "053A is not a valid number for base 2");
   test.done(); 
  
});