'use client'

import React, { useState } from 'react'
import Link from 'next/link'

type PropsType = {
    children: React.ReactNode;
}

export default function Layout({ children }:PropsType) {
    const [count, setCount] = useState(0)
    return (
        <>
            <div>
                <Link href="/dashboard/about">About</Link>
                <br/>
                <Link href="/dashboard/settings">Settings</Link>
            </div>
            <h1>Layout {count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            {children}
        </>
    )
}
