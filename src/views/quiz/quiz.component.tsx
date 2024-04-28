import { Question, Quiz } from '../../models/quiz.model';
import { QuestionComponent } from './components/question.component';

export function Quiz(props: { quiz: Quiz }) {
  const questions = orderQuestions(props.quiz);
  return (
    <div class="ml-5">
      <form hx-post="/form/submit" hx-target="#response">
        {questions.map((question) => (
          <div class="mb-10">
            <QuestionComponent {...{ question }} />
          </div>
        ))}
        <button class="btn btn-primary">Submit</button>
      </form>
      <div id="response"></div>
    </div>
  );
}

function orderQuestions(quiz: Quiz): Question[] {
  const questions = [...quiz.questionInputText, ...quiz.questionCheckbox];
  questions.sort((a, b) => a.step - b.step);
  console.log(questions);
  return questions;
}
