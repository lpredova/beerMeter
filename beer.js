(function(){
  var c = document.getElementById('bubbles');  
  randomN = function(start, end){return Math.random()*end+start;},i = 0,
  
  calculatePercentage = function(){
      var beersLeft = parseInt(document.getElementById('beersLeft').textContent);
      var beersTotal = parseInt(document.getElementById('beersTotal').textContent);
      
      var percent = Math.round((beersLeft / beersTotal) * 100) ;
      var percentage = percent+ '%';
      document.getElementById('percentage').innerHTML = percentage ;      
      document.getElementById('beer').setAttribute('style','height:' + percentage);
      document.title = percentage + ' of beer';
      
      if(percent < 50){
          document.getElementById('top').style.display = 'none';
          document.getElementById('beer').className = 'beerFoamless';
      }
  },
  
  generateBubble = function(){
      	if(i < 20){
          var el = document.createElement('div'),size = randomN(5, 10);
          el.setAttribute('style','width: ' + size + 'px; height: ' + size + 'px; left:'+randomN(1, window.innerWidth-(size+4) ) + 'px;');
          c.appendChild(el);
          i++;
        } else {
          clearInterval(inter);
        }
      };

  generateBubble();
  calculatePercentage();
  var inter = setInterval(generateBubble, 500);
})();
