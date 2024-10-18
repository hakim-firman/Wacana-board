import React from 'react'
import { FaFire } from 'react-icons/fa'
import { FiTrash } from 'react-icons/fi'

export const BurnerBarrel = ({setCards}) => {
    const [active, setActive] = React.useState(false)
    const handleDragOver = (e) => {
        e.preventDefault()
        setActive(true)

    }
    const handleDragLeave = (e) => {
        e.preventDefault()
        setActive(false)
    }
    const handleDrop = (e) => {
        e.preventDefault()
        const cardId = e.dataTransfer.getData('cardId')
        setCards(prev=>prev.filter(card=>card.id!==cardId))
        setActive(false)
    }
  return (
    <div onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave} className={`mt-10 grid h-56 w-56 shrink-0 place-content-center  border brutalism border-black text-3xl
        ${active?" !border-red-800 bg-red-800/20 text-red-500 brutalism-pressed ":"border-neutral-500 bg-neutral-500/20 text-neutral-500"}
        `}>
    {active?<FaFire className='animate-bounce'/>:<FiTrash/>}
    </div>
  )
}
