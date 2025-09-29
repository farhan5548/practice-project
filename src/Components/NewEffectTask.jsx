import { useEffect, useState } from "react";

function NewEffectTask() {
    const [count, setCount] = useState(60);
    useEffect(() => {
        if (count === 0) return
        const interval = setInterval(() => {
            setCount((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [count]);

    return (
        <div className='border-8 border-black rounded-[2rem] mx-[30rem] h-[20vh] w-[15vw] flex items-center justify-center'>
            <p>{count > 0 ? count : "Time's up!"}</p>
        </div>
    )
}

export default NewEffectTask