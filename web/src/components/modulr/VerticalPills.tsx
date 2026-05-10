'use client'

import { useState } from 'react'

type Props = {
  items?: string[]
  label?: string
}

export function VerticalPills({
  items = ['All', 'Lending', 'Travel', 'SME'],
  label = 'Filter by vertical',
}: Props) {
  const [active, setActive] = useState(0)

  return (
    <div className="vert-bar">
      <span className="vert-lbl">{label}</span>
      {items.map((item, i) => (
        <button
          key={item}
          type="button"
          className={`vpill ${i === active ? 'active' : ''}`}
          onClick={() => setActive(i)}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
