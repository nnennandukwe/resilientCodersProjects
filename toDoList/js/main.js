$(document).ready(function(){


    $('.submit-button').on('click', function(){

        var userInput = $('input').val();

        $('ul').append('<li>' + userInput + '</li>')

        $('input').val('');

    });

    $('.clear-list-button').on('click', function(){

        $('li').remove();

    });

});
