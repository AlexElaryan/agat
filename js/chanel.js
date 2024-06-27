document.addEventListener('DOMContentLoaded', function () {
    let customCheckbox = document.querySelectorAll('.gateway-item .custom-checkbox input');
    let labelCustomCheckbox = document.querySelectorAll('.gateway-item .custom-checkbox');

    customCheckbox.forEach((el, i) => {
        el.onclick = () => {
            if (el.checked) {
                labelCustomCheckbox[i].classList.add('customChecked');
            } else {
                labelCustomCheckbox[i].classList.remove('customChecked');
            }
        }
    })

});


document.addEventListener('DOMContentLoaded', function () {
    let toolinfoSelect = document.querySelectorAll('.maininfocontact-tool2-select');
    let toolinfoBlock = document.querySelectorAll('.mainifocontact-tool2');

    toolinfoSelect.forEach((tool,ind) => {
        tool.onclick = () => {
            toolinfoBlock[ind].classList.toggle('toolinfoBlock-open');
        }
    })

});

document.addEventListener('DOMContentLoaded', function () {
    let seePassword = document.querySelectorAll('.seePassword');
    let password = document.querySelectorAll('.passwordForRegister input');

    seePassword.forEach((seePassword,ind) => {
        seePassword.onclick = () => {
            if (password[ind].type === 'password') {
                password[ind].type = 'text';
                seePassword.classList.add('seePasswordActive');
            } else {
                password[ind].type = 'password';
                seePassword.classList.remove('seePasswordActive');
            }
        }
    })
});


document.addEventListener('DOMContentLoaded', function () {
    let chanelsRight = document.querySelectorAll('.chanelsRight');
    let chanelsRightBtns = document.querySelectorAll('.section-event-log-content-bottom-left-block');

    chanelsRightBtns.forEach((btn,ind) => {
        btn.onclick = () => {
            chanelsRight.forEach(el => {
                el.classList.remove('chanelsRightActive');
            })
            chanelsRight[ind].classList.add('chanelsRightActive');
        }
    })

});