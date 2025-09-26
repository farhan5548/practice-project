import { useActionState } from "react";

async function increment(previousState) {
  return previousState + 1;
}

function ActionHook() {
  const [state, formAction] = useActionState(increment, 0);
  return (
    <form>
      {state}
      <button formAction={formAction}>Increment</button>
    </form>
  )
}
export default ActionHook