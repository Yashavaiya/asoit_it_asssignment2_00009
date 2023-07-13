$("#formvalidation").validate({
    rules: {
        name: {
            minlength: 2
        },

        email: {
            email: true
        },
        phone: {
            number: true,
            minlength: 10,
            maxlength: 10
        },
    },
    messages: {
        name: {
            required: "Please enter your name",
            minlength: "name at least 2 characters"
        },
        email:"please enter your email",
        phone:"please enter your phone",
        formMesage:"please enter your messaage"
        

    },





    submitHandler: function (form) {
        form.submit();
    }
});