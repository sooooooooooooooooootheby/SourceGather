import { createRouter, createWebHistory } from 'vue-router';
import guider from './guider';
import element from './element';
import tool from './tool';


const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    ...guider,
    ...element,
    ...tool,
  ],
});

router.addRoute(guider);
router.addRoute(element);
router.addRoute(tool);

export default router;