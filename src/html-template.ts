import { Context as c } from 'hono';
export { indexHtml, listHtml, articleHtml, editHtml };


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


function index() {
    const array = [
        '<a href="/list">List Page</a><br>',
        '<a href="/18cd3748-9a76-4a05-8c69-ba0b8c1a9d17">Article Page</a><br>',
        '<a href="/18cd3748-9a76-4a05-8c69-ba0b8c1a9d17/edit">Edit Page</a>'
    ];
    return array.join('\n');
}