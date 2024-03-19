import React from "react"
import Layout from "@theme/Layout"
import IconExternalLink from "@theme/Icon/ExternalLink"
import versionData from "../../tool-versions.json"

export default function G2GFxDataTool() {
    const G2GFxDataToolVersion = versionData.G2GFxDataTool
    return (
        <Layout
            title="G2GFxDataTool"
            description="G2GFxDataTool is a CLI application which can be used to export Audio Objects, Events, Switches and SoundBanks from a WWise project into files which are compatible with the Glacier 2 engine"
        >
            <header className="hero hero--primary">
                <div className="container">
                    <h1 className="hero__title">G2GFxDataTool</h1>
                    <p className="hero__subtitle">
                        G2GFxDataTool is a tool for generating GFXF and UICT/UICB files for the Glacier 2 engine utilising ZHMTools, SwfOp and GFxExport.
                    </p>
                    <div className="dropdown dropdown--hoverable">
                        <a
                            href={`https://github.com/glacier-modding/G2GFxDataTool/releases/download/${G2GFxDataToolVersion}/win-x64.zip`}
                            className="button button--secondary"
                        >
                            Download latest {G2GFxDataToolVersion}
                        </a>
                    </div>
                    <div className="margin-vert--sm">
                        <a
                            href="https://github.com/glacier-modding/G2GFxDataTool"
                            className="button button--info"
                            target="_blank"
                        >
                            Source code
                            <IconExternalLink />
                        </a>
                    </div>
                </div>
            </header>
            <main>
                <div className="container margin-vert--lg"></div>
            </main>
        </Layout>
    )
}
