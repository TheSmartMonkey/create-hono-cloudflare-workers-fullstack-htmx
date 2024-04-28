export type Quiz = {
  questionInputText: QuestionInputText[];
  questionCheckbox: QuestionCheckbox[];
};

export type Question = QuestionInputText | QuestionCheckbox;

export type QuestionInputText = {
  type: 'inputText';
  step: number;
  label: string;
};

export type QuestionCheckbox = {
  type: 'checkbox',
  step: number;
  label: string;
  answers: string[];
};
