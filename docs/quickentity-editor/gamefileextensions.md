---
sidebar_position: 2
title: Game File Extensions
description: Make properties human readable and much more cool stuff.
---

If you're spending any length of time in QuickEntity Editor, whether it be designing outfits or editing levels, it's prudent to take the time to install the game file extensions. This will make your life considerably easier because it will allow QNE to:

- Add auto-complete for all properties (and their types and post-init) and pins of all entities
- Show a help menu that shows the default properties of an entity and its input and output pins
- Add automatic patch loading
- Display a graph view for pins
- Display previews for what entities are referenced in external entities
- Show the names of entities in the overrides view
- Add text next to a repository ID, showing you which repo item is being referenced
- Make obfuscated material properties human readable

As an example of the last point, here's how a material override entity might look:

```json
{
	"parent": "71625c2a5b536117",
	"name": "shoes_sneaker_high",
	"factory": "[assembly:/_pro/characters/assets/individuals/bulldog/privateinvestigator/materials/shoes_sneaker_high.mi].pc_entitytype",
	"blueprint": "[assembly:/_pro/characters/assets/individuals/bulldog/privateinvestigator/materials/shoes_sneaker_high.mi].pc_entityblueprint",
	"properties": {
		"Clients": {
			"type": "TArray<SEntityTemplateReference>",
			"value": [
				"edcfc381a1fcc7c6"
			]
		},
		"Texture2D_01_enab": {
			"type": "bool",
			"value": true
		},
		"Diffuse_Color_01_Value_op": {
			"type": "IRenderMaterialEntity.EModifierOperation",
			"value": "eLeave"
		},
		"Texture2D_01": {
			"type": "ZRuntimeResourceID",
			"value": {
				"resource": "[assembly:/_pro/characters/assets/individuals/bulldog/privateinvestigator/textures/shoes_sneaker_high.texture?/specular_a.tex](ascolormap).pc_tex",
				"flag": "5F"
			}
		},
		"ConstantVector1D_01_Value": {
			"type": "float32",
			"value": 5
		},
		"ConstantVector1D_01_Value_op": {
			"type": "IRenderMaterialEntity.EModifierOperation",
			"value": "eReplace"
		},
		"Diffuse_Color_01_Value": {
			"type": "SColorRGB",
			"value": "#ffffff"
		},
		"ConstantVector1D_05_Value": {
			"type": "float32",
			"value": 1
		},
		"ConstantVector1D_04_Value_op": {
			"type": "IRenderMaterialEntity.EModifierOperation",
			"value": "eReplace"
		},
		"ConstantVector1D_04_Value": {
			"type": "float32",
			"value": 0.2800000011920929
		},
		"ConstantVector1D_06_Value_op": {
			"type": "IRenderMaterialEntity.EModifierOperation",
			"value": "eReplace"
		},
		"ConstantVector1D_05_Value_op": {
			"type": "IRenderMaterialEntity.EModifierOperation",
			"value": "eReplace"
		},
		"m_eidParent": {
			"type": "SEntityTemplateReference",
			"value": "edcfc381a1fcc7c6"
		}
	}
}
```

Diffuse_Color_01 is simple enough but what the hell is a ConstantVector1D_01? You can certainly experiment through trial and error in figuring out what all of these values do by twiddling knobs. But it's extremely time consuming to alter a value, apply the mod, boot up the game and see what difference you can see with your eyes. To make matters worse, ConstantVectors mean different things depending on what `MATE` the material uses.

Game file extensions will show a friendly human-readable name next to the property, like so:

![showcasing human readable names of properties](/img/quickentity-editor/gamefileextensions/gfe.png)

All around, enabling GFE will give you a much better experience in QNE.

First, note that this does involve extracting a bunch of game files and this will take about **5 to 8 GB or more** of your disk space. The upside is this will be automated for you in a script.

### Install game-file extensions

- The script requires node.js so [download and install](https://nodejs.org/en) it.
- Download [the Game File Extensions script](https://github.com/atampy25/quickentity-editor-next/releases/latest/download/Game_File_Extensions_Scripts.zip), you can extract this archive to the QuickEntity Editor folder.
- Download [rpkg-cli](https://github.com/glacier-modding/RPKG-Tool/releases/latest) and extract it to the game-file-extensions folder.
- Download [ResourceTool](https://github.com/OrfeasZ/ZHMTools/releases/latest) and extract it to the game-file-extensions folder.
- In the game-file-extensions folder, rename the hash_list.txt file to hash_list2.txt.
- Open extractAllOfFiletypes.js in a text editor. On line 6 it declares a variable called `RUNTIME_PATH`, you will need to change it, to point to your Hitman 3 Runtime folder. You will need to use double backslashes. For example:

```javascript
const RUNTIME_PATH = "D:\\SteamLibrary\\steamapps\\common\\HITMAN 3\\Runtime\\"
```

- Now you can run **doTheThing.bat** and get a cup of coffee while it works, it's going to take a few minutes.

### Enable game-file extensions

With the script having run, it's time to enable the extensions. Start QuickEntity Editor and go into the settings. Check the **Enable game-file extensions** option, and fill in the path to the game-file-extensions folder in the field directly below.

Open any entity you like and continue working!