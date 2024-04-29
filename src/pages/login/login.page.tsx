import { FormWidget } from './widgets/form.widget';

export function LoginPage() {
  return (
    <>
      <h1 class="flex justify-center mb-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Login
      </h1>
      <FormWidget />
    </>
  );
}
