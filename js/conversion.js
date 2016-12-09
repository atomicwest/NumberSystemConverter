// 1 decimal to other base system
// 2 other base system to decimal
// 3 other base system to other base system

var input = 23
var base = 10

// 1 decimal to other base system
// inval is starting number, sys is the output number system
function fromdecimal(inval, sys){
  try {
    if(sys==undefined || sys<=1) {
      throw "base can't be zero"
      return
    }
  }
  catch(err) {
    console.log(err)
    return
  }

  var output = ""
  var nextval = inval
  var digit

  while (nextval!=0){
    digit = nextval%sys
    output = digit.toString() + output
    nextval = Math.floor(nextval/sys)
  }
  return output
}

console.log(fromdecimal(29,2))


// 2 other base system to decimal
// orig is the base system of the input inval
function todecimal(inval, orig){
  var digits = inval.toString().split("").reverse().join("")
  var total = 0

  for(var i=0; i<digits.length; i++){
    total += parseInt(digits[i]) * Math.pow(orig,i)
  }

  return total.toString()
}

console.log(todecimal(11101,2))

// 3 other base system to other base system
// orig is the starting base, outsys is the output base
function toother(inval, orig, outsys){
  var convert
  if (orig==10){
    return fromdecimal(inval, outsys)
  } else if (orig<=0) {
    return
  } else {
    convert = parseInt(todecimal(inval,orig))
    return fromdecimal(convert,outsys)
  }
}

console.log(toother(25,8,2))
