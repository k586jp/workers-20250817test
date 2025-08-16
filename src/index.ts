import { Hono } from 'hono';
const app = new Hono();

app.get('/', honoText);

export default app;


function honoText(context) {
    return context.text('🔥');
}
