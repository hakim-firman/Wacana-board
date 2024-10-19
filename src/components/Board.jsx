import React from 'react'
import { Column } from './Column'
import { DEFAULT_CARDS } from '../data/data'
import { BurnerBarrel } from './BurnerBarrel'

export const Board = () => {
    const [cards, setCards] = React.useState([])
    const [hasChanged, setHasChanged] = React.useState(false)

    React.useEffect(() => {
        const cardData=localStorage.getItem('cards');

        setCards(cardData ? JSON.parse(cardData) : [DEFAULT_CARDS])  
        setHasChanged(true) 
    }, [])

    React.useEffect(() => {
        hasChanged && localStorage.setItem('cards', JSON.stringify(cards))
    }, [cards])
    
  return (
    <div className='flex h-full w-full gap-3 overflow-auto p-12 justify-center'>
        <Column
            title="Backlog"
            column="backlog"
            headingColor="text-neutral-500"
            cards={cards}
            setCards={setCards}
        />
        <Column
            title="TODO"
            column="todo"
            headingColor="text-yellow-200"
            cards={cards}
            setCards={setCards}
        />
        <Column
            title="In progress"
            column="doing"
            headingColor="text-blue-200"
            cards={cards}
            setCards={setCards}
        />
        <Column
            title="Complete"
            column="done"
            headingColor="text-emerald-200"
            cards={cards}
            setCards={setCards}
        />
        <BurnerBarrel setCards={setCards} />
    </div>
  )
}
