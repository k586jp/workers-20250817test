import { Hono } from 'hono';
import { indexHtml, listHtml, articleHtml, editHtml } from './html-template';

function main() {

    const app = new Hono();
    const arrayLength = 1;
    const array = Array.from({ length: arrayLength }, function() { return new Hono(); });

    array[0].get('/', indexHtml);
    array[0].get('/list', listHtml);
    array[0].get('/:id', articleHtml);
    array[0].get('/:id/edit', editHtml);

    app.route('/', array[0]);

    return app;

}
export default main();