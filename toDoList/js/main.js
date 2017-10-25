$(document).ready(function(){


    $("#submit-button").on("click", function(){

        var userInput = $("#listfield").val();

        $("#list").append('<li>' + userInput + '</li>');

        $("#listfield").val('');

    });

    $("#clear-list-button").on("click", function(){

        $('li').remove();

    });

});
