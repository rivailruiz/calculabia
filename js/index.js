

$('#calcular').click(function(){
  var val1 = parseFloat($("#val1").val());
  var val2 = parseFloat($("#val2").val());
  var val3 = parseFloat($("#val3").val());
  
  
  
  var formula = Math.sqrt(((((val1+val2+val3)/100)*2)/9.8))*100;
  console.log(formula);
  $('strong span').text(formula);
});