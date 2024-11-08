import PropType from 'prop-types';
import { useState } from 'react';

const Header = ({onSearch}) => {
    const [textSearch,setSearch] = useState("")
    return (
        <div className="p-4 bg-black flex items-center 
        justify-between">
            <div className="flex items-center space-x-4">
                <h1 className="text-[30px] uppercase font-bold
                text-red-700">Movie</h1>
                <nav className="flex items-center space-x-6 text-[14px]">
                    <a href="#" className="text-white hover:text-red-700">Home</a>
                    <a href="#" className="text-white hover:text-red-700">About</a>
                    <a href="#" className="text-white hover:text-red-700">Contact</a>
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                <input type="text" placeholder="Search" 
                className="p-3 text-black" onChange={(e) => 
                setSearch(e.target.value)} value={textSearch}/>
                <button className="p-2 text-white bg-red-600 hover:bg-red-400"
                onClick={() => onSearch(textSearch)}>Search</button>
            </div>
        </div>
    )
}

Header.PropTypes = {
    onSearch: PropType.func,
}
export default Header