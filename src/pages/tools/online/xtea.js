import React, { useEffect } from "react"
import Layout from "@theme/Layout"
import Admonition from "@theme/Admonition"
import init, * as xtea_wasm from "../../../../static/tools/hitwasm-xtea/hitwasm_xtea";

// Thumbs and PackageDefinitions Header
const HEADER = [
    0x22,
    0x3d,
    0x6f,
    0x9a,
    0xb3,
    0xf8,
    0xfe,
    0xb6,
    0x61,
    0xd9,
    0xcc,
    0x1c,
    0x62,
    0xde,
    0x83,
    0x41,
]

// Key
const XTEA_KEY = new Uint32Array([
    0x30f95282,
    0x1f48c419,
    0x295f8548,
    0x2a78366d,
])

// Delta
const XTEA_DELTA = 0x61c88647

// Rounds
const XTEA_ROUNDS = 32

function markFailure() {
    disable()
    alert("Invalid input")
}

function disable() {
    let target = document.getElementById("packagedefinitions")
    target.value =
        "Drag and drop packagedefinition.txt/thumbs.dat here or use the \"Load File\" button above."
    target.readOnly = true

    document.getElementById("save").style.visibility = "hidden"
}

function enable() {
    document.getElementById("packagedefinitions").readOnly = false
    document.getElementById("save").style.visibility = "visible"
}

function compileOutput() {
    let target = document.getElementById("packagedefinitions")
    let raw = new TextEncoder("utf-8").encode(target.value)
    return xtea_wasm.encipher(raw, XTEA_DELTA, HEADER, XTEA_ROUNDS, XTEA_KEY)
}

function saveFile() {
    // Build the internal data
    const saveData = (function () {
        const a = document.createElement("a")
        document.body.appendChild(a)
        a.style = "display: none"
        return function (data, fileName) {
            const blob = new Blob([data], {
                type: "application/octet-stream"
            }),
                url = window.URL.createObjectURL(blob)
            a.href = url
            a.download = fileName
            a.click()
            window.URL.revokeObjectURL(url)
        }
    })()

    let fileName = "compiled"

    try {
        fileName = document.getElementById("naming-field").value
    } catch (e) {
        /* alert(e); */
    }
    let data = compileOutput()

    saveData(data, fileName)
}

function decipher(buffer) {
    // Let the XTEA handler do the work.
    let new_buffer = xtea_wasm.decipher(
        buffer,
        XTEA_DELTA,
        HEADER,
        XTEA_ROUNDS,
        XTEA_KEY
    )
    enable()
    document.getElementById(
        "packagedefinitions"
    ).value = new TextDecoder("utf-8").decode(new_buffer)
}

function attemptDecipher(file) {
    const reader = new FileReader()
    reader.onload = (event) => {
        try {
            let buffer = new Uint8Array(event.target.result)
            decipher(buffer)
        } catch (e) {
            console.log(e)
            markFailure()
        }
    }
    reader.onerror = () => rej("error while reading")
    reader.readAsArrayBuffer(file)
}

function loadFile() {
    let input = document.createElement("input");
    input.type = "file";
    input.accept = ".dat,.txt";
    input.multiple = false;
    input.onchange = (event) => {
        let file = event.target.files[0];
        document.getElementById("naming-field").value = file.name;
        attemptDecipher(file);
    };
    input.click();
}

function dropHandler(ev) {
    /* Block page change */
    ev.preventDefault()

    /* Decipher */
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
                let file = ev.dataTransfer.items[i].getAsFile()
                document.getElementById("naming-field").value =
                    file.name
                attemptDecipher(file)
                break
            }
        }
    } else {
        if (ev.dataTransfer.files.length > 1) {
            alert("Only one file is allowed")
            return
        }
        let file = ev.dataTransfer.items[i].getAsFile()
        document.getElementById("naming-field").value = file.name
        attemptDecipher(file)
    }
}

function dragOverHandler(ev) {
    /* Prevent the browser doing anything insane. */
    ev.preventDefault()
}

function autopatch() {
    let target = document.getElementById("packagedefinitions")
    target.value = target.value.replace(
        /patchlevel=\d+\n/gi,
        "patchlevel=310\n"
    )
}

export default function Xtea() {
    useEffect(async () => {
        await init();
        xtea_wasm.initSync();
    }, []);
    return (
        <Layout
    title="Home"
    description="Home of the Glacier Modding organisation"
  >
    <div className="container">
    <div className="xtea-options">
        <span id="load" onClick={loadFile}> Load File </span>
        <span id="save"onClick={saveFile}> Save File </span>
        <span id="patch"onClick={autopatch}> Set Patch Levels </span>
    </div>
    
      <div id="naming">
        <input type="text" id="naming-field" />
      </div>
      <div className="wrapper">
        <textarea
          id="packagedefinitions"
          onDrop={dropHandler}
          onDragOver={dragOverHandler}
        ></textarea>
      </div>
    </div>
  </Layout>
      )
}
