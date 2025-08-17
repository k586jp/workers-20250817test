import { Hono, Context } from 'hono';

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


function indexHtml(context: Context) {
    return context.html('<a href="/list">List Page</a><br><a href="/18cd3748-9a76-4a05-8c69-ba0b8c1a9d17">Article Page</a><br><a href="/18cd3748-9a76-4a05-8c69-ba0b8c1a9d17/edit">Edit Page</a>');
}

function listHtml(context: Context) {
    return context.text('🔥🔥🔥');
}

function articleHtml(context: Context) {
    let text = '/' + context.req.param('id');
    return context.text(text);
}

function editHtml(context: Context) {
    let text = '/' + context.req.param('id') + '/edit';
    return context.text(text);
}