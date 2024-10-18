import React from 'react'
import { FiPlus } from 'react-icons/fi';
import {motion} from 'framer-motion'
export const AddCard = ({column,setCards}) => {
    const [text, setText] = React.useState('')
    const[adding, setAdding] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!text.trim()) return

        const newCard = {
            title:text.trim(),
            column,
            id:Math.random().toString(),
        }
        setCards(prev=>[...prev,newCard]);
        setText('')
        setAdding(false)
    }
  return (
    <>
        {adding?
            <>
            <motion.form layout transition={{ duration: 0.3 }} onSubmit={handleSubmit}>
                <textarea
                 onChange={(e)=>setText(e.target.value)}
                 autoFocus
                 placeholder='Add new Task....'
                 className='w-full p-2 text-green-50 placeholder-green-300 text-sm  border-2 border-green-700 bg-green-800/50 
                 focus:ring-0 focus:outline-none resize-none'
                 >


                </textarea>
                <div className="mt-1 5 flex item-center justify-end gap-1.5">
                    
                    <button 
                     className='px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50'
                     onClick={()=>setAdding(false)}>
                        Close
                    </button>
                    <button 
                    type='submit'
                     className='flex items-center gap-1.5  px-3 py-1.5 text-xs brutalism brutalism-active transition-colors font-semibold text-neutral-950 bg-white !border-0 hover:bg-neutral-300'
                     >
                        <span>Add</span>
                        <FiPlus/>
                    </button>
                </div>
            </motion.form>
               
            </>
        :
            <motion.button layout transition={{ duration: 0.3 }} onClick={()=>setAdding(true)}
            className='flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50'
            >
                <span>Add Card</span>
                <FiPlus/>
            </motion.button>
            
        }
    </>
  )
}
