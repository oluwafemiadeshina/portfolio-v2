function openNav() {
    document.getElementById("myNav").style.width = "100%";

  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  $(document).ready(function(){
    $(".testimonial .indicators li").click(function(){
      var i = $(this).index();
      var targetElement = $(".testimonial .tabs li");
      targetElement.eq(i).addClass('active');
      targetElement.not(targetElement[i]).removeClass('active');
              });
              $(".testimonial .tabs li").click(function(){
                  var targetElement = $(".testimonial .tabs li");
                  targetElement.addClass('active');
                  targetElement.not($(this)).removeClass('active');
              });
          });
  $(document).ready(function(){
      $(".slider .swiper-pagination span").each(function(i){
          $(this).text(i+1).prepend("0");
      });
  });
  //scrolling feature

  let mybutton = document.getElementById("Backtotop");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
      
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop >= 21) {
      mybutton.style.display = "block";

    } else {
      // console.log(document.documentElement.scrollTop);
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  //Photography tab
  let badge = document.querySelectorAll(".badge");
  console.log(badge);
  badge.addEventListener('click', function(e) {
    e.preventDefault(); 
    alert("hello");
  });

  loadEventListeners();

function loadEventListeners() {
  badge.addEventListener('click', photo_Category);
}

function photo_Category(e){
  e.preventDefault();
  alert("hello");
}