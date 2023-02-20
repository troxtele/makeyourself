/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/
function initPageSliders(){!function(e){"use strict";function a(e){e.find(".owl-prev, .owl-next").attr({role:"button",tabindex:"0"}),e.prepend(e.find(".owl-controls")),e.on("click",".owl-page, .owl-prev, .owl-next",(function(a){e.data("owlCarousel").stop()})),e.on("keydown",".owl-prev",(function(a){if(13==a.keyCode||32==a.keyCode)return e.data("owlCarousel").prev(),!1})),e.on("keydown",".owl-next",(function(a){if(13==a.keyCode||32==a.keyCode)return e.data("owlCarousel").next(),!1}))}function t(e){e.find(".owl-item").attr({"aria-hidden":"true"}),e.find(".owl-item.active").attr({"aria-hidden":"false"}),e.find(".owl-item a, .owl-item button, .owl-item input").attr({tabindex:"-1"}),e.find(".owl-item.active a, .owl-item.active button, .owl-item.active input").attr({tabindex:"0"})}e(".fullwidth-slider").owlCarousel({slideSpeed:350,singleItem:!0,autoHeight:!0,navigation:!0,lazyLoad:!0,addClassActive:!0,navigationText:['<span class="sr-only">Previous Slide</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27px" height="57px" viewBox="0 0 27 57" fill="currentColor" aria-hidden="true" focusable="false"><path d="M5.005,28.500 L27.000,54.494 L24.000,56.994 L0.005,28.500 L24.000,0.006 L27.000,2.506 L5.005,28.500 Z"/></svg>','<span class="sr-only">Next Slide</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27px" height="57px" viewBox="0 0 27 57" fill="currentColor" aria-hidden="true" focusable="false"><path d="M21.995,28.500 L-0.000,54.494 L3.000,56.994 L26.995,28.500 L3.000,0.006 L-0.000,2.506 L21.995,28.500 Z"/></svg>'],afterInit:a,afterAction:t}),e(".fullwidth-slider-fade").owlCarousel({transitionStyle:"fade",slideSpeed:350,singleItem:!0,autoHeight:!0,navigation:!0,lazyLoad:!0,addClassActive:!0,navigationText:['<span class="sr-only">Previous Slide</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27px" height="57px" viewBox="0 0 27 57" fill="currentColor" aria-hidden="true" focusable="false"><path d="M5.005,28.500 L27.000,54.494 L24.000,56.994 L0.005,28.500 L24.000,0.006 L27.000,2.506 L5.005,28.500 Z"/></svg>','<span class="sr-only">Next Slide</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27px" height="57px" viewBox="0 0 27 57" fill="currentColor" aria-hidden="true" focusable="false"><path d="M21.995,28.500 L-0.000,54.494 L3.000,56.994 L26.995,28.500 L3.000,0.006 L-0.000,2.506 L21.995,28.500 Z"/></svg>'],afterInit:a,afterAction:t}),e(".fullwidth-slider-fadezoom").owlCarousel({transitionStyle:"fadeUp",slideSpeed:350,singleItem:!0,autoHeight:!0,navigation:!0,lazyLoad:!0,addClassActive:!0,navigationText:['<span class="sr-only">Previous Slide</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27px" height="57px" viewBox="0 0 27 57" fill="currentColor" aria-hidden="true" focusable="false"><path d="M5.005,28.500 L27.000,54.494 L24.000,56.994 L0.005,28.500 L24.000,0.006 L27.000,2.506 L5.005,28.500 Z"/></svg>','<span class="sr-only">Next Slide</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27px" height="57px" viewBox="0 0 27 57" fill="currentColor" aria-hidden="true" focusable="false"><path d="M21.995,28.500 L-0.000,54.494 L3.000,56.994 L26.995,28.500 L3.000,0.006 L-0.000,2.506 L21.995,28.500 Z"/></svg>'],afterInit:a,afterAction:t}),e(".text-slider").owlCarousel({slideSpeed:350,singleItem:!0,autoHeight:!0,navigation:!0,lazyLoad:!0,addClassActive:!0,navigationText:['<span class="sr-only">Previous Slide</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27px" height="57px" viewBox="0 0 27 57" fill="currentColor" aria-hidden="true" focusable="false"><path d="M5.005,28.500 L27.000,54.494 L24.000,56.994 L0.005,28.500 L24.000,0.006 L27.000,2.506 L5.005,28.500 Z"/></svg>','<span class="sr-only">Next Slide</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27px" height="57px" viewBox="0 0 27 57" fill="currentColor" aria-hidden="true" focusable="false"><path d="M21.995,28.500 L-0.000,54.494 L3.000,56.994 L26.995,28.500 L3.000,0.006 L-0.000,2.506 L21.995,28.500 Z"/></svg>'],afterInit:a,afterAction:t}),e(".fullwidth-gallery").owlCarousel({transitionStyle:"fade",autoPlay:5e3,slideSpeed:700,singleItem:!0,autoHeight:!0,navigation:!1,pagination:!1,lazyLoad:!0,addClassActive:!0,afterInit:a,afterAction:t}),e(".item-carousel").owlCarousel({autoPlay:3500,stopOnHover:!1,items:3,itemsDesktop:[1199,3],itemsTabletSmall:[768,3],itemsMobile:[480,1],navigation:!0,lazyLoad:!0,addClassActive:!0,navigationText:['<span class="sr-only">Previous Slide</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27px" height="57px" viewBox="0 0 27 57" fill="currentColor" aria-hidden="true" focusable="false"><path d="M5.005,28.500 L27.000,54.494 L24.000,56.994 L0.005,28.500 L24.000,0.006 L27.000,2.506 L5.005,28.500 Z"/></svg>','<span class="sr-only">Next Slide</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27px" height="57px" viewBox="0 0 27 57" fill="currentColor" aria-hidden="true" focusable="false"><path d="M21.995,28.500 L-0.000,54.494 L3.000,56.994 L26.995,28.500 L3.000,0.006 L-0.000,2.506 L21.995,28.500 Z"/></svg>'],afterInit:a,afterAction:t}),e(".small-item-carousel").owlCarousel({autoPlay:2500,stopOnHover:!0,items:6,itemsDesktop:[1199,4],itemsTabletSmall:[768,3],itemsMobile:[480,2],pagination:!1,navigation:!0,lazyLoad:!0,addClassActive:!0,navigationText:["<span class='sr-only'>Previous Slide</span><i class='fa fa-angle-left' aria-hidden='true'></i>","<span class='sr-only'>Next Slide</span><i class='fa fa-angle-right' aria-hidden='true'></i>"],afterInit:a,afterAction:t}),e(".home-small-item-carousel").owlCarousel({autoPlay:2500,stopOnHover:!0,items:6,itemsDesktop:[1199,4],itemsTabletSmall:[768,3],itemsMobile:[480,2],navigation:!0,lazyLoad:!0,addClassActive:!0,navigationText:['<span class="sr-only">Previous Slide</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27px" height="57px" viewBox="0 0 27 57" fill="currentColor" aria-hidden="true" focusable="false"><path d="M5.005,28.500 L27.000,54.494 L24.000,56.994 L0.005,28.500 L24.000,0.006 L27.000,2.506 L5.005,28.500 Z"/></svg>','<span class="sr-only">Next Slide</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27px" height="57px" viewBox="0 0 27 57" fill="currentColor" aria-hidden="true" focusable="false"><path d="M21.995,28.500 L-0.000,54.494 L3.000,56.994 L26.995,28.500 L3.000,0.006 L-0.000,2.506 L21.995,28.500 Z"/></svg>'],afterInit:a,afterAction:t}),e(".single-carousel").owlCarousel({singleItem:!0,autoHeight:!0,navigation:!0,lazyLoad:!0,addClassActive:!0,navigationText:["<span class='sr-only'>Previous Slide</span><i class='fa fa-angle-left' aria-hidden='true'></i>","<span class='sr-only'>Next Slide</span><i class='fa fa-angle-right' aria-hidden='true'></i>"],afterInit:a,afterAction:t}),e(".content-slider").owlCarousel({slideSpeed:350,singleItem:!0,autoHeight:!0,navigation:!0,lazyLoad:!0,addClassActive:!0,navigationText:['<span class="sr-only">Previous Slide</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27px" height="57px" viewBox="0 0 27 57" fill="currentColor" aria-hidden="true" focusable="false"><path d="M5.005,28.500 L27.000,54.494 L24.000,56.994 L0.005,28.500 L24.000,0.006 L27.000,2.506 L5.005,28.500 Z"/></svg>','<span class="sr-only">Next Slide</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27px" height="57px" viewBox="0 0 27 57" fill="currentColor" aria-hidden="true" focusable="false"><path d="M21.995,28.500 L-0.000,54.494 L3.000,56.994 L26.995,28.500 L3.000,0.006 L-0.000,2.506 L21.995,28.500 Z"/></svg>'],afterInit:a,afterAction:t}),e(".photo-slider").owlCarousel({slideSpeed:350,items:4,itemsDesktop:[1199,4],itemsTabletSmall:[768,2],itemsMobile:[480,1],autoHeight:!0,navigation:!0,lazyLoad:!0,addClassActive:!0,navigationText:["<span class='sr-only'>Previous Slide</span><i class='fa fa-angle-left' aria-hidden='true'></i>","<span class='sr-only'>Next Slide</span><i class='fa fa-angle-right' aria-hidden='true'></i>"],afterInit:a,afterAction:t}),e(".simple-slider").owlCarousel({slideSpeed:350,singleItem:!0,autoHeight:!0,navigation:!0,lazyLoad:!0,addClassActive:!0,navigationText:['<span class="sr-only">Previous Slide</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27px" height="57px" viewBox="0 0 27 57" fill="currentColor" aria-hidden="true" focusable="false"><path d="M5.005,28.500 L27.000,54.494 L24.000,56.994 L0.005,28.500 L24.000,0.006 L27.000,2.506 L5.005,28.500 Z"/></svg>','<span class="sr-only">Next Slide</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27px" height="57px" viewBox="0 0 27 57" fill="currentColor" aria-hidden="true" focusable="false"><path d="M21.995,28.500 L-0.000,54.494 L3.000,56.994 L26.995,28.500 L3.000,0.006 L-0.000,2.506 L21.995,28.500 Z"/></svg>'],afterInit:a,afterAction:t}),e(".work-full-slider").owlCarousel({slideSpeed:350,singleItem:!0,autoHeight:!0,navigation:!0,lazyLoad:!0,addClassActive:!0,navigationText:['<span class="sr-only">Previous Slide</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27px" height="57px" viewBox="0 0 27 57" fill="currentColor" aria-hidden="true" focusable="false"><path d="M5.005,28.500 L27.000,54.494 L24.000,56.994 L0.005,28.500 L24.000,0.006 L27.000,2.506 L5.005,28.500 Z"/></svg>','<span class="sr-only">Next Slide</span><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27px" height="57px" viewBox="0 0 27 57" fill="currentColor" aria-hidden="true" focusable="false"><path d="M21.995,28.500 L-0.000,54.494 L3.000,56.994 L26.995,28.500 L3.000,0.006 L-0.000,2.506 L21.995,28.500 Z"/></svg>'],afterInit:a,afterAction:t}),e(".blog-posts-carousel").owlCarousel({autoPlay:5e3,stopOnHover:!0,items:3,itemsDesktop:[1199,3],itemsTabletSmall:[768,2],itemsMobile:[480,1],pagination:!1,navigation:!0,lazyLoad:!0,addClassActive:!0,navigationText:["<span class='sr-only'>Previous Slide</span><i class='fa fa-angle-left' aria-hidden='true'></i>","<span class='sr-only'>Next Slide</span><i class='fa fa-angle-right' aria-hidden='true'></i>"],afterInit:a,afterAction:t}),e(".blog-posts-carousel-alt").owlCarousel({autoPlay:3500,stopOnHover:!0,slideSpeed:350,singleItem:!0,autoHeight:!0,pagination:!1,navigation:!0,lazyLoad:!0,addClassActive:!0,navigationText:["<span class='sr-only'>Previous Slide</span><i class='fa fa-angle-left' aria-hidden='true'></i>","<span class='sr-only'>Next Slide</span><i class='fa fa-angle-right' aria-hidden='true'></i>"],afterInit:a,afterAction:t}),e(".image-carousel").owlCarousel({autoPlay:5e3,stopOnHover:!0,items:4,itemsDesktop:[1199,3],itemsTabletSmall:[768,2],itemsMobile:[480,1],navigation:!0,lazyLoad:!0,addClassActive:!0,navigationText:["<span class='sr-only'>Previous Slide</span><i class='fa fa-angle-left' aria-hidden='true'></i>","<span class='sr-only'>Next Slide</span><i class='fa fa-angle-right' aria-hidden='true'></i>"],afterInit:a,afterAction:t})}(jQuery)}!function(e){"use strict";e.fn.fitVids=function(a){var t={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("div");s.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',i.appendChild(s.childNodes[1])}return a&&e.extend(t,a),this.each((function(){var a=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];t.customSelector&&a.push(t.customSelector);var i=".fitvidsignore";t.ignore&&(i=i+", "+t.ignore);var s=e(this).find(a.join(","));(s=(s=s.not("object object")).not(i)).each((function(a){var t=e(this);if(!(t.parents(i).length>0||"embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){t.css("height")||t.css("width")||!isNaN(t.attr("height"))&&!isNaN(t.attr("width"))||(t.attr("height",9),t.attr("width",16));var s=("object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height())/(isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10));if(!t.attr("id")){var n="fitvid"+a;t.attr("id",n)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*s+"%"),t.removeAttr("height").removeAttr("width")}}))}))}}(window.jQuery||window.Zepto),function(e){"use strict";var a;function t(e,a){e.height(a.height()),e.css({"line-height":a.height()+"px"})}e(window).on("load",(function(){if(e(".text-rotate").each((function(){var a=e(this),t=a.html();a.attr("aria-hidden","true"),a.before("<span class='sr-only'>"+t+"</span>"),a.Morphext({animation:"fadeIn",separator:",",speed:4e3})})),initWorkFilter(),function(){e(".local-scroll").localScroll({target:"body",duration:1500,offset:0,easing:"easeInOutQuart",onAfter:function(e,a){if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()}});var a=e(".home-section, .split-section, .page-section"),t=e(".scroll-nav li a");e(window).scroll((function(){a.filter(":in-viewport:first").each((function(){var a=e(this),i=e('.scroll-nav li a[href="#'+a.attr("id")+'"]');t.removeClass("active"),i.addClass("active")}))}))}(),init_wow(),e(window).width()>=1024&&0==a&&e("html").hasClass("no-touch")&&(e(".parallax-1").each((function(){e(this).parallax("50%",.1)})),e(".parallax-2").each((function(){e(this).parallax("50%",.2)})),e(".parallax-3").each((function(){e(this).parallax("50%",.3)})),e(".parallax-4").each((function(){e(this).parallax("50%",.4)})),e(".parallax-5").each((function(){e(this).parallax("50%",.5)})),e(".parallax-6").each((function(){e(this).parallax("50%",.6)})),e(".parallax-7").each((function(){e(this).parallax("50%",.7)})),e(".parallax-8").each((function(){e(this).parallax("50%",.8)})),e(".parallax-9").each((function(){e(this).parallax("50%",.9)})),e(".parallax-10").each((function(){e(this).parallax("50%",.1)}))),initPageSliders(),e(window).trigger("scroll"),e(window).trigger("resize"),window.location.hash&&e(window.location.hash).length){var t=e(window.location.hash).offset().top;e("html, body").animate({scrollTop:t})}})),e(document).ready((function(){var a,n;e(window).trigger("resize"),function(){e(".main-nav").hasClass("transparent")?t(e(".inner-nav > ul > li > a"),e(".main-nav")):(a=e(".inner-nav > ul > li > a"),n=e(".main-nav"),a.height(n.height()),a.css({"line-height":n.height()-2+"px"}));var a,n;t(i,e(".main-nav")),t(e(".mobile-cart"),e(".main-nav")),e(".main-nav").hasClass("transparent")?e(".main-nav").addClass("js-transparent"):e(".main-nav").hasClass("dark")||e(".main-nav").addClass("js-no-transparent-white");e(window).scroll((function(){e(window).scrollTop()>0?(e(".js-transparent").removeClass("transparent"),e(".main-nav, .nav-logo-wrap .logo, .mobile-nav, .mobile-cart").addClass("small-height"),e(".light-after-scroll").removeClass("dark"),e(".main-nav").addClass("body-scrolled")):0===e(window).scrollTop()&&(e(".js-transparent").addClass("transparent"),e(".main-nav, .nav-logo-wrap .logo, .mobile-nav, .mobile-cart").removeClass("small-height"),e(".light-after-scroll").addClass("dark"),e(".main-nav").removeClass("body-scrolled"))})),i.click((function(){s.hasClass("js-opened")?(s.slideUp("slow","easeOutExpo").removeClass("js-opened"),e(this).removeClass("active"),e(this).attr("aria-expanded","false")):(s.slideDown("slow","easeOutQuart").addClass("js-opened"),e(this).addClass("active"),e(this).attr("aria-expanded","true"),e(".main-nav").hasClass("not-top")&&e(window).scrollTo(".main-nav","slow"))})),e(document).on("click",(function(a){if(e(window).width()<=1024){var t=e(".main-nav");t===a.target||t.has(a.target).length||(s.slideUp("slow","easeOutExpo").removeClass("js-opened"),i.removeClass("active"),i.attr("aria-expanded","false"))}})),i.keydown((function(a){13!=a.keyCode&&32!=a.keyCode||(s.hasClass("js-opened")?(s.slideUp("slow","easeOutExpo").removeClass("js-opened"),e(this).removeClass("active"),e(this).attr("aria-expanded","false")):(s.slideDown("slow","easeOutQuart").addClass("js-opened"),e(this).addClass("active"),e(this).attr("aria-expanded","true"),e(".main-nav").hasClass("not-top")&&e(window).scrollTo(".main-nav","slow")))})),s.find("a:not(.mn-has-sub)").click((function(){i.hasClass("active")&&(s.slideUp("slow","easeOutExpo").removeClass("js-opened"),i.removeClass("active"))}));var o,l=e(".mn-has-sub");l.attr({role:"button","aria-expanded":"false","aria-haspopup":"true"}),l.click((function(){if(e(".main-nav").hasClass("mobile-on"))return(o=e(this).parent("li:first")).hasClass("js-opened")?(e(this).attr("aria-expanded","false"),o.find(".mn-sub:first").slideUp((function(){o.removeClass("js-opened")}))):(e(this).attr("aria-expanded","true"),o.addClass("js-opened"),o.find(".mn-sub:first").slideDown()),!1})),(o=l.parent("li")).hover((function(){e(".main-nav").hasClass("mobile-on")||(e(this).find(".mn-has-sub:first").attr("aria-expanded","true").addClass("js-opened"),e(this).find(".mn-sub:first").stop(!0,!0).fadeIn("fast"))}),(function(){e(".main-nav").hasClass("mobile-on")||(e(this).find(".mn-has-sub:first").attr("aria-expanded","false").removeClass("js-opened"),e(this).find(".mn-sub:first").stop(!0,!0).delay(100).fadeOut("fast"))})),l.keydown((function(a){if(e(".main-nav").hasClass("mobile-on")&&(13==a.keyCode||32==a.keyCode))return(o=e(this).parent("li:first")).hasClass("js-opened")?(e(this).attr("aria-expanded","false"),o.find(".mn-sub:first").slideUp((function(){o.removeClass("js-opened")}))):(e(this).attr("aria-expanded","true"),o.addClass("js-opened"),o.find(".mn-sub:first").slideDown()),!1})),e(".inner-nav a").focus((function(){e(".main-nav").hasClass("mobile-on")||(e(this).parent("li").parent().children().find(".mn-has-sub:first").attr("aria-expanded","false").removeClass("js-opened"),e(this).parent("li").parent().children().find(".mn-sub:first").stop(!0,!0).delay(100).fadeOut("fast"))})),e(".inner-nav a").first().keydown((function(a){e(".main-nav").hasClass("mobile-on")||a.shiftKey&&9==a.keyCode&&(e(this).parent("li").find(".mn-has-sub:first").attr("aria-expanded","false").removeClass("js-opened"),e(this).parent("li").find(".mn-sub:first").stop(!0,!0).delay(100).fadeOut("fast"))})),e(".mn-sub li:last a").keydown((function(a){e(".main-nav").hasClass("mobile-on")||a.shiftKey||9!=a.keyCode||(e(this).parent("li").parent().parent().find(".mn-has-sub:first").attr("aria-expanded","false").removeClass("js-opened"),e(this).parent("li").parent().stop(!0,!0).delay(100).fadeOut("fast"))})),e(document).keydown((function(a){e(".main-nav").hasClass("mobile-on")||27==a.keyCode&&(l.parent("li").find(".mn-sub:first li .mn-sub").is(":visible")?(l.parent("li").find(".mn-sub:first li .mn-has-sub").attr("aria-expanded","false").removeClass("js-opened"),l.parent("li").find(".mn-sub:first li .mn-sub").stop(!0,!0).delay(100).fadeOut("fast")):(l.parent("li").find(".mn-has-sub:first").attr("aria-expanded","false").removeClass("js-opened"),l.parent("li").find(".mn-sub:first").stop(!0,!0).delay(100).fadeOut("fast")))})),l.keydown((function(a){if(!e(".main-nav").hasClass("mobile-on")&&(13==a.keyCode||32==a.keyCode))return e(this).hasClass("js-opened")?(e(this).removeClass("js-opened"),e(this).attr("aria-expanded","false"),e(this).parent("li").find(".mn-sub:first").stop(!0,!0).fadeOut("fast"),!1):(e(this).addClass("js-opened"),e(this).attr("aria-expanded","true"),e(this).parent("li").find(".mn-sub:first").stop(!0,!0).fadeIn("fast"),!1)}))}(),e(".work-lightbox-link").magnificPopup({gallery:{enabled:!0},mainClass:"mfp-fade"}),e(".lightbox-gallery-1").magnificPopup({gallery:{enabled:!0},mainClass:"mfp-fade"}),e(".lightbox-gallery-2").magnificPopup({gallery:{enabled:!0},mainClass:"mfp-fade"}),e(".lightbox-gallery-3").magnificPopup({gallery:{enabled:!0},mainClass:"mfp-fade"}),e(".lightbox-gallery-4").magnificPopup({gallery:{enabled:!0},mainClass:"mfp-fade"}),e(".lightbox-gallery-5").magnificPopup({gallery:{enabled:!0},mainClass:"mfp-fade"}),e(".lightbox-gallery-6").magnificPopup({gallery:{enabled:!0},mainClass:"mfp-fade"}),e(".lightbox-gallery-7").magnificPopup({gallery:{enabled:!0},mainClass:"mfp-fade"}),e(".lightbox-gallery-8").magnificPopup({gallery:{enabled:!0},mainClass:"mfp-fade"}),e(".lightbox-gallery-9").magnificPopup({gallery:{enabled:!0},mainClass:"mfp-fade"}),e(".lightbox-gallery-10").magnificPopup({gallery:{enabled:!0},mainClass:"mfp-fade"}),e(".lightbox").magnificPopup({gallery:{enabled:!0},mainClass:"mfp-fade"}),e(".count-number").appear((function(){var a=e(this);a.countTo({from:0,to:a.html(),speed:1300,refreshInterval:60})})),e(".team-item").click((function(){e("html").hasClass("mobile")&&e(this).toggleClass("js-active")})),e(".team-social-links > a").on("focus blur",(function(){e("html").hasClass("mobile")||e(this).parent().parent().parent().parent().toggleClass("js-active")})),e(".services-item").each((function(){n=e(this).find(".services-title").html(),a=e(this).find(".services-more > .text-link").html(),e(this).find(".services-more > .text-link").html(a+'<span class="sr-only"> about '+n+"</span>")})),init_map(),init_bg_video(),Splitting(),function(){e(".accordion").each((function(){var a=e(this).children("dd").hide(),t=e(this).children("dt").children("a");t.attr("role","button"),e(this).children("dd").first().slideDown("easeOutExpo"),e(this).children("dt").children("a").first().addClass("active"),e(this).children("dt").children("a").attr("aria-expanded","false"),e(this).children("dt").children("a").first().attr("aria-expanded","true"),e(this).children("dt").children("a").click((function(){var i=e(this).parent().next("dd");return t.removeClass("active"),e(this).addClass("active"),t.attr("aria-expanded","false"),e(this).attr("aria-expanded","true"),a.not(i).slideUp("easeInExpo"),e(this).parent().next().slideDown("easeOutExpo"),!1}))}));e(".toggle > dd").hide();e(".toggle > dt > a").attr({role:"button","aria-expanded":"false"}),e(".toggle > dt > a").click((function(){if(e(this).hasClass("active"))e(this).parent().next().slideUp("easeOutExpo"),e(this).removeClass("active"),e(this).attr("aria-expanded","false");else{e(this).parent().next("dd");e(this).addClass("active"),e(this).attr("aria-expanded","true"),e(this).parent().next().slideDown("easeOutExpo")}return!1})),e(".video, .resp-media, .blog-media").fitVids(),e(".work-full-media").fitVids()}(),[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function(e){return new bootstrap.Tooltip(e)})),init_masonry()})),e(window).resize((function(){e(".mobile-on .desktop-nav > ul").css("max-height",e(window).height()-e(".main-nav").height()-20+"px"),e(window).width()<=1024?(e(".main-nav").addClass("mobile-on"),e(".mobile-cart").show()):e(window).width()>1024&&(e(".main-nav").removeClass("mobile-on"),s.show(),e(".mobile-cart").hide());var a=.01*e(window).height();e("html").css("--vh",a+"px")})),/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)?(a=!0,e("html").addClass("mobile")):(a=!1,e("html").addClass("no-mobile")),/mozilla/.test(navigator.userAgent),/safari/.test(navigator.userAgent),"ontouchstart"in document.documentElement?document.documentElement.className+=" touch":document.documentElement.className+=" no-touch",e(".home-section, .page-section, .small-section, .split-section").each((function(a){e(this).attr("data-background")&&e(this).css("background-image","url("+e(this).data("background")+")")})),e(".progress-bar").each((function(a){e(this).css("width",e(this).attr("aria-valuenow")+"%")}));var i=e(".mobile-nav"),s=e(".desktop-nav");i.attr("aria-expanded","false")}(jQuery);var fselector=0,work_grid=$("#work-grid, #isotope");function initWorkFilter(){!function(e){"use strict";var a;a=work_grid.hasClass("masonry")?"masonry":"fitRows",e(".filter").click((function(){e(".filter").removeClass("active").attr("aria-selected","false"),e(this).addClass("active").attr("aria-selected","true"),fselector=e(this).attr("data-filter");var t="0.4s";return e("body").hasClass("appear-animate")&&!e("html").hasClass("mobile")&&work_grid.find(".wow-p").length&&(t=0),work_grid.imagesLoaded((function(){work_grid.isotope({itemSelector:".mix",layoutMode:a,filter:fselector,transitionDuration:t})})),work_grid.on("arrangeComplete",(function(){e("body").hasClass("appear-animate")&&new WOW({boxClass:"wow-p",animateClass:"animated",offset:100,mobile:!1,live:!0}).init();e(window).trigger("scroll")})),!1})),window.location.hash&&e(".filter").each((function(){e(this).attr("data-filter")=="."+window.location.hash.replace("#","")&&(e(this).trigger("click"),e("#portfolio").length&&e("html, body").animate({scrollTop:e("#portfolio").offset().top}))})),work_grid.imagesLoaded((function(){work_grid.isotope({itemSelector:".mix",layoutMode:a,filter:fselector})})),e(".img-lazy-work").on("load",(function(){work_grid.imagesLoaded((function(){work_grid.isotope({itemSelector:".mix",layoutMode:a,filter:fselector})}))})),work_grid.on("arrangeComplete",(function(){e(window).trigger("scroll")}))}(jQuery)}function init_map(){!function(e){e(".map-section").click((function(){return e(this).toggleClass("js-active"),e(this).find(".mt-open").toggle(),e(this).find(".mt-close").toggle(),!1}))}(jQuery)}function init_bg_video(){!function(e){e(".bg-video-button-muted").click((function(){return e(this).prev().find(".bg-video").prop("muted")?(e(this).prev().find(".bg-video").prop("muted",!1),e(this).find("i").removeClass("fa-volume-off").addClass("fa-volume-up")):(e(this).prev().find(".bg-video").prop("muted",!0),e(this).find("i").removeClass("fa-volume-up").addClass("fa-volume-off")),!1}))}(jQuery)}function init_wow(){!function(e){var a=new WOW({boxClass:"wow",animateClass:"animated",offset:100,mobile:!1,live:!0});e("body").hasClass("appear-animate")?a.init():e(".wow").css("opacity","1");var t=new WOW({boxClass:"wow-p",animateClass:"animated",offset:100,mobile:!1,live:!0});e("body").hasClass("appear-animate")?t.init():e(".wow-p").css("opacity","1"),e("body").hasClass("appear-animate")&&e(window).width()>=1024&&e("html").hasClass("no-mobile")?e(".wow-menubar").addClass("fadeInDownShort").addClass("animated"):e(".wow-menubar").css("opacity","1")}(jQuery)}function init_masonry(){!function(e){e(".masonry").imagesLoaded((function(){e(".masonry").masonry()}))}(jQuery)}function init(){var e=!0,a=!1,t=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function n(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function o(a){e=!1}function l(){document.addEventListener("mousemove",r),document.addEventListener("mousedown",r),document.addEventListener("mouseup",r),document.addEventListener("pointermove",r),document.addEventListener("pointerdown",r),document.addEventListener("pointerup",r),document.addEventListener("touchmove",r),document.addEventListener("touchstart",r),document.addEventListener("touchend",r)}function r(a){"html"!==a.target.nodeName.toLowerCase()&&(e=!1,document.removeEventListener("mousemove",r),document.removeEventListener("mousedown",r),document.removeEventListener("mouseup",r),document.removeEventListener("pointermove",r),document.removeEventListener("pointerdown",r),document.removeEventListener("pointerup",r),document.removeEventListener("touchmove",r),document.removeEventListener("touchstart",r),document.removeEventListener("touchend",r))}document.addEventListener("keydown",(function(a){s(document.activeElement)&&n(document.activeElement),e=!0}),!0),document.addEventListener("mousedown",o,!0),document.addEventListener("pointerdown",o,!0),document.addEventListener("touchstart",o,!0),document.addEventListener("focus",(function(a){var t,o,l;s(a.target)&&(e||(t=a.target,o=t.type,"INPUT"==(l=t.tagName)&&i[o]&&!t.readOnly||"TEXTAREA"==l&&!t.readOnly||t.isContentEditable))&&n(a.target)}),!0),document.addEventListener("blur",(function(e){var i;s(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(a=!0,window.clearTimeout(t),t=window.setTimeout((function(){a=!1,window.clearTimeout(t)}),100),(i=e.target).hasAttribute("data-focus-visible-added")&&(i.classList.remove("focus-visible"),i.removeAttribute("data-focus-visible-added")))}),!0),document.addEventListener("visibilitychange",(function(t){"hidden"==document.visibilityState&&(a&&(e=!0),l())}),!0),l(),document.body.classList.add("js-focus-visible")}function onDOMReady(e){var a;function t(){a||(a=!0,e())}["interactive","complete"].indexOf(document.readyState)>=0?e():(a=!1,document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1))}"undefined"!=typeof document&&onDOMReady(init),document.querySelectorAll("i.fa, i.fab, i.far, i.fas").forEach((function(e){e.getAttribute("aria-hidden")||e.setAttribute("aria-hidden","true")})),$(document).ready((function(){$("#submit_btn").click((function(){var e=$("input[name=name]").val(),a=$("input[name=email]").val(),t=$("textarea[name=message]").val(),i=!0;return""==e&&($("input[name=name]").css("border-color","#e41919"),i=!1),""==a&&($("input[name=email]").css("border-color","#e41919"),i=!1),""==t&&($("textarea[name=message]").css("border-color","#e41919"),i=!1),i&&(post_data={userName:e,userEmail:a,userMessage:t},$.post("contact_me.php",post_data,(function(e){"error"==e.type?output='<div class="error">'+e.text+"</div>":(output='<div class="success">'+e.text+"</div>",$("#contact_form input").val(""),$("#contact_form textarea").val("")),$("#result").hide().html(output).slideDown()}),"json")),!1})),$("#contact_form input, #contact_form textarea").keyup((function(){$("#contact_form input, #contact_form textarea").css("border-color",""),$("#result").slideUp()}))}));