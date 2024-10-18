import React from 'react'
import { Card, DropIndicator } from './Card';
import { AddCard } from './AddCard';

export const Column = ({title, headingColor, column, cards, setCards}) => {
    const [active, setActive] = React.useState(false)
    const filteredCards = cards.filter(card => card.column === column);

    const handleDragStart = (e, card) => {
        e.dataTransfer.setData("cardId", card.id);
      };
    

    const handleDragOver=(e)=>{
        e.preventDefault()
        handleInticator(e)
        setActive(true)
    }

    const handleInticator=(e)=>{
        const indicators = getIndicators();
        const  el= getNearestIndicator(e,indicators);
        clearHighlights();
        el.element.style.opacity="1";

    }

    const clearHighlights = (els) => {
        const indicators = els || getIndicators();
    
        indicators.forEach((i) => {
          i.style.opacity = "0";
        });
      };

    const getNearestIndicator=(e,indicators)=>{
        const DISTANCE_OFFSET=50;
        const el = indicators.reduce(
            (closest, child) => {
              const box = child.getBoundingClientRect();
      
              const offset = e.clientY - (box.top + DISTANCE_OFFSET);
      
              if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
              } else {
                return closest;
              }
            },
            {
              offset: Number.NEGATIVE_INFINITY,
              element: indicators[indicators.length - 1],
            }
          );
      
          return el;
    }

    const getIndicators = () => {
        return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
      };
    
    const handleDragLeave=(e)=>{
        e.preventDefault()
        clearHighlights()
        setActive(false)
    }

    const handleDrop=(e)=>{
        // 
        const cardId=e.dataTransfer.getData("cardId");
        
        setActive(false);
        clearHighlights();
        const indicators = getIndicators();
        const {element}=getNearestIndicator(e,indicators);
        console.log('before:'+element.dataset.before)
        const before = element.dataset.before || "-1";
        if (before !== cardId) {
            console.log('if 1')
            let copy = [...cards];
      
            let cardToTransfer = copy.find((c) => c.id === cardId);
            if (!cardToTransfer) return;
            cardToTransfer = { ...cardToTransfer, column };
      
            copy = copy.filter((c) => c.id !== cardId);
      
            const moveToBack = before === "-1";
      
            if (moveToBack) {
                console.log('if 2')

              copy.push(cardToTransfer);
            } else {
                console.log('elseif 1')

              const insertAtIndex = copy.findIndex((el) => el.id === before);
              if (insertAtIndex === undefined) return;
      
              copy.splice(insertAtIndex, 0, cardToTransfer);
            }
      
            setCards(copy);
          }
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
        <div 
        onDragLeave={handleDragLeave}
         onDrop={handleDrop}
          onDragOver={handleDragOver} 
          className={`h-full w-full transition-colors flex flex-col  ${active ?"bg-neutral-800/50":"bg-neutral-800/0"}`}>
            {filteredCards.map((card) => (
                <Card key={card.id} {...card} handleDragStart={handleDragStart} />
            ))}
        <DropIndicator beforeId={-1} column={column} />
        <AddCard column={column} setCards={setCards} />
        </div>
    </div>
  )
}
