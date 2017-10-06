$(document).keydown(function(e) {

    switch (e.which) {
    case 37:
        $("#gandalf").stop().animate({
            left: '-=15'
        }); //left arrow key
        break;
    case 38:
        $("#gandalf").stop().animate({
            top: '-=15'
        }); //up arrow key
        break;
    case 39:
        $("#gandalf").stop().animate({
            left: '+=15'
        }); //right arrow key
        break;
    case 40:
        $("#gandalf").stop().animate({
            top: '+=15'
        }); //bottom arrow key
        break;
    }
});