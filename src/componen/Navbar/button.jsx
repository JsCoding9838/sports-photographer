import React from 'react';

const button = (props) => {
    return (
        <div>
            <button className="bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-400">
        {props.children}
        </button>
        </div>
    );
};

export default button;