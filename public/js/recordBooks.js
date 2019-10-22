$(document).ready(function() {
  $('#recordForm').bootstrapValidator({
    feedbackIcons: {
        valid: 'fa fa-check',
        invalid: 'fa fa-times',
        validating: 'fa fa-refresh'
    },
    fields: {
      'note[author]': {
          validators: {
              notEmpty: {
                  message: 'Δεν μπορεί να είναι κενό'
              },
              regexp: {
                  regexp: /^[Α-Ωα-ωίϊΐόάέύϋΰήώa-zA-Z ]+$/,
                  message: 'Μόνο ελληνικούς ή λατινικούς χαρακτήρες'
              }
          }
      },
      'note[title]': {
          validators: {
              notEmpty: {
                  message: 'Δεν μπορεί να είναι κενό'
              },
              regexp: {
                  regexp: /^[Α-Ωα-ωίϊΐόάέύϋΰήώa-zA-Z ]+$/,
                  message: 'Μόνο ελληνικούς ή λατινικούς χαρακτήρες'
              }
          }
      }
    }
  });
});
