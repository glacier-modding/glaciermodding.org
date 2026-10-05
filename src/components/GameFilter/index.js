import React, { useEffect, useState } from "react"
import styles from "./styles.module.css"

const GAMES = [
    { code: "2016", label: "HITMAN (2016)" },
    { code: "h2", label: "HITMAN 2" },
    { code: "h3", label: "HITMAN 3" },
    { code: "007", label: "007 First Light" },
]

const PARAM = "game"

function loadSelection() {
    if (typeof window === "undefined") return null

    const value = new URLSearchParams(window.location.search).get(PARAM)
    return GAMES.some((game) => game.code === value) ? value : null
}

function writeSelection(selected) {
    const url = new URL(window.location.href)

    if (selected === null) {
        url.searchParams.delete(PARAM)
    } else {
        url.searchParams.set(PARAM, selected)
    }

    window.history.replaceState(null, "", url)
}

export default function GameFilter({ label = "Show sections for:" }) {
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        setSelected(loadSelection())
    }, [])

    useEffect(() => {
        const entries = document.querySelectorAll("[data-games]")
        entries.forEach((entry) => {
            const games = entry.getAttribute("data-games").split(",")
            const visible = selected !== null && games.includes(selected)
            entry.classList.toggle(styles.hidden, !visible)
        })
    }, [selected])

    const toggleGame = (code) => {
        setSelected((prev) => {
            const next = prev === code ? null : code
            writeSelection(next)
            return next
        })
    }

    return (
        <div className={styles.filterBar}>
            <span className={styles.filterLabel}>{label}</span>
            {GAMES.map(({ code, label: gameLabel }) => (
                <label key={code} className={styles.filterOption}>
                    <input
                        type="checkbox"
                        checked={selected === code}
                        onChange={() => toggleGame(code)}
                    />
                    {gameLabel}
                </label>
            ))}
        </div>
    )
}