function validation(){
    var name = document.getElementById("exampleInput1").value;
    var email = document.getElementById("exampleInputEmail1").value;
    var number = document.getElementById("exampleInput2").value;
    var password = document.getElementById("exampleInputPassword1").value;
    var vpassword = document.getElementById("exampleInputPassword2").value;

    var namecheck = /^[A-Za-z ]{2,}$/;
    var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var numbercheck = /^[6789][0-9]{9}$/;
    var passwordcheck = /^[A-Za-z0-9_!@#$%^&*]{8,16}$/;

    if(namecheck.test(name)){
        document.getElementById('error-name').innerHTML = "";
    }
    else{
        document.getElementById('error-name').innerHTML = "Use only Aplhabets";
        return false;
    }

    if(emailcheck.test(email)){
        document.getElementById('error-email').innerHTML = "";
    }
    else{
        document.getElementById('error-email').innerHTML = "Invalid email syntax. Ex: abc@xyz.com";
        return false;
    }

    if(numbercheck.test(number)){
        document.getElementById('error-number').innerHTML = "";
    }
    else{
        document.getElementById('error-number').innerHTML = "Use 10 digit valid mobile number";
        return false;
    }

    if(passwordcheck.test(password)){
        document.getElementById('error-password').innerHTML = "";
    }
    else{
        document.getElementById('error-password').innerHTML = "Use upper case, lower case, numeric & special charaters. Min: 8, Max: 16";
        return false;
    }

    if(vpassword.match(password)){
        document.getElementById('error-v-password').innerHTML = "";
    }
    else{
        document.getElementById('error-v-password').innerHTML = "Password doesn't match";
        return false;
    }
}



 