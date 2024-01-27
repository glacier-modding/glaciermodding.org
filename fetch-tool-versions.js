const fs = require("fs")

const fetchVersion = async (repo) => {
    try {
        const fetch = (await import("node-fetch")).default
        const response = await fetch(
            `https://api.github.com/repos/${repo}/releases/latest`
        )
        const data = await response.json()
        return data.tag_name
    } catch (error) {
        console.error(`Error fetching the latest release for ${repo}:`, error)
        throw error
    }
}

const repos = [
    "glacier-modding/G2WwiseDataTool",
    "glacier-modding/RPKG-Tool",
    "2kpr/rebone",
    "2kpr/primport",
]

;(async () => {
    const versions = {}
    let hasError = false

    for (const repo of repos) {
        try {
            const name = repo.split("/").pop()
            versions[name] = await fetchVersion(repo)
        } catch (error) {
            hasError = true
            break
        }
    }

    if (!hasError) {
        fs.writeFileSync("./tool-versions.json", JSON.stringify(versions))
    } else {
        console.log(
            "One or more versions couldn't be fetched. File will not be changed."
        )
    }
})()
