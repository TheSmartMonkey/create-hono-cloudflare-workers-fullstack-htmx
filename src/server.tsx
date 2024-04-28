import { Hono } from 'hono';
import { renderer } from '.';
import quiz from './views/quiz/quiz.routes';

const app = new Hono();

app.get('*', renderer);

app.route('/', quiz);

export default app;
