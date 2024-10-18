import React from 'react'

export const Card = ({title, id, column, handleDragStart}) => {
  return (
    <>
        <DropIndicator beforeId={id} column={column} />
        <div draggable="true" onDragStart={(e)=>handleDragStart(e,{id,title,column})}
         className='cursor-grab brutalism hover:brutalism-pressed border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing'>
            <p className="text-sm text-neutral-100">
                {title}
            </p>
        </div>
    </>
  )
}

export const DropIndicator = ({beforeId,column}) => { 

    return (
        <div className="my-0.5 h-0.5 w-full bg-yellow-400 opacity-0"></div>
    )
}
