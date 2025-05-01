---
sidebar_position: 1
description: Manifest File
---

# Manifest

For this tutorial, we will go over what to put in the Simple Mod Framework manifest file for the `Hitman Campaign Demo` mod.

Edit the `manifest.json` file and add this, changing `HitmanModder` in the `name` and `updateCheck` fields and `Hitman Modder`
in the `authors` field to your name, and the name to your campaign's name if you wish.  

This will create a new package definition for our first scene, which will be a modified version of the Milton-Fitzpatrick bank.

```json
{
  "$schema": "https://raw.githubusercontent.com/atampy25/simple-mod-framework/main/Mod%20Manager/src/lib/manifest-schema.json",
  "id": "HitmanModder.HitmanCampaignDemo",
  "name": "Hitman Campaign Demo",
  "description": "This mod is a Hitman Campaign Demo mod.",
  "blobsFolders": ["content/blobs"],
  "authors": ["Hitman Modder"],
  "frameworkVersion": "2.33.8",
  "version": "0.1.0",
  "contentFolders": ["content"],
  "dependencies": [
  ],
  "packagedefinition": [
    {
      "type": "entity",
      "partition": "greedy",
      "path": "[assembly:/_pro/scenes/missions/hitman_campaign_demo/mission_bank/scene_bank.entity].entitytemplate"
    },
    {
      "type": "entity",
      "partition": "greedy",
      "path": "[assembly:/_pro/scenes/missions/hitman_campaign_demo/mission_bank/outfits_bank.brick].pc_entitytype"
    }
  ],
  "localisation": {
    "english": {
      "UI_HITMAN_CAMPAIN_DEMO": "Hitman Campaign Demo",
      "UI_STORY": "Story",
      "UI_BANK_DESC": "I need to take out Target McTargetface.",
      "UI_BANK_TITLE": "Bank mission",
      "UI_STARTING_LOCATION_BANK_CEO_OFFICE_DEFAULT_NAME": "CEO's Office",
      "UI_STARTING_LOCATION_BANK_CEO_OFFICE_DESC": "47 has made his way to the CEO's office.",
      "NPC_TARGET_MCTARGETFACE_NAME": "Target McTargetface",
      "NPC_TARGET_MCTARGETFACE_DESC": "Target McTargetface is the new CEO of the Milton-Fitzpatrick Bank."
    }
  },
  "updateCheck": "https://github.com/HitmanModder/HitmanCampaignDemo/releases/latest/download/updates.json"
}
```