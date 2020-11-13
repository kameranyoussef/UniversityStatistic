var Request = new XMLHttpRequest();
Request.open('GET','https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json');
Request.onload = function()
{
    var Data = JSON.parse(Request.responseText); 

    var MonacoGH=$(Data).filter(function (i,n){return n.country==='Mauritius'});
      var wrapper = $('#wrapperGH'), container;
      for (var i = 0; i < MonacoGH.length; i++){

        container = $('<div class="Uni"></div>');
         
        wrapper.append(container);
        container.append('<h2> Name: ' + MonacoGH[i].name +'</h2>');
        container.append('<h2> Country: ' + MonacoGH[i].alpha_two_code +', '+ MonacoGH[i].country +'</h2>');
        container.append('<a href="' + MonacoGH[i].web_pages +'">Visit Website</a>');
        container.append('<br><br>');
      }

};
Request.send();


