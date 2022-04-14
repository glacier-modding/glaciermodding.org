/**
 * @param {string} name
 * @param {boolean} noText
 * @return {string}
 */
function fixName(name, noText = false) {
    return name.replace("<", noText ? "" : "&lt;").replace(">", noText ? "" : "&gt;")
}

/**
 * @typedef {{
     type: {
         name: string,
         genericName: string,
         classTypes: string[],
     },
     name: string,
     description?: string,
 }} CodeGenProperty
 */

/**
 * @param {CodeGenProperty[]} properties
 * @return {string}
 */
function createPropertiesTable(properties, linkify) {
    if (properties.length < 1) {
        return ""
    }

    /**
     * @param {CodeGenProperty} prop
     */
    const createTr = (prop) => `
<tr>
    <td><code>${prop.name}</code></td>
    <td>${linkify(prop.type.name)}</td>
    <td>${prop.description}</td>
</tr>`

    return `<span>Properties:</span>
<div class="pad-left top-space">
    <table>
        <thead>
            <th>Name</th>
            <th>Type</th>
            <th>Description</th>
        </thead>
        <tbody>
            ${properties.map(createTr).join("\n")}
        </tbody>
    </table>
</div>`
}

/**
 * @return {Promise<import("@docusaurus/types").Plugin<string>>}
 */
module.exports = async function generateClassesPlugin() {
    const { readFile } = await import("fs/promises")

    return {
        name: "docusaurus-plugin-codegen-classes",

        async loadContent() {
            /** @type {{
                classes: {
                    baseClasses?: string[],
                    interfaces?: string[],
                    name: string,
                    properties?: CodeGenProperty[],
                }[],
            }} */
            const data = JSON.parse((await readFile("static/generated/classes.json")).toString())

            const toc = []

            let html = `<h1>Classes Reference</h1>

`

            /**
             * @param {string} base
             * @return {string}
             */
            const linkifyWithCodeblock = (base) => {
                let s = base

                const fBase = fixName(s, true)
                return `<a href="#${fBase.toLowerCase()}"><code>${s}</code></a>`
            }

            const alphabeticalClasses = data.classes.sort((a, b) => a.name.localeCompare(b.name))

            for (const clazz of alphabeticalClasses) {
                toc.push({
                    level: 2,
                    value: clazz.name,
                    id: fixName(clazz.name.toLowerCase(), true),
                })

                const baseClasses = `\
${(clazz.baseClasses?.length || 0) > 0 ? `<i>extends</i> ${clazz.baseClasses.map(linkifyWithCodeblock).join("<span>, </span>")}<br />` : ""}
`

                const impls = `\
${(clazz.interfaces?.length || 0) > 0 ? `<i>implements</i> ${clazz.interfaces.map(linkifyWithCodeblock).join("<span>, </span>")}` : ""}
`

                html += `\
<section class="bottom-margin">
    <h2 id="${fixName(clazz.name.toLowerCase(), true)}">${fixName(clazz.name)}</h2>

    <div class="pad-left">
        ${baseClasses}
        ${impls}
    </div>
    ${createPropertiesTable(clazz.properties, linkifyWithCodeblock)}
</section>`
            }

            return JSON.stringify({ html, toc })
        },

        async contentLoaded({ content, actions }) {
            const data = await actions.createData("codegen-text.json", content)

            actions.addRoute({
                path: "/glacier2/classes",
                component: "@site/src/components/Classes",
                modules: {
                    data,
                },
            })
        },
    }
}
