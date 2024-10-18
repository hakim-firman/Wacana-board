import React from 'react'
import { Card, DropIndicator } from './Card';
import { AddCard } from './AddCard';

export const Column = ({title, headingColor, column, cards, setCards}) => {
    const [active, setActive] = React.useState(false)
    const filteredCards = cards.filter(card => card.column === column);

    const handleDragStart=(e,card)=>{
       e.dataTransfer.setData('cardId', card.id)
       
    }


  return (
    <div className='w-56 shrink-0'>
        <div className="mb-3 flex items-center justify-between">
            <h3 className={`font-medium ${headingColor}`}>
                {title}
            </h3>
            <span className="rounded text-sm text-neutral-400">
                {filteredCards.length}
            </span>
        </div>
        <div className={`h-full w-full transition-colors flex flex-col  ${active?"bg-neutral800/50":"bg-neutral-800/0"}`}>
            {filteredCards.map((card, index) => (
                <Card key={index} {...card} handleDragStart={handleDragStart} />
            ))}
        <DropIndicator beforeId={-1} column={column} />
        <AddCard column={column} setCards={setCards} />
        </div>
    </div>
  )
}
