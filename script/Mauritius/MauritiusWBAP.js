$(function() {
    $.ajax({
    "url": "http://api.worldbank.org/v2/countries/MUS/indicators/SE.TER.ENRL?date=2009:2015",
    "type": "get",
    "dataType": "xml",
    "success": function(data) {

       var value =  data.getElementsByTagName("wb:value");
       var date = data.getElementsByTagName("wb:date");
         
       var wrapper = $('#wrapperWBAP');
       
       wrapper.append('<h2>Chart of Enrolment in tertiary education, All programmes.</h2>');
       for (var i = 0; i < date.length; i++){
              
        if(value[i].innerHTML ===""){
            wrapper.append('<div class="metric" style="width:90%">' + date[i].innerHTML + '<span class="metric-value">' + ' UNAVAILABLE' + '</span> </div>');
        }else if (value[i].innerHTML < 100 && value[i].innerHTML !="" || value[i].innerHTML > 100) 
        { 
            if(value[i].innerHTML <= 10){
                wrapper.append('<div class="metric" style="width:13%">' + date[i].innerHTML + '<span class="metric-value"> ' + value[i].innerHTML + '% </span> </div>');
            }else if(value[i].innerHTML <= 20){
                wrapper.append('<div class="metric" style="width:15%">' + date[i].innerHTML + '<span class="metric-value"> ' + value[i].innerHTML + '% </span> </div>');
            }else if(value[i].innerHTML <= 30){
                wrapper.append('<div class="metric" style="width:25%">' + date[i].innerHTML + '<span class="metric-value"> ' + value[i].innerHTML + '% </span> </div>');
            }else if(value[i].innerHTML <= 40){
                wrapper.append('<div class="metric" style="width:35%">' + date[i].innerHTML + '<span class="metric-value"> ' + value[i].innerHTML + '% </span> </div>');
            }else if(value[i].innerHTML <= 50){
                wrapper.append('<div class="metric" style="width:45%">' + date[i].innerHTML + '<span class="metric-value"> ' + value[i].innerHTML + '% </span> </div>');
            }else if(value[i].innerHTML <= 60){
                wrapper.append('<div class="metric" style="width:55%">' + date[i].innerHTML + '<span class="metric-value"> ' + value[i].innerHTML + '% </span> </div>');
            }else if(value[i].innerHTML <= 70){
                wrapper.append('<div class="metric" style="width:65%">' + date[i].innerHTML + '<span class="metric-value"> ' + value[i].innerHTML + '% </span> </div>');
            }else if(value[i].innerHTML <= 80){
                wrapper.append('<div class="metric" style="width:75%">' + date[i].innerHTML + '<span class="metric-value"> ' + value[i].innerHTML + '% </span> </div>');
            }else if(value[i].innerHTML <= 90){
                wrapper.append('<div class="metric" style="width:85%">' + date[i].innerHTML + '<span class="metric-value"> ' + value[i].innerHTML + '% </span> </div>');     
            }else if(value[i].innerHTML <= 100 || value[i].innerHTML > 100 ){
                wrapper.append('<div class="metric" style="width:90%">' + date[i].innerHTML + '<span class="metric-value"> ' + value[i].innerHTML + '% </span> </div>');     
            }
        
        }

    }
       
    }
  });
});


