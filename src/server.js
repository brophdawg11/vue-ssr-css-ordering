const fs = require('fs');
const path = require('path');

const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');

const app = express();

app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

const template = fs.readFileSync(path.join(__dirname, '../src/index.html'), 'utf-8');
const clientManifest = require('../dist/vue-ssr-client-manifest.json');
const serverBundle = require('../dist/vue-ssr-server-bundle.json');

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false,
    template,
    clientManifest,
});

// Send the rest of the routes into the Vue Renderer for SSR
const rootDir = path.join(__dirname, '../..');
app.use('/', (req, res) => {
    const s = Date.now();

    const context = {
        title: 'SSr CSS Ordering Demo',
        request: req,
        response: res,
        url: req.url,
    };

    res.setHeader('Content-Type', 'text/html');
    renderer.renderToString(context,
        (err, html) => {
            if (err) {
                console.log(err);
                res.status(500).send('500 | Internal Server Error');
            } else {
                res.send(html);
            }
        },
        e => {
            console.log(e);
            res.status(500).send('500 | Internal Server Error');
        }
    );
});

app.listen(8080, () => {
    console.log(`Server listening at http://localhost:8080/`);
});
