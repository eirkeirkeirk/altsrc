(function() {
  var myLatlng = new google.maps.LatLng(45.50565,-122.655726);

  function initializeMap() {
    var mapOptions = {
      zoom: 15,
      center: myLatlng,
      scrollwheel: false,
      draggable: false,
    }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var icon = {
      url: 'Content/Images/map-icon.png'
    };

    var marker = new google.maps.Marker({
      position: map.getCenter(),
      icon: icon,
      map: map,
    });

    google.maps.event.addListener(marker, 'click', function () {
      window.location.href = 'https://maps.google.com/maps?q=Altsource+Inc,+Southeast+10th+Avenue,+Portland,+OR&hl=en&ll=45.505685,-122.65156&spn=0.016948,0.019827&sll=45.505685,-122.656002&sspn=0.016948,0.010943&oq=AltSource,+Inc.&t=m&z=16&iwloc=A';
    });

    function recenter() {
      map.setCenter(myLatlng);
    };

    google.maps.event.addDomListener(window, 'resize', recenter);
  }

  google.maps.event.addDomListener(window, 'load', initializeMap);
})();








