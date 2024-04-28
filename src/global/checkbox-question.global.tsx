import { QuestionCheckbox } from '../models/quiz.model';

export function CheckboxQuestionGlobal(props: { question: QuestionCheckbox }) {
  return (
    <>
      <h1>{props.question.label}</h1>
      {props.question.answers.map((answer) => (
        <div class="form-control mt-5">
          <label class="flex items-center cursor-pointer">
            <input type="checkbox" name={answer} checked={true} class="checkbox" />
            <span class="label-text ml-4">{answer}</span>
          </label>
        </div>
      ))}
    </>
  );
}
