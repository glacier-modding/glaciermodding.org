import React from "react"
import Layout from "@theme/Layout"
import IconExternalLink from "@theme/Icon/ExternalLink"
import versionData from "../../tool-versions.json"

export default function NavKit() {
    const NavKitVersion = versionData.NavKit
    return (
        <Layout
            title="NavKit"
            description="NavKit is a tool for creating custom Navp (Navmesh) and Airg (AI Reasoning Grid) files for Hitman WoA."
        >
            <header className="hero hero--primary">
                <div className="container">
                    <h1 className="hero__title" style={{ marginBottom: "0px" }}>
                        NavKit
                    </h1>
                    <p
                        className="hero__subtitle"
                        style={{ fontSize: "18px", marginTop: "0px" }}
                    >
                        Author: AtomicForce
                    </p>
                    <p className="hero__subtitle">
                        NavKit is a tool for creating custom Navp (Navmesh) and
                        Airg (AI Reasoning Grid) files for Hitman WoA.
                    </p>
                    <div className="dropdown dropdown--hoverable">
                        <button className="button button--secondary">
                            Download latest {NavKitVersion}
                        </button>
                        <ul className="dropdown__menu">
                            <li>
                                <a
                                    className="dropdown__link"
                                    href={`https://github.com/glacier-modding/NavKit/releases/download/${NavKitVersion}/NavKit.msi`}
                                >
                                    Windows
                                </a>
                            </li>
                        </ul>
                    </div>
                    <span className="margin-horiz--sm"></span>
                    <a href="/docs/modding/hitman/tools/NavKit" className="button button--info">
                        How to use
                    </a>
                    <div className="margin-vert--sm">
                        <a
                            href="https://github.com/glacier-modding/NavKit"
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
                    <img src="/img/NavKit/gui.png" />
                </div>
            </main>
        </Layout>
    )
}
