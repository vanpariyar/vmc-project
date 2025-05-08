 var menuButton = document.getElementById('hamburger');
 var cancelButton = document.getElementById('hamburger');
 var navBar = document.getElementsByClassName('nav-bar');
 console.log(navBar)


 menuButton.addEventListener( 'click',function(e){
      navBar[0].style.display = 'block';
      cancelButton.addEventListener( 'click',function(e){
          navBar[0].style.display = 'block';
 } );
});

