import { useRef } from "react";

function FocusInput() {
    const inputRef = useRef();

    function focusInput() {
        inputRef.current.focus(); // directly focus input
    }

    return (
        <div className="border-8  rounded-3xl bg-white p-3 border-black text-center mx-[31.5rem]">
            <input ref={inputRef} placeholder="Type here..." className="px-3 py-1 rounded-xl" />
            <button className="font-bold mt-2 rounded-lg py-1 border-2 px-2 border-yellow-400 text-white bg-black" onClick={focusInput}>Focus Input</button>
        </div>
    );
}

export default FocusInput;
