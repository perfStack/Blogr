import {htmlElement, htmlElements} from '../utility/querySelector';
import * as util from '../utility/utility';

const state = {
  mobileNavVisible: false,
};

/**
 * function that toggles visibility of main mobile nav dropdown menu.
 */
function toggleMobileNavElements() {
  const toggleIconClassArr = htmlElements.navMobileMainIcons;
  const navMobileContainer = htmlElement.navMobileContainer;

  if (toggleIconClassArr && navMobileContainer) {
    util.toggleCssClass(toggleIconClassArr, 'u__hidden');
    util.toggleCssClass([navMobileContainer], 'u__visually-hidden');
    util.toggleBlurWholePage();
  } else {
    util.newError('Cannot toggle main mobile nav dropdown menu');
  }
}

/**
 * function that determines which elements in mobile nav to toggle
 * based on the current state of mobile drowdown menu.
 */
function toggleMobileNavHandler() {
  if (state.mobileNavVisible) hideAllNavDropdown();

  toggleMobileNavElements();
  state.mobileNavVisible = !state.mobileNavVisible;
}

/**
 * function that handles the behaviour when a user clicks on the blurred section of the page,
 * calls toggleMobileNavHandler() to procees further.
 */
function blurEventHandler() {
  if (state.mobileNavVisible) toggleMobileNavHandler();
}

/**
 * function that hides all the opened sub nav dropdown section a user clicked previously,
 * function called when user closes the main mobile nav menu.
 */
function hideAllNavDropdown() {
  // Remove active class which in turn undoes the rotate animation for arrows
  htmlElements.navMobileItemCont.forEach((itemCont) => {
    if (itemCont.classList.contains('active')) {
      itemCont.classList.remove('active');
    }
  });

  // Close all the popups
  htmlElements.navMobilePopup.forEach((mobilePopup) => {
    if (!mobilePopup.classList.contains('u__visually-hidden')) {
      mobilePopup.classList.add('u__visually-hidden');
    }
  });
}

/**
 * function that handles toggling visibility of sub mobile nav dropdown menu.
 * @param {MouseEvent} event
 */
function toggleNavDropdownHandler(event: MouseEvent) {
  const closestNavPopup = util.getClosestClass(event, 'nav--mobile__item-cont');
  if (closestNavPopup) {
    closestNavPopup.classList.toggle('active');
    closestNavPopup.nextElementSibling?.classList.toggle('u__visually-hidden');
  } else util.newError('Cannot toggle sub mobile nav dropdown');
}

/**
 * main function that sets up eventlisteners for :-
 * 1) Main nav dropdown menu
 * 2) Sub nav dropdown menu
 * 3) Handing click events on blurred background
 */
export function run() {
  if (htmlElement.navIconContainer) {
    htmlElement.navIconContainer.addEventListener('click', toggleMobileNavHandler);
  } else util.newError('Cannot find main nav icon container');

  if (htmlElement.navMobileList) {
    htmlElement.navMobileList.addEventListener('click', toggleNavDropdownHandler);
  } else util.newError('Cannot find mobile nav dropdown sub links');

  if (htmlElement.dummyDiv) {
    htmlElement.dummyDiv.addEventListener('click', blurEventHandler);
  } else util.newError('Cannot find dummyDiv for blurring');
}
