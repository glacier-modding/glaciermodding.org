---
sidebar_position: 2
description: Campaign Menu
---

# Campaign Menu

For this tutorial, we will go over creating a new campaign category for our example campaign.

## Creating the `CampaignMenu.JSON.patch.json` file
In the root folder for your mod, create a new folder named `content`. In that folder create another folder named `chunk0`. In the `chunk0` folder, create a file named `CampaignMenu.JSON.patch.json` and set the contents to this:

```json
{
	"file": "0093B70B9E704CE0",
	"type": "JSON",
	"patch": [
		{
			"op": "add",
			"path": "/0",
			"value": {
				"Name": "UI_HITMAN_CAMPAIGN_DEMO",
				"Image": "",
				"Type": "mission",
				"Properties": {
					"BackgroundImage": "images/campaign_demo/campaign_demo_tile.jpg"
				},
				"StoryData": [
					{
						"Type": "Mission",
						"Id": "[INSERT GENERATED UUID HERE]",
						"_comment": "The bank mission for the Hitman Campaign Demo"
					}
				]
			}
		}
	]
}
```

### Explanation:
* This is a patch file for `0093B70B9E704CE0`, which is the `[assembly:/_pro/online/default/cloudstorage/resources/storyconfig.json].pc_json` file, which is where the campaigns are defined.
* This adds a new campaign, with the `Name` being the value set in the `manifest.json` for `UI_HITMAN_CAMPAIGN_DEMO`.
* It sets the `BackgroundImage` for the campaign to be a custom image that will be displayed for the campaigns button on the menu.
* It also adds one mission to that campaign, with the `Id` for that mission being the `Id` defined in the metadata for the bank mission.
* Replace `[INSERT GENERATED UUID HERE]` with a new UUID. You can generate one using GlacierKit: ![resources/randomUuid.png](resources/randomUuid.png)

## Creating the Background Image for the custom campaign mod
* Create another folder in your content folder named `blobs`. In that folder, create another folder called `images`, and in that folder, another folder called `campaign_demo`. This structure will make it more organized for when you want to add more images later. 
* Create a background image and put it in your `blobs/images/campaign_demo` folder.


## Next Steps

Now that we have a campaign menu set up, we need to set up the Offline Dashboard. 