export const htmlElement: Record<string, HTMLElement | null> = {
  body: document.querySelector('body'),
  dummyDiv: document.querySelector('.dummy-div'),
  navBar: document.querySelector('.nav__bar'),
  navCont: document.querySelector('.nav__cont'),
  navMobile: document.querySelector('.nav--mobile'),
  navMobileList: document.querySelector('.nav--mobile__list'),
  navLinkContainer: document.querySelector('.nav--mobile__link-cont'),
  navIconContainer: document.querySelector('.nav--mobile__icon-cont'),
  navMobileContainer: document.querySelector('.nav--mobile__cont'),
  navIcon: document.querySelector('.nav--mobile__icon'),
  headerCont: document.querySelector('.header__cont'),
};

export const htmlElements: Record<string, NodeListOf<HTMLElement> > = {
  navMobileMainIcons: document.querySelectorAll('.nav--mobile__icon'),
  navMobilePopup: document.querySelectorAll('.nav--mobile__popup'),
  navMobileItemCont: document.querySelectorAll('.nav--mobile__item-cont'),
  navMobileIcons: document.querySelectorAll('.nav--mobile__arrow'),
};
