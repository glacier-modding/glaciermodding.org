import React, { useState, useRef } from "react"
import Layout from "@theme/Layout"

function OptionsBar({
    inputPlatformReplacement,
    setInputPlatformReplacement,
    outputPlatformReplacement,
    setOutputPlatformReplacement,
    applyInput,
}) {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                    flexWrap: "wrap",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                    }}
                >
                    <label
                        className="g2m-label"
                        htmlFor="output-platform-replacement"
                    >
                        Output platform:
                    </label>
                    <select
                        id="output-platform-replacement"
                        className="g2m-select"
                        value={outputPlatformReplacement}
                        onChange={(e) =>
                            setOutputPlatformReplacement(e.target.value)
                        }
                    >
                        <option value="None">None</option>
                        <option value="PC">PC</option>
                        <option value="Ps5">Ps5</option>
                        <option value="Xbox">Xbox</option>
                        <option value="Switch2">Switch2</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

function HashCalcPanel({
    name,
    example = "",
    widthPercent,
    validateLine,
    isInHashlist,
    onCopyField,
    onCopyValidEntries,
    readOnly = false,
}) {
    const textareaRef = useRef(null)

    const getLines = () => {
        const val = textareaRef.current ? textareaRef.current.value : ""
        return val
            .split(/\r?\n/)
            .map((l) => l.trim())
            .filter((l) => l.length > 0)
    }

    const handleCopyField = () => {
        const lines = getLines()
        if (onCopyField) onCopyField(lines)
    }

    const handleCopyFindings = () => {
        const lines = getLines()
        const valid = lines.filter((line) => {
            const ok = validateLine ? validateLine(line) : true
            const inHash = isInHashlist ? isInHashlist(line) : false
            return ok && !inHash
        })
        if (onCopyValidEntries) onCopyValidEntries(valid)
    }

    return (
        <div
            style={{
                flex: `0 0 ${widthPercent}%`,
                maxWidth: `${widthPercent}%`,
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "0.75rem",
                    flexWrap: "wrap",
                }}
            >
                    <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                    <strong style={{ fontSize: "1.5rem" }}>{name}</strong>
                    {example ? (
                            <div style={{ fontSize: "0.9rem", color: "#6c757d", whiteSpace: "nowrap" }}>
                            {example}
                            </div>
                    ) : null}
                </div>

                <div
                    style={{
                        display: "flex",
                        gap: "0.5rem",
                        flexWrap: "wrap",
                    }}
                >
                    <span type="button" class="g2m-span-button" onClick={handleCopyField}>
                        Copy field
                    </span>
                    <span type="button" class="g2m-span-button" onClick={handleCopyFindings}>
                        Copy new entries
                    </span>
                </div>
            </div>
            <textarea
                ref={textareaRef}
                className="g2m-textarea"
                style={{
                    width: "100%",
                    height: "500px",
                    resize: "none",
                }}
                readOnly={readOnly}
            />
        </div>
    )
}

export default function HashCalculator() {
    const [leftWidth] = useState(60)
    const [inputPlatformReplacement, setInputPlatformReplacement] = useState("")
    const [outputPlatformReplacement, setOutputPlatformReplacement] =
        useState("PC")
    const [appliedPlatformReplacement, setAppliedPlatformReplacement] =
        useState("")

    const applyInput = () => {
        setAppliedPlatformReplacement(inputPlatformReplacement)
        console.log("Applied platform replacement:", inputPlatformReplacement)
    }

    const platformPrefixMap = {
        None: "00",
        PC: "01",
        Ps5: "02",
        Xbox: "03",
        Switch2: "04",
    }

    const runtimePrefix = platformPrefixMap[outputPlatformReplacement]
    const runtimeExample = `e.g. ${runtimePrefix}123456789ABCDE`

    return (
        <Layout
            title="Home"
            description="Home of the Glacier Modding organisation"
        >
            <div className="container">
                <div className="wrapper">
                    <div
                        className="hash-calculator"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                    >
                        <div className="hash-options">
                            <OptionsBar
                                inputPlatformReplacement={inputPlatformReplacement}
                                setInputPlatformReplacement={
                                    setInputPlatformReplacement
                                }
                                outputPlatformReplacement={
                                    outputPlatformReplacement
                                }
                                setOutputPlatformReplacement={
                                    setOutputPlatformReplacement
                                }
                                applyInput={applyInput}
                            />

                            <div
                                style={{
                                    display: "flex",
                                    gap: "1rem",
                                    alignItems: "flex-start",
                                }}
                            >
                                <HashCalcPanel
                                    name="ResourceID"
                                    example="[assembly:/path/to/asset].extension"
                                    widthPercent={leftWidth}
                                    validateLine={(line) => line.includes("assembly:")}
                                    isInHashlist={() => false}
                                    onCopyField={(lines) =>
                                        console.log("Copy field:", lines)
                                    }
                                    onCopyValidEntries={(lines) =>
                                        console.log("Copy valid:", lines)
                                    }
                                />

                                <HashCalcPanel
                                    name="RuntimeResourceID"
                                    example={runtimeExample}
                                    widthPercent={100 - leftWidth}
                                    validateLine={(line) => line.startsWith("0x") && line.length > 8}
                                    isInHashlist={() => false}
                                    onCopyField={(lines) =>
                                        console.log("Copy runtime field:", lines)
                                    }
                                    onCopyValidEntries={(lines) =>
                                        console.log("Copy runtime valid:", lines)
                                    }
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}