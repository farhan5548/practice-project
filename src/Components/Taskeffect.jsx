import { useEffect, useState } from 'react'

function Taskeffect() {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(text.length);
    }, [text]);

    return (
        <>
            <div className='border-8 border-black rounded-[5rem] h-[50vh] m-5 p-6'>
                <h1 className='text-center font-bold text-3xl pt-4'>useEffect Hook</h1>

                <div className='flex justify-center mt-10'>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Type something..."
                        className='border-2 border-black p-2 rounded-lg w-64'
                    />
                </div>

                <p className='text-center mt-5 text-lg'>
                    Length of Letters: <span className='font-bold'>{count}</span>
                </p>
            </div>



            <div className='border-8 border-black rounded-[5rem] h-[50vh] m-5 p-5 items-center flex justify-center flex-col'>
                <h1 className='text-center font-bold text-3xl pt-4'>useEffect Hook Practice</h1>
                <p className='text-center mt-5 text-lg'>
                    Current Color is: <span className='font-bold'>{}</span>
                </p>
            </div>  
        </>
    )
}
export default Taskeffect