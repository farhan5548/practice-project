import { useState, useEffect, useRef } from 'react'

function Ref() {
    const [count, setCount] = useState(0);
    let val = useRef(0);
    let btnRef = useRef();

    function handleIncrement() {
        val.current = val.current + 1;
        console.log("Value of val is:", val.current);
        setCount(count + 1);
    }
    //it runs on every render
    useEffect(() => {
        console.log("main ferse render hogya hu")
    })

    function btnColor() {
        btnRef.current.style.backgroundColor = "red";
        btnRef.current.style.color = "white";
    }

    return (
        <div className="font-bold border-8  rounded-3xl bg-white p-3 border-black text-center mx-[31.5rem]">
            <div className='items-center flex justify-between mb-5'>
                <button onClick={handleIncrement} className='border-2 px-3 py-1 border-black bg-black text-white rounded-xl hover:shadow-2xl hover:bg-black/80'>
                    Increment
                </button>
                <div className='border-2 px-3 py-1 border-black bg-black/50 hover:bg-black/70 text-white rounded-xl'>
                    Count: {count}
                </div>
            </div>
            <button onClick={btnColor} ref={btnRef} className='border-2 px-3 py-1 border-black rounded-xl'>
                Color Changer
            </button>
        </div>
    )
}

export default Ref