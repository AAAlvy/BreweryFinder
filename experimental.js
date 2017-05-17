//name of brewery

$("#submit").click(function(){
  event.preventDefault();
  var radius = $("#drinking_radius").val()
  console.log(radius)
  $.getJSON('https://beer-search.now.sh/?lat=39.7392358&lng=-104.990251&radius=' + radius).then(function(results){
    console.log(results)
    for(var i=0; i < results.data.length; i++){
      var breweryNames = "<p>" + results.data[i].brewery.name + " latitude " + results.data[i].latitude + " longitude " + results.data[i].longitude + "</p>";
      $(".results").append(breweryNames)
    }
  })
  $(".results").empty();
