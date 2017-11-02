

$('#calcular').click(function(){
  var val1 = parseFloat($("#val1").val());
  var val2 = parseFloat($("#val2").val());
  var val3 = parseFloat($("#val3").val());
  
  var media = ((val1+val2+val3)/3)/100;


  var formula = Math.sqrt((2*media)/9.8);
  // var formula = Math.sqrt((((((val1+val2+val3)/3)/100)*2)/9.8))*1000;
  console.log(formula);
  $('strong span').text(formula);
});