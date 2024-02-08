import React from 'react';
function CustomTitleBar({ title }) {
    return (
        <div>
            <div className="flex justify-center relative">
                <h1 className="font-extrabold font text-primary mt-2 absolute text-4xl ">
                    {title}
                </h1>
                <img className="h-24 mb-10" src="https://i.ibb.co/C5bMVWY/5november-background-10-removebg-preview-removebg-preview-1-1.png" />
            </div>
        </div>
    )
}


export default CustomTitleBar;