// Server side data loading approach based on:
// https://ssr.vuejs.org/en/data.html#client-data-fetching
import createApp from './create-app';

export default function initServer(context) {
    return new Promise((resolve, reject) => {
        const { app, router } = createApp(context);
        router.push(context.url);
        router.onReady(() => {
            const components = router.getMatchedComponents();
            return resolve(app);
        });
    });
}
