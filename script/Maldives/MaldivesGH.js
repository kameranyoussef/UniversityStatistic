var Request = new XMLHttpRequest();
Request.open('GET','https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json');
Request.onload = function()
{
    var Data = JSON.parse(Request.responseText); 

    var MaldivesGH=$(Data).filter(function (i,n){return n.country==='Maldives'});
      var wrapper = $('#wrapperGH'), container;
      for (var i = 0; i < MaldivesGH.length; i++){

        container = $('<div class="Uni"></div>');
         
        wrapper.append(container);
        container.append('<h2> Name: ' + MaldivesGH[i].name +'</h2>');
        container.append('<h2> Country: ' + MaldivesGH[i].alpha_two_code +', '+ MaldivesGH[i].country +'</h2>');
        container.append('<a href="' + MaldivesGH[i].web_pages +'">Visit Website</a>');
        container.append('<br><br>');
      }

};
Request.send();


