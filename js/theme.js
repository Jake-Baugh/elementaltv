(function($) {
    "use strict";
    
    var urlparams = new URLSearchParams(window.location.search);
    
    $(document).ready(function(){
        
        
        var programme = urlparams.get('programme');
        $('#' + programme).modal('show');


        $('.modal').dblclick(function(e) {
            console.log("sd");
            $(this).modal('hide');
        });
        
        /*$(".video_post").click(function(){
            var vid = $(this).attr("data-vid");

            $(".wistia_embed").hide();
            $(".wistia_embed.wistia_async_"+vid).show();

            window._wq = window._wq || [];
    
            // pause all videos and move time to zero
            _wq.push({ id: "_all", onReady: function(video) {
              video.pause();
              video.time(0);
            }});  

             // start playing current video
            _wq.push({ id: vid, onReady: function(video) {
              //  video.play();
            }});      
          
        });*/


        /*// Gets the video src from the data-src on each button
        var videoSrc;  
        $('.video_post').click(function() {
            var $obj = $(this);
            videoSrc = $obj.data('vid').toString();
        });
        console.log(videoSrc);
        
        // when the modal is opened autoplay it  
        $('#myModal').on('shown.bs.modal', function (e) {
            
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src',videoSrc); 
        })
        
        
        // stop playing the youtube video when I close the modal
        $('#myModal').on('hide.bs.modal', function (e) {
            // a poor man's stop video
            $("#video").attr('src',videoSrc); 
        }) */

        /*----------------------------------------------------*/
        /*  Navigation Scroll
        /*----------------------------------------------------*/
        /*$(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            var window_width = $(window).width();
            if (scroll >= 100 ) {
                $(".navbar").addClass("navbar-fixed-top");
            } else {
                $(".navbar").removeClass("navbar-fixed-top");
            }
        });*/
        
        /*----------------------------------------------------*/
        /*  Post display
        /*----------------------------------------------------*/
        $('.postTypeFilter .postType2').on('click',function(){
            $('.video_post').removeClass('hidden');
            if( $(this).hasClass('active') ){}
            else{
                $('.video_post.postType2').addClass('hidden')
            }
        }); 
        $('.postTypeFilter .postType3').on('click',function(){
            $('.video_post').removeClass('hidden');
            if( $(this).hasClass('active') ){}
            else{
                $('.video_post.postType3').addClass('hidden')
            }
        }); 
        $('.postTypeFilter .postType4').on('click',function(){
            $('.video_post').removeClass('hidden');
            if( $(this).hasClass('active') ){}
            else{
                $('.video_post.postType4').addClass('hidden')
            }
        }); 
        $('.postTypeFilter .postType1').on('click',function(){
            $('.video_post').removeClass('hidden');
        }); 
        
        /*----------------------------------------------------*/
        /*  PopUps
        /*----------------------------------------------------*/
        $('a[href="login.html"],a[href="signup-popup.html"]').magnificPopup({
            type: 'ajax'
        });
        
        /*----------------------------------------------------*/
        /*  Ribbon Links Disable
        /*----------------------------------------------------*/
        $('.ribbon a[href="#"]').on('click',function(){
            return false
        });
        
        /*----------------------------------------------------*/
        /*  Post Page with Sidebar2's height Depend on Sidebar 3
        /*----------------------------------------------------*/
        $('.post_page_sidebar2').css( "min-height", function(){
            return $('.sidebar3').height() 
        });
        
        /*----------------------------------------------------*/
        /*  Sidebar1 each-widget minimum height based the widgets
        /*----------------------------------------------------*/
        $('.sidebar1 .widget').css( "min-height", function(){
            return Math.max( $('.sidebar1 .widget1').height(), $('.sidebar1 .widget2').height(), $('.sidebar1 .widget3').height(), $('.sidebar1 .widget4').height() ) + 16
        });
        
        /*----------------------------------------------------*/
        /*  footer each-widget minimum height based the widgets
        /*----------------------------------------------------*/
        $('.sidebar_footer .w_in_footer').css( "min-height", function(){
            return Math.max( $('.sidebar_footer .widget1').height(), $('.sidebar_footer .widget2').height(), $('.sidebar_footer .widget3').height(), $('.sidebar_footer .widget4').height() ) + 16
        });
        
        /*----------------------------------------------------*/
        /*  Category Filter Dropdown
        /*----------------------------------------------------*/

  
        $('.category_filter .dropdown-menu').find('a').on('click',function(e) {
            e.preventDefault();
            var concept = $(this).find('.filter_text').text();
            $('.category_filter .btn span.filter-option').text(concept);
            $('.category_filter .btn').addClass('active');
            $('.category_filter .dropdown-menu').find('.selected').removeClass('selected');
            $(this).parent().addClass('selected');
            if ( $('.category_filter .dropdown-menu li:first-child').hasClass('selected') ){
                $('.category_filter .btn').removeClass('active');
            }
        });

        $('.category_filter .dropdown-menu').on('mouseover', function(e) {

            
            if($('.category_filter').hasClass('open')) {
                $('.category_filter .dropdown-menu').on();
                $('.category_filter .dropdown-menu').css('pointer-events', 'auto');
            }
            else {
                $('.category_filter .dropdown-menu').css('pointer-events', 'none');
            }
      
    
        });

        $('.category_filter').on('click', function(e) {
            $('.category_filter .dropdown-menu').css('pointer-events', 'auto');
        });


        $('.dropdown-menu .filterType2').on('click',function(){
            $('.video_post').addClass('hidden');
            $('.video_post.filterType2').removeClass('hidden');
            if( $(this).hasClass('active') ){}
            else{
                $('.video_post.filterType2').removeClass('hidden')
            }
        }); 
        $('.dropdown-menu .filterType3').on('click',function(){
            $('.video_post').addClass('hidden');
            $('.video_post.filterType3').removeClass('hidden');
            if( $(this).hasClass('active') ){}
            else{
                $('.video_post.filterType3').removeClass('hidden')
            }
        }); 
        $('.dropdown-menu .filterType4').on('click',function(){
            $('.video_post').addClass('hidden');
            $('.video_post.filterType4').removeClass('hidden');
            if( $(this).hasClass('active') ){}
            else{
                $('.video_post.filterType4').removeClass('hidden')
            }
        }); 
        $('.dropdown-menu .filterType5').on('click',function(){
            $('.video_post').addClass('hidden');
            $('.video_post.filterType5').removeClass('hidden');
            if( $(this).hasClass('active') ){}
            else{
                $('.video_post.filterType5').removeClass('hidden')
            }
        }); 
        $('.dropdown-menu .filterType6').on('click',function(){
            $('.video_post').addClass('hidden');
            $('.video_post.filterType6').removeClass('hidden');
            if( $(this).hasClass('active') ){}
            else{
                $('.video_post.filterType6').removeClass('hidden')
            }
        }); 
        $('.dropdown-menu .filterType7').on('click',function(){
            $('.video_post').addClass('hidden');
            $('.video_post.filterType7').removeClass('hidden');
            if( $(this).hasClass('active') ){}
            else{
                $('.video_post.filterType7').removeClass('hidden')
            }
        }); 
        $('.dropdown-menu .filterType8').on('click',function(){
            $('.video_post').addClass('hidden');
            $('.video_post.filterType8').removeClass('hidden');
            if( $(this).hasClass('active') ){}
            else{
                $('.video_post.filterType8').removeClass('hidden')
            }
        }); 
        $('.dropdown-menu .filterType9').on('click',function(){
            $('.video_post').addClass('hidden');
            $('.video_post.filterType9').removeClass('hidden');
            if( $(this).hasClass('active') ){}
            else{
                $('.video_post.filterType9').removeClass('hidden')
            }
        }); 
        $('.dropdown-menu .filterType10').on('click',function(){
            $('.video_post').addClass('hidden');
            $('.video_post.filterType10').removeClass('hidden');
            if( $(this).hasClass('active') ){}
            else{
                $('.video_post.filterType10').removeClass('hidden')
            }
        }); 
        $('.dropdown-menu .filterType11').on('click',function(){
            $('.video_post').addClass('hidden');
            $('.video_post.filterType11').removeClass('hidden');
            if( $(this).hasClass('active') ){}
            else{
                $('.video_post.filterType11').removeClass('hidden')
            }
        }); 
        $('.dropdown-menu .filterType12').on('click',function(){
            $('.video_post').addClass('hidden');
            $('.video_post.filterType12').removeClass('hidden');
            if( $(this).hasClass('active') ){}
            else{
                $('.video_post.filterType12').removeClass('hidden')
            }
        }); 
        $('.dropdown-menu .filterType13').on('click',function(){
            $('.video_post').addClass('hidden');
            $('.video_post.filterType13').removeClass('hidden');
            if( $(this).hasClass('active') ){}
            else{
                $('.video_post.filterType13').removeClass('hidden')
            }
        }); 
        $('.dropdown-menu .filterType1').on('click',function(){
            $('.video_post').removeClass('hidden');
        }); 

        /*----------------------------------------------------*/
        /*  jScroll // Loading More Function
        /*----------------------------------------------------*/
        $('.content_video_posts').jscroll({
            loadingHtml: '<div class="clearfix"></div><div class="row m0 loadting_text"><i class="fa fa-refresh fa-spin"></i>loading ...</div>',
            nextSelector: 'a.load_more_videos:last',
            autoTrigger: false
        })
        
    });        
    
    if ($('.customer-logos')) {
        $('.customer-logos').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            dots: false,
                pauseOnHover: false,
                responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2
                }
            }]
        });
        }
    
    /*$(window).on('load', function() { // makes sure the whole site is loaded
		$('#status').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(350).css({'overflow':'visible'})
    })*/
    
})(jQuery);

function myFunction() {

    var input, filter, li, a, i, txtValue;
    input = $('.form-control');
    filter = input.val();

        li = $('.video_post');
        for (i = 0; i < li.length; i++) {
            
            a = li[i].getElementsByClassName("search-text")[0];
            
            txtValue = a.textContent || a.innerText;

            if (txtValue.indexOf(filter) > -1 || txtValue.toLowerCase().indexOf(filter) > -1 || txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "block";
       
            }
            else {
                li[i].style.display = "none";
            }
          }
}