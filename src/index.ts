import { Hono, Context } from 'hono';

function main() {

    const app = new Hono();
    const arrayLength = 1;
    const array = Array.from({ length: arrayLength }, function() { return new Hono(); });

    array[0].get('/', articleHtml);
    array[0].get('/:1', articleHtml);
    array[0].get('/:1/:2', articleHtml);

    app.route('/', array[0]);

    return app;

}
export default main();


function articleHtml(context: Context) {
    const param = [ context.req.param('1'), context.req.param('2') ];
    let text = '/';
    if (param[0] === 'list') {
        text = '🔥🔥🔥'
    } else if (param[0]) {
        if (param[1] === 'edit') {
            text = '/' + param + '/edit';
        } else {
            text = '/' + param;
        }
    }
    return context.text(text);
}