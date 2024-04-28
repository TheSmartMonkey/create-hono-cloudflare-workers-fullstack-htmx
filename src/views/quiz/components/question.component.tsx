import { CheckboxQuestionGlobal } from '../../../global/checkbox-question.global';
import { InputGlobal } from '../../../global/input.global';
import { Question } from '../../../models/quiz.model';

export function QuestionComponent(props: { question: Question }) {
  return <>{renderSwitch(props.question)}</>;
}

function renderSwitch(question: Question) {
  switch (question.type) {
    case 'inputText':
      return <InputGlobal {...{ label: question.label }} />;
    case 'checkbox':
      return <CheckboxQuestionGlobal {...{ question }} />;
  }
}
