const fs = require("fs")

const XTEA_HTML = "build/tools/online/xtea/index.html"

const data = fs.readFileSync("server/wasm_data.html").toString()
const html = fs.readFileSync(XTEA_HTML).toString()

const split = html.split("</main>")

fs.writeFileSync(XTEA_HTML, [split[0], data, "</main></html>"].join(""))
