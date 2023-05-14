import React from "react"
import Layout from "@theme/Layout"

export default function G2WwiseDataTool() {
    return (
        <Layout
            title="G2WwiseDataTool"
            description="G2WwiseDataTool is a CLI application which can be used to export Audio Objects, Events, Switches and SoundBanks from a WWise project into files which are compatible with the Glacier 2 engine"
        >
            <header className="hero hero--primary">
                <div className="container">
                    <h1 className="hero__title">G2WwiseDataTool</h1>
                    <p className="hero__subtitle">
                        G2WwiseDataTool is a CLI application which can be used
                        to export Audio Objects, Events, Switches and SoundBanks
                        from a WWise project into files which are compatible
                        with the Glacier 2 engine.
                    </p>
                    <a
                        href={`https://github.com/glacier-modding/G2WwiseDataTool`}
                        target="_blank"
                        className="button button--secondary"
                    >
                        Visit GitHub Repository
                    </a>
                </div>
            </header>
            <main>
                <div className="container margin-vert--lg"></div>
            </main>
        </Layout>
    )
}
