document.addEventListener('DOMContentLoaded', function () {
    let customCheckbox = document.querySelectorAll('.gateway-item .custom-checkbox input');
    let labelCustomCheckbox = document.querySelectorAll('.gateway-item .custom-checkbox');
    let customCheckboxTable = document.querySelectorAll('table .custom-checkbox input');
    let labelCustomCheckboxTable = document.querySelectorAll('table .custom-checkbox');

    customCheckbox.forEach((el, i) => {
        el.onclick = () => {
            if (el.checked) {
                labelCustomCheckbox[i].classList.add('customChecked');
            } else {
                labelCustomCheckbox[i].classList.remove('customChecked');
            }
        }
    })

    customCheckboxTable.forEach((el, i) => {
        el.onclick = () => {
            if (el.checked) {
                labelCustomCheckboxTable[i].classList.add('customChecked');
            } else {
                labelCustomCheckboxTable[i].classList.remove('customChecked');
            }
        }
    })
});


document.addEventListener('DOMContentLoaded', function () {
    let toolinfoSelect = document.querySelectorAll('.maininfocontact-tool2-select');
    let toolinfoBlock = document.querySelectorAll('.mainifocontact-tool2');

    toolinfoSelect.forEach((tool, ind) => {
        tool.onclick = () => {
            toolinfoBlock[ind].classList.toggle('toolinfoBlock-open');
        }
    })

});

document.addEventListener('DOMContentLoaded', function () {
    let seePassword = document.querySelectorAll('.seePassword');
    let password = document.querySelectorAll('.passwordForRegister input');

    seePassword.forEach((seePassword, ind) => {
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

    chanelsRightBtns.forEach((btn, ind) => {
        btn.onclick = () => {
            chanelsRight.forEach(el => {
                el.classList.remove('chanelsRightActive');
            })
            chanelsRight[ind].classList.add('chanelsRightActive');
        }
    })

});

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
    let itemsForDisable = document.querySelectorAll('.gateway-item-for-disable');
    let forDisable = document.querySelectorAll('.forDisable');

    function handleGroupEditChange() {
        let disabled = groupEdit && groupEdit.checked;

        // Disable or enable itemsForDisable elements
        itemsForDisable.forEach(function (item) {
            if (disabled) {
                item.classList.add('disabled');
            } else {
                item.classList.remove('disabled');
            }
        });

        // Disable or enable forDisable checkboxes and their parent elements
        forDisable.forEach(function (checkbox) {
            if (disabled) {
                checkbox.style.display = 'block';
            } else {
                checkbox.style.display = 'none';
            }

            checkbox.onclick = function () {
                if (checkbox.checked) {
                    checkbox.parentElement.classList.remove('disabled');
                } else {
                    checkbox.parentElement.classList.add('disabled');
                }
            };
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

    // Close dropdowns when clicking outside
    document.addEventListener('click', (event) => {
        filterDropDowns.forEach(el => {
            el.classList.remove('filterDropDownsOpen');
        });
        if (popupBackBtn) {
            popupBackBtn.classList.remove('forFilter-popup-back');
        }
        popupRightScroll.classList.remove('scrollHidden');
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

// mobile event log top btns modal

document.addEventListener('DOMContentLoaded', function () {
    let btnopen = document.querySelector('.event-log-top-part-modal-btn');
    let modal = document.querySelector('.event-log-top-part-modal-block');

    btnopen.onclick = () => {
        modal.classList.toggle('event-log-top-part-modal-open');
    }

    document.addEventListener('click', (event) => {
        if (!modal.contains(event.target) && event.target !== btnopen && !btnopen.contains(event.target)) {
            modal.classList.remove('event-log-top-part-modal-open');
        }
    });
});

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
    // List
    const handleNewListAdd = () => {
        const listLocation = document.querySelector('.list-contactTable-list');
        const listLocationAdd = document.querySelectorAll('.listListAdd');

        listLocationAdd.forEach((el, i) => {
            el.addEventListener('click', (event) => {
                event.stopPropagation();
                const newElementHTML = `
                <div class="ui-state-default">
                                            <p class="numOfList"> <svg class="arrow" width="21" height="21" viewBox="0 0 21 21" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
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
                                            <p>q1</p>
                                            <p>1</p>
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

    // Chanels
    const handleNewChanelsAdd = () => {
        const listLocation = document.querySelector('.list-contactTable-Chanel');
        const listLocationAdd = document.querySelectorAll('.listChanelsAdd');

        listLocationAdd.forEach(el => {
            el.addEventListener('click', (event) => {
                event.stopPropagation();
                const newElementHTML = `
                    <div class="ui-state-default">
                                            <p class="numOfList2"> <svg class="arrow" width="21" height="21" viewBox="0 0 21 21" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
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
                                            <p>q1</p>
                                            <p>sms_gateway</p>
                                            <p class="trunkPriority">0 (в последнюю очередь)</p>
                                            <p>10</p>
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
    handleNewListAdd();
    handleNewChanelsAdd();
});

// scroll hidden

document.addEventListener('DOMContentLoaded', function () {
    let popupRightScroll = document.querySelector('.section-event-log-content-popup-content-scroll');
    
    if (popupRightScroll) {
        let popupRightScrollWidth = popupRightScroll.scrollWidth;
        let popupRightScrollClientWidth = popupRightScroll.clientWidth;
        let scrollbarWidth = popupRightScrollWidth - popupRightScrollClientWidth;
        
        if (popupRightScroll.classList.contains('scrollHidden')) {
            document.body.style.setProperty('--padding-right', `${scrollbarWidth}px`);
        }
    }
});



// select scroll

document.addEventListener('DOMContentLoaded', function () {
    const selectElements = document.querySelectorAll('.select');
    const selectDropdowns = document.querySelectorAll('.select-dropdown');


    selectElements.forEach((selectElement) => {
        selectElement.addEventListener('click', () => {
            selectDropdowns.forEach((sel) => {
                if (sel.classList.contains('select-dropdown-open')) {

                    // Calculate scrollbar thumb height
                    let containerHeight = sel.clientHeight;
                    let scrollHeight = sel.scrollHeight;
                    let scrollbarThumbHeight =  containerHeight / scrollHeight * containerHeight - 15;
                    const maxTop = containerHeight - scrollbarThumbHeight - 30;
                    const selRect = sel.getBoundingClientRect();
                    const offsetTop = 15;
                    const offsetRight = 15;


                    let topSection = document.querySelector('.section-event-log-top-line');
                    let topSectionRect = topSection.getBoundingClientRect();
                    let header = document.querySelector('header');
                    let headerRect = header.getBoundingClientRect();
                    let parentElTop = topSectionRect.height + headerRect.height;

                    const beforeTop = selRect.top + offsetTop;
                    const beforeRight = window.innerWidth - selRect.right + offsetRight;
                    document.body.style.setProperty('--before-top', `${beforeTop - parentElTop}px`);
                    document.body.style.setProperty('--before-right', `${beforeRight}px`);

                    let style = document.querySelector('#selectDropdownStyle');
                    if (!style) {
                        style = document.createElement('style');
                        style.id = 'selectDropdownStyle';
                        document.head.appendChild(style);
                    }
                    if (sel.scrollHeight > 200) {
                        style.innerHTML = `
                            .select-dropdown-open::before {
                                height: ${scrollbarThumbHeight}px;
                            }
                        `;
                    } else if (sel.scrollHeight < 200) {
                        style.innerHTML = `
                            .select-dropdown-open::before {
                                height: ${0}px;
                            }
                        `;
                    }

                    // Update the top position on scroll
                    sel.onscroll = () => {
                        let selScrollTop = sel.scrollTop;
                        let thumbTop = (selScrollTop / (scrollHeight - containerHeight)) * (containerHeight - scrollbarThumbHeight);
                        thumbTop = Math.min(thumbTop, maxTop);
                        document.body.style.setProperty('--before-top', `${(beforeTop - parentElTop) + thumbTop}px`);
                    }
                };
            });
        });
    });
});

