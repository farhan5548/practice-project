import { useEffect, useState } from 'react'

function Taskeffect() {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(text.length);
    }, [text]);

    const clr = ["red", "blue", "green", "yellow", "white", "pink", "purple", "orange"];
    const [colr, setColr] = useState(clr[0]);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % clr.length);
        }, 1250);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setColr(clr[index]);
    }, [index]);


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



            <div className='border-8 border-black rounded-[5rem] h-[50vh] m-5 p-5 items-center flex justify-center flex-col'
                style={{ backgroundColor: colr }}>
                <h1 className='text-center font-bold text-3xl pt-4'>useEffect Hook Practice</h1>
                <p className='text-center mt-5 text-lg'>
                    Current Color is : <span className='font-bold'>{colr}</span>
                </p>
            </div>
        </>
    )
}
export default Taskeffect