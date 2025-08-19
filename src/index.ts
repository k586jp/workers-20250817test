import { Hono } from 'hono';
import { indexHtml, listHtml, articleHtml, editHtml } from './html-template';

function main() {

    const app = new Hono();
    const page = new Hono();

    page.get('/', indexHtml);
    page.get('/list', listHtml);
    page.get('/:id', articleHtml);
    page.get('/:id/edit', editHtml);

    app.route('/', page);

    return app;

}
export default main();