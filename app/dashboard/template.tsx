'use client'

import React, { useState } from 'react'

type PropsType = {
    children: React.ReactNode;
}

export default function Template({ children }:PropsType) {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>Template {count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            {children}
        </>
    )
}
