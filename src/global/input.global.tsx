export function InputGlobal({ label, value, type }: { label: string; value: string; type?: 'email' | 'text' | 'password' }) {
  return (
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">{label}</span>
      </div>
      <input type={type || 'text'} name={label} placeholder="Type here" class="input input-bordered w-full max-w-xs" value={value} />
    </label>
  );
}
