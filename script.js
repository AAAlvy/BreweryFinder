$(document).ready(function(){
  var denver={lat: 39.7576354, lng: -105.0092036}
  var map = new google.maps.Map(document.getElementById('map'), {
           zoom: 14,
           center: denver
         });


//   mapboxgl.accessToken = 'pk.eyJ1IjoiYWx2eW1hcHMiLCJhIjoiY2oyczFudDJzMDAwbzJxcGZ6cGk5NTJmOCJ9.RKuabJSVUUBK5rYyrqfYlg';
//   var map = new mapboxgl.Map({
// container: 'map',
// style: 'mapbox://styles/mapbox/traffic-night-v2',
// center: [-105.0092036, 39.7576354],
// zoom: 13
// });


// var breweries= {
//   "type": "Feature",
//   "geometry": {
//     "type": "Point",
//     "coordinates": [lat, lng ]
//   },
//   "properties": {
//     "name": Brewery Name
//   }
// }

$("#submit").click(function(){
  event.preventDefault();
  var radius = $("#drinking_radius").val()
  console.log(radius)
  $.getJSON('https://beer-search.now.sh/?lat=39.7392358&lng=-104.990251&radius=' + radius).then(function(results){
    console.log(results)
    for(let i=0; i < results.data.length; i++){
      let breweryNames = "<p><a target='_blank' href='"+ results.data[i].website+"'>" + results.data[i].brewery.name + "</a></p>";
      $(".results").append(breweryNames)
      // brewery names
      let location = {lat: results.data[i].latitude, lng: results.data[i].longitude};
      console.log(location)
        addMarker(location, results.data[i].brewery);
    }
  })
  $(".results").empty(); //This will be search function #1, find breweries by ****** original one sent by CJ
});
// var breweryNames = "<p>" + results.data[i].brewery.name + ", latitude " + results.data[i].latitude + " longitude " + results.data[i].longitude + "</p>"

function addMarker(location, brewery) {
  let icon= "https://icons.iconarchive.com/icons/dapino/beach/48/beer-icon.png"
  if(brewery.images) {
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
