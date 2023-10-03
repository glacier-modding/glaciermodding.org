const fs = require("fs")

const fetchVersion = async (repo) => {
    try {
        const fetch = (await import("node-fetch")).default
        const response = await fetch(
            `https://api.github.com/repos/${repo}/releases/latest`,
        )
        const data = await response.json()
        return data.tag_name || "v0.0.0"
    } catch (error) {
        console.error(`Error fetching the latest release for ${repo}:`, error)
        return "v0.0.0"
    }
}

const repos = ["glacier-modding/G2WwiseDataTool", "glacier-modding/RPKG-Tool"]

;(async () => {
    const versions = {}
    for (const repo of repos) {
        const name = repo.split("/").pop()
        versions[name] = await fetchVersion(repo)
    }
    fs.writeFileSync("./tool-versions.json", JSON.stringify(versions))
})()
