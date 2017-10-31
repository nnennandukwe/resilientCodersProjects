
$.ajax({
  url:"http://thecatapi.com/api/categories/list",
  success:function(d){
    console.log("works.");
    console.log(d);
  },
  error:function(){
    console.log("woops.");
  }
});
