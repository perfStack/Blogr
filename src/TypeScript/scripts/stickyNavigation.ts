import { htmlElement } from '../utility/querySelector';

const IntersectionObserverOption = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

function addStickyNavbar() {
  htmlElement.navBar.classList.add('navbar-sticky');
  htmlElement.navBar.classList.add('u__box-shadow--light');
  htmlElement.headerCont.classList.add('navbar-height-offset');
}

function removeStickyNavbar() {
  htmlElement.navBar.classList.remove('navbar-sticky');
  htmlElement.navBar.classList.remove('u__box-shadow--light');
  htmlElement.headerCont.classList.remove('navbar-height-offset');
}

function handleIntersect(
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      // console.log('Hidden');
      addStickyNavbar();
    } else if (entry.isIntersecting) {
      // console.log('Visible');
      removeStickyNavbar();
    }
  });
}

export function run() {
  const observer = new IntersectionObserver(
    handleIntersect,
    IntersectionObserverOption
  );
  observer.observe(htmlElement.navCont);
}
