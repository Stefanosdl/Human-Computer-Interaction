$(document).ready(function() {

    var select = $('.department');
    var select2 = $('.semester');
    var select3 = $('.lesson');
    var select4 = $('.book');
      $('#addrow').on('click', function () {
        select.clone(true).appendTo(select.parent());
        select2.clone(true).appendTo(select2.parent());
        select3.clone(true).appendTo(select3.parent());
        select4.clone(true).appendTo(select4.parent());
    });





    // $('#books').bootstrapValidator({
    //         feedbackIcons: {
    //             valid: 'fa fa-check',
    //             invalid: 'fa fa-times',
    //             validating: 'fa fa-refresh'
    //         },
    //         fields: {
    //             department: {
    //                 validators: {
    //                     notEmpty: {
    //                         message: 'Δεν μπορεί να είναι κενό'
    //                     }
    //                 }
    //             },
    //             semester: {
    //                 validators: {
    //                     notEmpty: {
    //                         message: 'Δεν μπορεί να είναι κενό'
    //                     }
    //                 }
    //             },
    //             lesson: {
    //                 validators: {
    //                     notEmpty: {
    //                         message: 'Δεν μπορεί να είναι κενό'
    //                     }
    //                 }
    //             }
    //         }
    //     });
  });
