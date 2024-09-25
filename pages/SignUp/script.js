$(document).ready(function() {
    $('#signup').click(function() {

        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var email = $('#emailId').val();
        var passwd = $('#passwd').val();

        if (fname === "" || lname === "" || email === "" || passwd === "") {
            console.log('test');
            alert("belombisa");
        } else {
            window.location.href = "/index.html";
        }
    });
});
