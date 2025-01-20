import React from "react";

type PropsType = {
    children: React.ReactNode;
}

/**
 * Layout会包裹通层级的page页面
 * page页面会作为children参数传入
 */

const AboutLayout = (
    {
        children
    }: PropsType
) => {
    return (
        <>
            <h1>This Is About Layout</h1>
            <div>{children}</div>
        </>
    )
}

export default AboutLayout;
