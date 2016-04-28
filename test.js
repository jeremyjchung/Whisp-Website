$(document).ready(function() {
  $('#containerForm').validate({
    framework: 'bootstrap',
    err: {
        container: 'tooltip'
    },
    icon: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        firstName: {
            validators: {
                notEmpty: {
                    message: 'The first name is required'
                }
            }
        },
        lastName: {
            validators: {
                notEmpty: {
                    message: 'The last name is required'
                }
            }
        },
        phone: {
            validators: {
                digits: {
                    message: 'The phone number can contain digits only'
                },
                notEmpty: {
                    message: 'The phone number is required'
                }
            }
        }
    }
  });
});
