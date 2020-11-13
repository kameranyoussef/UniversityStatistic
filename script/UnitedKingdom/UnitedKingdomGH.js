var Request = new XMLHttpRequest();
Request.open('GET','https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json');
Request.onload = function()
{
    var Data = JSON.parse(Request.responseText); 

    var UnitedKingdomGH=$(Data).filter(function (i,n){return n.country==='United Kingdom'});
      var wrapper = $('#wrapperGH'), container;
      for (var i = 0; i < UnitedKingdomGH.length; i++){

        container = $('<div class="Uni"></div>');
         
        wrapper.append(container);
        container.append('<h2> Name: ' + UnitedKingdomGH[i].name +'</h2>');
        container.append('<h2> Country: ' + UnitedKingdomGH[i].alpha_two_code +', '+ UnitedKingdomGH[i].country +'</h2>');
        container.append('<a href="' + UnitedKingdomGH[i].web_pages +'">Visit Website</a>');
        container.append('<br><br>');
      }

};
Request.send();


