import { Hono } from 'hono';
import { renderer } from '.';
import login from './pages/login/login.routes';

const app = new Hono();

app.get('*', renderer);

// Routes
app.route('/', login);

export default app;
