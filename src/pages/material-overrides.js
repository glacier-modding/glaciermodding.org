import React, { useState, useCallback } from "react"
import Layout from "@theme/Layout"

export default function MaterialOverrides() {
    const [message, setMessage] = useState("");

    const handleDrop = useCallback(async (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (!file) return;

        if (!file.name.endsWith(".json")) {
            setMessage("Please drop a valid .json file.");
            return;
        }

        const text = await file.text();
        try {
            const jsonData = JSON.parse(text);
            
            if (jsonData.MATI.startsWith("[") && jsonData.MATI.endsWith(".pc_mi")) {
                jsonData.MATT = jsonData.MATI.replace(".pc_mi", ".pc_entitytype");
                jsonData.MATB = jsonData.MATI.replace(".pc_mi", ".pc_entityblueprint");
            }
            
            const modified = appendOverrides(jsonData);
            const materialName = jsonData.Material.Instance[0].Name.replace("mi", "material");
            const blob = new Blob([JSON.stringify(modified, null, 2)], { type: "application/json" });        

            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = `${materialName}.json`;
            a.click();

            setMessage(`Generated ${materialName}.json`);
        } catch (err) {
            setMessage("Failed to process file: " + err.message);
            console.error(err);
        }
    }, []);

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <Layout
            title="Material overrides"
            description="Automatically populate overrides section in a material.json file"
        >
            <main>
                <div className="container margin-vert--lg">
                    <div
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        style={{
                            border: "3px dashed var(--ifm-navbar-link-color)",
                            padding: "8rem",
                            textAlign: "center",
                            borderRadius: "1rem",
                            backgroundColor: "var(--ifm-navbar-background-color)",
                            color: "var(--ifm-navbar-link-color)"
                        }}
                    >
                        <h2>Drop your material.json file here</h2>
                        <p>and overrides will be automatically added into it.</p>
                        {message && <p><strong>{message}</strong></p>}
                    </div>
                    <p style={{ textAlign: "center", marginTop: "2rem" }}>
                        Adapted from code originally created by{" "}
                        <a
                            href="https://github.com/scrungofan"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontWeight: "bold", textDecoration: "none" }}
                        >
                            Invalid
                        </a>
                    </p>

                </div>
            </main>
        </Layout>
    );
}

// start of addoverrides.js - created by Invalid
function appendOverrides(json) {
    const material = json.Material.Instance[0].Binder[0];

    const overrides = {
        Overrides: {
            Texture: {},
            Color: {}
        }
    };

    material['Float Value'].forEach(floatVal => {
        if (floatVal.Enabled && !floatVal.Name.includes("gm_mTransform")) {
            overrides.Overrides[floatVal.Name] = floatVal.Value;
        }
    });

    material.Texture.forEach(texture => {
        if (texture.Enabled) {
            overrides.Overrides.Texture[texture.Name.replace("map", "")] = texture['Texture Id'];
        }
    });

    material.Color.forEach(color => {
        if (color.Enabled) {
            overrides.Overrides.Color[color.Name] = color.Value;
        }
    });

    return {
        ...json,
        ...overrides
    };
}
// end of addoverrides.js