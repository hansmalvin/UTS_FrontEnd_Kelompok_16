$(document).ready(function() {

    // validasi untuk pw dan email
    $('#sign-form').on('submit', function(test) {
        test.preventDefault();
    
        // var untuk email seperti apa
        const firstname = $('#fname').val().trim();
        const lastname = $('#lname').val().trim();
        const email = $('#emailId').val().trim();
        const password = $('#passwd').val().trim();
    
        if (firstname === "" || lastname === "" || email === "" || password === "") {
          alert('Tolong Diisi');
        } else {
          alert('Anda Berhasil Masuk');
          console.log("Selamat Datang", firstname);
        }
      });
    });