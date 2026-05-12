// javascript //










   

// jQuery
$("#loginButton").click(function () {

    let Password1 = $("#pass1").val();
    let Password2 = $("#pass2").val();

    if (Password1 !== "" && Password2 !== "") {

        if (Password1 === Password2) {
            alert("Successfully login ");
        } else {
            alert("Password mismatched ");
        }

    } else {
        alert("Please enter password ");
    }

});
