jQuery(document).ready(function($){function n(){$("body").toggleClass("is-menu-open"),$("body").hasClass("is-menu-open")?$("body").bind("touchmove",function(n){n.preventDefault()}):$("body").unbind("touchmove"),$(window).width()>520&&setTimeout(function(){$("#search-field").focus()},400)}$(document).keyup(function(o){27===o.keyCode&&n()}),$(".js-menu-toggle").click(function(){n()}),$(".menu-item").click(function(){$("body").unbind("touchmove")})});