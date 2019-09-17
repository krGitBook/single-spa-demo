import {registerApplication, start} from 'single-spa'

registerApplication(
  'navBar', 
  () => import('./src/navBar/navBar.app.js').then(module => module.navBar),
  () => true
);

start()