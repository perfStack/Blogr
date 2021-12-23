import {htmlElement} from './querySelector';

/**
 * A function that throws new Error with a custom error message
 * @param {string} message Custom error message
 * @returns {Error}
 */
export function newError(message:string) {
  const newErr = new Error(message);
  console.error(newErr);
  return newErr;
}

/**
 * A function that takes an array of elements and toggles the class provided.
 * @param {HTMLElement[] | NodeListOf<Element>} classArr
 * @param {string} classToToggle
 */
export function toggleCssClass(
    classArr: HTMLElement[] | NodeListOf<Element>,
    classToToggle: string,
) {
  if (!classToToggle) {
    throw new Error('No valid class to toggle provided');
  }

  classArr.forEach((className) => {
    className?.classList.toggle(classToToggle);
  });
}

/**
 * Function that returns the target ancestor of a given event target,
 * or undefined if none found.
 * @param {Event} event
 * @param {string} className
 * @returns {HTMLElement | undefined}
 */
export function getClosestClass(event: Event, className: string) {
  const targetEvent = event.target as HTMLElement;

  const closestElement = targetEvent?.closest(`.${className}`);
  if (closestElement) return closestElement;
  else return undefined;
}

/**
 * Function that toggles blur on the whole page,
 * unhides dummy div and applies blur class on it and vice versa.
 */
export function toggleBlurWholePage() {
  const dummyDiv = htmlElement.dummyDiv;
  if (dummyDiv) {
    toggleCssClass([dummyDiv], 'blur');
    toggleCssClass([dummyDiv], 'u__hidden');
  } else {
    newError('No valid element found for applying blur');
  }
}

/**
 * experimental function that aims to animate elements
 * that transition from dispaly:none to display:block
 * DOES NOT WORK AT PRESENT
 * @param classArr
 * @param displayNoneClass
 * @param opacityClass
 */
export function animateDisplayNone(
    classArr: HTMLElement[] | NodeListOf<Element>,
    displayNoneClass = 'u__hidden',
    opacityClass = 'u__visually-hidden',
) {
  classArr.forEach((className) => {
    if (className.classList.contains(displayNoneClass)) {
      // First remove the class containing display:none property
      className.classList.remove(displayNoneClass);
      // Then set a delay using settimeout function
      setTimeout(() => {
        // Finally remove the class setting opacity 0 with a transition value defined in css.
        className.classList.remove(opacityClass);
      }, 2000);
    } else {
      // Add opacity: 0 class first so that it can be animated
      className.classList.add(opacityClass);
      // First remove the class containing display:none property
      className.classList.add(displayNoneClass);
    }
  });
}
