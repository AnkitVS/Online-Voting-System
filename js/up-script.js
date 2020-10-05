var RE_EMAIL = /^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;
var RE_PASSWORD = /^[A-Za-z\d]{6,8}+$/;
var RE_NAME = /^[a-zA-Z]+$/;
var RE_MOB = /^[6-9]{3}-[0-9]{2}-[0-9]{3}+$/;

var firstname = document.forms["myForm"]["fname"];
var mobile = document.forms["myForm"]["mnum"];
var email = document.forms["myForm"]["email"];
var password = document.forms["myForm"]["psw"];
var rep_password = document.forms["myForm"]["psw-repeat"];

function validation() {
    var fval = firstname.value;
    var mval = mobile.value;
    var eval = email.value;
    var pval = password.value;
    var rpval = rep_password.value;

    if (fval === '') {
        setError(firstname, 'Username cannot be blank');
        return false;
    } else if (!RE_NAME.test(fval)) {
        console.log(fval);
        setError(firstname, "Not a valid Username");
        return false;
    }

    if (mval === '') {
        setError(mobile, 'Mobile Number cannot be blank');
        return false;
    } else if (!RE_MOB.test(mval)) {
        setError(mobile, "Not a valid Mobile number");
        return false;
    }

    if (eval == '') {
        setError(email, 'Email cannot be blank');
        return false;
    } else if (!RE_EMAIL.test(email)) {
        setError(email, "Not a valid Email")
        return false;
    }

    if (pval == '') {
        setError(pval, 'Password cannot be blank');
        return false;
    } else if (!RE_PASSWORD.test(password)) {
        setError(pval, 'Not a valid Password');
        return false;
    } else if (pval != rpval) {
        setError(pval, 'Password Mismatch');
        return false;
    } 

    // setSuccess();
}

function setError(inp, message) {
    const inpParent = inp.parentElement;
    const small = inpParent.querySelector('small');
    inpParent.className = 'form-control error';
    small.innerText = message;
}

function setSuccess() {
    inpParent.className = 'form-control success';
}