import React from "react"
import Layout from "@theme/Layout"
import IconExternalLink from "@theme/Icon/ExternalLink"
import versionData from "../../tool-versions.json"

export default function Rebone() {
    const reboneVersion = versionData.rebone
    return (
        <Layout
            title="Rebone"
            description="Rebone is a tool for porting Hitman WoA S1 weightedprims to S2 and S3 bonerigs."
        >
            <header className="hero hero--primary">
                <div className="container">
                    <h1 className="hero__title" style={{ marginBottom: "0px" }}>
                        Rebone
                    </h1>
                    <p
                        className="hero__subtitle"
                        style={{ fontSize: "18px", marginTop: "0px" }}
                    >
                        Author: 2kpr
                    </p>
                    <p className="hero__subtitle">
                        Rebone is a tool for porting Hitman WoA S1 weightedprims
                        to S2 and S3 bonerigs.
                    </p>
                    <div className="dropdown dropdown--hoverable">
                        <button className="button button--secondary">
                            Download latest {reboneVersion}
                        </button>
                        <ul className="dropdown__menu">
                            <li>
                                <a
                                    className="dropdown__link"
                                    href={`https://github.com/glacier-modding/rebone/releases/download/${reboneVersion}/rebone-windows-x64.zip`}
                                >
                                    Windows
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown__link"
                                    href={`https://github.com/glacier-modding/rebone/releases/download/${reboneVersion}/rebone-linux-x64.zip`}
                                >
                                    Linux
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown__link"
                                    href={`https://github.com/glacier-modding/rebone/releases/download/${reboneVersion}/rebone-macos-x64.zip`}
                                >
                                    MacOS
                                </a>
                            </li>
                        </ul>
                    </div>
                    <span className="margin-horiz--sm"></span>
                    <a href="/docs/rebone" className="button button--info">
                        How to use
                    </a>
                    <div className="margin-vert--sm">
                        <a
                            href="https://github.com/glacier-modding/rebone"
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
                <div className="container margin-vert--lg">
                    <img src="/img/rebone/gui.png" />
                </div>
            </main>
        </Layout>
    )
}
