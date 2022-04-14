import React from "react"
import Layout from "@theme/Layout"
import TOC from "@theme/TOC"

export default function Classes({ data }) {
    return (
        <Layout title="Classes">
            <div className="row">
                <div className="col">
                    <div className="container">
                        <main>
                            <div dangerouslySetInnerHTML={{ __html: data.html }} />
                        </main>
                    </div>
                </div>
                <div className="col col--3">
                    <TOC toc={data.toc} />
                </div>
            </div>
        </Layout>
    )
}
