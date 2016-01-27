function initialize() {
  var myLatlng = new google.maps.LatLng(45.50565,-122.655726);
  var mapOptions = {
    zoom: 15,
    center: myLatlng,
    scrollwheel: false,
    draggable: false,
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'AltSource',
      url: 'www.google.com'
  });
  
  marker.setMap(null);
  
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
}

google.maps.event.addDomListener(window, 'load', initialize);





  
