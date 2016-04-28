$(document).ready(function() {

  var account = atob(localStorage.getItem('_account'));
  account = JSON.parse(account);

  $('#welcome-header').text("Welcome " + account.first_name + "...");
  $('#welcome-modal').modal('show');

  $('#logout').click(function(){
    console.log("hello");
  });
});
