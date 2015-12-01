//= require jquery
//= require moment
//= require faq

$(function() {
  var today = moment().format("dddd MMM Do, YYYY");
  $('footer').html('<p>Hello from jQuery land. Today is ' + today + '</p>');
});
