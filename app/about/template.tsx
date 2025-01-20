import React from "react"

type PropsType = {
    children: React.ReactNode;
}

/**
 * 当既有 laout 又有 template的时候
 *  会形成 laout > template > page 的嵌套关系
 *
 * <Layout>
 *   // {模板需要给一个唯一的 key }
 *   <Template key={routeParam}>{children}</Template>
 * </Layout>
 * */

const AboutTemplate = ({children}: PropsType) => {
    return (
        <>
            <span>This Is About Template</span>
            <div>
                {children}
            </div>
        </>
    )
}

export default AboutTemplate
