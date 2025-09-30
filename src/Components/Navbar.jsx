import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className='bg-lime-300 py-3 flex items-center justify-center mb-10'>
            <Link to="timer" className="px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Timer</Link>
            <Link to="/list" className="px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">List</Link>
            <Link to="/click" className="px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Click</Link>
            <Link to="/increment" className="px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Increment</Link>
            <Link to="/length" className="px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Length</Link>
            <Link to="/cd" className="px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Count-Down</Link>
            <Link to="/bg" className="px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">BackGroung Changer</Link>
            <Link to="/api" className="px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Fetching API</Link>
        </nav>
    );
}

export default Navbar;
