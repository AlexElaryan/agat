document.addEventListener('DOMContentLoaded', function () {
    let toolSelect = document.querySelectorAll('.contactPopup-tool_select');
    let toolArrow = document.querySelectorAll('.toolArrow');
    let contactToolMain = document.querySelectorAll('.contactPopup_tool-main');
    let collapseAllArrow = document.querySelectorAll('.contactPopup_top p svg');

    let listAdd = document.querySelectorAll('.listAdd');
    let listAddDropdown = document.querySelector('.listAdd-dropdown');
    let isListAD = false;

    toolSelect.forEach((el, i) => {
        el.addEventListener('click', (event) => {
            if (!contactToolMain[i].classList.contains('contactPopup_tool-mainOpen') && !listAddDropdown.contains(event.target)) {
                contactToolMain[i].classList.add('contactPopup_tool-mainOpen');
                toolArrow[i].classList.add('toolArrowOpen');
                collapseAllArrow.forEach(ar => {
                    ar.classList.add('collapseArrowOpen');
                });
            } else {
                contactToolMain[i].classList.remove('contactPopup_tool-mainOpen');
                toolArrow[i].classList.remove('toolArrowOpen');
            }
        });
    });

    listAdd.forEach(el => {
        el.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the click event from bubbling up to the toolSelect handler
            if (!isListAD) {
                if (listAddDropdown) {
                    listAddDropdown.classList.add('listAdd-dropdownOpen');
                }
                isListAD = true;
            } else {
                if (listAddDropdown) {
                    listAddDropdown.classList.remove('listAdd-dropdownOpen');
                }
                isListAD = false;
            }
        });
    });

    document.addEventListener('click', (event) => {
        let clickedInsideListAdd = Array.from(listAdd).some(el => el.contains(event.target));
        if (!clickedInsideListAdd && listAddDropdown && !listAddDropdown.contains(event.target)) {
            listAddDropdown.classList.remove('listAdd-dropdownOpen');
            isListAD = false;
        }
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

document.addEventListener('DOMContentLoaded', () => {
    const selectElements = document.querySelectorAll('.select');
    const selectDropdowns = document.querySelectorAll('.select-dropdown');
    const selectOptions = document.querySelectorAll('.select-option');

    selectElements.forEach((selectElement, index) => {
        selectElement.addEventListener('click', (event) => {
            event.stopPropagation();
            selectDropdowns.forEach((dropdown, dropdownIndex) => {
                if (dropdownIndex !== index) {
                    dropdown.classList.remove('select-dropdown-open');
                    selectElements[dropdownIndex].classList.remove('selectRadius');
                }
            });
            selectDropdowns[index].classList.toggle('select-dropdown-open');
            selectElement.classList.toggle('selectRadius');
        });

        document.addEventListener('click', (event) => {
            if (!selectElement.contains(event.target)) {
                selectDropdowns[index].classList.remove('select-dropdown-open');
                selectElement.classList.remove('selectRadius');
            }
        });
    });

    selectOptions.forEach(option => {
        option.addEventListener('click', (event) => {
            const selectedValue = event.target.getAttribute('data-value');
            const selectedText = event.target.textContent;
            const selectWrapper = event.target.closest('.select');
            const selectP = selectWrapper.querySelector('p');
            selectP.textContent = selectedText;
            const dropdown = selectWrapper.querySelector('.select-dropdown');
            dropdown.classList.remove('select-dropdown-open');
            selectWrapper.classList.remove('selectRadius');
        });
    });
});

//

document.addEventListener('DOMContentLoaded', () => {
    let collapseAll = document.querySelector('.contactPopup_top p');
    let collapseAllArrow = document.querySelectorAll('.contactPopup_top p svg');
    let collapseConts = document.querySelectorAll('.contactPopup_tool-main');
    let collapseContsArrow = document.querySelectorAll('.toolArrow');
    
    collapseAll.onclick = () => {
        collapseConts.forEach((el,i) => {
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
        let tableidLk = document.querySelectorAll('.custom-checkbox img');
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
