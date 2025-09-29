import { useActionState } from "react";

async function increment(previousState) {
  return previousState + 1;
}

function ActionHook() {
  const [state, formAction] = useActionState(increment, 0);
  return (
    <form className='border-8 border-black rounded-[2rem] bg-yellow-400 h-[20vh] w-[30vw] space-x-4 justify-center items-center flex mx-[25rem]'>
      <button formAction={formAction} className="font-bold border-2 rounded-2xl bg-white p-3 border-black"> Increment  </button>
      <p className="font-bold border-2 rounded-2xl bg-white p-3 border-black">{state}</p>
    </form>
  )
}
export default ActionHook