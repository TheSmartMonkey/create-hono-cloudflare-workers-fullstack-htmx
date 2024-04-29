import { InputGlobal } from '@src/global/input.global';

export const FormWidget = () => (
  <>
    <div class="flex justify-center">
      <form class="flex flex-col" hx-post="/form/submit" hx-target="#response">
        <InputGlobal label={'Email Address'} value={'test@gmail.com'} type={'email'} />
        <InputGlobal label={'Password'} value={'1234'} type={'password'} />
        <button type="submit" class="btn btn-default mt-10">
          Submit
        </button>
      </form>
    </div>

    <div class="flex justify-center" id="response"></div>
  </>
);
