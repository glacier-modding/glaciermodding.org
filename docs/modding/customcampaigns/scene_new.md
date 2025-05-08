---
sidebar_position: 12
description: Creating a New Mission
---

# Creating a New Mission

For this tutorial, we will go over creating a new custom mission and location.  
The mission will take place in:
* The country of `Modlandia`
* The city of `Modtown`  

And the name of the mission will be `Modtown Throwdown`.

For this new mission let's make it relatively simple, just a grassy field with a few small buildings and a few NPCs. 

## Adding a new Location and Parent Location
Since we are making a new mission from scratch, not based on any existing mission, let's also make a new Location and Parent Location for it, so that it will show up in the Destinations tab. This mainly involves updating the manifest and unlockables, and adding some new images.

## Updating the Manifest
Let's open the `manifest.json` file and add a few new entries to the `localisation > english` object:
```json
      "UI_LOCATION_PARENT_MODLANDIA_COUNTRY": "Modlandia",
      "UI_LOCATION_MODTOWN_COUNTRY": "Modlandia",
      "UI_LOCATION_PARENT_MODLANDIA_CITY": "Modtown",
      "UI_LOCATION_MODTOWN_CITY": "Modtown",
      "UI_LOCATION_MODTOWN_TITLE": "Modtown Throwdown"
      "UI_MODTOWN_DESC": "I need to take out Super Targetman.",
      "UI_MODTOWN_TITLE": "Modtown Throwdown mission",
      "UI_STARTING_LOCATION_MODTOWN_OUTSIDE_DEFAULT_NAME": "Outside",
      "UI_STARTING_LOCATION_MODTOWN_OUTSIDE_DESC": "47 has made his way outside in Modtown.",
      "NPC_SUPER_TARGETMAN_NAME": "Super Targetman",
      "NPC_SUPER_TARGETMAN_DESC": "Super Targetman is the villian of Modlandia.",
```

Let's create two new packagedefinition entries:
```json
    {
      "type": "entity",
      "partition": "season3",
      "path": "[assembly:/_pro/scenes/missions/hitman_campaign_demo/mission_modtown/scene_modtown.entity].entitytemplate"
    },
    {
      "type": "entity",
      "partition": "season3",
      "path": "[assembly:/_pro/scenes/missions/hitman_campaign_demo/outfits_modtown.brick].pc_entitytype"
    }
```

Note that we set the partition to `season3`. This is because we won't need anything from any chunks other than `chunk0`, `chunk1`, and `chunk2`. For a refresher on chunks, see [Chunk Data](../../glacier2/chunkdata.md).

## Updating the repository file
In GlacierKit, open the `hitman_campaign_demo.repository.json` file and click on the `New item` button.

In the new item, replace the contents with:
```json
{
    "Image": "images/entrances/modtown/modtown_entrance_outside.jpg",
    "Name_LOC": "UI_STARTING_LOCATION_MODTOWN_OUTSIDE_DEFAULT_NAME",
    "Name": "Outside Starting Location",
    "Description": "UI_STARTING_LOCATION_MODTOWN_OUTSIDE_DESC"
}
```

Click on the `New item` button again. In the new item, replace the contents with:
```json
{
	"CommonName": "Outfit Super Targetman",
	"Description": "Outfit Super Targetman",
	"Name": "Outfit Super Targetman",
	"Category": "",
	"HeroDisguiseAvailable": false,
	"Image": "",
	"ImageTransparent": "",
	"IsHitmanSuit": false,
	"TokenID": ""
}
```
Copy the new outfit's repository entry UUID from under the `Editor` header text.

Click on the `New item` button again. In the new item, replace the contents with:
```json
{
	"CharacterSetIndex": 0.0,
	"Description": "Super Targetman",
	"Description_LOC": "actor_description",
	"Image": "images/campaign_demo/modtown/super_targetman.jpg",
	"Name": "Target Super Targetman",
	"Outfit": "[NEW OUTFIT REPOSITORY ENTRY UUID]",
	"OutfitVariationIndex": 0.0,
	"Tile": "images/campaign_demo/modtown/super_targetman.jpg"
}
```
Replace `[NEW OUTFIT REPOSITORY ENTRY UUID]` with the UUID you copied from the new outfit repository entry.

## Updating the Unlockables
In GlacierKit, open the `hitman_campaign_demo.unlockables.json` file and click the `New item` button. In the new Item, replace the contents with:
```json
{
	"Id": "LOCATION_PARENT_MODLANDIA",
	"Guid": "[NEW GENERATED UUID]",
	"Type": "location",
	"Subtype": "location",
	"ImageId": null,
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
			"[assembly:/_pro/scenes/missions/hitman_campaign_demo/mission_modtown/scene_modtown.entity].entitytemplate"
		],
		"Entitlements": [
			"H1_LEGACY_STANDARD"
		]
	},
	"Rarity": null
}
```
Replace `[NEW GENERATED UUID]` with a newly generated UUID using GlacierKit.

We will also need to add new two new images: `images/locations/LOCATION_MODLANDIA/tile.jpg`, which should have a resolution of 693 x 517, and `images/locations/LOCATION_MODLANDIA/background.jpg`, which should be big enough to fit fullscreen (something like 1920 x 1080).

Now that we have our new parent location, let's add the sublocation.

In GlacierKit, on the `hitman_campaign_demo.unlockables.json` file, click the `New item` button. In the new Item, replace the contents with:
```json
{
  "Id": "LOCATION_MODTOWN",
  "Guid": "[NEW GENERATED UUID]",
  "Type": "location",
  "Subtype": "sublocation",
  "ImageId": null,
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
    "CreateContractId": "[ANOTHER NEW GENERATED UUID]",
    "HideProgression": false,
    "RequiredResources": ["[assembly:/_pro/scenes/missions/hitman_campaign_demo/modtown/scene_modtown.entity].entitytemplate"],
    "Entitlements": ["H1_LEGACY_EXPANSION"]
  },
  "Rarity": null
}
```
Replace `[NEW GENERATED UUID]` with a newly generated UUID using GlacierKit.

Replace `[ANOTHER NEW GENERATED UUID]` with a different newly generated UUID using GlacierKit.

We will also need two more new images here: `images/locations/LOCATION_MODLANDIA/tile.jpg`, which should have a resolution of 693 x 517, and `images/locations/LOCATION_MODLANDIA/background.jpg`, which should be big enough to fit fullscreen (something like 1920 x 1080).

Let's also create a new unlockable for the starting location. Click the `New item`. On the new item, set the contents to:
```json
{
  "Id": "STARTING_LOCATION_OUTSIDE",
  "Type": "access",
  "Subtype": "startinglocation",
  "RMTPrice": -1,
  "GamePrice": -1,
  "IsPurchasable": false,
  "IsPublished": true,
  "IsDroppable": false,
  "Capabilities": [],
  "Qualities": {},
  "Properties": {
    "Location": "LOCATION_MODTOWN",
    "RepositoryId": "[NEW STARTING LOCATION REPOSITORY ENTRY UUID]",
    "Equip": [],
    "UnlockOrder": 3
  }
}
```

The next steps are similar to what we did for the bank mission, so let's just quickly go through them.

## Update the Story Config
Open the `storyconfig.JSON.patch.json` file. Add a new object in the `StoryData` array:
```json
{
    "Type": "Mission",
    "Id": "[NEW GENERATED UUID]",
    "_comment": "The Modtown Throwdown mission for the Hitman Campaign Demo"
}
```
Replace `[NEW GENERATED UUID]` with a new UUID generated with GlacierKit.

Click the save button.

## Update the Menu Map Setup file
In GlacierKit, open the `menumapsetup_hitman_campaign_demo.entity.json` file. On the `Tree` tab, expand the `Scene > MenuMapSetup_HitmanCampaignDemo` node. Right-click on the `MenuMapSetup_HitmanCampaignDemo` node and click `Create Entity`. Replace everything under the `parent` field with:
```json
	"name": "Scene_Modtown",
	"factory": "[assembly:/templates/ui/mapexportentities.template?/menumap.entitytemplate].pc_entitytype",
	"blueprint": "[assembly:/templates/ui/mapexportentities.template?/menumap.entitytemplate].pc_entityblueprint",
	"properties": {
		"m_pMetaDataResource": {
			"type": "ZRuntimeResourceID",
			"value": {
				"resource": "",
				"flag": "5F"
			}
		}
	}
}
```

The `m_pMetaDataResource > value > resource` field is where we will set the planning contract's IOI string for our new mission. Let's use `(planning contract) modlandia modtown`. Add this to the `Custom paths` in the GlacierKit Settings.   

In the `Text tools`, convert `(planning contract) modlandia modtown` to a Hex hash: `001421449C722898`, and enter that in the resource field of the `Scene_Modtown` entity.

Press the save button.

## Creating a new Planning Contract file
In the `content/chunk0/Planning Contracts` folder, create a new folder named `modtown`. Right-click on the new `modtown` folder and click `New file` and set the filename to our new planning contract's hex hash with `.JSON` at the end: `001421449C722898.JSON`.

Open that file and set the contents to:
```json
{
    "scene": "assembly:/_pro/scenes/missions/hitman_campaign_demo/mission_modtown/scene_modtown.entity",
    "actors": [],
    "entrances": [
        {
            "id": "[NEW STARTING LOCATION's REPOSITORY ENTRY'S UUID]",
            "isDefaultSpawn": true,
            "isPreferredSpawn": true,
            "WorldTransform": "0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0"
        }
	],
	"Exits": [
	],
	"AgencyPickups": [
	]
}
```
Replace `[NEW STARTING LOCATION's REPOSITORY ENTRY'S UUID]` with your new starting location's repository entry's UUID.

Press the save button.

## Creating a new Mission Contract file
Right-click on the `content/chunk0/Mission Contracts` folder, click `New file`, and set the filename to `mission_modtown.contract.json`. Open that file and set the contents to:
```json
{
    "Data": {
        "EnableSaving": true,
        "Objectives": [
            {
                "Id": "[NEW GENERATED UUID]",
                "Category": "primary",
                "ObjectiveType": "setpiece",
                "DisplayAsKillObjective": true,
                "ForceShowOnLoadingScreen": true,
                "IsHidden": false,
                "BriefingName": "$($repository [TARGET'S UUID]).Name",
                "Image": "images/campaign_demo/modtown/super_targetman.jpg",
                "HUDTemplate": {
                    "display": "Eliminate Super Targetman"
                },
                "BriefingText": "Eliminate Super Targetman",
                "SuccessEvent": {
                    "EventName": "Kill",
                    "EventValues": {
                        "RepositoryId": "[TARGET'S UUID]"
                    }
                }
            }
        ],
        "GameDifficulties": [
            {
                "Difficulty": "easy",
                "Bricks": []
            },
            {
                "Difficulty": "normal",
                "Bricks": []
            },
            {
                "Difficulty": "hard",
                "Bricks": []
            }
        ],
        "Bricks": [],
        "DevOnlyBricks": [],
        "Entrances": [
            "[ENTRANCE UUID]"
        ],
        "GameChangers": [],
        "GameChangerReferences": []
    },
    "Metadata": {
        "Id": "[ANOTHER NEW GENERATED UUID]",
        "IsPublished": true,
        "Title": "UI_MODTOWN_TITLE",
        "Description": "UI_MODTOWN_DESC",
        "CodeName_Hint": "Modtown",
        "ScenePath": "assembly:/_pro/scenes/missions/hitman_campaign_demo/mission_modtown/scene_modtown.entity",
        "TileImage": "images/campaign_demo/modtown/tile.jpg",
        "Location": "LOCATION_MODTOWN",
        "LastUpdate": "2025-05-02T19:44:00.000Z",
        "CreationTimestamp": "2025-05-02T19:44:00.000Z",
        "CreatorUserId": "a38f1dce-a7af-4a3c-a47a-5a94db8c0ed9",
        "Type": "mission",
        "Release": "3.0.0",
        "Entitlements": [
            "H2_LEGACY_EXPANSION"
        ]
    },
    "UserData": {},
    "SMF": {
        "destinations": {
            "addToDestinations": true,
            "peacockIntegration": true,
            "narrativeContext": "Mission"
        }
    }
}
```
Replace `[NEW GENERATED UUID]` and `[ANOTHER NEW GENERATED UUID]` with newly generated UUIDs using GlacierKit.

Replace `[TARGET'S UUID]` with the new target's repository entry UUID.  

Replace `[ENTRANCE UUID]` with the new starting location's repository entry UUID.  

Click the save button.

## Creating a scene and scenario
In the `content` folder, create a new folder named `modtown`. In that folder create a new folder named `chunk2`.

In GlacierKit, right-click on the new `chunk2` folder, and click `Create file` and name it `scene_modtown.entity.json`.