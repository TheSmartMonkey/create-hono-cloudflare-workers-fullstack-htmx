import { Quiz } from '../models/quiz.model';

export function getQuizFromCache(): Quiz {
  return {
    questionInputText: [
      {
        type: 'inputText',
        step: 2,
        label: 'How to blabla ?',
      },
      {
        type: 'inputText',
        step: 3,
        label: 'How to talk ?',
      },
    ],
    questionCheckbox: [
      {
        type: 'checkbox',
        step: 1,
        label: 'How to you communicate ?',
        answers: ['talk', 'blabla'],
      },
    ],
  };
}
