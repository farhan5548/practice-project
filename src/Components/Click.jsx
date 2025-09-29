import { useState } from 'react';

function Click() {
    //   function handleClick() {
    //     alert('You clicked me!');
    //   }

    const[count,setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

    return (
        // <button onClick={handleClick}>
        //   Click me
        // </button>
        <button onClick={handleClick} className="font-bold border-8 m-10 rounded-3xl bg-white py-3 px-2 border-black text-center mx-[32rem]">
            Clicked {count} times
        </button>
    );
}
export default Click