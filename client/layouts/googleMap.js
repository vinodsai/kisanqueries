Template.map.onCreated(function() {
  GoogleMaps.load();
  GoogleMaps.ready('exampleMap', function(map) {
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance,
    });
  });
});
Template.map.helpers({
  exampleMapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(26.4685, 84.4433),
        zoom: 11
      };
    }
  }
});
