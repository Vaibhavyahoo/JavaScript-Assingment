
function calc() {
  var value1,value2,operator,result;
  value1 = document.getElementById('value1').value;
  value2 = document.getElementById('value2').value;
  operator = document.getElementById('operator').value;
  value1 = parseFloat(value1);
  value2= parseFloat(value2);
  document.getElementById("result").value=operation(value1,value2,operator);
}


function operation(value1,value2,operator){
  if (operator === "addition")
  {
  result = value1 + value2;
}
else if (operator === "subtraction")
{
  result = value1 - value2 ;
}
else if (operator === "multiplication")
{
  result = value1 * value2 ;
}
else if (operator === "division")
{
result = value1 / value2 ;
}
return  result;
}

/*function validate(value)
{
  if (value == null || value == "")
  {
   alert("requred field");
   return false;
  }
  else if (isNaN(value))
   {
    alert("required number ");
    return false;
  }
  else {
    return value ;
  }
}*/
