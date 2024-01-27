import React from "react"
import Layout from "@theme/Layout"
import Admonition from "@theme/Admonition"

export default function Xtea() {
    return (
        <Layout
            title="Home"
            description="Home of the Glacier Modding organisation"
        >
            <div>
                <div className="container">
                    <main>
                        <div className="container margin-vert--lg">
                            <Admonition type="info">
                                <p>
                                    Sorry, this tool is unavailable at the
                                    moment. If you wish to convert
                                    "packagedefinition.txt" or "thumbs.dat" into
                                    plaintext, please use the RPKG Tool instead.
                                </p>
                                <p>
                                    For automatic updating of patch levels, it
                                    is best to use the{" "}
                                    <a href="https://www.nexusmods.com/hitman3/mods/200">
                                        Simple Mod Framework
                                    </a>{" "}
                                    for managing your mods.
                                </p>
                            </Admonition>
                        </div>
                    </main>
                </div>
            </div>
        </Layout>
    )
}
