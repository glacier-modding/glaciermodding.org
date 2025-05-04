---
sidebar_position: 3
description:  Menu Map Setup and Main Menu Files
---

# Menu Map Setup and Main Menu Files

For this tutorial, we will go over patching the MenuMapSetup files. MenuMapSetup files define the planning contracts for the scenes.

## Creating the MenuMapSetup file

In GlacierKit, on the `Files` tab, right-click on the `content/chunk0` folder and click `New File`. Name it `menumapsetup_hitman_campaign_demo.entity.json` or something similar.

Click on this new file. Let's give this file a Factory and Blueprint hash. For the Factory hash, let's use:  
`[assembly:/_pro/scenes/bricks/menumapsetup_hitman_campaign_demo.brick].pc_entitytype`
And for the Blueprint hash, let's use:
`[assembly:/_pro/scenes/bricks/menumapsetup_hitman_campaign_demo.brick].pc_entityblueprint`

Let's also make sure the `Entity Type` dropdown is set to `Brick`. 

Switch to the Tree tab. Right-click on the root `Scene` node, and click `Create entity` and give the new entity the name `MenuMapSetup_HitmanCampaignDemo`. Then right-click on that node and click `Create entity` and give that new entity the name `Scene_Bank`.

Copy this json snippet:
```json
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
```
Delete the `factory` and `blueprint` lines and paste this in under the name line.

The whole entity json should now look something like this:
```json
{
	"parent": "[SOME ENTITY ID]",
	"name": "Scene_Bank",
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
Now that we have a menumap entity, we need to set the `resource` field of the `m_pMetaDataResource` property. This value is a hexadecimal representation of the hashed value of an IOI string for a planning contract. We will need to set this to the hashed value of our new planning contract.

Let's use the IOI string `(planning_contract) greedy bank`. So we don't forget this IOI string, let's add it to the custom hashes list for our project.

In GlacierKit, click on the `Settings` button on the left sidebar. Scroll to the bottom of the `Custom paths` section and click the `Add an entry` button. Enter `(planning_contract) greedy bank` and press the `Continue` button.

## Getting the hash for an IOI string
GlacierKit has a handy tool to get the hashed value of an IOI string, in hexadecimal (Hex) and decimal format. Switch to the `Text tools` tab on the left sidebar.

In the `Hash calculator` text field enter `(planning_contract) greedy bank`.

In the `Hex` field it will now have your hashed IOI string in hexadecimal format: `0027913897DEC7E8`. Click the copy icon next to it.

## Using the hashed value
Going back to the `menumapsetup_hitman_demo_campaign.brick` file, in the `resource` field, paste in your hashed value.

The `Scene_Bank` node should now look like this:
```json
{
	"parent": "[SOME ENTITY VALUE]",
	"name": "Scene_Bank",
	"factory": "[assembly:/templates/ui/mapexportentities.template?/menumap.entitytemplate].pc_entitytype",
	"blueprint": "[assembly:/templates/ui/mapexportentities.template?/menumap.entitytemplate].pc_entityblueprint",
	"properties": {
		"m_pMetaDataResource": {
			"type": "ZRuntimeResourceID",
			"value": {
				"resource": "0027913897DEC7E8",
				"flag": "5F"
			}
		}
	}
}
```

Click the save icon on the `menumapsetup_hitman_demo_campaign.brick` file.

## Patching the `mainmenu` entity

Now we have a menumapsetup brick, but the game is never told to use it yet. To get the game to use it, we can patch the `mainmenu` entity.

In GlacierKit, on the `Game content` tab, search for `mainmenu`, and click on the `mainmenu.entity.entitytemplate` file.

On the right panel, click the `Open in editor` button.

On the `Metadata` tab, click the `Add an entry` button. Enter:
`[assembly:/_pro/scenes/bricks/menumapsetup_hitman_campaign_demo.brick].pc_entitytype`  
and press the `Continue` button.

Click the save button. Navigate to the `content/chunk0` folder and enter the name `mainmenu`.

Click the `Save` button.

## Next Steps
Now that the Menu Map Setup file has been created and the main menu is using it, let's create a repository entry for it. 