import { Hono, Context } from 'hono';

function main() {

    const app = new Hono();
    const arrayLength = 3;
    const array = Array.from({ length: arrayLength }, function() { return new Hono(); });

    array[0].get('/', articleHtml);
    array[0].get('/:id', articleHtml);
    array[1].get('/:id', editArticleHtml);
    array[2].get('/', listArticleHtml);

    app.route('/', array[0]);
    app.route('/edit', array[1]);
    app.route('/list', array[2]);

    return app;

}
export default main();


function articleHtml(context: Context) {
    return context.text('/' + context.req.param('id'));
}

function editArticleHtml(context: Context) {
    return context.text('/edit/' + context.req.param('id'));
}

function listArticleHtml(context: Context) {
    return context.text('🔥🔥🔥');
}