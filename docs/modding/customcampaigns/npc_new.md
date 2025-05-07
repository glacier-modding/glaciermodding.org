---
sidebar_position: 11
description: Creating a new NPC
---

# Creating a new NPC
For this tutorial, we will go over how to create a new NPC that will be used as a target.

Building off our Bank mission, let's make a new target named `Target McTargetface`. First we'll need to update the `manifest.json` file to add some localisation strings.

## Updating the Manifest file 
Our new NPC needs to have a name and description added to the manifest file so that the menus will be able to display them.

Open up the `manifest.json` file and add the following lines under the `localisation > english` section:
```json
    "NPC_TARGET_MCTARGETFACE_NAME": "Target McTargetface",
    "NPC_TARGET_MCTARGETFACE_DESC": "Target McTargetface is the new CEO of the Milton-Fitzpatrick Bank."
```
In full, it should now look like this:
```json
  "localisation": {
    "english": {
      "UI_HITMAN_CAMPAIGN_DEMO": "Hitman Campaign Demo",
      "UI_STORY": "Story",
      "UI_BANK_DESC": "I need to take out Target McTargetface.",
      "UI_BANK_TITLE": "Bank mission",
      "UI_STARTING_LOCATION_BANK_CEO_OFFICE_DEFAULT_NAME": "CEO's Office",
      "UI_STARTING_LOCATION_BANK_CEO_OFFICE_DESC": "47 has made his way to the CEO's office.",
      "NPC_TARGET_MCTARGETFACE_NAME": "Target McTargetface",
      "NPC_TARGET_MCTARGETFACE_DESC": "Target McTargetface is the new CEO of the Milton-Fitzpatrick Bank."
  },
```
Press the save button.

## Adding a Repository entry for the NPC
In GlacierKit, open the `HitmanCampaignDemo.repository.json` file.

Click the `New item` button and set the `Editor` text to be:
```json
{
	"CharacterSetIndex": 0.0,
	"Description": "Target McTargetface",
	"Description_LOC": "actor_description",
	"Image": "images/campaign_demo/target_mc_targetface.jpg",
	"Name": "Target McTargetface",
	"Outfit": "[NEW TARGET'S OUTFIT UUID]",
	"OutfitVariationIndex": 0.0,
	"Tile": "images/campaign_demo/target_mc_targetface.jpg"
}
```

We can see that we will need a new image file. Let's create a new file in our `images/campaign_demo` folder named `target_mc_targetface.jpg` and make it an appropriate picture for the target.

We can also see that the new NPC will need a new UUID for its outfit. Let's use GlacierKit to generate this.

Go to the `Text tools` section and click the copy button next to the `Random UUID` text field, and paste it into the `Outfit` field.

We will also need this repository entry's id, so select the UUID under the `Editor` header text and copy it.

Click the save button.

## Updating the Mission contract
Open the `content/chunk0/Mission Contracts/mission_bank.contract.json` file. Under the `Objectives` array, add the following object:
```json
{
    "Id": "[NEW GENERATED UUID]",
    "Category": "primary",
    "ObjectiveType": "setpiece",
    "DisplayAsKillObjective": true,
    "ForceShowOnLoadingScreen": true,
    "IsHidden": false,
    "BriefingName": "$($repository [NEW NPC'S UUID]).Name",
    "Image": "images/campaign_demo/target_mc_targetface.jpg",
    "HUDTemplate": { "display": "Eliminate Target McTargetface" },
    "BriefingText": "Eliminate Target McTargetface",
    "SuccessEvent": {
        "EventName": "Kill",
        "EventValues": { "RepositoryId": "[NEW NPC'S UUID]" }
    }
}
```
Replace the `[NEW GENERATED UUID]` value with your copied UUID from the repository entry.

Let's also generate a new UUID for the new mission contract objective using GlacierKit. Go to the `Text tools` section and click the copy button next to the `Random UUID` text field, and paste it into the `Id` field.

Click the save button.

Our new NPC will need a new outfit, and we will need to make a new outfits brick for our NPC's outfit.

## Adding a new Outfit
In GlacierKit, right-click our `content/chunk12` folder and click `New folder` and name it `Outfits`.

Right-click that new `Outfits` folder and click `New File` and name it `outfit_target_mctargetface_v0.entity.json`. Click on that new file.

Switch to the `Metadata` tab and change the `Entity type` dropdown to `Template`.
Let's set the `Factory hash` to:
`[assembly:/_pro/characters/templates/hitman_campaign_demo/outfit_target_mctargetface_actor_v0.entitytemplate].pc_entitytemplate`
and set the `Factory blueprint` to:
`[assembly:/_pro/characters/templates/hitman_campaign_demo/outfit_target_mctargetface_actor_v0.entitytemplate].pc_entityblueprint`

Switch to the `Tree` view.

Let's copy an outfit from the New York outfits and modify it. For this example, we'll use the Fabian NPC outfit.

Go to the `Game content` tab and search for `outfit_` and check the `Separete tree by partition` checkbox. Scroll down to the `greedy > assembly > _pro > characters > tempaltes > raccoon > char_raccoon_unique.template?` folder and expand it. Click on the `outfit_raccoon_unique_headofsecurity_m_actor_v0.entitytemplate` node and click the `Open in editor` button. Switch to the `Tree` view.

Right-click on the `OUTFIT_Raccoon_Unique_HeadOfSecurity_M_Actor_v0` node and click `Clipboard > Copy`.

Switch back to the `outfit_target_mctargetface_v0.entity.json` file. Right-click on the `Scene` and click `Clipboard > Paste`.

Now it is a child node of the `Scene` node, but we actually want it at the root. Drag the `OUTFIT_Raccoon_Unique_Lieutenant_M_Actor_v0` node to the root of the tree. It will now be on the same level as the `Scene` node.

We also need to set this node to be the root entity. Copy the entity id from under the `Editor` panel header text.

Switch to the `Metadata` tab. Replace the value into the `Root entity` text field with the id you copied.

Switch back to the `Tree` tab and delete the `Scene` node.

Expand the `OUTFIT_Raccoon_Unique_Lieutenant_M_Actor_v0` node. Right-click the `Beard_Goatee` node and click `Delete.

Click on the `OUTFIT_Raccoon_Unique_Lieutenant_M_Actor_v0` node and change the name field to `OUTFIT_TargetMcTargetface_Actor_v0`.

Click the save button.

We now have a custom outfit for our new NPC. It looks like Fabio, but he doesn't have a goatee. We can modify the outfit more later but for now this will do.

Let's create a Character set for this outfit.

## Adding a Character set

## Adding a new Outfits brick
Right-click that new `Outfits` folder and click `New File` and name it `outfits_bank.entity.json`. Click on that new file.

Switch to the `Metadata` tab and change the Entity type from `Scene` to `Brick`.

Let's set the `Factory hash` to:  
`[assembly:/_pro/scenes/missions/hitman_campaign_demo/outfits_bank.brick].pc_entitytype`
and set the `Factory blueprint` to:
`[assembly:/_pro/scenes/missions/hitman_campaign_demo/outfits_bank.brick].pc_entitytype`

Switch to the `Tree` tab.

Right-click on the `Scene` node and click `Create Entity` and name it `Target McTargetface`. Set the contents to:
```json
{
  "parent": "fabb05641839cf9d",
  "name": "Target McTargetface",
  "factory": "[modules:/zglobaloutfitkit.class].pc_entitytype",
  "blueprint": "[modules:/zglobaloutfitkit.class].pc_entityblueprint",
  "properties": {
    "m_sId": {
      "type": "ZGuid",
      "value": "[TARGET OUTFIT UUID]"
    },
    "m_pParentOutfit": {
      "type": "SEntityTemplateReference",
      "value": {
        "ref": "6736fcbbd3e73209",
        "externalScene": "[assembly:/_pro/scenes/bricks/globaldata.brick].pc_entitytype"
      }
    },
    "m_eActorCCClass": {
      "type": "EActorCCPreset",
      "value": "ACCP_CivilianeMale"
    },
    "m_eActorType": {
      "type": "EActorType",
      "value": "eAT_Civilian"
    },
    "m_sCommonName": {
      "type": "ZString",
      "value": "Target McTargetface"
    },
    "m_sTitle": {
      "type": "ZString",
      "value": "Target McTargetface"
    },
    "m_DamageMultipliers": {
      "type": "SBodyPartDamageMultipliers",
      "value": {
        "m_fHeadDamageMultiplier": 3.0,
        "m_fFaceDamageMultiplier": 3.0,
        "m_fArmDamageMultiplier": 1.0,
        "m_fLArmDamageScalar": 0.0,
        "m_fRArmDamageScalar": 0.0,
        "m_fHandDamageMultiplier": 0.5,
        "m_fLHandDamageScalar": 0.0,
        "m_fRHandDamageScalar": 0.0,
        "m_fLegDamageMultiplier": 0.6000000238418579,
        "m_fLLegDamageScalar": 0.0,
        "m_fRLegDamageScalar": 0.0,
        "m_fTorsoDamageMultiplier": 1.0,
        "m_bApplyLeftRightScalars": false
      }
    },
    "m_rDescriptionTextResource": {
      "type": "ZRuntimeResourceID",
      "value": {
        "resource": "[assembly:/localization/hitman6/conversations/ui/pro/online/repository/outfits_npcs_raccoon.sweetmenutext?/outfits_raccoon_target_lieutenant_m_description_33caaba6-7e28-4e9c-ad35-8e1d9a3f58f0.sweetline].pc_sweetline",
        "flag": "5F"
      }
    },
    "m_rNameTextResource": {
      "type": "ZRuntimeResourceID",
      "value": {
        "resource": "[assembly:/localization/hitman6/conversations/ui/pro/online/repository/outfits_npcs_raccoon.sweetmenutext?/outfits_raccoon_target_lieutenant_m_name_33caaba6-7e28-4e9c-ad35-8e1d9a3f58f0.sweetline].pc_sweetline",
        "flag": "5F"
      }
    },
    "m_eSoundFootwearType": {
      "type": "EHM5SoundFootwearType",
      "value": "EFWT_LEATHER"
    },
    "m_rDefaultVoiceVariations": {
      "type": "TArray<EActorVoiceVariation>",
      "value": [
        "eAVV_CIVMALE07"
      ]
    },
    "m_aCharSets": {
      "type": "TArray<SEntityTemplateReference>",
      "value": [
      ],
      "postInit": true
    }
  }
}
```

Replace `[TARGET NPC'S UUID]` with your new target's UUID.

Right-click the `Target McTargetface` node in the `Tree` view and click `Create Entity` and name it `CHARSET_TargetMcTargetface`.

Click the save button.