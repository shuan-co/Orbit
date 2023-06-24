document.addEventListener('DOMContentLoaded', (event) => {
    function createStars(elementId, numStars) {
      var starContainer = document.getElementById(elementId);
      for(var i = 0; i < numStars; i++) {
        var star = document.createElement("div");
        star.className = "star";
        var size = Math.floor(Math.random() * 3) + 'px';
        var x = Math.floor(Math.random() * 110) + 'vw';
        var y = Math.floor(Math.random() * 110) + 'vh';
        star.style.height = size;
        star.style.width = size;
        star.style.left = 'calc(' + x + ' - 5vw)';
        star.style.top = 'calc(' + y + ' - 5vh)';
        starContainer.appendChild(star);
      }
    }
  
    createStars('stars-small', 100);
    createStars('stars-medium', 50);
    createStars('stars-big', 25);
  
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
  });
  