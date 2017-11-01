

$('#calcular').click(function(){
  var val1 = parseInt($("#val1").val());
  var val2 = parseInt($("#val2").val());
  var val3 = parseInt($("#val3").val());
  
  
  
  var formula = Math.sqrt(((((val1+val2+val3)/100)*2)/9.8))*100;
  console.log(formula);
  $('strong span').text(formula);
});