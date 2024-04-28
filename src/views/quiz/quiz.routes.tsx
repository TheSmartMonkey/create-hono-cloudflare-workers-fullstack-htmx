import { Hono } from 'hono';
import { getQuizFromCache } from '../../services/cache.service';
import { Quiz } from './quiz.component';

const quiz = new Hono();

quiz.get('/', (c) => {
  const quiz = getQuizFromCache();
  return c.render(<Quiz {...{ quiz }} />);
});

quiz.post(
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

export default quiz;
