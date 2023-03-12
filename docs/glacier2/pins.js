import React, { useEffect, useState } from "react"

const pinData = require("./pins.json")

const PinList = ({ pins, title }) => {
    if (pins.length === 0) {
        return <></>
    }

    const sortedPins = pins.sort()

    return (
        <div>
            {title && <h4>{title}</h4>}
            <div className="pin-list">
                {sortedPins.map((pin, i) => (
                    <code key={i}>{pin}</code>
                ))}
            </div>
        </div>
    )
}

const EntityWithPins = ({ entity }) => {
    return (
        <div className="pin-entity card">
            <div className="card__body">
                <div className="path">
                    <span className="badge badge--secondary">
                        {entity.hash.toUpperCase()}
                    </span>
                    {entity.path}
                </div>
                <details>
                    <summary>Show pins</summary>
                    <div>
                        <PinList
                            pins={Array.from(entity.in)}
                            title="Input pins"
                        />
                        <PinList
                            pins={Array.from(entity.out)}
                            title="Output pins"
                        />
                    </div>
                </details>
            </div>
        </div>
    )
}

const EntityMatch = ({ entity, input, output }) => {
    return (
        <div className="pin-entity card">
            <div className="card__body">
                <div className="path">
                    {input && <span className="badge badge--success">IN</span>}
                    {output && (
                        <span className="badge badge--primary">OUT</span>
                    )}
                    <span className="badge badge--secondary">
                        {entity.hash.toUpperCase()}
                    </span>
                    {entity.path}
                </div>
            </div>
        </div>
    )
}

export const PinSearch = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [results, setResults] = useState([])

    useEffect(() => {
        // Wait for 250ms after the user stops typing before searching.
        const debounceTimer = setTimeout(() => {
            if (searchTerm.length === 0) {
                setResults([])
            } else {
                const searchLower = searchTerm.toLowerCase()
                const results = []

                for (const entity of pinData) {
                    let input = false
                    let output = false

                    for (const pin of entity.in) {
                        if (pin.toLowerCase() === searchLower) {
                            input = true
                            break
                        }
                    }

                    for (const pin of entity.out) {
                        if (pin.toLowerCase() === searchLower) {
                            output = true
                            break
                        }
                    }

                    // If it has any input or output pins matching the search term, add it to the results.
                    if (input || output) {
                        results.push({ entity, input, output })
                    }
                }

                setResults(results)
            }
        }, 250)

        return () => clearTimeout(debounceTimer)
    }, [searchTerm])

    return (
        <>
            <input
                type="text"
                value={searchTerm}
                placeholder="Start typing to search..."
                className="navbar__search-input pin-search"
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="pin-results">
                {results.map((props, i) => (
                    <EntityMatch key={i} {...props} />
                ))}
            </div>
        </>
    )
}

export const PinEntitySearch = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [results, setResults] = useState([])

    useEffect(() => {
        // Wait for 250ms after the user stops typing before searching.
        const debounceTimer = setTimeout(() => {
            if (searchTerm.length === 0) {
                setResults([])
            } else {
                const searchLower = searchTerm.toLowerCase()
                const results = []

                for (const entity of pinData) {
                    if (
                        entity.hash.startsWith(searchLower) ||
                        entity.path.includes(searchLower)
                    ) {
                        results.push(entity)
                    }
                }

                setResults(results)
            }
        }, 250)

        return () => clearTimeout(debounceTimer)
    }, [searchTerm])

    return (
        <>
            <input
                type="text"
                value={searchTerm}
                placeholder="Start typing to search..."
                className="navbar__search-input pin-search"
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="pin-results">
                {results.map((entity, i) => (
                    <EntityWithPins key={i} entity={entity} />
                ))}
            </div>
        </>
    )
}

export const InputPins = () => {
    // Collect all input pins.
    const inputPins = new Set()

    for (const entity of pinData) {
        for (const pin of entity.in) {
            inputPins.add(pin)
        }
    }

    return <PinList pins={Array.from(inputPins)} />
}

export const OutputPins = () => {
    // Collect all output pins.
    const outputPins = new Set()

    for (const entity of pinData) {
        for (const pin of entity.out) {
            outputPins.add(pin)
        }
    }

    return <PinList pins={Array.from(outputPins)} />
}
