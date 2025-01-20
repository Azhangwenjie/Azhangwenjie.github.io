import React from "react"


/**
 * `loading.js` 的实现原理是将 `page.js`和下面的 children 用 `<Suspense>` 包裹
 *      因为`page.js`导出一个 async 函数，Suspense 得以捕获数据加载的 promise，借此实现了 loading 组件的关闭。
 * */

export default function DashboardLoading() {
    return (
        <>
            <div className="fixed w-screen h-screen z-10  top-0 left-0 bg-red-700 overflow-hidden">
                Loading dashboard...
            </div>
        </>
    )
}
