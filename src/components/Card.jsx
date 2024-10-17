import React from 'react'

export const Card = ({title, id, column}) => {
  return (
    <>
        <div className='cursor-grab brutalism hover:brutalism-pressed border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing'>
            <p className="text-sm text-neutral-100">
                {title}
            </p>

        </div>
    </>
  )
}
