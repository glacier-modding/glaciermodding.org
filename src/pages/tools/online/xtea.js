import React, { useEffect } from "react"
import Layout from "@theme/Layout"

export default function Xtea() {
    useEffect(() => {
        // Stupid workaround to make the xtea tool work, breaks the page entirely in development mode
        // Also seems to break the theme colour toggle and search bar for some reason
        window.location.reload()
    }, [])
    return (
        <Layout
            title="Home"
            description="Home of the Glacier Modding organisation"
        >
            <div>
                <div className="container">
                    <main></main>
                </div>
            </div>
        </Layout>
    )
}
