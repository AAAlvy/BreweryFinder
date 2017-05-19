$(document).ready(function() {
  var denver = {
    lat: 39.7576313,
    lng: -105.0092036
  }
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: denver
  });
  map.setMapTypeId('hybrid'); //styles the map

  // var url="https://beer-search.now.sh/?lat=" + latitude + "&lng=" + longitude + "&radius="
  // navigator.geolocation.getCurrentPosition(function(position) {
  //   latitude = position.coords.latitude
  //   longitude = position.coords.longitude
  // });


  $("#submit").click(function() {
    event.preventDefault();
    var radius = $("#drinking_radius").val()
    console.log(radius)
    $.getJSON('https://beer-search.now.sh/?lat=39.7576313&lng=-105.0092036&radius=' + radius).then(function(results) {
      console.log(results)
      for (let i = 0; i < results.data.length; i++) {
        let breweryNames = "<p><a class='black-text' target='_blank' href='" + results.data[i].website + "'>" + results.data[i].brewery.name + "</a></p>";
        $(".results").append(breweryNames)
        // brewery names
        let location = {
          lat: results.data[i].latitude,
          lng: results.data[i].longitude
        };
        console.log(location)
        addMarker(location, results.data[i].brewery);
      }
    })
    $(".results").empty(); //This will be search function #1, find breweries by ****** original one sent by CJ
  });
  // var breweryNames = "<p>" + results.data[i].brewery.name + ", latitude " + results.data[i].latitude + " longitude " + results.data[i].longitude + "</p>"

  function addMarker(location, brewery) {
    let icon = "https://icons.iconarchive.com/icons/dapino/beach/48/beer-icon.png"
    if (brewery.images) {
      icon = brewery.images.icon
    }

    var marker = new google.maps.Marker({
      position: location,
      map: map,
      icon: icon,
      // icon:
    });

  }

  // })
  // $("#submit").click(function(){
  //   event.preventDefault();
  //   var radius = $("#drinking_radius").val()
  //   console.log(radius)
  //   $.getJSON('https://beer-search.now.sh/get-breweries?lat=39.7392358&lng=-104.990251&radius=' + radius).then(function(results){
  //     console.log(results)
  //     for(var i=0; i < results.data.length; i++){
  //       var breweryNames = "<p>" + results.data[i].brewery.name + " latitude " + results.data[i].latitude + " longitude " + results.data[i].longitude + "</p>";
  //       $(".results").append(breweryNames)
  //     }
  //   })
  //   $(".results").empty();
});
