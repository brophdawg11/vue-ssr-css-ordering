import Router from 'vue-router';
import Vue from 'vue';

import App from './App.vue';

function createRouter() {
    Vue.use(Router);

    const router = new Router({
        mode: 'history',
        routes: [{
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ './Home.vue'),
        }, {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ './About.vue'),
        }],
    });

    return router;
}

export default function createApp(context) {
    const router = createRouter();

    const app = new Vue({
        router,
        render: h => h(App),
    });

    return { app, router };
}
