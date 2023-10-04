---
sidebar_position: 1
description: Basic Retexture
---

# Basic Retexture

For this tutorial, we will go over a basic texture override for a suit. In broad steps, this is what we will do:

-   Extract the texture we're looking for with RPKG Tool
-   Convert the texture to a workable .tga with TonyTools
-   Make our changes to the texture
-   Come up with a new hash for our texture (so we don't overwrite stock assets; that's bad practice!)
-   Open the suit's outfit entity with QuickEntity Editor and override the suit's stock texture with our custom texture
-   Package it all up in an SMF mod

Before continuing, please make sure you have all the tools required from the [previous step](.)!

Hitman uses a physically based rendering pipeline, and the models use 3 textures: a **diffuse map**, a **specular map** and a **normal map**.

The diffuse map can basically be said to be the base color of the model. The specular map is how it reflects light, and the normal map is, in essence, how shadows fall on the model. Normal maps are used to fake detail on low-polygon models in video games. In this example, we will be changing the **diffuse map**.

# Extract Texture

Begin by opening RPKG Tool and importing your `Runtime` folder. You do this by clicking **Import** -> **Import RPKGs Folder**, and there navigate to your Hitman: World of Assassination install directory and find the `Runtime` folder. Give it a second for the RPKGs to load, and you will now be in the resource view and should see the list of opened file archives.

Now we need to find the suit that we're looking for. Please refer to [HMBM47's outfit spreadsheet](https://docs.google.com/spreadsheets/d/e/2PACX-1vRDiyiqdRebu0Olvvkr20CDhh6ANxu7FOQZ_O-1YHFN9e6kh0WmpbwDYbfgzevSvc3fO4_4Exu1fmQH/pubhtml#) and you may want to bookmark it in your browser if you plan to spend any length of time modding suits.

Click the tab **chunk0 47 Base Suits** in the spreadsheet and find the **Casual Suit with Gloves** toward the top of the spreadsheet. This is the suit we will be working on for the purposes of this tutorial. More specifically, find its template hash, - `TEMP` -, which the spreadsheet tells us is `00B2741A27743D8D`.

:::caution Actor and HeroA

Looking at the spreadsheet, you will find two versions of the suit: one marked in blue called Actor and one marked in red called HeroA. You will always want to edit the HeroA version; this is the suit you actually wear for gameplay. The Actor version is used for cutscenes and things of that nature.

:::

In RPKG Tool, click **Search** and paste the `TEMP` hash into the **Search string** box. Wait for a moment, and the tool will search the archives. Expand the last patch of chunk0 in the results, and you will find the `TEMP` file. Click it.

The `Details` screen on the right side will show information about the file you've selected. Under `Depends on 60 other hash files/resources:`, you will find everything the template file makes use of, including the texture we're looking for.

:::info Assembly Paths

What you are seeing is a list of obfuscated hashes and their decoded **assembly paths**—basically, where they are in IOI's internal filing system. Not all hashes have been decoded to assembly paths, so you'll sometimes just see a hash and a filetype. So you have no way of knowing what the file is until you search for it and examine it yourself.

:::

The file we are looking for **does** have a decoded path, so we can find it simply by reading the list. The file in question is `00E99B14303AC484.TEXT 5F [assembly:/_pro/characters/assets/hero/agent47/textures/male_reg_agent47_bangkok_shirt.texture?/diffuse_a.tex](ascolormap).pc_tex`, and this is the diffuse texture we want. Copy the hash and search for it, just like you searched for the `TEMP` file.

Find `00E99B14303AC484.TEXT` in the search results, right-click it, and choose **EXTRACT 00E99B14303AC484.TEXT**. Place it somewhere that's easy to get to. RPKG tool will also export a meta file along with it; you can delete that later as we won't need it.

We're not completely done yet; look in the `Details` screen, specifically what the `TEXT` depends on.

```
Depends on 1 other hash files/resources:
  - 0091D8EF5EAF2E40.TEXD 9F [assembly:/_pro/characters/assets/hero/agent47/textures/male_reg_agent47_bangkok_shirt.texture?/diffuse_a.tex](ascolormap).pc_mipblock1
```

We will also need to export this `TEXD` file. Glacier 2's textures always come in pairs: the `TEXT` contains the full-sized texture and the `TEXD` contains the [mipmaps](https://en.wikipedia.org/wiki/Mipmap). Extract this TEXD right next to its TEXT in the folder.

# Convert the Texture to .tga

For this step we will be using `HMTextureTools.exe` from TonyTools to convert our `TEXT` and `TEXD` to a format we can actually work with: TARGA.

HMTextureTools is a **command-line interface program**, meaning it does **not have a user interface** and simply running the .exe will do nothing. You will need to open the Command Prompt in the TonyTools folder or create a `.BAT` file in the TonyTools folder. This is an example of the command you should run:

```batch
HMTextureTools.exe convert H3 "c:\path\to\00E99B14303AC484.TEXT" --texd "c:\path\to\0091D8EF5EAF2E40.TEXD" "c:\path\to\00E99B14303AC484~0091D8EF5EAF2E40.texture.tga"
```

Here, we specify to HMTextureTools that we are **converting** a Hitman 3 asset. We specify first the path to the .TEXT file (of course, you should change the paths to where the file is on your system!) Second, we flag that we also have a TEXD and give the path to that file. And finally, we specify the output, which is a TGA file.

You will notice that we name the TGA file according to this format: `TEXT hash`~`TEXD hash`.texture.tga

This is by design; Simple Mod Framework has the capability to convert the .tga **back** to a `TEXT` and `TEXD`, using the information in the filename, which includes the .texture.tga ending. This saves us the trouble of having to do that ourselves as mod creators.

HMTextureTools will also produce a .tonymeta file. Rename the extension to .meta and we will be ready to move on.

# Edit the .tga

Open the .tga in your favorite image editing program and get creative. Save it when you're done.

# Make up New Hashes

Now we have the suit's diffuse texture and we've made our changes to it. Is it time to bring it back into the game? Not quite; simply **replacing** stock assets is a dirty way of doing things, and the consequences of doing so can be difficult to anticipate. If it happens that another item in the game uses the texture, things can look really crazy in ways that you didn't intend. The correct procedure is to introduce it to the game as a new texture and edit the outfit to use our new texture.

So we need to figure out a new `TEXT` hash and a new `TEXD` hash. RPKG Tool has something that will help us do that, so open RPKG Tool, click `Utilities`, and choose `Hash Calculator`.

Anything you enter in the left field will be hashed, and the output will be shown in the right field, line by line. Now consider the `TEXT` and `TEXD` we've extracted. Their assembly paths are, respectively:

- \[assembly:/_pro/characters/assets/hero/agent47/textures/male_reg_agent47_bangkok_shirt.texture?/diffuse_a.tex](ascolormap).pc_tex
- \[assembly:/_pro/characters/assets/hero/agent47/textures/male_reg_agent47_bangkok_shirt.texture?/diffuse_a.tex](ascolormap).pc_mipblock1

We can use these assembly paths to come up with some of our own. You don't *have* to; you can type anything into the left field to make a hash, anything at all, but why deviate from the norm that IOI has set up? So let's tweak these paths to make our own assembly paths. Here's an example:

- \[assembly:/_pro/characters/assets/hero/agent47/textures/my_cool_and_awesome_shirt.texture?/diffuse_a.tex](ascolormap).pc_tex
- \[assembly:/_pro/characters/assets/hero/agent47/textures/my_cool_and_awesome_shirt.texture?/diffuse_a.tex](ascolormap).pc_mipblock1

Let's put these two lines into the hash calculator, and it will give us `001F1D36FD5588E7` and `00366C40059C0978`, respectively. With this, let's rename our .texture.tga and .meta files to `001F1D36FD5588E7~00366C40059C0978.texture.tga` and `001F1D36FD5588E7~00366C40059C0978.texture.tga.meta`.

This means that Simple Mod Framework, when applying the mod, will use this information to convert our .tga to a `TEXT` with the hash `001F1D36FD5588E7` and a `TEXD` with the hash `00366C40059C0978`. Great!

# Patch the Texture Change in the Outfit

Now that we have an entirely new texture, it's time to use it. Open QuickEntity Editor.

:::caution QuickEntity Editor

If this is your first time starting QuickEntity Editor, don't forget to set the paths to your Hitman Retail and Runtime folders in the settings.

:::

Starting in the **Tree View**, click **Load** and choose **Load entity from game**. Remember the hash for the Casual Suit's `TEMP`? That's right, `00B2741A27743D8D`—enter that here and click **Load**. After a brief extraction process, the outfit will be open in QuickEntity.

Expand the root OUTFIT entity in the tree. What you see in the tree is what makes up the outfit. Model parts, material overrides, cloth collisions, and things like that.

For this tutorial, you're looking for the entity named `male_reg_agent47_bangkok_shirt`, it's further down in the tree. Click on it.

You'll see the entity's info on the screen on the right in standard JSON format. We're looking to place a texture override object inside `properties`. Feel free to copy the following:

```json
        "Texture2D_01": {
	        "type": "ZRuntimeResourceID",
	        "value": {
	    	    "resource": "001F1D36FD5588E7",
	    	    "flag": "5F"
	        }
        },
        "Texture2D_01_enab": {
	        "type": "bool",
	        "value": true
        },
```

You recognize that hash in the `resource` parameter, right? That's right, it's our new `TEXT` hash! Paste the code snippet directly after the `"ConstantVector1D_06_Value_op"` property closes.

If you've done it right, the entity should look like this:

```json
{
	"parent": "c3c9a53073fbca82",
	"name": "male_reg_agent47_bangkok_shirt",
	"factory": "[assembly:/_pro/characters/assets/hero/agent47/materials/male_reg_agent47_bangkok_shirt.mi].pc_entitytype",
	"blueprint": "[assembly:/_pro/characters/assets/hero/agent47/materials/male_reg_agent47_bangkok_shirt.mi].pc_entityblueprint",
	"properties": {
		"m_mTransform": {
			"type": "SMatrix43",
			"value": {
				"rotation": {
					"x": 0,
					"y": 0,
					"z": 0
				},
				"position": {
					"x": 0,
					"y": 0,
					"z": 0
				}
			}
		},
		"ConstantVector1D_01_Value_op": {
			"type": "IRenderMaterialEntity.EModifierOperation",
			"value": "eReplace"
		},
		"ConstantVector1D_01_Value": {
			"type": "float32",
			"value": 0.20999999344348907
		},
		"ConstantVector1D_05_Value_op": {
			"type": "IRenderMaterialEntity.EModifierOperation",
			"value": "eReplace"
		},
		"ConstantVector1D_05_Value": {
			"type": "float32",
			"value": 0.4699999988079071
		},
		"ConstantVector1D_04_Value_op": {
			"type": "IRenderMaterialEntity.EModifierOperation",
			"value": "eReplace"
		},
		"ConstantVector1D_06_Value_op": {
			"type": "IRenderMaterialEntity.EModifierOperation",
			"value": "eReplace"
		},
		"Texture2D_01": {
			"type": "ZRuntimeResourceID",
			"value": {
				"resource": "001F1D36FD5588E7",
				"flag": "5F"
			}
		},
		"Texture2D_01_enab": {
			"type": "bool",
			"value": true
		},
		"Clients": {
			"type": "TArray<SEntityTemplateReference>",
			"value": [
				"c3c9a53073fbca82"
			],
			"postInit": true
		},
		"m_eidParent": {
			"type": "SEntityTemplateReference",
			"value": "c3c9a53073fbca82",
			"postInit": true
		}
	}
}
```

These are all the changes we need to make. Click **Save as** and choose **Save as patch file**. Name it something like `myawesomeshirt.entity.patch.json`. The name isn't too important, **but** the `.entity.patch.json` **ending is**. Simple Mod Framework needs that ending to recognize it as an entity patch file.

We have our new texture, its meta file, and our entity patch. The last step is getting it into the game.

# Making Our SMF Mod

Navigate to your Simple Mod Framework folder and open the `Mods` folder. Create a new folder in here called **My Cool Shirt**. Enter the folder.

Make a new file called **manifest.json** in the folder and populate it with the following info:

```json
{
	"$schema": "https://raw.githubusercontent.com/atampy25/simple-mod-framework/main/Mod%20Manager/src/lib/manifest-schema.json",
	"id": "MyName.MyCoolShirt",
	"name": "My Cool Shirt",
	"description": "Makes the Casual Suit totally rad.",
	"authors": ["My Name"],
	"frameworkVersion": "2.25.0",
	"version": "1.0.0",
	"contentFolders": ["content"]
}
```

:::tip VSCode Schema

If you edit the manifest with Visual Studio Code, VSCode will use the schema you imported with the first line to help you validate your manifest. That is, if you make any errors or write anything invalid, VSCode can point it out to you. This is why we first recommend VSCode as an editor.

:::

`frameworkVersion` is the version of the framework you are currently using. At the time of writing, the latest version is 2.25.0.

`contentFolders` in the manifest tells Simple Mod Framework what folders will be used for mod content. Make a new folder called **content**. Inside the content folder, make a new folder called **chunk0**. If you want to know more about chunks, [please see this article](../../glacier2/chunkdata.md). Enter the chunk0 folder and move your mod files there. So when all is said and done, this should be the tree structure of your mod:

```
📁My Cool Shirt
├── 📁content
│   └── 📁chunk0
│       ├── 001F1D36FD5588E7~00366C40059C0978.texture.tga
│       ├── 001F1D36FD5588E7~00366C40059C0978.texture.tga.meta
│       └── myawesomeshirt.entity.patch.json
└── manifest.json
```

That's all we need. Start Simple Mod Framework and click **Enable/disable mods**. Find your mod in the list under Available mods and click **Enable**, then **Apply** and watch it work for a minute. When it's done, close Simple Mod Framework and start up the game.

Go into pre-planning at any level you like and choose the Casual Suit with Gloves. Start the level, and if you did everything right, the fruits of your labor should be before your eyes!

![The end result](pathname:///media/suitmodding/basicretexture/endresult.jpg)

You can now zip up your SMF mod and release it into the world. You're a mod author now.
