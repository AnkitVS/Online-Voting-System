
const form = document.getElementById('form');
const user = document.getElementById('username');
const pass = document.getElementById('password');

if (form) {
    form.addEventListener('submit', element => {
        element.preventDefault();
        validation();
    });
}
/*function stars() {
    let count = 500;
    let cont = document.querySelector('.cont');
    let i = 0;
    while (i < count) {
        let star = document.createElement("i");
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let duration = Math.random() * 10;
        let size = Math.random() * 2;
 
        star.style.top = y + 'px';
        star.style.left = x + 'px';
        star.style.width = 2 + size + 'px';
        star.style.height = 2 + size + 'px';
 
        star.style.animationDuration = 8 + duration + 's';
        star.style.animationDelay = duration + 's';
 
        cont.appendChild(star);
        i++;
    }
}
stars();
*/

function validation() {
    var uval = user.value.trim();
    var pval = pass.value.trim();
    if (uval === '') {
        setError(user, 'Username cannot be blank');
    } else if (!(validUname(uval))) {
        setError(user, "Not a valid Username")
    }
    else {
        setSuccess(user);
    }

    if (pval == '') {
        setError(pass, 'Password cannot be blank');
    } else if (!(validPass(pval))) {
        setError(pass, "Not a valid Password")
    } else {
        setSuccess(pass);
    }
}

function setError(inp, message) {
    const inpParent = inp.parentElement;
    const small = inpParent.querySelector('small');
    inpParent.className = 'form-control error';
    small.innerText = message;
}

function setSuccess(inp) {
    const inpParent = inp.parentElement;
    inpParent.className = 'form-control success';
}

function validUname(uval) {
    var re_name = /^[A-Za-z]+$/i;
    return (re_name.test(uval))
}

function validPass(pval) {
    var re_pass = /^[A-Za-z\d]{6,100}$/;
    return (re_pass.test(pval))
}