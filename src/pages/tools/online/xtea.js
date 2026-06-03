import React, { useEffect, useState } from "react"
import Layout from "@theme/Layout"
import init, * as xtea_wasm from "../../../../static/tools/hitwasm-xtea/hitwasm_xtea"

const GAME_CONFIGS = {
    WorldOfAssasination: {
        name: "Hitman: World of Assassination",
        header: [
            0x22, 0x3d, 0x6f, 0x9a, 0xb3, 0xf8, 0xfe, 0xb6, 0x61, 0xd9, 0xcc,
            0x1c, 0x62, 0xde, 0x83, 0x41,
        ],
        key: new Uint32Array([0x30f95282, 0x1f48c419, 0x295f8548, 0x2a78366d]),
    },
    H2016: {
        name: "Hitman 2016 v1.1.0 - v1.1.2",
        header: [
            0xa0, 0xbb, 0xa0, 0x1e, 0x64, 0x06, 0x0f, 0x96, 0xb2, 0x5d, 0xcb,
            0xe3, 0x9f, 0xb5, 0x72, 0xb4
        ],
        key: new Uint32Array([0x4b913621, 0x4a424a66, 0x9feea38e, 0x80e44711]),
    },
    FirstLight: {
        name: "007: First Light",
        header: [
            0xb7, 0xe2, 0xea, 0x00, 0x54, 0x5b, 0x6b, 0x87, 0x11, 0xbd, 0x6f,
            0xe8, 0x4d, 0x6a, 0xd4, 0xbf,
        ],
        key: new Uint32Array([0x71482cf0, 0x5fdc4b9f, 0x86ce569d, 0x509fc1e]),
    },
}

const XTEA_DELTA = 0x61c88647
const XTEA_ROUNDS = 32
const DEFAULT_GAME = "WorldOfAssasination"

function detectGameFromHeader(buffer) {
    for (const [gameName, config] of Object.entries(GAME_CONFIGS)) {
        const matches = config.header.every(
            (byte, index) => buffer[index] === byte
        )
        if (matches) {
            return gameName
        }
    }
    return DEFAULT_GAME
}

export default function Xtea() {
    const [selectedGame, setSelectedGame] = useState(DEFAULT_GAME)
    const [textValue, setTextValue] = useState('')
    const [fileName, setFileName] = useState("compiled")
    const [isEditable, setIsEditable] = useState(false)
    const [wasmReady, setWasmReady] = useState(false)

    useEffect(() => {
        async function initWasm() {
            await init()
            xtea_wasm.initSync()
            setWasmReady(true)
        }

        initWasm()
        disable()
    }, [])

    function markFailure() {
        disable()
        alert("Invalid input")
    }

    function disable() {
        setTextValue(
            'Drag and drop packagedefinition.txt/thumbs.dat here or use the "Load File" button above.'
        )
        setIsEditable(false)
    }

    function enable() {
        setIsEditable(true)
    }

    function compileOutput() {
        if (!selectedGame || !GAME_CONFIGS[selectedGame]) {
            alert("Please select a game first")
            return null
        }

        const raw = new TextEncoder().encode(textValue)
        const config = GAME_CONFIGS[selectedGame]

        return xtea_wasm.encipher(
            raw,
            XTEA_DELTA,
            config.header,
            XTEA_ROUNDS,
            config.key
        )
    }

    function saveFile() {
        const data = compileOutput()
        if (!data) return

        const a = document.createElement("a")
        document.body.appendChild(a)
        a.style = "display: none"

        const blob = new Blob([data], {
            type: "application/octet-stream",
        })
        const url = window.URL.createObjectURL(blob)

        a.href = url
        a.download = fileName || "compiled"
        a.click()

        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
    }

    function decipher(buffer, gameName) {
        const config = GAME_CONFIGS[gameName]

        const newBuffer = xtea_wasm.decipher(
            buffer,
            XTEA_DELTA,
            config.header,
            XTEA_ROUNDS,
            config.key
        )

        enable()
        setTextValue(new TextDecoder("utf-8").decode(newBuffer))
    }

    function attemptDecipher(file) {
        const reader = new FileReader()

        reader.onload = (event) => {
            try {
                const buffer = new Uint8Array(event.target.result)
                const detectedGame = detectGameFromHeader(buffer)

                if (!detectedGame) {
                    setSelectedGame(DEFAULT_GAME)
                    markFailure()
                    return
                }

                setSelectedGame(detectedGame)
                decipher(buffer, detectedGame)
            } catch (e) {
                console.log(e)
                setSelectedGame(DEFAULT_GAME)
                markFailure()
            }
        }

        reader.onerror = () => {
            setSelectedGame(DEFAULT_GAME)
            markFailure()
        }

        reader.readAsArrayBuffer(file)
    }

    function loadFile() {
        const input = document.createElement("input")
        input.type = "file"
        input.accept = ".dat,.txt"
        input.multiple = false

        input.onchange = (event) => {
            const file = event.target.files[0]
            if (!file) return

            setFileName(file.name)
            attemptDecipher(file)
        }

        input.click()
    }

    function dropHandler(ev) {
        ev.preventDefault()

        if (ev.dataTransfer.items) {
            let fileCount = 0

            for (let i = 0; i < ev.dataTransfer.items.length; i++) {
                if (ev.dataTransfer.items[i].kind === "file") {
                    fileCount += 1
                }
            }

            if (fileCount > 1) {
                alert("Only one file is allowed")
                return
            }

            for (let i = 0; i < ev.dataTransfer.items.length; i++) {
                if (ev.dataTransfer.items[i].kind === "file") {
                    const file = ev.dataTransfer.items[i].getAsFile()
                    if (!file) return

                    setFileName(file.name)
                    attemptDecipher(file)
                    break
                }
            }
        } else {
            if (ev.dataTransfer.files.length > 1) {
                alert("Only one file is allowed")
                return
            }

            const file = ev.dataTransfer.files[0]
            if (!file) return

            setFileName(file.name)
            attemptDecipher(file)
        }
    }

    function dragOverHandler(ev) {
        ev.preventDefault()
    }

    function autopatch() {
        let target = document.getElementById("packagedefinitions")
        target.value = target.value.replace(
            /patchlevel=\d+\n/gi,
            "patchlevel=310\n"
        )
        setTextValue(target.value)
    }

    return (
        <Layout
            title="Home"
            description="Home of the Glacier Modding organisation"
        >
            <div className="container">
                <div className="xtea-options">
                    <span id="load" onClick={loadFile}>
                        Load File
                    </span>
                    <span
                        id="save"
                        onClick={saveFile}
                            style={{
                                opacity: isEditable ? 1 : 0.5,
                                pointerEvents: isEditable ? "auto" : "none",
                                cursor: isEditable ? "pointer" : "not-allowed",
                            }}
                    >
                        Save File
                    </span>
                    <span id="patch" onClick={autopatch}>
                        Set Patch Levels
                    </span>

                    <select
                        value={selectedGame}
                        onChange={(e) => setSelectedGame(e.target.value)}
                    >
                        {Object.keys(GAME_CONFIGS).map((game) => (
                            <option key={game} value={game}>
                                {GAME_CONFIGS[game].name}
                            </option>
                        ))}
                    </select>
                </div>

                <div id="naming">
                    <input
                        type="text"
                        id="naming-field"
                        value={fileName}
                        onChange={(e) => setFileName(e.target.value)}
                    />
                </div>

                <div className="wrapper">
                    <textarea
                        id="packagedefinitions"
                        value={textValue}
                        readOnly={!isEditable}
                        onChange={(e) => setTextValue(e.target.value)}
                        onDrop={dropHandler}
                        onDragOver={dragOverHandler}
                    />
                </div>

                {!wasmReady && <p>Loading WASM...</p>}
            </div>
        </Layout>
    )
}
