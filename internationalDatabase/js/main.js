
$.ajax({
  url:"https://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS=NO&time=2012&SEX=0",
  success:function(d){
    console.log("works.");
    console.log(d);
    d.forEach(function(el){
    $("ol").append("<li>"+el[2]+": "+el[3]+"</li>")
    })
    $.ajax({
      url:"https://data.nasa.gov/resource/gvk9-iz74.json",
      success:function(d){
        console.log(d);
      },
      error:function(){
        console.log("nested APIs didn't work.")
      }
    })
  },
  error:function(){
    console.log("woops.");
  }
});
