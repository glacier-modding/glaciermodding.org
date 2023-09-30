import React from "react"
import Layout from "@theme/Layout"

export default function Home() {
    return (
        <Layout
            title="Home"
            description="Home of the Glacier Modding organisation"
        >
            <header className="hero hero--primary">
                <div className="container">
                    <h1 className="hero__title">Glacier Modding</h1>
                    <p className="hero__subtitle">
                        Home of the Glacier Modding organisation for the Glacier
                        2 game engine
                    </p>
                    <a
                        href="https://github.com/glacier-modding"
                        target="_blank"
                        className="button button--secondary"
                    >
                        GitHub
                    </a>
                </div>
            </header>
            <main>
                <div className="container margin-vert--lg">
                    <h2>What is Glacier Modding?</h2>
                    <p>
                        Glacier Modding is an organisation dedicated to creating
                        tools and mods for the{" "}
                        <a href="https://ioi.dk/glacier" target="_blank">
                            Glacier 2
                        </a>{" "}
                        game engine.
                    </p>
                    <p>
                        Glacier 2 is a game engine developed by IO Interactive
                        and it is used for the following games:
                        <ul>
                            <li>Hitman: Sniper Challenge</li>
                            <li>Hitman: Absolution</li>
                            <li>HITMAN™</li>
                            <li>HITMAN™: Sniper Assassin</li>
                            <li>HITMAN™ 2</li>
                            <li>
                                HITMAN: World of Assassination (formerly known
                                as HITMAN 3)
                            </li>
                        </ul>
                        At the moment we are mainly focusing on HITMAN 3 and
                        future games.
                    </p>
                </div>
            </main>
        </Layout>
    )
}
