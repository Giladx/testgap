var isTouch=window.DocumentTouch&&document instanceof DocumentTouch;function scrollHeader(){var zvalue=$(document).scrollTop();if(zvalue>75)$("#header").addClass("scrolled");else
$("#header").removeClass("scrolled");}jQuery(document).ready(function($){if(!isTouch){$(document).scroll(function(){scrollHeader();});};$(document).on({'touchmove':function(e){scrollHeader();}});$('#toTop').click(function(){$("html, body").animate({scrollTop:0},500);return false;});});