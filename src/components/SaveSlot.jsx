import React from 'react';

const SaveSlot = (props) => {

    const title = props.save.title;

    return (
        <div 
            onClick={() => props.load(props.save.slot)}
            className="relative p-3 mb-4 border border-slate-600 bg-slate-800 text-slate-300 rounded hover:cursor-pointer hover:bg-slate-700 group"
        >
            {title}
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    props.delete(props.save.slot);
                }}
                className="btn btn-sm btn-secondary bg-red-800 absolute border-red-800 right-2 bottom-2 text-slate-200 hidden group-hover:block"
            >
                Delete
            </button>
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    props.overwrite(props.save.slot);
                }}
                className="btn btn-sm btn-secondary bg-green-800 absolute border-green-800 right-20 bottom-2 text-slate-200 hidden group-hover:block"
            >
                Save & Overwrite
            </button>
        </div>
    );
};

export default SaveSlot;