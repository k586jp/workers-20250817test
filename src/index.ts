import { Hono, Context as c } from 'hono';
import { index } from './html-template';

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
export default { fetch: main().fetch };


function indexHtml(context: c) {
    return context.html(index());
}

function listHtml(context: c) {
    return context.text('🔥🔥🔥');
}

function articleHtml(context: c) {
    let text = '/' + context.req.param('id');
    return context.text(text);
}

function editHtml(context: c) {
    let text = '/' + context.req.param('id') + '/edit';
    return context.text(text);
}