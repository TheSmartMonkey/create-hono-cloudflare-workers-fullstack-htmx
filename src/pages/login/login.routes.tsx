import { Hono } from 'hono';
import { getQuizFromCache } from '../../services/cache.service';
import { LoginPage } from './login.page';

const login = new Hono();

login.get('/', (c) => {
  const quiz = getQuizFromCache();
  return c.render(<LoginPage {...{ quiz }} />);
});

login.post(
  '/form/submit',
  // zValidator(
  //   'form',
  //   z.object({
  //     email: z.string(),
  //     firstName: z.string(),
  //     lastName: z.string(),
  //   }),
  // ),
  async (c) => {
    const body = await c.req.parseBody();
    console.log(body);
    return c.json(body);
  },
);

export default login;
