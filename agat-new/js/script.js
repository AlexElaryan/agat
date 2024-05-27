const updateSoftwareBtn = document?.getElementById("updateSoftwareBtn");

updateSoftwareBtn?.addEventListener("click", () => {
  if (updateSoftwareBtn.classList.toggle("_active")) {
    updateSoftwareBtn.parentElement.nextElementSibling.classList.add("_show");
  } else {
    updateSoftwareBtn.parentElement.nextElementSibling.classList.remove(
      "_show"
    );
  }
});

const ethElements = document.querySelectorAll(".moduleSwitching__eth__item");
const ethInfoElements = document.querySelectorAll(
  ".moduleSwitching__eth__information"
);

for (let i = 0; i < ethElements.length; i++) {
  const element = ethElements[i];

  element.addEventListener("click", () => {
    const activeElement =
      document.querySelector(".moduleSwitching__eth__item._active") || null;

    if (activeElement !== null) {
      activeElement.classList.remove("_active");
      document
        .querySelector(".moduleSwitching__eth__information._active")
        .classList.remove("_active");
    }
    element.classList.add("_active");
    ethInfoElements[i].classList.add("_active");
  });
}

const lineModules = document.querySelectorAll(".moduleLine__item");

lineModules.forEach((element) => {
  element.addEventListener("click", () => {
    const active = document.querySelector(".moduleLine__item._active") || null;
    if (active !== null) {
      active.classList.remove("_active");
    }
    if (active !== element) {
      element.classList.add("_active");
    } else {
      element.classList.remove("_active");
    }
  });
});

const popupLinks = document.querySelectorAll(".popup__link");
const body = document.querySelector(".section-event-log-content-popup-content");
const lockPadding = document.querySelectorAll(".lock__padding");

let unlock = true;

const timeout = 100;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute("data-popupId");
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}
const popupCloseIcon = document.querySelectorAll(".close__popup");
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener("click", function (e) {
      popupClose(el.closest(".popup"));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector(".popup.open");
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add("open");
    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest(".popup__content")) {
        popupClose(e.target.closest(".popup"));
      }
    });
  }
}
function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove("open");
    if (doUnlock) {
      bodyUnLock();
    }
  }
}

function bodyLock() {
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener("keydown", function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector(".popup.open");
    popupClose(popupActive);
  }
});
(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      let node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();
(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();

const popupTabs = document.querySelectorAll(".tracing__header button");
if (popupTabs.length > 0) {
  popupTabs.forEach((elem) => {
    let id = elem.getAttribute("data-content-tab-id");
    elem.addEventListener("click", () => {
      document
        .querySelector(".tracing__header button._active")
        .classList.remove("_active");
      document
        .querySelector(".tracing__content._show")
        .classList.remove("_show");
      elem.classList.add("_active");
      document.getElementById(id).classList.add("_show");
    });
  });
}

const btnLightTheme = document.getElementById("theme-light");
const btnDarkTheme = document.getElementById("theme-dark");

btnLightTheme.addEventListener("click", () => {
  document.querySelector("body").classList.add("_light");
});

btnDarkTheme.addEventListener("click", () => {
  document.querySelector("body").classList.remove("_light");
});

// реализация круглого прогресс бара

const progressCircle = document.querySelectorAll("[role='progressbar']");

progressCircle.forEach((element) => {
  element.style.cssText = `--value: ${40}`;
});
//возможный вид функции
// function valueProgress(elem,value){
// 	elem.style.cssText = `--value: ${value}`
// }
