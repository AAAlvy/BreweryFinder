$(document).ready(function(){
  mapboxgl.accessToken = 'pk.eyJ1IjoiYWx2eW1hcHMiLCJhIjoiY2oyczFudDJzMDAwbzJxcGZ6cGk5NTJmOCJ9.RKuabJSVUUBK5rYyrqfYlg';
  var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/traffic-night-v2',
center: [-105.0092036, 39.7576354],
zoom: 13
});

var breweries = {
  
}

$("#submit").click(function(){
  event.preventDefault();
  var radius = $("#drinking_radius").val()
  console.log(radius)
  $.getJSON('https://beer-search.now.sh/?lat=39.7392358&lng=-104.990251&radius=' + radius).then(function(results){
    console.log(results)
    for(var i=0; i < results.data.length; i++){
      var breweryNames = "<p>" + results.data[i].brewery.name + ", " + results.data[i].website + "</p>";
      $(".results").append(breweryNames)
    }
  })
  $(".results").empty(); //This will be search function #1, find breweries by ****** original one sent by CJ

});
// var breweryNames = "<p>" + results.data[i].brewery.name + ", latitude " + results.data[i].latitude + " longitude " + results.data[i].longitude + "</p>"

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
