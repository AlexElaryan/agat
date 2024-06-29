document.addEventListener('DOMContentLoaded', function () {
    let contactListSwitch = document.getElementById('contactList');
    let contactList = document.querySelector('.contact_header-list');
    let contactListFilter = document.querySelector('.contact_header-list-filter');
    let closeContactlist = document.querySelector('.closeContactlist');
    let forContactList = document.querySelector('.forContactList');

    // Функция для обновления отображения списка контактов
    function updateContactListDisplay() {
        if (contactListSwitch && contactList && contactListFilter) {
            let windowLength = window.innerWidth;
            if (contactListSwitch.checked) {
                contactList.style.display = 'flex';
                if (windowLength < 1300) {
                    contactListFilter.style.display = 'block';
                } else {
                    contactListFilter.style.display = 'none';
                }
                // Добавляем активный класс для forContactList
                forContactList.classList.add('forContactListActive');
            } else {
                contactList.style.display = 'none';
                contactListFilter.style.display = 'none';
                // Удаляем активный класс для forContactList
                forContactList.classList.remove('forContactListActive');
            }
        }
    }

    // Обработчик для кнопки закрытия списка контактов
    if (closeContactlist) {
        closeContactlist.onclick = () => {
            if (contactList) {
                contactList.style.display = 'none';
            }
            if (contactListFilter) {
                contactListFilter.style.display = 'none';
            }
            // Удаляем активный класс для forContactList при закрытии
            forContactList.classList.remove('forContactListActive');
        };
    }

    // Обновление отображения при загрузке страницы
    if (contactListSwitch) {
        updateContactListDisplay();
        contactListSwitch.addEventListener('change', updateContactListDisplay);
    }

    // Обновление отображения при изменении размера окна
    window.addEventListener('resize', updateContactListDisplay);
}, false);

document.addEventListener('DOMContentLoaded', function () {
    let toolSelect = document.querySelectorAll('.contactPopup-tool_select');
    let toolArrow = document.querySelectorAll('.toolArrow');
    let contactToolMain = document.querySelectorAll('.contactPopup_tool-main');
    let collapseAllArrow = document.querySelectorAll('.contactPopup_top p svg');
    let listAddAll = document.querySelectorAll('.listAddAll');

    toolSelect.forEach((el, i) => {
        el.addEventListener('click', (event) => {
            if (!contactToolMain[i].classList.contains('contactPopup_tool-mainOpen')) {
                el.classList.remove('mainCloseSelect');
                contactToolMain[i].classList.add('contactPopup_tool-mainOpen');
                toolArrow[i].classList.add('toolArrowOpen');
                collapseAllArrow.forEach(ar => {
                    ar.classList.add('collapseArrowOpen');
                });
            } else {
                contactToolMain[i].classList.remove('contactPopup_tool-mainOpen');
                toolArrow[i].classList.remove('toolArrowOpen');
                el.classList.add('mainCloseSelect');

            }
        });
    });


}, false);


function createSVGIcon(i) {
    return `<svg class="arrow" width="21" height="21" viewBox="0 0 21 21" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
        d="M10.5 2L11.1644 1.25259C10.7855 0.915803 10.2145 0.915803 9.83564 1.25259L10.5 2ZM5.33564 5.25259C4.92285 5.61951 4.88567 6.25158 5.25259 6.66436C5.61951 7.07715 6.25158 7.11433 6.66436 6.74741L5.33564 5.25259ZM14.3356 6.74741C14.7484 7.11433 15.3805 7.07715 15.7474 6.66436C16.1143 6.25158 16.0771 5.61951 15.6644 5.25259L14.3356 6.74741ZM9.83564 1.25259L5.33564 5.25259L6.66436 6.74741L11.1644 2.74741L9.83564 1.25259ZM9.83564 2.74741L14.3356 6.74741L15.6644 5.25259L11.1644 1.25259L9.83564 2.74741Z"
        fill="#C0C0C0" />
    <path
        d="M10.5 19L9.83564 19.7474C10.2145 20.0842 10.7855 20.0842 11.1644 19.7474L10.5 19ZM15.6644 15.7474C16.0771 15.3805 16.1143 14.7484 15.7474 14.3356C15.3805 13.9229 14.7484 13.8857 14.3356 14.2526L15.6644 15.7474ZM6.66436 14.2526C6.25158 13.8857 5.61951 13.9229 5.25259 14.3356C4.88567 14.7484 4.92285 15.3805 5.33564 15.7474L6.66436 14.2526ZM11.1644 19.7474L15.6644 15.7474L14.3356 14.2526L9.83564 18.2526L11.1644 19.7474ZM11.1644 18.2526L6.66436 14.2526L5.33564 15.7474L9.83564 19.7474L11.1644 18.2526Z"
        fill="#C0C0C0" />
    <path d="M10.5 17L10.5 4" stroke="#C0C0C0" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" />
</svg> ${i}`;
}
function numbersOfList() {
    let removeListContact = document.querySelectorAll('.removeListContact');
    let numOfList = document.querySelectorAll('.numOfList');
    let numOfList2 = document.querySelectorAll('.numOfList2');


    numOfList.forEach((el, i) => {
        el.innerHTML = createSVGIcon(i);
    });

    numOfList2.forEach((el, i) => {
        el.innerHTML = createSVGIcon(i);
    });

    removeListContact.forEach((x) => {
        x.addEventListener('click', () => {
            x.parentElement.remove();
        });
    });
}
document.addEventListener('DOMContentLoaded', () => {
    numbersOfList();
});

// new elements add in right popup
document.addEventListener('DOMContentLoaded', () => {
    // Contact
    const handleNewContactAdd = () => {
        const listLocation = document.querySelector('.list-contactTable-Contact');
        const listLocationAdd = document.querySelectorAll('.listContactAdd');

        listLocationAdd.forEach((el, i) => {
            el.addEventListener('click', (event) => {
                event.stopPropagation();
                const newElementHTML = `
                <div class="ui-state-default">
                                        <p class="numOfList"> <svg class="arrow" width="21" height="21"
                                                viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.5 2L11.1644 1.25259C10.7855 0.915803 10.2145 0.915803 9.83564 1.25259L10.5 2ZM5.33564 5.25259C4.92285 5.61951 4.88567 6.25158 5.25259 6.66436C5.61951 7.07715 6.25158 7.11433 6.66436 6.74741L5.33564 5.25259ZM14.3356 6.74741C14.7484 7.11433 15.3805 7.07715 15.7474 6.66436C16.1143 6.25158 16.0771 5.61951 15.6644 5.25259L14.3356 6.74741ZM9.83564 1.25259L5.33564 5.25259L6.66436 6.74741L11.1644 2.74741L9.83564 1.25259ZM9.83564 2.74741L14.3356 6.74741L15.6644 5.25259L11.1644 1.25259L9.83564 2.74741Z"
                                                    fill="#C0C0C0" />
                                                <path
                                                    d="M10.5 19L9.83564 19.7474C10.2145 20.0842 10.7855 20.0842 11.1644 19.7474L10.5 19ZM15.6644 15.7474C16.0771 15.3805 16.1143 14.7484 15.7474 14.3356C15.3805 13.9229 14.7484 13.8857 14.3356 14.2526L15.6644 15.7474ZM6.66436 14.2526C6.25158 13.8857 5.61951 13.9229 5.25259 14.3356C4.88567 14.7484 4.92285 15.3805 5.33564 15.7474L6.66436 14.2526ZM11.1644 19.7474L15.6644 15.7474L14.3356 14.2526L9.83564 18.2526L11.1644 19.7474ZM11.1644 18.2526L6.66436 14.2526L5.33564 15.7474L9.83564 19.7474L11.1644 18.2526Z"
                                                    fill="#C0C0C0" />
                                                <path d="M10.5 17L10.5 4" stroke="#C0C0C0" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                                            ${createSVGIcon(i)}
</p>
                                        <input type="text" value="5555">

                                        <div class="select">

                                            <p>Внутренний</p>
                                            <div class="select-dropdown">
                                                <div class="select-option" data-value="Внутренний">Внутренний</div>
                                                <div class="select-option" data-value="Мобильный">Мобильный</div>
                                            </div>
                                            <svg class="custom-select-arrow lk-light" width="21" height="21"
                                                viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M10.498 11.7745L14.3515 8L15.998 9.61276L10.498 15L4.99805 9.61276L6.64456 8L10.498 11.7745Z"
                                                    fill="#C0C0C0" />
                                            </svg>
                                            <svg class="custom-select-arrow lk-dark" width="11" height="7"
                                                viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M5.49805 3.77448L9.35153 0L10.998 1.61276L5.49805 7L-0.00195313 1.61276L1.64456 0L5.49805 3.77448Z"
                                                    fill="#C0C0C0" />
                                            </svg>
                                        </div>

                                        <div class="select">
                                            <p>...</p>
                                            <div class="select-dropdown">
                                                <div class="select-option" data-value="Внутренний">Внутренний</div>
                                                <div class="select-option" data-value="Мобильный">Мобильный</div>
                                            </div>
                                            <svg class="custom-select-arrow lk-light" width="21" height="21"
                                                viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M10.498 11.7745L14.3515 8L15.998 9.61276L10.498 15L4.99805 9.61276L6.64456 8L10.498 11.7745Z"
                                                    fill="#C0C0C0" />
                                            </svg>
                                            <svg class="custom-select-arrow lk-dark" width="11" height="7"
                                                viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M5.49805 3.77448L9.35153 0L10.998 1.61276L5.49805 7L-0.00195313 1.61276L1.64456 0L5.49805 3.77448Z"
                                                    fill="#C0C0C0" />
                                            </svg>
                                        </div>

                                        <p>0</p>
                                        <svg class="removeListContact" width="21" height="21" viewBox="0 0 21 21"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 5L15.9993 16" stroke="#C0C0C0" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16 5L5.00072 15.9999" stroke="#C0C0C0" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                `;
                listLocation.insertAdjacentHTML('beforeend', newElementHTML);
                numbersOfList();

            });
        });
    };

    // Location
    const handleNewLocationAdd = () => {
        const listLocation = document.querySelector('.list-contactTable-Location');
        const listLocationAdd = document.querySelectorAll('.listLocationAdd');

        listLocationAdd.forEach(el => {
            el.addEventListener('click', (event) => {
                event.stopPropagation();
                const newElementHTML = `
<div class="ui-state-default">
                                        <div style=" display: flex;align-items: center;">
                                            <svg class="arrow" style="margin-left: -10px;" width="21" height="21"
                                                viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.5 2L11.1644 1.25259C10.7855 0.915803 10.2145 0.915803 9.83564 1.25259L10.5 2ZM5.33564 5.25259C4.92285 5.61951 4.88567 6.25158 5.25259 6.66436C5.61951 7.07715 6.25158 7.11433 6.66436 6.74741L5.33564 5.25259ZM14.3356 6.74741C14.7484 7.11433 15.3805 7.07715 15.7474 6.66436C16.1143 6.25158 16.0771 5.61951 15.6644 5.25259L14.3356 6.74741ZM9.83564 1.25259L5.33564 5.25259L6.66436 6.74741L11.1644 2.74741L9.83564 1.25259ZM9.83564 2.74741L14.3356 6.74741L15.6644 5.25259L11.1644 1.25259L9.83564 2.74741Z"
                                                    fill="#C0C0C0" />
                                                <path
                                                    d="M10.5 19L9.83564 19.7474C10.2145 20.0842 10.7855 20.0842 11.1644 19.7474L10.5 19ZM15.6644 15.7474C16.0771 15.3805 16.1143 14.7484 15.7474 14.3356C15.3805 13.9229 14.7484 13.8857 14.3356 14.2526L15.6644 15.7474ZM6.66436 14.2526C6.25158 13.8857 5.61951 13.9229 5.25259 14.3356C4.88567 14.7484 4.92285 15.3805 5.33564 15.7474L6.66436 14.2526ZM11.1644 19.7474L15.6644 15.7474L14.3356 14.2526L9.83564 18.2526L11.1644 19.7474ZM11.1644 18.2526L6.66436 14.2526L5.33564 15.7474L9.83564 19.7474L11.1644 18.2526Z"
                                                    fill="#C0C0C0" />
                                                <path d="M10.5 17L10.5 4" stroke="#C0C0C0" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                            <div class="select">
                                                <p>Внутренний</p>
                                                <div class="select-dropdown">
                                                    <div class="select-option" data-value="Внутренний">Внутренний</div>
                                                    <div class="select-option" data-value="Мобильный">Мобильный</div>
                                                </div>
                                                <svg class="custom-select-arrow lk-light" width="21" height="21"
                                                    viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M10.498 11.7745L14.3515 8L15.998 9.61276L10.498 15L4.99805 9.61276L6.64456 8L10.498 11.7745Z"
                                                        fill="#C0C0C0" />
                                                </svg>
                                                <svg class="custom-select-arrow lk-dark" width="11" height="7"
                                                    viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M5.49805 3.77448L9.35153 0L10.998 1.61276L5.49805 7L-0.00195313 1.61276L1.64456 0L5.49805 3.77448Z"
                                                        fill="#C0C0C0" />
                                                </svg>
                                            </div>
                                        </div>
                                        <input type="text" value="99999999">
                                        <input type="text" value="Россия">
                                        <input type="text" value="Москва">
                                        <input type="text" value="Парковая">
                                        <input type="text" value="99 / 9 / 9 / 999" class="inputLastof">
                                        <svg class="removeListContact" width="21" height="21" viewBox="0 0 21 21"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 5L15.9993 16" stroke="#C0C0C0" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16 5L5.00072 15.9999" stroke="#C0C0C0" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
`;
                listLocation.insertAdjacentHTML('beforeend', newElementHTML);
            });
        });
    };

    // Events
    const handleNewEventsAdd = () => {
        const listLocation = document.querySelector('.list-contactTable-Event');
        const listLocationAdd = document.querySelectorAll('.listEventsAdd');

        listLocationAdd.forEach(el => {
            el.addEventListener('click', (event) => {
                event.stopPropagation();
                const newElementHTML = `
<div class="ui-state-default">
                                        <div style="display: flex;align-items: center;" class="custom-select-wrapper">
                                            <svg class="arrow" style="margin-left: -10px;" width="21" height="21"
                                                viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.5 2L11.1644 1.25259C10.7855 0.915803 10.2145 0.915803 9.83564 1.25259L10.5 2ZM5.33564 5.25259C4.92285 5.61951 4.88567 6.25158 5.25259 6.66436C5.61951 7.07715 6.25158 7.11433 6.66436 6.74741L5.33564 5.25259ZM14.3356 6.74741C14.7484 7.11433 15.3805 7.07715 15.7474 6.66436C16.1143 6.25158 16.0771 5.61951 15.6644 5.25259L14.3356 6.74741ZM9.83564 1.25259L5.33564 5.25259L6.66436 6.74741L11.1644 2.74741L9.83564 1.25259ZM9.83564 2.74741L14.3356 6.74741L15.6644 5.25259L11.1644 1.25259L9.83564 2.74741Z"
                                                    fill="#C0C0C0" />
                                                <path
                                                    d="M10.5 19L9.83564 19.7474C10.2145 20.0842 10.7855 20.0842 11.1644 19.7474L10.5 19ZM15.6644 15.7474C16.0771 15.3805 16.1143 14.7484 15.7474 14.3356C15.3805 13.9229 14.7484 13.8857 14.3356 14.2526L15.6644 15.7474ZM6.66436 14.2526C6.25158 13.8857 5.61951 13.9229 5.25259 14.3356C4.88567 14.7484 4.92285 15.3805 5.33564 15.7474L6.66436 14.2526ZM11.1644 19.7474L15.6644 15.7474L14.3356 14.2526L9.83564 18.2526L11.1644 19.7474ZM11.1644 18.2526L6.66436 14.2526L5.33564 15.7474L9.83564 19.7474L11.1644 18.2526Z"
                                                    fill="#C0C0C0" />
                                                <path d="M10.5 17L10.5 4" stroke="#C0C0C0" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>

                                            <div class="select">
                                                <p>День рождения</p>
                                                <div class="select-dropdown">
                                                    <div class="select-option" data-value="Внутренний">Внутренний</div>
                                                    <div class="select-option" data-value="Мобильный">Мобильный</div>
                                                </div>
                                                <svg class="custom-select-arrow lk-light" width="21" height="21"
                                                    viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M10.498 11.7745L14.3515 8L15.998 9.61276L10.498 15L4.99805 9.61276L6.64456 8L10.498 11.7745Z"
                                                        fill="#C0C0C0" />
                                                </svg>
                                                <svg class="custom-select-arrow lk-dark" width="11" height="7"
                                                    viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M5.49805 3.77448L9.35153 0L10.998 1.61276L5.49805 7L-0.00195313 1.61276L1.64456 0L5.49805 3.77448Z"
                                                        fill="#C0C0C0" />
                                                </svg>
                                            </div>
                                            <svg class="custom-select-arrow lk-light" width="21" height="21"
                                                viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M10.498 11.7745L14.3515 8L15.998 9.61276L10.498 15L4.99805 9.61276L6.64456 8L10.498 11.7745Z"
                                                    fill="#C0C0C0" />
                                            </svg>
                                            <svg class="custom-select-arrow lk-dark" width="11" height="7"
                                                viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M5.49805 3.77448L9.35153 0L10.998 1.61276L5.49805 7L-0.00195313 1.61276L1.64456 0L5.49805 3.77448Z"
                                                    fill="#C0C0C0" />
                                            </svg>

                                        </div>

                                        <div class="custom-select-wrapper">

                                            <div class="select">
                                                <p>19 сент. 2024</p>
                                                <div class="select-dropdown">
                                                    <div class="select-option" data-value="Внутренний">Внутренний</div>
                                                    <div class="select-option" data-value="Мобильный">Мобильный</div>
                                                </div>
                                                <svg class="custom-select-arrow lk-light" width="21" height="21"
                                                    viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M10.498 11.7745L14.3515 8L15.998 9.61276L10.498 15L4.99805 9.61276L6.64456 8L10.498 11.7745Z"
                                                        fill="#C0C0C0" />
                                                </svg>
                                                <svg class="custom-select-arrow lk-dark" width="11" height="7"
                                                    viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M5.49805 3.77448L9.35153 0L10.998 1.61276L5.49805 7L-0.00195313 1.61276L1.64456 0L5.49805 3.77448Z"
                                                        fill="#C0C0C0" />
                                                </svg>
                                            </div>
                                            <svg class="custom-select-arrow lk-light" width="21" height="21"
                                                viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M10.498 11.7745L14.3515 8L15.998 9.61276L10.498 15L4.99805 9.61276L6.64456 8L10.498 11.7745Z"
                                                    fill="#C0C0C0" />
                                            </svg>
                                            <svg class="custom-select-arrow lk-dark" width="11" height="7"
                                                viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M5.49805 3.77448L9.35153 0L10.998 1.61276L5.49805 7L-0.00195313 1.61276L1.64456 0L5.49805 3.77448Z"
                                                    fill="#C0C0C0" />
                                            </svg>
                                        </div>
                                        <input type="text" value="..." class="inputLastof">

                                        <svg class="removeListContact" width="21" height="21" viewBox="0 0 21 21"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 5L15.9993 16" stroke="#C0C0C0" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16 5L5.00072 15.9999" stroke="#C0C0C0" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
`;
                listLocation.insertAdjacentHTML('beforeend', newElementHTML);
            });
        });
    };

    // Document
    const handleNewDocumentAdd = () => {
        const listLocation = document.querySelector('.list-contactTable-document');
        const listLocationAdd = document.querySelectorAll('.listDocumentAdd');

        listLocationAdd.forEach((el, i) => {
            el.addEventListener('click', (event) => {
                event.stopPropagation();
                const newElementHTML = `
                <div class="ui-state-default">
                                        <p class="numOfList2"> <svg class="arrow" width="21" height="21"
                                                viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.5 2L11.1644 1.25259C10.7855 0.915803 10.2145 0.915803 9.83564 1.25259L10.5 2ZM5.33564 5.25259C4.92285 5.61951 4.88567 6.25158 5.25259 6.66436C5.61951 7.07715 6.25158 7.11433 6.66436 6.74741L5.33564 5.25259ZM14.3356 6.74741C14.7484 7.11433 15.3805 7.07715 15.7474 6.66436C16.1143 6.25158 16.0771 5.61951 15.6644 5.25259L14.3356 6.74741ZM9.83564 1.25259L5.33564 5.25259L6.66436 6.74741L11.1644 2.74741L9.83564 1.25259ZM9.83564 2.74741L14.3356 6.74741L15.6644 5.25259L11.1644 1.25259L9.83564 2.74741Z"
                                                    fill="#C0C0C0" />
                                                <path
                                                    d="M10.5 19L9.83564 19.7474C10.2145 20.0842 10.7855 20.0842 11.1644 19.7474L10.5 19ZM15.6644 15.7474C16.0771 15.3805 16.1143 14.7484 15.7474 14.3356C15.3805 13.9229 14.7484 13.8857 14.3356 14.2526L15.6644 15.7474ZM6.66436 14.2526C6.25158 13.8857 5.61951 13.9229 5.25259 14.3356C4.88567 14.7484 4.92285 15.3805 5.33564 15.7474L6.66436 14.2526ZM11.1644 19.7474L15.6644 15.7474L14.3356 14.2526L9.83564 18.2526L11.1644 19.7474ZM11.1644 18.2526L6.66436 14.2526L5.33564 15.7474L9.83564 19.7474L11.1644 18.2526Z"
                                                    fill="#C0C0C0" />
                                                <path d="M10.5 17L10.5 4" stroke="#C0C0C0" stroke-width="2"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            ${createSVGIcon(i)}</p>
                                        <input type="text" value="5555">

                                        <div class="select">
                                            <p>Внутренний</p>
                                            <div class="select-dropdown">
                                                <div class="select-option" data-value="Внутренний">Внутренний</div>
                                                <div class="select-option" data-value="Мобильный">Мобильный</div>
                                            </div>
                                            <svg class="custom-select-arrow lk-light" width="21" height="21"
                                                viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M10.498 11.7745L14.3515 8L15.998 9.61276L10.498 15L4.99805 9.61276L6.64456 8L10.498 11.7745Z"
                                                    fill="#C0C0C0" />
                                            </svg>
                                            <svg class="custom-select-arrow lk-dark" width="11" height="7"
                                                viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M5.49805 3.77448L9.35153 0L10.998 1.61276L5.49805 7L-0.00195313 1.61276L1.64456 0L5.49805 3.77448Z"
                                                    fill="#C0C0C0" />
                                            </svg>
                                        </div>
                                        <input type="text" value="..." class="inputLastof">
                                        <svg class="removeListContact" width="21" height="21" viewBox="0 0 21 21"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 5L15.9993 16" stroke="#C0C0C0" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16 5L5.00072 15.9999" stroke="#C0C0C0" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                `;
                listLocation.insertAdjacentHTML('beforeend', newElementHTML);
                numbersOfList();

            });
        });
    };

    // Participant
    const handleNewParticipantAdd = () => {
        const listLocation = document.querySelector('.list-contactTable-Participant');
        const listLocationAdd = document.querySelectorAll('.listParticipantAdd');

        listLocationAdd.forEach(el => {
            el.addEventListener('click', (event) => {
                event.stopPropagation();
                const newElementHTML = `
                <div>

                <input type="text"  value="5555">

                <div class="select">
                    <p>Внутренний</p>
                    <div class="select-dropdown">
                        <div class="select-option" data-value="Внутренний">Внутренний</div>
                        <div class="select-option" data-value="Мобильный">Мобильный</div>
                    </div>
                    <svg class="custom-select-arrow lk-light" width="21" height="21"
                        viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M10.498 11.7745L14.3515 8L15.998 9.61276L10.498 15L4.99805 9.61276L6.64456 8L10.498 11.7745Z"
                            fill="#C0C0C0" />
                    </svg>
                    <svg class="custom-select-arrow lk-dark" width="11" height="7"
                        viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M5.49805 3.77448L9.35153 0L10.998 1.61276L5.49805 7L-0.00195313 1.61276L1.64456 0L5.49805 3.77448Z"
                            fill="#C0C0C0" />
                    </svg>
                </div>
                <input type="text" value="..."  class="inputLastof">
                <svg class="removeListContact" width="21" height="21" viewBox="0 0 21 21"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 5L15.9993 16" stroke="#C0C0C0" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16 5L5.00072 15.9999" stroke="#C0C0C0" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
`;
                listLocation.insertAdjacentHTML('beforeend', newElementHTML);
            });
        });
    };

    // Remove
    const handleRemove = (event) => {
        const target = event.target.closest('.removeListContact, .removeListLocation');
        if (target) {
            target.closest('.ui-state-default, div').remove();
            numbersOfList();
        }
    };

    // Select
    const handleDropdownClick = (event) => {
        const target = event.target;
        const select = target.closest('.select');
        const option = target.closest('.select-option');
        const filterDropDowns = document.querySelectorAll('.filterDropDowns');
        const popupBackBtn = document.querySelector('.section-event-log-content-popup-content-open');

        // Close all select dropdowns except the target select
        document.querySelectorAll('.select').forEach(openSelect => {
            if (openSelect !== select) {
                openSelect.classList.remove('selectRadius');
                filterDropDowns.forEach(el => {
                    el.classList.remove('filterDOpen');
                });
                if (popupBackBtn) {
                    popupBackBtn.classList.remove('forFilterBack');
                }
            }
        });

        if (select) {
            select.classList.toggle('selectRadius');
            filterDropDowns.forEach(el => {
                el.classList.toggle('filterDOpen');
            });
            if (popupBackBtn) {
                popupBackBtn.classList.toggle('forFilterBack');
            }
            if (option) {
                const selectVal = select.querySelector('p');
                selectVal.textContent = option.textContent.trim();
                select.classList.remove('selectRadius');
                filterDropDowns.forEach(el => {
                    el.classList.remove('filterDOpen');
                });
                if (popupBackBtn) {
                    popupBackBtn.classList.remove('forFilterBack');
                }
            }
        }
    };

    const scroll = (event) => {
        const selects = document.querySelectorAll('.select');
        const container = document.querySelector('.section-event-log-content-popup-content-scroll');
        selects.forEach(select => {
            // Add click event listener to each select element
            if (event.target.parentElement === select || event.target === select) {
                const selectRect = select.getBoundingClientRect();
                container.scrollTop = selectRect.top + selectRect.height;
            }
        });
    }

    //
    document.addEventListener('click', handleRemove);
    document.addEventListener('click', handleDropdownClick);
    document.addEventListener('click', scroll);

    //
    handleNewContactAdd();
    handleNewLocationAdd();
    handleNewEventsAdd();
    handleNewDocumentAdd();
    handleNewParticipantAdd();
});


var Pagination = {
    code: '',
    Extend: function (data) {
        data = data || {};
        Pagination.size = data.size || 300;
        Pagination.page = data.page || 1;
        Pagination.step = data.step || 3;
    },
    Add: function (s, f) {
        for (var i = s; i < f; i++) {
            Pagination.code += '<a>' + i + '</a>';
        }
    },
    Last: function () {
        Pagination.code += '<i>...</i><a>' + Pagination.size + '</a>';
    },
    Click: function () {
        Pagination.page = +this.innerHTML;
        Pagination.Start();
    },
    Prev: function () {
        Pagination.page--;
        if (Pagination.page < 1) {
            Pagination.page = 1;
        }
        Pagination.Start();
    },

    Next: function () {
        Pagination.page++;
        if (Pagination.page > Pagination.size) {
            Pagination.page = Pagination.size;
        }
        Pagination.Start();
    },
    NextPages: function () {
        Pagination.page += 5;
        if (Pagination.page > Pagination.size) {
            Pagination.page = Pagination.size;
        }
        Pagination.Start();
    },
    PrevPages: function () {
        Pagination.page -= 4;
        if (Pagination.page < 1) {
            Pagination.page = 1;
        }
        Pagination.Start();
    },
    Bind: function () {
        var a = Pagination.e.getElementsByTagName('a');
        for (var i = 0; i < a.length; i++) {
            if (+a[i].innerHTML === Pagination.page) a[i].className = 'current';
            a[i].addEventListener('click', Pagination.Click, false);
        }
    },
    Finish: function () {
        Pagination.e.innerHTML = Pagination.code;
        Pagination.code = '';
        Pagination.Bind();
    },
    Start: function () {
        if (Pagination.size < Pagination.step * 2 + 4) {
            Pagination.Add(1, Pagination.size + 1);
        } else if (Pagination.page < Pagination.step * 2 + 1) {
            Pagination.Add(1, Pagination.step * 2 + 2);
            Pagination.Last();
        } else if (Pagination.page > Pagination.size - Pagination.step * 2 + 2) {
            Pagination.Add(Pagination.size - Pagination.step * 2, Pagination.size + 2);
        } else {
            Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
            Pagination.Last();
        }
        Pagination.Finish();
    },
    Buttons: function (e) {
        var nav = e.getElementsByTagName('a');
        nav[0].addEventListener('click', Pagination.Prev, false);
        nav[1].addEventListener('click', Pagination.Next, false);
    },
    Create: function (e) {
        var html = [
            '<a><svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">\n' +
            '                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.22552 5.5L7 9.35348L5.38724 11L0 5.5L5.38724 0L7 1.64652L3.22552 5.5Z" fill="white"></path>\n' +
            '</svg></a>', // previous button
            '<span></span>', // pagination container
            '<a><svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">\n' +
            '                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.77448 5.5L0 1.64652L1.61276 0L7 5.5L1.61276 11L0 9.35348L3.77448 5.5Z" fill="white"></path>\n' +
            '</svg></a>' // next button
        ];

        e.innerHTML = html.join('');
        Pagination.e = e.getElementsByTagName('span')[0];
        Pagination.Buttons(e);
    },
    Init: function (e, data) {
        Pagination.Extend(data);
        Pagination.Create(e);
        Pagination.Start();
    }
};

document.addEventListener('DOMContentLoaded', function () {
    let pagination = document.getElementById('pagination');
    let paginationNext = pagination ? pagination.nextElementSibling : null;
    let paginationLast = pagination ? pagination.previousElementSibling : null;

    if (paginationNext) {
        paginationNext.addEventListener('click', function () {
            Pagination.NextPages();
        });
    }

    if (paginationLast) {
        paginationLast.addEventListener('click', function () {
            Pagination.PrevPages();
        });
    }

    if (pagination) {
        Pagination.Init(pagination, {
            size: 30, // pages size
            page: 1, // selected page
            step: 2 // pages before and after current
        });
    }
}, false);

var Pagination2 = {
    code: '',
    Extend: function (data) {
        data = data || {};
        Pagination2.size = data.size || 300;
        Pagination2.page = data.page || 1;
        Pagination2.step = data.step || 3;
    },
    Add: function (s, f) {
        for (var i = s; i < f; i++) {
            Pagination2.code += '<a>' + i + '</a>';
        }
    },
    Last: function () {
        Pagination2.code += '<i>...</i><a>' + Pagination2.size + '</a>';
    },
    Click: function () {
        Pagination2.page = +this.innerHTML;
        Pagination2.Start();
    },
    Prev: function () {
        Pagination2.page--;
        if (Pagination2.page < 1) {
            Pagination2.page = 1;
        }
        Pagination2.Start();
    },
    Next: function () {
        Pagination2.page++;
        if (Pagination2.page > Pagination2.size) {
            Pagination2.page = Pagination2.size;
        }
        Pagination2.Start();
    },
    NextPages: function () {
        Pagination2.page += 5;
        if (Pagination2.page > Pagination2.size) {
            Pagination2.page = Pagination2.size;
        }
        Pagination2.Start();
    },
    PrevPages: function () {
        Pagination2.page -= 4;
        if (Pagination2.page < 1) {
            Pagination2.page = 1;
        }
        Pagination2.Start();
    },
    Bind: function () {
        var a = Pagination2.e.getElementsByTagName('a');
        for (var i = 0; i < a.length; i++) {
            if (+a[i].innerHTML === Pagination2.page) a[i].className = 'current';
            a[i].addEventListener('click', Pagination2.Click, false);
        }
    },
    Finish: function () {
        Pagination2.e.innerHTML = Pagination2.code;
        Pagination2.code = '';
        Pagination2.Bind();
    },
    Start: function () {
        if (Pagination2.size < Pagination2.step * 2 + 4) {
            Pagination2.Add(1, Pagination2.size + 1);
        } else if (Pagination2.page < Pagination2.step * 2 + 1) {
            Pagination2.Add(1, Pagination2.step * 2 + 2);
            Pagination2.Last();
        } else if (Pagination2.page > Pagination2.size - Pagination2.step * 2 + 2) {
            Pagination2.Add(Pagination2.size - Pagination2.step * 2, Pagination2.size + 2);
        } else {
            Pagination2.Add(Pagination2.page - Pagination2.step, Pagination2.page + Pagination2.step + 1);
            Pagination2.Last();
        }
        Pagination2.Finish();
    },
    Buttons: function (e) {
        var nav = e.getElementsByTagName('a');
        nav[0].addEventListener('click', Pagination2.Prev, false);
        nav[1].addEventListener('click', Pagination2.Next, false);
    },
    Create: function (e) {
        var html = [
            '<a><svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">\n' +
            '                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.22552 5.5L7 9.35348L5.38724 11L0 5.5L5.38724 0L7 1.64652L3.22552 5.5Z" fill="white"></path>\n' +
            '</svg></a>', // previous button
            '<span></span>', // pagination2 container
            '<a><svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">\n' +
            '                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.77448 5.5L0 1.64652L1.61276 0L7 5.5L1.61276 11L0 9.35348L3.77448 5.5Z" fill="white"></path>\n' +
            '</svg></a>' // next button
        ];

        e.innerHTML = html.join('');
        Pagination2.e = e.getElementsByTagName('span')[0];
        Pagination2.Buttons(e);
    },
    Init: function (e, data) {
        Pagination2.Extend(data);
        Pagination2.Create(e);
        Pagination2.Start();
    }
};

document.addEventListener('DOMContentLoaded', function () {
    let pagination2 = document.getElementById('pagination2');
    let pagination2Next = pagination2 ? pagination2.nextElementSibling : null;
    let pagination2Last = pagination2 ? pagination2.previousElementSibling : null;

    if (pagination2Next) {
        pagination2Next.addEventListener('click', function () {
            Pagination2.NextPages();
        });
    }

    if (pagination2Last) {
        pagination2Last.addEventListener('click', function () {
            Pagination2.PrevPages();
        });
    }

    if (pagination2) {
        Pagination2.Init(pagination2, {
            size: 30, // pages size
            page: 1, // selected page
            step: 2 // pages before and after current
        });
    }
}, false);

// Group Edit
document.addEventListener('DOMContentLoaded', function () {
    let groupEdit = document.getElementById('groupEdit');
    let infoContacts = document.querySelectorAll('.contactPopup_tool-middle > div');
    let infoContactOrg = document.querySelectorAll('.infoContactOrg');
    let infoContactCheck = document.querySelector('.contactPopup_tool-mainInfoContact .infoContactOurOrg');
    let forDisable = document.querySelectorAll('.forDisable');

    function handleGroupEditChange() {
        let disabled = groupEdit && groupEdit.checked; // Determine if elements should be disabled

        // Disable or enable infoContacts
        infoContacts.forEach(function (infoContact) {
            if (disabled) {
                infoContact.classList.add('disabled');
            } else {
                infoContact.classList.remove('disabled');
            }
        });

        // Disable or enable infoContactOrg
        infoContactOrg.forEach(function (infoContactOrgItem) {
            if (disabled) {
                infoContactOrgItem.classList.add('disabled');
            } else {
                infoContactOrgItem.classList.remove('disabled');
            }
        });

        // Disable or enable infoContactCheck
        if (infoContactCheck) {
            if (disabled) {
                infoContactCheck.classList.add('disabled');
            } else {
                infoContactCheck.classList.remove('disabled');
            }
        }

        // Disable or enable forDisable checkboxes and their parents
        forDisable.forEach(function (checkbox) {
            if (disabled) {
                checkbox.style.display = 'block';
            } else {
                checkbox.style.display = 'none';
            }
            checkbox.onclick = () => {
                if (checkbox.checked) {
                    checkbox.parentElement.classList.remove('disabled');
                } else {
                    checkbox.parentElement.classList.add('disabled');
                }
            }
        });
    }

    if (groupEdit) {
        handleGroupEditChange();
        groupEdit.addEventListener('change', handleGroupEditChange);
    }
});



document.addEventListener('DOMContentLoaded', () => {
    // Filter dropdowns
    const selectElements = document.querySelectorAll('.select');
    const selectDropdowns = document.querySelectorAll('.select-dropdown');
    const selectOptions = document.querySelectorAll('.select-option');
    const filterDropDowns = document.querySelectorAll('.filterDropDowns');
    const popupBackBtn = document.querySelector('.section-event-log-content-popup-content-open');
    let popupRightScroll = document.querySelector('.section-event-log-content-popup-content-scroll');

    selectElements.forEach((selectElement, index) => {
        selectElement.addEventListener('click', (event) => {
            event.stopPropagation();
            const isOpen = selectDropdowns[index].classList.contains('select-dropdown-open');

            // Close all dropdowns first
            selectDropdowns.forEach((dropdown, dropdownIndex) => {
                dropdown.classList.remove('select-dropdown-open');
                selectElements[dropdownIndex].classList.remove('selectRadius');
            });
            filterDropDowns.forEach(el => {
                el.classList.remove('filterDropDownsOpen');
            });
            if (popupBackBtn) {
                popupBackBtn.classList.remove('forFilter-popup-back');
            }
            popupRightScroll.classList.remove('scrollHidden');

            // Open the clicked dropdown if it was closed
            if (!isOpen) {
                selectDropdowns[index].classList.add('select-dropdown-open');
                selectElement.classList.add('selectRadius');
                filterDropDowns.forEach(el => {
                    el.classList.add('filterDropDownsOpen');
                });
                if (popupBackBtn) {
                    popupBackBtn.classList.add('forFilter-popup-back');
                }
                popupRightScroll.classList.add('scrollHidden');
            }
        });
    });

    document.addEventListener('click', (event) => {
        if (!Array.from(selectElements).some(select => select.contains(event.target))) {
            selectDropdowns.forEach((dropdown, dropdownIndex) => {
                dropdown.classList.remove('select-dropdown-open');
                selectElements[dropdownIndex].classList.remove('selectRadius');
            });
            filterDropDowns.forEach(el => {
                el.classList.remove('filterDropDownsOpen');
            });
            if (popupBackBtn) {
                popupBackBtn.classList.remove('forFilter-popup-back');
            }
            popupRightScroll.classList.remove('scrollHidden');
        }
    });

    selectOptions.forEach((option) => {
        option.addEventListener('click', (event) => {
            event.stopPropagation();
            const selectedValue = event.target.getAttribute('data-value');
            const selectedText = event.target.textContent;
            const selectWrapper = event.target.closest('.select');
            const selectP = selectWrapper.querySelector('p');

            selectP.textContent = selectedText;

            // Close all dropdowns
            selectDropdowns.forEach((dropdown, dropdownIndex) => {
                dropdown.classList.remove('select-dropdown-open');
                selectElements[dropdownIndex].classList.remove('selectRadius');
            });
            filterDropDowns.forEach(el => {
                el.classList.remove('filterDropDownsOpen');
            });
            if (popupBackBtn) {
                popupBackBtn.classList.remove('forFilter-popup-back');
            }
            popupRightScroll.classList.remove('scrollHidden');

        });
    });

    // List obligations
    let listObligations = document.querySelectorAll('.list-obligation');
    let listObligationDropdowns = document.querySelectorAll('.list-obligation_dropdown');

    listObligations.forEach((input, index) => {
        let dropdown = listObligationDropdowns[index];

        input.addEventListener('click', (event) => {
            // Prevent event propagation to document click listener
            event.stopPropagation();

            // Close all dropdowns first
            listObligationDropdowns.forEach(d => d.classList.remove('list-obligation_dropdownOpen'));

            // Toggle the current dropdown
            dropdown.classList.toggle('list-obligation_dropdownOpen');
            popupRightScroll.classList.toggle('scrollHidden');


            // Open filter dropdowns when list obligation dropdown is opened
            if (dropdown.classList.contains('list-obligation_dropdownOpen')) {
                filterDropDowns.forEach(el => {
                    el.classList.add('filterDropDownsOpen');
                });
                popupRightScroll.classList.add('scrollHidden');
                if (popupBackBtn) {
                    popupBackBtn.classList.add('forFilter-popup-back');
                }
            } else {
                filterDropDowns.forEach(el => {
                    el.classList.remove('filterDropDownsOpen');
                });
                popupRightScroll.classList.remove('scrollHidden');

                if (popupBackBtn) {
                    popupBackBtn.classList.remove('forFilter-popup-back');
                }
            }
        });

        let dropdownItems = dropdown.querySelectorAll('p');
        dropdownItems.forEach(item => {
            item.addEventListener('click', () => {
                input.value = item.textContent;
                dropdown.classList.remove('list-obligation_dropdownOpen');
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (event) => {
        listObligationDropdowns.forEach(d => d.classList.remove('list-obligation_dropdownOpen'));
        filterDropDowns.forEach(el => {
            el.classList.remove('filterDropDownsOpen');
        });
        if (popupBackBtn) {
            popupBackBtn.classList.remove('forFilter-popup-back');
        }
        popupRightScroll.classList.remove('scrollHidden');
    });

    // Ensure clicking filter dropdowns doesn't close list obligations dropdowns
    document.addEventListener('click', (event) => {
        if (!Array.from(selectElements).some(select => select.contains(event.target))) {
            selectDropdowns.forEach((dropdown, dropdownIndex) => {
                dropdown.classList.remove('select-dropdown-open');
                selectElements[dropdownIndex].classList.remove('selectRadius');
            });
            filterDropDowns.forEach(el => {
                el.classList.remove('filterDropDownsOpen');
            });
            if (popupBackBtn) {
                popupBackBtn.classList.remove('forFilter-popup-back');
            }
            popupRightScroll.classList.remove('scrollHidden');
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    let collapseAll = document.querySelector('.contactPopup_top p');
    let collapseAllArrow = document.querySelectorAll('.contactPopup_top p svg');
    let collapseConts = document.querySelectorAll('.contactPopup_tool-main');
    let collapseContsArrow = document.querySelectorAll('.toolArrow');

    collapseAll.onclick = () => {
        collapseConts.forEach((el, i) => {
            if (el.classList.contains('contactPopup_tool-mainOpen')) {
                el.classList.remove('contactPopup_tool-mainOpen');
                collapseContsArrow[i].classList.remove('toolArrowOpen');
                collapseAllArrow.forEach(ar => {
                    ar.classList.remove('collapseArrowOpen');
                })
            } else {
                collapseAllArrow.forEach(ar => {
                    ar.classList.remove('collapseArrowOpen');
                })
            }
        })
    }
});


document.addEventListener('DOMContentLoaded', () => {
    // Function to update images based on the body's class
    function updateImages() {
        let tableidLk = document.querySelectorAll('.table-photo img');
        if (document.body.classList.contains('_light')) {
            tableidLk.forEach(el => {
                el.src = './img/lk-light.png';
            });
        } else {
            tableidLk.forEach(el => {
                el.src = './img/lk.png';
            });
        }
    }

    updateImages();

    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.attributeName === 'class') {
                updateImages();
            }
        }
    });

    observer.observe(document.body, { attributes: true });

}, false);

document.addEventListener('DOMContentLoaded', () => {
    const statusPngs = document.querySelectorAll('.statusOption > img');
    const statusOption = document.querySelectorAll('.statusOption');
    const activeStatus = document.querySelector('.lk-check');
    const statusBlock = document.querySelector('.userStatus');
    let isOpen = false;

    const updateStatusPngs = () => {
        const isLightMode = document.body.classList.contains('_light');

        statusPngs.forEach(el => {
            const isStatusPngLight = el.classList.contains('statusPngLight');
            const isLoginCheck = el.classList.contains('loginCheck');
            const activeOption = el.parentElement.classList.contains('activeBlock');

            el.classList.remove('activeStatusMode');
            el.classList.remove('activeStatus');

            if (isLightMode) {
                if (!isStatusPngLight && !isLoginCheck) {
                    el.style.display = 'none';
                } else {
                    el.classList.add('activeStatusMode');
                    el.style.display = 'block';
                    if (activeOption) {
                        el.classList.add('activeStatus');
                    }
                }
            } else {
                if (isStatusPngLight && !isLoginCheck) {
                    el.style.display = 'none';
                } else {
                    el.classList.add('activeStatusMode');
                    el.style.display = 'block';
                    if (activeOption) {
                        el.classList.add('activeStatus');
                    }
                }
            }
            if (activeOption) {
                const activeStatusModeElement = el.parentElement.querySelector('.activeStatusMode');
                if (activeStatusModeElement) {
                    activeStatus.src = activeStatusModeElement.src;
                }
            }
        });
    };

    updateStatusPngs();

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class') {
                updateStatusPngs();
            }
        });
    });

    observer.observe(document.body, { attributes: true });

    statusOption.forEach((opt, ind) => {
        opt.onclick = () => {
            const activeStatusModes = document.querySelectorAll('.activeStatusMode');
            if (activeStatusModes[ind]) {
                activeStatus.src = activeStatusModes[ind].src;
                activeStatusModes.forEach(el => {
                    el.classList.remove('activeStatus');
                });
                activeStatusModes[ind].classList.add('activeStatus');
                statusOption.forEach(el => {
                    el.classList.remove('activeBlock');
                })
                opt.classList.add('activeBlock');
                statusBlock.style.display = 'none';
                isOpen = false;
            }
        };
    });

    // Toggle status block display
    activeStatus.onclick = () => {
        if (!isOpen) {
            statusBlock.style.display = 'flex';
            isOpen = true;
        } else {
            statusBlock.style.display = 'none';
            isOpen = false;
        }
    };
    // Close status block when clicking outside
    document.addEventListener('click', (event) => {
        if (!statusBlock.contains(event.target) && event.target !== activeStatus) {
            statusBlock.style.display = 'none';
            isOpen = false;
        }
    });
    const loginCheckImg = document.querySelector('.loginCheck');
    if (loginCheckImg) {
        loginCheckImg.classList.add('activeStatus');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const tableIdArrows = document.querySelectorAll('.tableIdArrow');
    const tableIdArrowBlock = document.querySelector('.table-id-block');
    let isOpen = false;

    tableIdArrows.forEach(btn => {
        btn.addEventListener('click', () => {
            tableIdArrowBlock.style.display = isOpen ? 'none' : 'flex';
            isOpen = !isOpen;
        });
    });

    document.addEventListener('click', (event) => {
        if (!tableIdArrowBlock.contains(event.target) && !Array.from(tableIdArrows).includes(event.target)) {
            tableIdArrowBlock.style.display = 'none';
            isOpen = false;
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("table1");
    let selectedRow = null;

    table.addEventListener("click", function (event) {
        const target = event.target;

        if (target.tagName === "TD") {
            const row = target.parentNode;

            if (selectedRow === row) {
                row.classList.remove("highlight");
                selectedRow = null;
            } else {
                if (selectedRow) {
                    selectedRow.classList.remove("highlight");
                }

                row.classList.add("highlight");
                selectedRow = row;
            }
        }
    });
});

// Работа со списками
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.listFilters');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            button.classList.toggle('listFilters-active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    let customCheckbox = document.querySelectorAll('table .custom-checkbox input');
    let labelCustomCheckbox = document.querySelectorAll('table .custom-checkbox');

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

// scroll

document.addEventListener('DOMContentLoaded', function () {
    const selects = document.querySelectorAll('.select');
    const selectsDropdown = document.querySelectorAll('.select-dropdown');
    const selectsObl = document.querySelectorAll('.list-obligation');
    const selectsOblDropdown = document.querySelectorAll('.list-obligation_dropdown');
    const container = document.querySelector('.section-event-log-content-popup-content-scroll');


    function scrollToElement(select) {
        const selectRect = select.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        if (selectRect.bottom > containerRect.bottom) {
            container.scrollTop += (selectRect.bottom - containerRect.bottom);
        } else if (selectRect.top < containerRect.top) {
            container.scrollTop -= (containerRect.top - selectRect.top);
        }
    }

    selects.forEach((select, ind) => {
        select.addEventListener('click', function () {
            scrollToElement(selectsDropdown[ind]);
        });
    });

    selectsObl.forEach((select, ind) => {
        select.addEventListener('click', function () {
            scrollToElement(selectsOblDropdown[ind]);
        });
    });
});

// 

document.addEventListener('DOMContentLoaded', function () {
    let sectionEventLogTopSearch = document.querySelector('.section-event-log-top-search');
    const popupBackBtn = document.querySelector('.section-event-log-content-popup-content-open');
    popupBackBtn.onclick = () => {
        sectionEventLogTopSearch.classList.toggle('section-event-log-top-search-open');
    }
});

// height 

function adjustHeights() {
    let sectionEventLogTop = document.querySelector('.section-event-log-top');
    let tableTop = document.querySelector('thead');
    let popupRightTop = document.querySelector('.contactPopup_top');
    let popupRightUser = document.querySelector('.contactPopup_user');

    if (sectionEventLogTop && popupRightTop && popupRightUser) {
        let sectionEventLogTopRect = sectionEventLogTop.getBoundingClientRect();
        let tableTopRect = tableTop.getBoundingClientRect();
        popupRightTop.style.height = sectionEventLogTopRect.height + 'px';
        popupRightUser.style.height = tableTopRect.height + 'px';
    } else {
        console.warn('One or more of the elements (.section-event-log-top, .contactPopup_top, .contactPopup_user) were not found.');
    }
}

document.addEventListener('DOMContentLoaded', adjustHeights);
window.addEventListener('resize', adjustHeights);

// section bottom scroll

let selcBottomLeft = document.querySelector('.section-event-log-content-bottom-left');
let gradiantRight = document.querySelector('.gradient-scroll-right');
let gradiantLeft = document.querySelector('.gradient-scroll');

function updateGradiantPosition() {
    let selcBottomLeftRect = selcBottomLeft.getBoundingClientRect();
    gradiantRight.style.position = 'fixed';
    gradiantRight.style.top = `${selcBottomLeftRect.top}px`;
    gradiantRight.style.left = `${selcBottomLeftRect.right - gradiantRight.offsetWidth}px`;
    gradiantLeft.style.position = 'fixed';
    gradiantLeft.style.top = `${selcBottomLeftRect.top}px`;
    gradiantLeft.style.left = `${selcBottomLeftRect.left}px`;
}

selcBottomLeft.onscroll = updateGradiantPosition;
window.addEventListener('resize', updateGradiantPosition);
document.addEventListener('DOMContentLoaded', updateGradiantPosition);

// error 

document.addEventListener('DOMContentLoaded', function () {
    let topLine = document.querySelector('.section-event-log-top-line');
    let topLineText = document.querySelector('.section-event-log-top-line > span');
    let isError = false

    topLine.addEventListener('dblclick', function () {
        topLine.classList.toggle('section-event-log-top-line-error');
        if (!isError) {
            topLineText.textContent = 'IP-АТС АГАТ CU-7210 (Отсутствует соединение с сервером)';
            isError = true;
        } else {
            topLineText.textContent = 'IP-АТС АГАТ CU-7210';
            isError = false;
        }
    });
});
