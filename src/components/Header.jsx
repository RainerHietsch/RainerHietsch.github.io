import React from 'react';

const Header = (props) => {
    return (
        <div>
            <div className='font-kreon text-xl w-full border-b border-gray-900 pb-1 mb-1'>{props.text}</div>
        </div>
    );
};

export default Header;