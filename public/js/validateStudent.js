$(document).ready(function() {




  $('#regStudent').bootstrapValidator({
          feedbackIcons: {
              valid: 'fa fa-check',
              invalid: 'fa fa-times',
              validating: 'fa fa-refresh'
          },
          fields: {
              firstname: {
                  validators: {
                      notEmpty: {
                          message: 'Δεν μπορεί να είναι κενό'
                      },
                      stringLength: {
                          min: 3,
                          message: 'Πρέπει να είναι τουλάχιστον 3 χαρακτήρες'
                      },
                      regexp: {
                          regexp: /^[Α-Ωα-ωίϊΐόάέύϋΰήώa-zA-Z]+$/,
                          message: 'Μόνο ελληνικούς ή λατινικούς χαρακτήρες'
                      }
                  }
              },
              lastname: {
                  validators: {
                      notEmpty: {
                          message: 'Δεν μπορεί να είναι κενό'
                      },
                      stringLength: {
                          min: 3,
                          message: 'Πρέπει να είναι τουλάχιστον 3 χαρακτήρες'
                      },
                      regexp: {
                          regexp: /^[Α-Ωα-ωίϊΐόάέύϋΰήώa-zA-Z]+$/,
                          message: 'Μόνο ελληνικούς ή λατινικούς χαρακτήρες'
                      }
                  }
              },
              password: {
                  validators: {
                      notEmpty: {
                          message: 'Δεν μπορεί να είναι κενό'
                      },
                      identical: {
                          field: 'Confirmpassword',
                          message: 'Ο κωδικός και η επιβεβαίωση κωδικού δεν είναι ίδιοι'
                      }
                  }
              },
              Confirmpassword: {
                  validators: {
                      notEmpty: {
                          message: 'Δεν μπορεί να είναι κενό'
                      },
                      identical: {
                          field: 'password',
                          message: 'Ο κωδικός και η επιβεβαίωση κωδικού δεν είναι ίδιοι'
                      }
                  }
              },
              username: {
                  validators: {
                      notEmpty: {
                          message: 'Δεν μπορεί να είναι κενό'
                      },
                      emailAddress: {
                          message: 'Το email πρέπει να περιέχει @ και τον πάροχο της υπηρεσίας(πχ. example@domain.com)'
                      }
                  }
              },
              county: {
                  validators: {
                      notEmpty: {
                          message: 'Δεν μπορεί να είναι κενό'
                      }
                  }
              },
              city: {
                  validators: {
                      notEmpty: {
                          message: 'Δεν μπορεί να είναι κενό'
                      }
                  }
              },
              tel: {
                validators: {
                    notEmpty: {
                        message: 'Δεν μπορεί να είναι κενό'
                    },
                    stringLength: {
                        min: 10,
                        max: 10,
                        message: 'Το τηλέφωνο πρέπει να περιέχει 10 ψηφία<br />'
                    },
                    regexp: {
                        regexp: /^69[0-9]{8}$/,
                        message: 'Το τηλέφωνο πρέπει να έχει τη μορφή 69xxxxxxxx'
                    }
                }
              }
          }
      });
});

var county;
  $('#university').on('change', function(){
    university = $('#university').val();
    $('#department').html('');
    if(university == "Εθνικό και Καποδιστριακό Πανεπιστημίο Αθηνών"){
      $('#department').append('<option value="Οδοντιατρική">Οδοντιατρική</option>');
      $('#department').append('<option value="Νοσηλευτική">Νοσηλευτική</option>');
      $('#department').append('<option value="Φαρμακευτική">Φαρμακευτική</option>');
      $('#department').append('<option value="Νομική">Νομική</option>');
      $('#department').append('<option value="Πολιτικές Επιστήμες και Δημόσια Διοίκηση">Πολιτικές Επιστήμες και Δημόσια Διοίκηση</option>');
      $('#department').append('<option value="Θεολογική">Θεολογική</option>');
      $('#department').append('<option value="Φυσικό">Φυσικό</option>');
      $('#department').append('<option value="Χημικό">Χημικό</option>');
      $('#department').append('<option value="Μαθηματικό">Μαθηματικό</option>');
      $('#department').append('<option value="Βιολογία">Βιολογία</option>');
      $('#department').append('<option value="Γεωλογία">Γεωλογία</option>');
      $('#department').append('<option value="Πληροφορική και Τηλεπικοινωνίες">Πληροφορική και Τηλεπικοινωνίες</option>');
      $('#department').append('<option value="Αγγλική Γλώσσα και Φιλολογία">Αγγλική Γλώσσα και Φιλολογία</option>');
      $('#department').append('<option value="Γερμανική Γλώσσα και Φιλολογία">Γερμανική Γλώσσα και Φιλολογία</option>');
      $('#department').append('<option value="Μουσικών Σπουδών">Μουσικών σπουδών</option>');
      $('#department').append('<option value="Θεατρικών Σπουδών">Θεατρικών Σπουδών</option>');
      $('#department').append('<option value="Μεθοδολογίας Ιστορίας και Θεωρίας της Επιστήμης">Μεθοδολογίας Ιστορίας και Θεωρίας της Επιστήμης</option>');
    }
    else {
      $('#department').append('<option>Μη υλοποιημένο</option>');
    }
  });
