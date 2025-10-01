import React from "react"
import Layout from "@theme/Layout"
import IconExternalLink from "@theme/Icon/ExternalLink"
import versionData from "../../tool-versions.json"

export default function PrimPort() {
    const primportVersion = versionData.primport
    return (
        <Layout
            title="PrimPort"
            description="PrimPort is a tool for porting PRIM files between Hitman versions: HMA, Alpha, HM2016, and WoA"
        >
            <header className="hero hero--primary">
                <div className="container">
                    <h1 className="hero__title" style={{ marginBottom: "0px" }}>
                        PrimPort
                    </h1>
                    <p
                        className="hero__subtitle"
                        style={{ fontSize: "18px", marginTop: "0px" }}
                    >
                        Author: 2kpr
                    </p>
                    <p className="hero__subtitle">
                        PrimPort is a tool for porting PRIM files between Hitman
                        versions: HMA, Alpha, HM2016, and WoA.
                    </p>
                    <div className="dropdown dropdown--hoverable">
                        <button className="button button--secondary">
                            Download latest {primportVersion}
                        </button>
                        <ul className="dropdown__menu">
                            <li>
                                <a
                                    className="dropdown__link"
                                    href={`https://github.com/glacier-modding/primport/releases/download/${primportVersion}/primport-windows-x64.zip`}
                                >
                                    Windows
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown__link"
                                    href={`https://github.com/glacier-modding/primport/releases/download/${primportVersion}/primport-linux-x64.zip`}
                                >
                                    Linux
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown__link"
                                    href={`https://github.com/glacier-modding/primport/releases/download/${primportVersion}/primport-macos-x64.zip`}
                                >
                                    MacOS
                                </a>
                            </li>
                        </ul>
                    </div>
                    <span className="margin-horiz--sm"></span>
                    <a href="/docs/modding/hitman/tools/primport" className="button button--info">
                        How to use
                    </a>
                    <div className="margin-vert--sm">
                        <a
                            href="https://github.com/glacier-modding/primport"
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
                    <img src="/img/primport/gui.png" />
                </div>
            </main>
        </Layout>
    )
}
