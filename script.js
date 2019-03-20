var hasBlurred = false;
$(window).blur(function() {
        document.title = "already bored?";
        hasBlurred = true;
    });
$(window).focus(function() {
    if(hasBlurred == true){
        document.title = "welcome back!"
    } else {
        document.title = "felix gramell";
    }
});


