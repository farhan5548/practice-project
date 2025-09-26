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
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}
export default Click