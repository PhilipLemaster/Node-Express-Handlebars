$(document).ready( function(){
    $(".devour_form").on("submit", function(event){
        event.preventDefault()
        var id = $(this).children(".burger_id").val();

        $.ajax({
            method: "PUT",
            url: "/api/burgers/" + id
        
        }).then(function(){
            location.reload()
        })
    });
});

$(document).ready( function(){
    $(".delete_form").on("submit", function(event){
        event.preventDefault()
        var id = $(this).children(".burger_id").val();

        $.ajax({
            method: "DELETE",
            url: "/api/burgers/" + id
        
        }).then(function(){
            location.reload()
        })
    });
});