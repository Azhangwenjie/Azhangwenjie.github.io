import React from "react";

async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return {
        message: 'Hello, Dashboard!',
    }
}

const DashBoard = async () => {
    const { message } = await getData()
    return <h1>{message}</h1>
}

export default DashBoard
