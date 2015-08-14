$(document).ready(function() {

    // Function to handle changes based on window width
    function checkWidth() {
        var page = $('body');       
        var topBar = $('#top-bar');
        var widthSize = 768;
    

        if ($(window).width() < widthSize) {
            page.addClass('mobile');           
            topBar.addClass('inactive');
            
        } else {
            page.removeClass('mobile');
            topBar.removeClass('inactive');
        }
    }

    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);    


    for(var i = 0; i < 5; i++) {
        function addAnother() {
            var newsList = $('#list');       

            newsList.append('<li class="listItem">\
                <div class="row new"><span class="icon-page"></span>\
                <div class="wrapper-news"><h5 class="status">Nuevo</h5>\
                <p class="news">Lorem ipsum dolor sit amet.</p>\
                <span class="icon-smile"></span>\
                <span class="icon-smile"></span>\
                <span class="icon-smile"></span>\
                </div></div></li>');
        }

        $("#ctaLoad").click(function(){        
            addAnother();
        }); 
    }   



    function openMenu() {
        var leftMenu= $('#leftMenuPanel');

        leftMenu.addClass('open');         
    }

    $("#menuButton").click(function(){        
        openMenu();
        console.log('Menu opened');
    }); 


});