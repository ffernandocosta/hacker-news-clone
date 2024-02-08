import Stories from './pages/stories.js';
import Item from './pages/item.js';

const router = new Navigo(null, true, '#');

export default class RouterHandler {
    constructor() {
        this.createRoutes();
    }

    createRoutes() {
        const routesArr = [
            { path: '/', page: Stories },
            { path: '/new', page: Stories },
            { path: '/ask', page: Stories },
            { path: '/show', page: Stories },
            { path: '/item', page: Item }
        ];

        routesArr.forEach(({ path, page }) => {
            router.on(path, () => {
               page(path);
            }).resolve();
        });
    }
}