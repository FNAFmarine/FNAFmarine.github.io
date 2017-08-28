function changeView()
{
        var el = document.body;
        toggleFullscreen(el);
        $("#map").remove();
        $("#button").remove();
        $("#author").remove();
        var background = $("<div/>").appendTo("body");
        background.css({
"background-image":"url(images/thumb-1920-598236.png)",
"position":"absolute",
"top":"0px",
"left":"0px",
"width":"1920px",
"height":"1060px"
});

                                function toggleFullscreen (el) {
                                if(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement){
                                        if(document.exitFullscreen){
                                                document.exitFullscreen();
                                        }else if(document.mozCancelFullScreen){
                                                document.mozCancelFullScreen();
                                        }else if(document.webkitExitFullscreen){
                                                document.webkitExitFullscreen();
                                        }else if(document.msExitFullscreen){
                                                document.msExitFullscreen();
                                        }
                                }else{
                                        if(document.documentElement.requestFullscreen){
                                                el.requestFullscreen();
                                        }else if(document.documentElement.mozRequestFullScreen){
                                                el.mozRequestFullScreen();
                                        }else if(document.documentElement.webkitRequestFullscreen){
                                                el.webkitRequestFullscreen();
                                        }else if(document.documentElement.msRequestFullscreen){
                                                el.msRequestFullscreen();
                                        }
                                }
                        };  
}