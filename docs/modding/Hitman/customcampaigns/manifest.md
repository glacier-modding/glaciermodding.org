---
sidebar_position: 1
description: Manifest File
---

# Manifest File

For this tutorial, we will go over what to put in the Simple Mod Framework manifest file for the `Hitman Campaign Demo` mod.

The `manifest.json` is what Simple Mod Framework uses to know how to display and deploy your mod. The [Simple Mod Framework Documentation](https://github.com/atampy25/simple-mod-framework/blob/main/docs/Index.md) explains more about the `manifest.json` file and how to customize it in detail, but for this tutorial, let's go over a few parts that are especially relevant at the moment.

## Editing the `manifest.json` file
Using either GlacierKit or a text editor or an IDE like WebStorm, Edit the `manifest.json` file and replace the contents with this:
```json
{
  "$schema": "https://raw.githubusercontent.com/atampy25/simple-mod-framework/main/Mod%20Manager/src/lib/manifest-schema.json",
  "id": "HitmanModder.HitmanCampaignDemo",
  "name": "Hitman Campaign Demo",
  "description": "This mod is a Hitman Campaign Demo mod.",
  "authors": ["Hitman Modder"],
  "frameworkVersion": "2.33.8",
  "version": "0.1.0",
  "blobsFolders": ["blobs"],
  "contentFolders": ["content"],
  "dependencies": [
  ],
  "packagedefinition": [
    {
      "type": "entity",
      "partition": "greedy",
      "path": "[assembly:/_pro/scenes/missions/hitman_campaign_demo/mission_bank/scene_bank.entity].entitytemplate"
    }
  ],
  "localisation": {
    "english": {
      "UI_HITMAN_CAMPAIGN_DEMO": "Hitman Campaign Demo",
      "UI_STORY": "Story",
      "UI_BANK_DESC": "I need to take out Target McTargetface.",
      "UI_BANK_TITLE": "Bank mission",
      "UI_STARTING_LOCATION_BANK_CEO_OFFICE_DEFAULT_NAME": "CEO's Office",
      "UI_STARTING_LOCATION_BANK_CEO_OFFICE_DESC": "47 has made his way to the CEO's office."
    }
  },
  "updateCheck": "https://github.com/HitmanModder/HitmanCampaignDemo/releases/latest/download/updates.json"
}
```
Change `HitmanModder` in the `id` and `Hitman Modder` in the `authors` field to the name you'd like to use.

Change `https://github.com/HitmanModder/HitmanCampaignDemo` in the `updateCheck` field to your repository's URL

Change `HitmanCampaignDemo` in the `name` field to your campaign's name if you wish to use a different name for your mod.

## Explanation
* We set the mod's name and other descriptive parts at the top of the file, as well as the `updateCheck` field.
* Next is the `blobsFolders`, which is a list containing the folder that we will use to store and reference binary files like images. You can also add sounds and videos here as well, but we will just be focusing on images for now.
* The value of the `contentFolders` field is the folder that we will store most of our modded files in, for instance scene entity json files.
* For this mod, we will not be adding any options, but if you wanted to add those, you could add an `options` field with a list of options, and each can have its own content folders.
* The value of the `dependencies` field is a list of files that SMF needs to move to the correct chunk. For more information about chunks, see the [Chunk Data](/docs/modding/Hitman/guides/locating_locations.md) page.
* The value of the `packagedefinition` field is a list of custom scenes that will be used by your mod.
  * In this example we have created a new package definition for our first scene, which will be a modified version of the Milton-Fitzpatrick bank.
  * The `type` field will be `entity`.
  * The `partition` field for each scene depends on which chunk that scene will be in. This is the name of the partition that corresponds to the specific chunk that scene's chunk.
  * The `path` field will be the custom IOI string for the scene. You can name this anything you'd like as it starts with `[` and ends with `.entity].pc_entitytype`.  
* The value of the `localisation` field is an object that defines a map from languages to a map from keys to text for each language.

## Next Steps
Next, lets update the `storyconfig.json` file to add our mod's campaign to the Campaign Menu.