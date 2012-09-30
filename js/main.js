(function() {

  var images = $(".main-image-container .image");

  var changeImage = function(index) {

    setTimeout(function() {
        images.addClass('transparent');
        $(images[index]).removeClass('transparent');

        var next = index + 1;
        if(next > images.length - 1) {
          next = 0;
        }
        changeImage(next);
      }, 10000);

  };

  changeImage(0);

  $(".show-map").click(function(e) {
    $(this)
      .addClass('hidden')
      .closest('aside')
      .find('.map')
      .removeClass('hidden')
      .append('<iframe width="100%" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=370+Queens+Parade,+Fitzroy+North,+Victoria,+Australia&amp;aq=0&amp;oq=370+queens+pde+fit&amp;sll=37.0625,-95.677068&amp;sspn=56.899383,103.095703&amp;t=m&amp;ie=UTF8&amp;hq=&amp;hnear=370+Queens+Parade,+Fitzroy+North+Victoria+3068,+Australia&amp;z=14&amp;ll=-37.787711,144.991536&amp;output=embed"></iframe><br /><small><a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=370+Queens+Parade,+Fitzroy+North,+Victoria,+Australia&amp;aq=0&amp;oq=370+queens+pde+fit&amp;sll=37.0625,-95.677068&amp;sspn=56.899383,103.095703&amp;t=m&amp;ie=UTF8&amp;hq=&amp;hnear=370+Queens+Parade,+Fitzroy+North+Victoria+3068,+Australia&amp;z=14&amp;ll=-37.787711,144.991536" style="color:#0000FF;text-align:left">View Larger Map</a></small>');
    e.preventDefault();
  });

})();
