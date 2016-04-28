$(document).ready(function() {

  $('#signup-btn').click(function(){

    var firstname = $.trim($('#firstname').val());
    var lastname = $.trim($('#lastname').val());
    var email = $.trim($('#email-signup').val());
    var password = $('#pwd-signup').val();

    if(firstname == '' || lastname == '' || email == '' || password == ''){
      $('#signup-input-error').text("Please fill in the fields appropriately.");
      $('#signup-input-error').css("visibility","visible");
    }
    else{

      $.ajax({
          type:"POST",
          url: "http://localhost:3000/api/products",
          data:{
              first_name: firstname,
              last_name: lastname,
              email: email,
              password: password
          },
          statusCode: {
            500: function() {
              $('#signup-input-error').text("Server failure. Please try again later.");
              $('#signup-input-error').css("visibility","visible");
            },
            404: function() {
              $('#signup-input-error').text("Username already in use.");
              $('#signup-input-error').css("visibility","visible");
            },
            200: function() {
              $('#signupModal').modal("hide");
              $('#signup-input-error').css("visibility","hidden");
              $('#firstname').val('');
              $('#lastname').val('');
              $('#email-signup').val('');
              $('#pwd-signup').val('');
              $('#signup-success-modal').modal("show");
            }
          }
      });

    }

  });

  $('#login-btn').click(function(){

    var email = $.trim($('#login-usr').val());
    var password = $('#login-pwd').val();

    if(email == '' || password == ''){
      $('#login-input-error').text("Please fill in the fields appropriately.");
      $('#login-input-error').css("visibility","visible");
    }
    else{

      var url_string = "http://localhost:3000/api/products?email=" + email + "&password=" + password;
      var data;

      $.ajax({
          type:"GET",
          url: url_string,
          dataType: "json",
          statusCode: {
            500: function() {
              $('#login-input-error').text("Server failure. Please try again later.");
              $('#login-input-error').css("visibility","visible");
            },
            404: function() {
              $('#login-input-error').text("Invalid username and password.");
              $('#login-input-error').css("visibility","visible");
            },
            200: function(data) {
              var account = {
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                password: data.password
              };

              account = JSON.stringify(account);
              account = btoa(account);

              localStorage.setItem('_account', account);

              document.location.href = './account.html';
            }
          }
      });

    }
  });
});
