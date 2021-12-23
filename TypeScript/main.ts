'use strict';

import '../css/style.css';

import {run as stickyNavigation} from './scripts/stickyNavigation';
import {run as mobileNavbar} from './scripts/mobileNavbar';

/**
 * Starter function to breathe life into the application.
 */
function run() {
  stickyNavigation();
  mobileNavbar();
}

run();
