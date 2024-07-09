var acc = document.getElementsByClassName('accordion')
var i

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function () {
		this.classList.toggle('active')
		var panel = this.nextElementSibling
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null
		} else {
			panel.style.maxHeight = panel.scrollHeight + 'px'
		}
	})
}

const btnNumlike = document.querySelectorAll(
	'.section-event-log-content-bottom-left-block'
)

btnNumlike.forEach(function (item) {
	item.addEventListener('click', function () {
		btnNumlike.forEach(function (i) {
			i.classList.remove('section-event-log-content-bottom-left-block-active')
		})

		item.classList.add('section-event-log-content-bottom-left-block-active')
	})
})

const btnNumlike2 = document.querySelectorAll('.header-settings')

btnNumlike2.forEach(function (item) {
	item.addEventListener('click', function () {
		btnNumlike2.forEach(function (i) {
			i.classList.remove('header-settings-active')
		})

		item.classList.add('header-settings-active')
	})
})

var Pagination = {
	code: '',

	// --------------------
	// Utility
	// --------------------

	// converting initialize data
	Extend: function (data) {
		data = data || {}
		Pagination.size = data.size || 300
		Pagination.page = data.page || 1
		Pagination.step = data.step || 3
	},

	// add pages by number (from [s] to [f])
	Add: function (s, f) {
		for (var i = s; i < f; i++) {
			Pagination.code += '<a>' + i + '</a>'
		}
	},

	// add last page with separator
	Last: function () {
		Pagination.code += '<i>...</i><a>' + Pagination.size + '</a>'
	},

	// --------------------
	// Handlers
	// --------------------

	// change page
	Click: function () {
		Pagination.page = +this.innerHTML
		Pagination.Start()
	},

	// previous page
	Prev: function () {
		Pagination.page--
		if (Pagination.page < 1) {
			Pagination.page = 1
		}
		Pagination.Start()
	},

	// next page
	Next: function () {
		Pagination.page++
		if (Pagination.page > Pagination.size) {
			Pagination.page = Pagination.size
		}
		Pagination.Start()
	},
	NextPages: function () {
		Pagination.page += 5
		if (Pagination.page > Pagination.size) {
			Pagination.page = Pagination.size
		}
		Pagination.Start()
	},
	PrevPages: function () {
		Pagination.page -= 4
		if (Pagination.page < 1) {
			Pagination.page = 1
		}
		Pagination.Start()
	},
	// --------------------
	// Script
	// --------------------

	// binding pages
	Bind: function () {
		var a = Pagination.e.getElementsByTagName('a')
		for (var i = 0; i < a.length; i++) {
			if (+a[i].innerHTML === Pagination.page) a[i].className = 'current'
			a[i].addEventListener('click', Pagination.Click, false)
		}
	},

	// write pagination
	Finish: function () {
		Pagination.e.innerHTML = Pagination.code
		Pagination.code = ''
		Pagination.Bind()
	},

	// find pagination type
	Start: function () {
		if (Pagination.size < Pagination.step * 2 + 4) {
			Pagination.Add(1, Pagination.size + 1)
		} else if (Pagination.page < Pagination.step * 2 + 1) {
			Pagination.Add(1, Pagination.step * 2 + 2)
			Pagination.Last()
		} else if (Pagination.page > Pagination.size - Pagination.step * 2 + 2) {
			Pagination.Add(Pagination.size - Pagination.step * 2, Pagination.size + 2)
		} else {
			Pagination.Add(
				Pagination.page - Pagination.step,
				Pagination.page + Pagination.step + 1
			)
			Pagination.Last()
		}
		Pagination.Finish()
	},

	// --------------------
	// Initialization
	// --------------------

	// binding buttons
	Buttons: function (e) {
		var nav = e.getElementsByTagName('a')
		nav[0].addEventListener('click', Pagination.Prev, false)
		nav[1].addEventListener('click', Pagination.Next, false)
	},

	// create skeleton
	Create: function (e) {
		var html = [
			'<a><svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">\n' +
			'                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.22552 5.5L7 9.35348L5.38724 11L-9.34969e-07 5.5L5.38724 -7.0496e-08L7 1.64652L3.22552 5.5Z" fill="white"></path>\n' +
			'                        </svg></a>', // previous button
			'<span></span>', // pagination container
			'<a><svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">\n' +
			'                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.77448 5.5L1.22656e-06 1.64652L1.61276 -6.8471e-08L7 5.5L1.61276 11L2.15915e-07 9.35348L3.77448 5.5Z" fill="white"></path>\n' +
			'                        </svg></a>', // next button
		]

		e.innerHTML = html.join('')
		Pagination.e = e.getElementsByTagName('span')[0]
		Pagination.Buttons(e)
	},

	// init
	Init: function (e, data) {
		Pagination.Extend(data)
		Pagination.Create(e)
		Pagination.Start()
	},
}

/* * * * * * * * * * * * * * * * *
 * Initialization
 * * * * * * * * * * * * * * * * */
let pagination = document.getElementById('pagination')
let paginationNext = pagination.nextElementSibling
let paginationLast = pagination.previousElementSibling

paginationNext.addEventListener('click', e => {
	Pagination.NextPages()
})
paginationLast.addEventListener('click', e => {
	Pagination.PrevPages()
})
var init = function () {
	Pagination.Init(pagination, {
		size: 30, // pages size
		page: 1, // selected page
		step: 2, // pages before and after current
	})
}

document.addEventListener('DOMContentLoaded', init, false)

var Pagination2 = {
	code: '',

	// --------------------
	// Utility
	// --------------------

	// converting initialize data
	Extend: function (data) {
		data = data || {}
		Pagination2.size = data.size || 300
		Pagination2.page = data.page || 1
		Pagination2.step = data.step || 3
	},

	// add pages by number (from [s] to [f])
	Add: function (s, f) {
		for (var i = s; i < f; i++) {
			Pagination2.code += '<a>' + i + '</a>'
		}
	},

	// add last page with separator
	Last: function () {
		Pagination2.code += '<i>...</i><a>' + Pagination2.size + '</a>'
	},

	// add first page with separator
	// First: function () {
	// 	Pagination2.code += '<a>1</a><i>...</i>'
	// },

	// --------------------
	// Handlers
	// --------------------

	// change page
	Click: function () {
		Pagination2.page = +this.innerHTML
		Pagination2.Start()
	},

	// previous page
	Prev: function () {
		Pagination2.page--
		if (Pagination2.page < 1) {
			Pagination2.page = 1
		}
		Pagination2.Start()
	},

	// next page
	Next: function () {
		Pagination2.page++
		if (Pagination2.page > Pagination2.size) {
			Pagination2.page = Pagination2.size
		}
		Pagination2.Start()
	},
	NextPages: function () {
		Pagination2.page += 5
		if (Pagination2.page > Pagination2.size) {
			Pagination2.page = Pagination2.size
		}
		Pagination2.Start()
	},
	PrevPages: function () {
		Pagination2.page -= 4
		if (Pagination2.page < 1) {
			Pagination2.page = 1
		}
		Pagination2.Start()
	},
	// --------------------
	// Script
	// --------------------

	// binding pages
	Bind: function () {
		var a = Pagination2.e.getElementsByTagName('a')
		for (var i = 0; i < a.length; i++) {
			if (+a[i].innerHTML === Pagination2.page) a[i].className = 'current'
			a[i].addEventListener('click', Pagination2.Click, false)
		}
	},

	// write pagination2
	Finish: function () {
		Pagination2.e.innerHTML = Pagination2.code
		Pagination2.code = ''
		Pagination2.Bind()
	},

	// find pagination2 type
	Start: function () {
		if (Pagination2.size < Pagination2.step * 2 + 4) {
			Pagination2.Add(1, Pagination2.size + 1)
		} else if (Pagination2.page < Pagination2.step * 2 + 1) {
			Pagination2.Add(1, Pagination2.step * 2 + 2)
			Pagination2.Last()
		} else if (Pagination2.page > Pagination2.size - Pagination2.step * 2 + 2) {
			Pagination2.Add(
				Pagination2.size - Pagination2.step * 2,
				Pagination2.size + 2
			)
		} else {
			Pagination2.Add(
				Pagination2.page - Pagination2.step,
				Pagination2.page + Pagination2.step + 1
			)
			Pagination2.Last()
		}
		Pagination2.Finish()
	},

	// --------------------
	// Initialization
	// --------------------

	// binding buttons
	Buttons: function (e) {
		var nav = e.getElementsByTagName('a')
		nav[0].addEventListener('click', Pagination2.Prev, false)
		nav[1].addEventListener('click', Pagination2.Next, false)
	},

	// create skeleton
	Create: function (e) {
		var html = [
			'<a><svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">\n' +
			'                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.22552 5.5L7 9.35348L5.38724 11L-9.34969e-07 5.5L5.38724 -7.0496e-08L7 1.64652L3.22552 5.5Z" fill="white"></path>\n' +
			'                        </svg></a>', // previous button
			'<span></span>', // pagination2 container
			'<a><svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">\n' +
			'                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.77448 5.5L1.22656e-06 1.64652L1.61276 -6.8471e-08L7 5.5L1.61276 11L2.15915e-07 9.35348L3.77448 5.5Z" fill="white"></path>\n' +
			'                        </svg></a>', // next button
		]

		e.innerHTML = html.join('')
		Pagination2.e = e.getElementsByTagName('span')[0]
		Pagination2.Buttons(e)
	},

	// init
	Init: function (e, data) {
		Pagination2.Extend(data)
		Pagination2.Create(e)
		Pagination2.Start()
	},
}

/* * * * * * * * * * * * * * * * *
 * Initialization
 * * * * * * * * * * * * * * * * */
let pagination2 = document.getElementById('pagination2')
let pagination2Next = pagination2.nextElementSibling
let pagination2Last = pagination2.previousElementSibling

pagination2Next.addEventListener('click', e => {
	Pagination2.NextPages()
})
pagination2Last.addEventListener('click', e => {
	Pagination2.PrevPages()
})
var init2 = function () {
	Pagination2.Init(pagination2, {
		size: 30, // pages size
		page: 1, // selected page
		step: 2, // pages before and after current
	})
}

document.addEventListener('DOMContentLoaded', init2, false)

let columnsWidth = []

function columWidthGive() {
	columnsWidth = []
	let columns = document
		.querySelector('table')
		.querySelectorAll('.table-tr')[0]
		.querySelectorAll('th')
	for (const item of columns) {
		let styleAttribute = item.getAttribute('style')
		let widthMatch = styleAttribute.match(/width:\s*(\d+(\.\d+)?)px/) // Ищем значение ширины в формате "width: число.px"
		if (widthMatch) {
			let widthValue = parseFloat(widthMatch[1])
			widthValue > 50 ? columnsWidth.push(widthValue) : columnsWidth.push(50)
		} else {
			columnsWidth.push('auto')
		}
	}
	console.log(
		`Вызываем функцию columWidthGive и получаем массив ширины столбцов слева на право в переменной (columnsWidth) = `
	)
	console.log(columnsWidth)
}

const checkItems = document.querySelectorAll('div.custom-radio')
const actionsBlock = document.querySelector('.section-actions')
let actionItems = document.querySelectorAll('.section-actions-item')
const removeItems = document?.querySelector('#filterRemove')

let orderCount = 1
for (const checkItem of checkItems) {
	let actionId = checkItem.firstElementChild.getAttribute('data-actionId')
	let action = document.getElementById(actionId)
	checkItem.addEventListener('click', e => {
		if (e.target.classList.contains('before')) {
			checkItem.firstElementChild.checked = !checkItem.firstElementChild.checked
			if (checkItem.firstElementChild.checked) {
				let actionClone = action.cloneNode(true)
				action.parentNode.insertBefore(actionClone, action.nextSibling)
				actionClone.removeAttribute('id')
				actionClone.style.order = orderCount
				actionClone.classList.add('_active')
				actionClone.setAttribute('data-cloneId', actionId)
				newElements()
				orderCount++
			} else {
				var elementsToRemove = document.querySelectorAll(
					`div[data-cloneId=${actionId}]`
				)
				orderCount -= elementsToRemove.length
				elementsToRemove.forEach(function (element) {
					element.parentNode.removeChild(element)
				})
			}
		} else {
			checkItem.firstElementChild.checked = true
			let actionClone = action.cloneNode(true)
			action.parentNode.insertBefore(actionClone, action.nextSibling)
			actionClone.removeAttribute('id')
			actionClone.style.order = orderCount
			actionClone.classList.add('_active')
			actionClone.setAttribute('data-cloneId', actionId)
			newElements()
			orderCount++
		}

		orderCount > 1
			? actionsBlock.classList.add('_active')
			: actionsBlock.classList.remove('_active')
	})
}
removeItems?.addEventListener('click', () => {
	orderCount = 1
	for (const checkItem of checkItems) {
		checkItem.firstElementChild.checked = false
	}
	var elementsToRemove = document.querySelectorAll(
		'.section-actions-item._active'
	)
	elementsToRemove.forEach(function (element) {
		element.parentNode.removeChild(element)
	})
	actionsBlock.classList.remove('_active')
})
let removeActionItemHandler

function newElements() {
	actionItems = document.querySelectorAll('.section-actions-item')

	for (const actionItem of actionItems) {
		try {
			let id = actionItem.getAttribute('data-cloneId')
			let checkBox = document.querySelector(`input[data-actionId="${id}"]`)
			let remove = actionItem.querySelector(
				'.section-actions-item-button._remove'
			)
			remove.removeEventListener('click', removeActionItemHandler)

			removeActionItemHandler = () => {
				actionItem.parentNode.removeChild(actionItem)
				orderCount--

				if (
					document.querySelectorAll(`div[data-cloneid="${id}"]`).length === 0
				) {
					checkBox.checked = false
				}
				orderCount > 1
					? actionsBlock.classList.add('_active')
					: actionsBlock.classList.remove('_active')
			}

			remove.addEventListener('click', removeActionItemHandler)
		} catch (err) { }
	}

	let itemsRange = document.querySelectorAll(
		"div[data-cloneid='actions-item-time']"
	)
	for (const itemRange of itemsRange) {
		new DualRange(itemRange, '.dualRangeInput', e => {
			let minTimes = String(e.min).split('.')
			let min = `${minTimes[0]}:${minTimes[1] == 5 ? '30' : '00'}`
			let maxTimes = String(e.max).split('.')
			let max = `${maxTimes[0]}:${maxTimes[1] == 5 ? '30' : '00'}`
			itemRange.querySelector('#timeMin').textContent = min
			itemRange.querySelector('#timeMax').textContent = max
		})
	}
	let itemsDate = document.querySelectorAll(
		"div[data-cloneid='actions-item-date']"
	)
	for (const itemDate of itemsDate) {
		let dpMin, dpMax
		let inputs = itemDate.querySelectorAll('input')
		dpMin = new AirDatepicker(inputs[0], {
			onSelect({ date }) {
				dpMax.update({
					minDate: date,
				})
			},
		})

		dpMax = new AirDatepicker(inputs[1], {
			onSelect({ date }) {
				dpMin.update({
					maxDate: date,
				})
			},
		})
	}
}

var cur = null

function hook(e) {
	e = e || window.event
	var el = (e.srcElement || e.target).parentNode
	cur = { el: el, x: e.clientX + el.scrollWidth }
}
function unhook(e) {
	getPopupWidth()
	if (popupEvent.classList.contains('_show')) {
		tableContainer.style.maxWidth =
			+tableContainer.parentElement.offsetWidth - +popupWidth + 'px'
	} else {
		tableContainer.style.maxWidth =
			+tableContainer.parentElement.offsetWidth + 'px'
	}
	if (cur) cur = null
}
function move(e) {
	if (!cur) return
	e = e || window.event
	with (cur) {
		var nx = x - e.clientX

		if (nx < 40) nx = 40

		el.style.width = nx + 'px'
	}
	e.preventDefault ? e.preventDefault() : (e.returnValue = false)
}

document.onmouseup = unhook
document.onmousemove = move
document.ondragstart = function () {
	return false
}

let popupBack = document.querySelector('.section-event-log-content-popup-back')

let popupEvent = document.querySelector('.section-event-log-content-popup')

let popupEventOpen = document.querySelector(
	'.section-event-log-content-popup-content-open'
)
let tableContainer = document.querySelector('.table-block')
let popupWidth;

function getPopupWidth() {
	popupWidth =
		document.querySelector('.section-event-log-content-popup-content')
			.scrollWidth + 3;
}
popupEventOpen.addEventListener('click', e => {
	if (popupEventOpen.classList.toggle('_active')) {
		popupEvent.classList.add('_show')
		popupBack.classList.add('_show')
		tableContainer.style.maxWidth =
			+tableContainer.parentElement.offsetWidth - +popupWidth + 'px'
	} else {
		popupEvent.classList.remove('_show')
		popupBack.classList.remove('_show')
		tableContainer.style.maxWidth =
			+tableContainer.parentElement.offsetWidth + 'px'
	}
})
let paginationTop = pagination.parentElement.parentElement;
let paginationBottom = pagination2.parentElement.parentElement;

function paginationVisible() {
	let items = document.querySelectorAll('.pagination-visible')

	for (const item of items) {
		if (item.checked === true) {
			paginationValueSwitch(item.value)
		}
		item.addEventListener('change', () => {
			paginationValueSwitch(item.value)
		})
	}
}

function paginationValueSwitch(value) {
	switch (value) {
		case 'top': {
			paginationTop.style.display = 'flex'
			paginationBottom.style.display = 'none'
			break
		}
		case 'bottom': {
			paginationTop.style.display = 'none'
			paginationBottom.style.display = 'flex'
			break
		}

		case 'all':
			paginationTop.style.display = 'flex'
			paginationBottom.style.display = 'flex'
			break
		case 'none':
			paginationTop.style.display = 'none'
			paginationBottom.style.display = 'none'
			break
	}
}
window.addEventListener('load', () => {
	paginationVisible()
	columWidthGive()
	firstColumnsWidth = columnsWidth;
	getPopupWidth()
	newElements()
})

window.addEventListener('resize', () => {
	if (popupEvent.classList.contains('_show')) {
		tableContainer.style.maxWidth =
			+tableContainer.parentElement.offsetWidth - +popupWidth + 'px'
	} else {
		tableContainer.style.maxWidth =
			+tableContainer.parentElement.offsetWidth + 'px'
	}
})

// Инициализация
//получать popupWidth
document.querySelector('.section-event-log-content-popup-content').style.width =
	popupWidth + 'px';


let table;
$(document).ready(function () {
	if ($.fn.DataTable.isDataTable('#table1')) {
		// Destroy the existing DataTable instance
		$('#table1').DataTable().destroy();
	}
	$('#table1').DataTable({
		scrollX: true,
		autoWidth: false,
		ordering: false,
		colResize: {
			followCursor: true,
			isEnabled: true,
			hoverClass: 'dt-colresizable-hover',
			hasBoundCheck: true,
			saveState: true,
			stateSaveCallback: function (settings, data) {
				columWidthGive()
				//сохранять columnsWidth
			},
			stateLoadCallback: function (settings) {
				//получать columnsWidth
				data = columnsWidth
				return data != null ? data : null
			},
		},
	})
	let tableOne = document.querySelector('.dataTables_scrollHead')
	let tableTwo = document.querySelector('#table1')
	let headTrue = tableOne.querySelector('thead')
	tableOne.remove()
	tableTwo.querySelector('thead').remove()
	tableTwo.prepend(headTrue)

	$('#table1').on('column-sizing.dt', function (e, settings, column, size) {
		var columns = table.columns()

		// Установка минимальной ширины для каждого столбца
		columns.every(function () {
			var columnWidth = this.width()
			this.minWidth(columnWidth)
		})
	})
})
const itemsWindow = document.getElementById('windowVisibleColumns');
const itemsWindowContact = document.getElementById('windowVisibleColumnsContact');
const nameColumns = document.querySelectorAll('table thead th');

nameColumns.forEach((elem, i) => {
    if (i !== 0) { // Exclude the first column
        const html = `
            <div class="radio">
                <label class="custom-radio">
                    <input type="checkbox" name="color" value="windowColumn" checked>
                    <span>${elem.firstElementChild === null ? elem.textContent : 'ID'}</span>
                </label>
            </div>
        `;
        if (itemsWindowContact) {
            itemsWindowContact.innerHTML += html;
        } else if (itemsWindow) {
            itemsWindow.innerHTML += html;
        }
    }
});

const initializeCheckboxListeners = (container) => {
    if (container) {
        let table = $('#table1').DataTable();
        let itemsWindowBtns = container.querySelectorAll('.custom-radio input');

        itemsWindowBtns.forEach((elem, i) => {
            elem.addEventListener('change', () => {
                table.column(i + 1).visible(elem.checked);
            });
        });
    }
};

initializeCheckboxListeners(itemsWindow);
initializeCheckboxListeners(itemsWindowContact);



const btnMenuOpen = document.querySelector('.btn-menu-open');
const leftMenu = document.querySelector('.left-menu-desktop');
const leftMenuBurger = document.querySelector('.menu__btn');
const tableContent = document.querySelector('.section-event-log-container');
const tableResize = document.querySelector('.table-block');

// Helper function to set the menu state
function setMenuState(isActive) {
	if (isActive) {
		leftMenu.classList.add('_hide');
		tableContent.style.maxWidth = '100%';
		tableResize.style.maxWidth = '100%';
	} else {
		leftMenu.classList.remove('_hide');
		//tableContent.style.maxWidth = 'calc(100% - 288px)';
		//tableResize.style.maxWidth = 'calc(100% - 288px)'; // Ensure tableResize width is adjusted
	}
}

// Click event for btnMenuOpen
btnMenuOpen.addEventListener('click', () => {
	const isActive = btnMenuOpen.classList.toggle('_active');
	setMenuState(isActive);
});

// Click event for leftMenuBurger with media query condition
leftMenuBurger.addEventListener('click', () => {
	if (
		window.matchMedia('(max-width: 1260px) and (min-aspect-ratio: 16/9)')
			.matches
	) {
		const isActive = btnMenuOpen.classList.toggle('_active');
		setMenuState(isActive);
	}
});

// Resize event listener
window.addEventListener('resize', () => {
	document.querySelector('#menu__toggle').checked = false;

	// Preserve the state of the menu on resize
	const isActive = btnMenuOpen.classList.contains('_active');
	setMenuState(isActive);
});

// Initial state setup to ensure correct layout on page load
document.addEventListener('DOMContentLoaded', () => {
	const isActive = btnMenuOpen.classList.contains('_active');
	setMenuState(isActive);
});

