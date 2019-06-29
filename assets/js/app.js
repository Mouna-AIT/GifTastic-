$(document).ready(function(){

    var displayedButtons = ["Funny clown", "scary clown", ""];

    function displayImg(){

        $("#display-images").empty();
        var input = $(this).attr("data-name");
        var limit = 11;
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&limit=" + limit + "&api_key=dc6zaTOxFJmzC";   

      
