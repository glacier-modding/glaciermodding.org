import React from "react"
import Layout from "@theme/Layout"
import IconExternalLink from "@theme/Icon/ExternalLink"
import versionData from "../../tool-versions.json"

export default function G2WwiseDataTool() {
    const G2WwiseDataToolVersion = versionData.G2WwiseDataTool
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
                    <div className="dropdown dropdown--hoverable">
                            <div
                                className="button button--secondary"
                            >
                                Download latest {G2WwiseDataToolVersion}
                            </div>
                        <ul className="dropdown__menu">
                            <li>
                                <a
                                    className="dropdown__link"
                                    href={`https://github.com/glacier-modding/G2WwiseDataTool/releases/download/${G2WwiseDataToolVersion}/win-x64.zip`}
                                >
                                    Windows
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown__link"
                                    href={`https://github.com/glacier-modding/G2WwiseDataTool/releases/download/${G2WwiseDataToolVersion}/linux-x64.zip`}
                                >
                                    Linux
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown__link"
                                    href={`https://github.com/glacier-modding/G2WwiseDataTool/releases/download/${G2WwiseDataToolVersion}/osx-x64.zip`}
                                >
                                    MacOS
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="margin-vert--sm">
                        <a
                            href="https://github.com/glacier-modding/G2WwiseDataTool"
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
