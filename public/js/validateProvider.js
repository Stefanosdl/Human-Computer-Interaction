$(document).ready(function() {

$('#reg_form').bootstrapValidator({
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
            id: {
                validators: {
                    stringLength: {
                        min: 8,
                        max: 9,
                        message: 'Ο αριθμός ταυτότητας πρέπει να περιέχει 8 ψηφία:2 γράμματα και 6 αριθμούς.<br>'
                    },
                    regexp: {
                        regexp: /^[Α-Ωίϊΐόάέύϋΰήώ ]{2,3}\d{6}$/,
                        message: 'Πρέπει να ξεκινάει με 2 κεφαλαία ελληνικά γράμματα και μέτα κενό χαρακτήρα(space)'
                    }
                }
            },
            address: {
                validators: {
                    notEmpty: {
                        message: 'Δεν μπορεί να είναι κενό'
                    },
                    regexp: {
                        regexp: /^[Α-Ωα-ωίϊΐόάέύϋΰήώ ]{3,20}\d{1,3}$/,
                        message: 'Πρέπει να γράψετε την οδό με ελληνικά γράμματα και μετά τον αριθμό'
                    }
                }
            },
            date: {
                validators: {
                    date: {
                        message:"Μη αποδεκτή μορφή<br />",
                        format: 'YYYY/MM/DD'
                    },
                    callback: {
                        message: 'Η ημερομηνία δεν είναι μέσα στα όρια',
                        callback: function(value, validator) {
                            var m = new moment(value, 'YYYY/MM/DD', true);
                            if (!m.isValid()) {
                                return false;
                            }
                            return m.isAfter('1918/01/01') && m.isBefore('1999/12/30');
                        }
                    }
                }
            },
            origination: {
                validators: {
                  regexp: {
                      regexp: /^Τ.Α. [Α-Ωα-ωίϊΐόάέύϋΰήώ ]{3,20}$/,
                      message: 'Πρέπει να ξεκινάει με Τ.Α. (ελληνικά), κενό χαρακτήρα και να ακολουθεί η πόλη'
                  }
                }
            },
            pass: {
                validators: {
                  regexp: {
                      regexp: /^[A-Z]{2}\d{7}$/,
                      message: 'Πρέπει να ξεκινάει με 2 κεφαλαίους λατινικούς χαρακτήρες και μέτα 7 ψηφία'
                  }
                }
            },
            zip: {
                validators: {
                    notEmpty: {
                        message: 'Δεν μπορεί να είναι κενό'
                    },
                    regexp: {
                        regexp: /^[0-9]{5}$/,
                        message: 'Πρέπει να περιέχει ακριβώς 5 αριθμούς'
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

    $('input[name="type"]').on('click', function() {
        if ($(this).val() == 'id') {
            $('#textboxes').show();
            $('#pass').hide();
        }
        else {
            $('#pass').show();
            $('#textboxes').hide();
        }
    });

    var county;
      $('#county').on('change', function(){
        county = $('#county').val();
        $('#city').html('');
        if(county == 'ΑΤΤΙΚΗΣ'){
          $('#city').append('<option value="ΑΘΗΝΑ">ΑΘΗΝΑ</option>');
          $('#city').append('<option value="ΑΝΩ ΛΙΟΣΙΑ">ΑΝΩ ΛΙΟΣΙΑ</option>');
        }
        else {
          $('#city').append('<option>Μη υλοποιημένο</option>');
        }
      });
});
