import React from 'react'
import {motion} from 'framer-motion'
export const Card = ({title, id, column, handleDragStart}) => {
  return (
    <>
        <DropIndicator beforeId={id} column={column} />
        <motion.div
         layout
         layoutId={id}
        //  transition={{ duration: 0.3 }}
         draggable="true"
         onDragStart={(e)=>handleDragStart(e,{title, id, column})}
         className='cursor-grab brutalism hover:brutalism-pressed border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing'>
            <p className="text-sm text-neutral-100">
                {title}
            </p>
        </motion.div>
        
    </>
  )
}

export const DropIndicator = ({beforeId,column}) => { 

    return (
        <div  
        data-before={beforeId || "-1"}
        data-column={column}  
        className="my-0.5 h-0.5 w-full bg-yellow-400 opacity-0"/>
    )
}
