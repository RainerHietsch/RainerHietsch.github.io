import React from 'react';
import Icon from '@mdi/react';

const MenuItem = (props) => {
    return (
        <div className='h-12 rounded-lg w-full cursor-pointer flex justify-center items-center hover:bg-slate-700' onClick={() => {props.setMenu(props.menu)}}>
            <Icon path={props.icon}
                title="Game Master"
                size={1}
                color="lightgrey"
            />
        </div>
    );
};

export default MenuItem;