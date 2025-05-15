---
sidebar_position: 14
description: Creating a Peacock Plugin
---

# Creating a Peacock Plugin

For this tutorial we will be [creating a Peacock Plugin](https://thepeacockproject.org/plugins) for our Hitman Campaign Demo mod.

Creating a plugin can be pretty technical, but we'll walk through each step and not get too much into the weeds. 

## Updating the manifest file
Open your project folder in an IDE like WebStorm or VSCode or another text editor of your choice.

Open the `manifest.json` file and add this line:
```json
  "peacockPlugins": ["HitmanCampaignDemo.plugin.js"],
```
Anywhere will do, but near the top is probably easiest.

## Creating the plugin file
In the root directory, next to the manifest file, create a new file called `HitmanCampaignDemo.plugin.js` and open it.

First off, we will need a few `requires`. Put these at the top of the new file:
```js
const { log, LogLevel } = require("@peacockproject/core/loggingInterop")
const { getVersionedConfig } = require("@peacockproject/core/configSwizzleManager")
```

Next we'll create our main function. This is what the Peacock server will run for our mod when it is started up.
```js
module.exports = function hitmanCampaignDemoPlugin(controller) {
    log(LogLevel.INFO, "Loading HitmanCampaignDemo Plugin...");
    log(LogLevel.INFO, "Done Loading HitmanCampaignDemo plugin.");
}
```

Now we'll add our first mission. In between the log functions, add this:
```js
    controller.addMission([CONTENTS OF THE MISSION_BANK.CONTRACT.JSON FILE]);
```
Replace `[CONTENTS OF THE MISSION_BANK.CONTRACT.JSON FILE]` with the entire contents of the `content/chunk0/Mission Contracts/mission_bank.contract.json` file.

Now we'll need to add the entrance for the bank mission:
```js
    controller.configManager.configs["Entrances"]["assembly:/_pro/scenes/missions/hitman_campaign_demo/mission_bank/scene_bank.entity"] = ["[BANK ENTRANCE REPOSITORY UUID]"]
```
Replace `[BANK ENTRANCE REPOSITORY UUID]` with the repository entry uuid for the bank mission's entrance.

Now we need to add the Modlandia Parent Location and Modtown Location:
```js
    locations.parents["LOCATION_PARENT_MODLANDIA"] = {
        "Id": "LOCATION_PARENT_MODLANDIA",
        "Guid": "[MODLANDIA UNLOCKABLE UUID]",
        "DisplayNameLocKey": "",
        "GameAsset": "",
        "Type": "location",
        "Subtype": "location",
        "RMTPrice": -1,
        "GamePrice": -1,
        "IsPurchasable": false,
        "IsPublished": true,
        "IsDroppable": false,
        "Capabilities": [],
        "Qualities": {},
        "Properties": {
            "Icon": "images/locations/modlandia/tile.jpg",
            "LockedIcon": "images/locations/modlandia/tile.jpg",
            "DlcImage": "images/livetile/dlc/tile_hitman3.jpg",
            "DlcName": "GAME_STORE_METADATA_S3_GAME_TITLE",
            "IsLocked": false,
            "UpcomingContent": false,
            "UpcomingKey": "UI_MENU_LIVETILE_CONTENT_UPCOMING_HEADLINE",
            "Background": "images/locations/modlandia/background.jpg",
            "Order": 0,
            "LimitedLoadout": false,
            "NormalLoadoutUnlock": "",
            "ProgressionKey": "LOCATION_MODLANDIA",
            "Season": 1,
            "RequiredResources": [
                "[assembly:/_pro/scenes/missions/hitman_campaign_demo/mission_modtown/scene_modtown.entity].entitytemplate",
            ],
            "Entitlements": [],
        },
    }
    locations.children["LOCATION_MODTOWN"] = {
        "Id": "LOCATION_MODTOWN",
        "Guid": "[MODTOWN UNLOCKABLE UUID]",
        "Type": "location",
        "Subtype": "sublocation",
        "RMTPrice": -1,
        "GamePrice": -1,
        "IsPurchasable": false,
        "IsPublished": true,
        "IsDroppable": false,
        "Capabilities": [],
        "Qualities": {},
        "Properties": {
            "ParentLocation": "LOCATION_PARENT_MODLANDIA",
            "Icon": "images/campaign_demo/modtown/tile.jpg",
            "LockedIcon": "images/campaign_demo/modtown/tile.jpg",
            "DlcImage": "images/livetile/dlc/tile_hitman3.jpg",
            "DlcName": "GAME_STORE_METADATA_S3_GAME_TITLE",
            "IsLocked": false,
            "UpcomingContent": false,
            "UpcomingKey": "UI_MENU_LIVETILE_CONTENT_UPCOMING_HEADLINE",
            "Background": "images/campaign_demo/modtown/background.jpg",
            "Order": 0,
            "LimitedLoadout": false,
            "ProgressionKey": "LOCATION_MODTOWN",
            "CreateContractId": "[YOUR CREATOR ID FROM THE MODTOWN UNLOCKABLE]",
            "HideProgression": false,
            "RequiredResources": [
                "[assembly:/_pro/scenes/missions/campaign_demo/modtown/scene_modtown.entity].entitytemplate",
            ],
            "Entitlements": [],
        },
    }
```
Note that these are basically just the Unlockables for the parent location and location, but we've made sure the `Id` field is set as well.

Replace `[MODLANDIA UNLOCKABLE UUID]` with the UUID from the Modlandia Unlockable, `[MODTOWN UNLOCKABLE UUID]` with the UUID from the Modtown Unlockable, and `[YOUR CREATOR ID FROM THE MODTOWN UNLOCKABLE]` with your Creator ID from the Modtown Unlockable. 

Next we'll need to specify that our Modtown Throwdown mission takes place at this location:
```js
    controller.missionsInLocations["LOCATION_MODTOWN"] = ["[MODTOWN MISSION UUID]"]
```
Replace `[MODTOWN MISSION UUID]` with the UUID of the Modtown mission from the `mission_modtown.contract.json` file.

Now let's set some default progression info for the Modlandia parent location:
```js

    const userDefault = getVersionedConfig(
        "UserDefault",
        "h3",
        false,
    );
    userDefault.Extensions.progression.Locations["LOCATION_PARENT_MODLANDIA"] = {
        "Xp": 0,
        "Level": 0,
        "PreviouslySeenXp": 0
    }
```

Now it's time to add the Modtown mission:
```js
    controller.addMission([CONTENTS OF THE MISSION_MODTOWN.CONTRACT.JSON FILE]);
```
Replace `[CONTENTS OF THE MISSION_MODTOWN.CONTRACT.JSON FILE]` with the entire contents of the mission_modtown.contract.json file.

Let's also add the entrance for the Modtown mission:
```js
    controller.configManager.configs["Entrances"]["assembly:/_pro/scenes/missions/hitman_campaign_demo/mission_modtown/scene_modtown.entity"] = ["[UUID OF THE MODTOWN ENTRANCE REPOSITORY ENTRY]"]
```
Replace `[UUID OF THE MODTOWN ENTRANCE REPOSITORY ENTRY]` with the repository entry uuid for the Modtown mission's entrance.

Next we need to set up our actual Campaign:
```js
    controller.hooks.contributeCampaigns.tap(
        "HitmanCampaignDemoPlugin",
        (
            campaigns,
            genSingleMissionFunc,
            genSingleVideoFunc,
            gameVersion,
        ) => {
            const storyData = [
                genSingleMissionFunc(
                    "[BANK MISSION UUID]",
                    gameVersion,
                ),
                genSingleMissionFunc(
                    "[MODTOWN MISSION UUID]",
                    gameVersion,
                ),
            ]

            const campaignTemplate = {
                Type: "",
                BackgroundImage: "images/campaign_demo/campaign_demo_tile.jpg",
                Image: "",
                Name: "UI_HITMAN_CAMPAIGN_DEMO",
                Properties: {
                    BackgroundImage: "images/campaign_demo/campaign_demo_tile.jpg",
                },
                StoryData: storyData,
            }

            campaigns.push(campaignTemplate)
        },
    )
```
Replace `[BANK MISSION UUID]` with the UUID for the Bank mission from the `mission_bank.contract.json` file.

Replace `[MODTOWN MISSION UUID]` with the UUID for the Modtown mission from the `mission_modtown.contract.json` file.

Finally, let's set up the `Next mission` link from the end of the Bank mission to the Modtown mission:
```js

    controller.hooks.getNextCampaignMission.tap(
        "HitmanCampaignDemoPlayNextAdditions",
        (
            contractId,
            gameVersion,
        ) => {
            if (contractId !== "[BANK MISSION UUID]") {
                return
            }

            return {
                nextContractId: "[MODTOWN MISSION UUID]",
                campaignDetails: {
                    CampaignName: "UI_HITMAN_CAMPAIGN_DEMO",
                    ParentCampaignName: null,
                },
            }
        })
```
Replace `[BANK MISSION UUID]` with the UUID for the Bank mission from the `mission_bank.contract.json` file.

Replace `[MODTOWN MISSION UUID]` with the UUID for the Modtown mission from the `mission_modtown.contract.json` file.

And that's all there is to it! Redeploy the mod in SMF and the next time you restart the Peacock server, it will run your plugin.

## Wrapping up

That's it for this guide! After following this guide, you should now be able to:
1. Create a custom campaign
2. Modify and existing mission
3. Create a new mission from scratch
4. Create new NPCs
5. Use NavKit

Good luck and have fun creating custom campaigns!