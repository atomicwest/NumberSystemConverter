// 1. decimal to other base system
// 2. other base system to decimal
// 3. other base system to other base system

var input = 23
var base = 10

//------------------------------------------------------
// 1. decimal to other base system
// inval is starting number, sys is the output number system
function fromDecimal(inval, sys){

  //force default system
  if (sys<=1 || sys==undefined){ sys = 2 }

  var output = ""
  var nextval = inval
  var digit

  while (nextval!=0){
    digit = nextval%sys
    if (digit > 9) {
      digit = String.fromCharCode(55 + digit)
    }
    output = digit.toString() + output
    nextval = Math.floor(nextval/sys)
  }

  return output

}


//------------------------------------------------------
// 2. other base system to decimal
// orig is the base system of the input inval
function toDecimal(inval, orig){

  //force default system
  if (orig<=1 || orig==undefined){ orig = 2 }

  var digits = inval.toString().split("").reverse().join("")
  var total = 0

  for(var i=0; i<digits.length; i++){
    if (digits[i] < 10){
        total += parseInt(digits[i]) * Math.pow(orig,i)
    } else if (typeof(digits[i])=="string"){
        total += digits[i].charCodeAt() * Math.pow(orig,i)
    }
  }

  return total.toString()

}

//------------------------------------------------------
// 3. other base system to other base system
// orig is the starting base, outsys is the output base
function toOther(){

  var inval = parseInt(document.getElementById("convfrom").value)
  var orig = parseInt(document.getElementById("origbase").value)
  var outsys = parseInt(document.getElementById("endbase").value)
  var output

  //force default systems
  if (orig<=1 || orig==undefined){ orig = 2 }
  if (outsys<=1 || outsys==undefined){ outsys = 2 }

  var convert
  if (orig==10){
    output = fromDecimal(inval, outsys)
  } else if (orig<=0) {
    return
  } else {
    convert = parseInt(toDecimal(inval,orig))
    output = fromDecimal(convert,outsys)
  }

  document.getElementById("testarea").innerHTML = "the function is kind of running"
  document.getElementById("result").innerHTML = output

}
