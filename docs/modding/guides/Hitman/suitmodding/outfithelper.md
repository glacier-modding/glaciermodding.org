---
sidebar_position: 6
description: Using Outfit Helper to change material values in-engine
---

# SDK Outfit Helper

**Outfit Helper** is a helper mod developed to be used in tandem with the [ZHMModSDK](https://github.com/OrfeasZ/ZHMModSDK)'s Editor. It will primarily help you tweak material entity values in-engine, but can also be used to position, rotate and scale models that use attachers. Make sure the SDK is installed into your game first.

[Download Outfit Helper](https://github.com/JojjeE/outfithelper/releases/latest/download/mod.framework.zip) here and install it like any other SMF mod.

## Preparing Outfit Helper

Go into the **Mods** folder in your **Simple Mod Framework** installation. Enter **Jojje.OutfitHelper** and find the **editme** folder. Enter the **chunk0** folder inside and edit the `scenario_gecko.entity.patch.json` file.

Focus on these two lines:

```json
"factory": "[assembly:/_pro/characters/templates/hero/agent47/agent47_outfits.template?/outfit_agent47_signaturesuit_gloves_heroa_v0.entitytemplate].pc_entitytemplate",
"blueprint": "[assembly:/_pro/characters/templates/hero/agent47/agent47_outfits.template?/outfit_agent47_signaturesuit_gloves_heroa_v0.entitytemplate].pc_entityblueprint",
```

This points to an outfit entity. Simply change the factory and blueprint to *your custom outfit's* factory and blueprint, save the file, and deploy the Outfit Helper along with your mod.

## Usage

With your mod and the Outfit Helper both deployed, start the game. Make sure that the Editor is active in the ZHMModSDK. Go into the Dubai level and go into the shortcut staircase right next to the start of the mission. You will find the outfit there.

In the Editor, click **Rebuild entity tree**. Now click the floor of the room you are in, and close the open **Geometry** folder in the list. You will find **Outfit Helper** in the list now. Expand it and you can see the parts that your outfit is made of. If you click a body part template or a material entity, you can freely adjust the material values on the right of the screen.

![Changing material values in-engine using the ZHMModSDK editor](/img/suitmodding/outfithelper/outfithelper.jpg)

As mentioned you can also move, rotate and scale anything that uses an *Attacher*. Press TAB to change gizmo from position, to rotation, to scale.

Tweak these values to your hearts content and make note of them to change later in your outfit. Alternatively, if you have GlacierKit open and the editor connection enabled, GlacierKit will live update the values as you change them. This can be precarious and prone to crashing if you are tweaking the position/rotation/scale of attached meshes, however.

Outfit Helper can be very useful to help you determine good values for your wet logic lerps!