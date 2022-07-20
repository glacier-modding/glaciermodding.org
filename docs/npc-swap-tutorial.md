---
sidebar_position: 1
description: An introductory modding guide that will show you how to swap 47's Signature Suit with an NPC.
---

# NPC Swap Guide

## Recommended Reading

-   [Glacier 2 Modding Basics](./glacier2/modding_basics.md)
-   [Chunk Data](./glacier2/chunkdata.md)

## Requirements

-   [RPKG Tool](https://notex.app/rpkg/)
-   [Simple Mod Framework](https://www.nexusmods.com/hitman3/mods/200)
-   A program to read and edit JSON files (VSCode is recommended, but any basic code editor will suffice in this scenario as we're only changing a single value at the beginning of the document. Otherwise, QuickEntity Editor is the superior choice when editing QN JSON files)
-   A program to extract and archive ZIP files (such as 7-Zip)

## Background

Replacing an outfit requires you to identify an outfit to be replaced as well as an outfit to be replaced by. For the purpose of this tutorial, we will attempt to replace 47’s Signature Suit with that of Silvio Caruso, who is already present in the game's files.
Creating a mod requires you to create your own `chunk` file, which you then add to the game's files. This can be done in multiple ways. This tutorial uses [Simple Mod Framework](https://www.nexusmods.com/hitman3/mods/200) to automate this part, as the modding process is already convoluted enough without this tool.
Every outfit in the game has its own TEMP/TBLU combo. TEMP files are Templates whereas TBLU files are Template Blueprints. Note that these files don't actually contain the _assets_ of the character's outfit, such as models, textures, etc. These files merely serve to point the game to the correct assets to use (hence, why they're called "templates", or "TEMP" for short), which are located somewhere other than the TEMP/TBLU files themselves. Therefore, this tutorial only covers replacing outfits that are already present in the game's files, and not custom outfits that have to be imported.

## Chunk Basics

You will notice from [Glacier 2 Modding Basics](./glacier2/modding_basics.md) that the game's data is split into "chunks" numbered chunk0 to chunk27. All chunks will have additional patch chunks (e.g., chunk0patch2). Generally, these chunk files correspond to a location in the game and hold the content that is specific to that level. For example, looking at [Chunk Data](./glacier2/chunkdata.md) we can see that the content for the Paris level is located in “Chunk 27”. We can also see that Season 1 is "Chunk 21", and Legacy is "Chunk 8". Finally, we have "Chunk 1" (Base) and Chunk 0 (Dubai/Boot). When the game loads a level, it will only load the content needed for that specific level. In the case of Paris, the chunks would be accessed in the following order: chunk27 (Paris) -> chunk21 (Season 1) -> chunk8 (Legacy) -> chunk1 (Base) -> chunk0 (Boot).

Another tool that can be used to visualize the relationship between chunks is the [Hitman 3 Chunk Hierarchy flowchart](https://i.imgur.com/gOhpfDS.png) (which was created by Oakheart, based off of an earlier chart by invalid). For example, we can see that chunk2 (Season 3) is accessed by all but one of the Hitman 3 levels, chunks 3 (Dartmoor) through 7 (Romania). In turn, chunk1 (Base) is accessed by chunk2, and finally, chunk0 (Dubai/Boot) is then accessed by chunk1. Note that while chunk0 can be accessed _from_ anywhere, it is a one-way street; lower-level chunks cannot access higher-level chunks. Therefore, while chunk1 can access chunk0, chunk0 can not access chunk1.

Using these two resources, we can begin to get an idea of where to look for Silvio Caruso's TEMP/TBLU files. We can see that the assets for Sapienza are in chunk26, and since that's a Hitman 1 location, chunk8 (Legacy) and chunk21 (Season1) may also have what we're looking for. Finally, chunk0 (Boot) and chunk1 (Base) are definitely worth checking as well, as these are essentially "main" chunks.

Another hint: most (if not all) outfit TEMP/TBLU files start with the string `outfit_` typically followed by the level's name/codename or character's name, and end with the string `.pc_entitytemplate`. While it is important to note that this will only be true for outfits we have the paths for, you are unlikely to run into issues as we do have the paths for almost all of them.

Therefore, we need to identify which `outfit_*****.pc_entitytemplate` file belongs to Silvio Caruso, and we know it's probably in either chunk0 (Boot), chunk1 (Base), chunk8 (Legacy), chunk21 (Season 1), or chunk26 (Sapienza).

## Finding the Correct Files

The [RPKG Tool](https://notex.app/rpkg/) allows us to search within the chunk files. Once setup, we can load the chunk files into the tool by using `Import` > `Import RPKGs folder` and pointing it to the `HITMAN 3/Runtime` folder. This will load all the chunk files into the tool, which is required when looking for the correct files. Next, we can search by using the left panel and going to `Search` > ` Search RPKGs`

There are two ways to find the correct files. You can search for them yourself, or you can use community-made resources to quickly find the correct files. Using the community-made resources will save you time as most of the work has been done for you. Note that while this is easier, you will skip some valuable steps in the modding process, which might be useful to know if you decide to make more complex mods. Therefore, if you are creating your first Hitman mod, you are recommended to try and find the correct files yourself.

### Finding the Correct Files (Using Community Resources)

Now, while we _could_ search for the files manually, it isn't strictly necessary. Instead, we can use HMBM47's [Hitman 3 Outfits Spreadsheet](https://docs.google.com/spreadsheets/d/e/2PACX-1vRDiyiqdRebu0Olvvkr20CDhh6ANxu7FOQZ_O-1YHFN9e6kh0WmpbwDYbfgzevSvc3fO4_4Exu1fmQH/pubhtml#). We also have grappigegovert (who created the original outfit list) and 2kpr (who compiled a list of the NPCs by their names, their outfits, their pieces, etc.) to thank for this wonderful resource.

If we access the `Outfits by Character Name` section of the spreadsheet, we can see each NPC's in-game name is located in the `Name` column on the right, while their outfit's filename is in the `Outfit` column. So, if we simply search for `Silvio Caruso`, we can see the filename we're looking for is `outfit_silviocarusso_actor_v0`.

If we now go back to RPKG Tool and search for `outfit_silviocarusso_actor_v0`, the result should be several files with `outfit_silviocarusso_actor_vX.entitytemplate].pc_entityblueprint` in the name, in both `chunk1` and `chunk8`.

It is important to note that in some cases, we may not have the hashes available for what you're looking for, and this applies to all files in general. In our case, however, the hashes for Caruso's outfit files are known, so we can access them without issue.

### Finding the Correct Files (Manually)

When creating your first Hitman mod, finding the correct files to modify is arguably the biggest initial challenge. So, knowing how to utilize the search function is key.

If we search for `outfit_` using the `Search RPKGs` function, we get all the chunk files that contain something with this name. If we then expand chunk26 (Sapienza), we can see that it is divided into a TBLU and a TEMP tree. For our purposes, we can ignore TBLU files entirely, as we can only extract what we need using TEMP files. So, if we expand the TEMP tree under chunk26, we can see that the first result is:

> `[assembly:/_pro/characters/templates/sapiensa/char_sapienza_unique.template?/outfit_`**francescadesantis**`_actor_v0.entitytemplate].pc_entitytemplate`

By name alone, we can derive that this has to be Francesca De Santis' TEMP file, but she's not who we're looking for. Logically, you would expect the string `outfit_silviocaruso` to give you Silvio Caruso’s files. However, searching for this doesn’t give any results, meaning the outfit file doesn't match Silvio Caruso’s name (or at least not exactly). Therefore, his outfit must use a different name.

Let's take another look at De Santis' outfit string, since Caruso's probably follows a similar pattern:

> `[assembly:/_pro/characters/templates/sapiensa/`**char_sapienza_unique.template**`?/outfit_francescadesantis_actor_v0.entitytemplate].pc_entitytemplate`

It seems all unique characters (i.e. not generic guards or civilians) in Sapienza should contain the `char_sapienza_unique` string, which we can use to search. Searching for this string yields a decent number of results, and as predicted earlier, all of them are in chunk1 (Base), chunk8 (Legacy), chunk21 (Season 1), and chunk26 (Sapienza). Keep in mind that we can ignore the TBLU tree completely, as we only need to locate Caruso's TEMP file.

Starting with `chunk1`, we can see there is nothing resembling Silvio Caruso’s name in there, as all files refer to the priest.

Next, we can go to `chunk1patch2` and start looking through the TEMP results. The first result is the red plumber, the second is the street performer, the third is the caddie, and the fourth is:

> `[assembly:/_pro/characters/templates/sapiensa/char_sapienza_unique.template?/charset_silviocarusso.entitytemplate].pc_entitytype` > `"charset_silviocaru`**ss**`o.entitytemplate].pc_entitytype"`

So it looks like his name is misspelled with an extra "S" in the game's files, which is why `outfit_silviocaruso` was not returning any results.
We're getting close, but we need to find the files starting with `outfit_` as the files starting with `charset_` will not work for what we are trying to do.
So let's try searching `outfit_silviocarusso` (now that we know it includes an extra "S").

Bingo! The result should be several files with `outfit_silviocarusso_actor_vX.entitytemplate].pc_entityblueprint` in the name, in both `chunk1` and `chunk8`.

## After Finding the Correct Files

As we're specifically looking for Caruso's TEMP file, we can ignore the TBLU results. Since the TEMP files in `chunk1patch2` and `chunk8` seem to be duplicates, we can use either of them. But for the sake of this tutorial, let’s use the TEMP files located in `chunk1patch2`.
Expanding the TEMP tree under `chunk1patch2` shows us that Silvio Caruso has two outfit variants, as indicated by `_v0` and `_v1` in the filenames. Remember that these TEMP files contain references to the components that are used for a certain outfit. Therefore, by selecting the `v1` variant and checking the `Depends on X other hash files/resources` section in the panel on the right, we can see what the outfit consists of. In this case, we can see the entry:

`[assembly:/_pro/characters/assets/workers/scientist_01/geometry/malereg_`**hazmatsuit**`_01.wl2?/shoes.weightedprim](bodypart).pc_weightedprim`

This shows us that the v1 variant is Silvio Caruso in a hazmat suit. Therefore, v0 must be his standard suit simply because it's the only other option. However, to make sure, we can select the v0 TEMP file in the left box, and examine the outfit components again in the right box. v0 makes no mention of a hazmat suit, but does reference other components we know to be part of Caruso's standard suit, like "cigarettepack," "pullover," and "necklace."

`[assembly:/_pro/characters/templates/sapiensa/char_sapienza_unique.template?/outfit_silviocarusso_actor_v0.entitytemplate].pc_entitytemplate`

## Extracting the Files

Now that we have found our outfit's TEMP file, we can start extracting the files we need.

You are advised to create a new folder somewhere that will serve as an output folder for the files we will be extracting. This is only a temporary storage space for these files, as we will be moving them to a Simple Mod Framework folder later on.

With the correct chunk, TEMP and variant selected, right-click the filename in the left panel and select `Extract to QN (QuickEntity) JSON`. Select the output folder created in the previous step. This will create a JSON file. You can name it whatever you'd like, but make sure it ends with `.entity.json`.

Since Caruso's outfit is in `chunk1` but our mod will be in `chunk0`, we will also need to extract the depends (which are the assets the outfit uses) and `patch` them to chunk0. Remember that while chunk1 can access chunk0, chunk0 can not access chunk1. If we try to run our mod without including the depends it needs, the game will simply crash.

While you still have the correct file selected in the left box, left-click `Extract Hash Depends` in the right box, then select `Extract Recursive Hash Depends` and extract them to the same folder as the JSON.

The output folder should now have a `.entity.json` file and a folder named `ALLDEPENDS`. Inside this folder, you'll find a `00873434CB4F9FCD.TEMP` folder, and then inside that folder, you'll have various `chunkX` folders.

When creating suit swaps or modifications, we'll ultimately want to place our mod in `chunk0` for two reasons: 1) it's a 'universal' chunk that is read from everywhere, and 2) it contains all of 47's selectable suits. Therefore, we won't need the depends from chunk0 or its patches, so we can go ahead and delete the `chunk0`, `chunk0patch1`, and `chunk0patch2` folders.

That will leave us with 3 folders: `chunk1`, `chunk1patch2`, and `chunk8`. First, it's important to mention that outfits can only read from the same chunk they reside in. Therefore, if we're swapping an outfit that's located in chunk1, we will only ever need the depends from chunk1 and its patches. So, we can safely delete `chunk8`. Next, we'd usually start by transferring the depends from the patchX chunks to their base chunks. For example, we'd move the depends from `chunk1patch2` to `chunk1`, and replace anything if it asks. However, in this case, we can see `chunk1patch2` only contains a TBLU file and a TEMP file. If we were to restore `chunk8`, we would see that it contains the same TEMP/TBLU pair, which matches what we saw in RPKG Tool. Namely, that `chunk1patch2` and `chunk8` contained duplicate TEMP/TBLU pairs. We also know from earlier that TBLU and TEMP files contain outfit templates, but we've already converted Caruso's TEMP/TBLU pair to a QuickEntity JSON, so we no longer need them. Therefore, that only leaves `chunk1`.

If we examine the contents of `chunk1`, we can see it contains 5 different folders with various file types. If we check the [Glacier 2 Engine file formats](https://wiki.notex.app/glacier2/fileformats), we can see this chunk appears to include important assets, like meshes (PRIM), bone rigs (BORG), textures (TEXT/TEXD), etc. So, these must be the depends we're looking for. We'll want to move these 5 folders (BORG - TEXT) to the same location as the `00873434CB4F9FCD.entity.json` file we extracted. The chunkX.meta files can be ignored. Once this is done, you can delete the `ALLDEPENDS` folder and its remaining content.

You should now have the `00873434CB4F9FCD.entity.json` file and 5 folders (BORG - TEXT) in the output folder.

### Modifying the Files (Manually)

The next step is to find the TEMP and TBLU hash values for the outfit that is to be replaced: the default Signature Suit. All of 47's suits begin with the string `outfit_agent47`, and as mentioned earlier, they are all located in `chunk0`. Therefore, you can search for the string `outfit_agent47` using RPKG Tool's `Search RPKGs` function, and then examine the results in `chunk0`, `chunk0patch1`, or `chunk0patch2`. Many of the filenames will match up with the suit's in-game name, but many will not. Some suits have their own codenames\*, and some use the codename for the level they're from\*\*. Finally, you'll notice that many suits have both an `actor` and a `heroa` variant. The actor variants are for NPCs, while the heroa variant is specifically for 47, so you'll always want to use the heroa variants when creating NPC or outfit swaps.

In this case, the default Signature Suit is fairly easy to find, as it's the second result in the chunk0 TEMP tree and matches up with the in-game name (`outfit_agent47_signaturesuit_heroa_v0`). If we look at the result in the left box, we can see it begins with `00FF8C6314EA882E.TEMP`, so the value we're looking for is `00FF8C6314EA882E`. Make a note of this TEMP hash.

Next, we will want to locate the TBLU value. In this case, since we still have the results in chunk0 open, we can simply access the entry in the TBLU tree instead. We can see the TBLU is named `0046BB3BE76661CC.TBLU`, so the value we're looking for is `0046BB3BE76661CC`. Make a note of this TBLU hash as well.

### Modifying the Files (Using Community Resources)

Alternatively, we can use HMBM47's [Hitman 3 Outfits Spreadsheet](https://docs.google.com/spreadsheets/d/e/2PACX-1vRDiyiqdRebu0Olvvkr20CDhh6ANxu7FOQZ_O-1YHFN9e6kh0WmpbwDYbfgzevSvc3fO4_4Exu1fmQH/pubhtml#), only this time, we'll access the `chunk0 47 Base Suits` section. As before, we'll see each suit's in-game name in the `Name` column, and the suit's filename in the `Outfit` column. However, we'll need the TEMP and TBLU hashes rather than the filename, so we can locate them in the `TEMP` and `TBLU` columns, respectively. First, if we search for `Signature Suit`, we can identify which is the default version and which is the gloved version by looking at either the `Notes` column, or the filename in the `Outfit` column. Then, we can identify the outfit's TEMP by looking at the TEMP column on the left, which is `00FF8C6314EA882E.TEMP`. Therefore, the TEMP hash we need is `00FF8C6314EA882E`. We can then do for the outfit's TBLU by examining the TBLU column, which gives us `0046BB3BE76661CC.TBLU`. Therefore, the TBLU hash we need is `0046BB3BE76661CC`.

In either case, once you have the TEMP and TBLU hashes, the next step is to open the `00873434CB4F9FCD.entity.json` file (which we previously exported) using a code editor. You'll see it starts with: `{"tempHash":"00873434CB4F9FCD","tbluHash": "00945FFF47BBBDE3",` All we need to do is replace the tempHash and tbluHash values in this string with the ones we obtained in the previous step. Therefore, we would change `"tempHash":"00873434CB4F9FCD"` to `"tempHash":"00FF8C6314EA882E"` and `"tbluHash":"00945FFF47BBBDE3"` to `"tbluHash":"0046BB3BE76661CC"`

The end result should be: `{"tempHash":"00FF8C6314EA882E","tbluHash":"00945FFF47BBBDE3"`

Make sure you keep the file syntax intact, as even a single extra space or period will break it. Save the file.

Optionally, one way to format the JSON file for easier editing is to import it into [QuickEntity Editor](https://www.dropbox.com/s/p1mkwm3ji0uyr8n/QuickEntityEditor.7z?dl=1) and then save it using "Save Entity". This will convert it from one giant block of text to something that is much easier to browse and edit, especially for more complex edits.

## Creating a Mod Using Simple Mod Framework

There's only one step left, and that's creating the actual mod using Atampy26's [Simple Mod Framework](https://www.nexusmods.com/hitman3/mods/200) (which will hereon be referred to as "SMF"). When you enable the mod in SMF, it will automatically generate a chunk file for you, which eliminates the need to pack one yourself.

If you follow along with the installation instructions, the SMF folder will be located at `HITMAN 3\Simple Mod Framework`. If you then access the `Info` folder, you'll see that SMF includes all the documentation you would need to set up your mod. However, we'll quickly go over the basics here.

First, you'll want to access the `Mods` folder located at `HITMAN 3\Simple Mod Framework\Mods`. Here, you'll see SMF already comes with a mod included, `Realistic AI`. If we open up that folder, we'll see it includes a JSON named `manifest.json`. As the name implies, this is the mod's manifest, and includes information such as the mod's name, author's name, version number, content folder(s), etc. If we then open up any of the content-\*\*\*\*\*\* folders, we'll see they all include a `chunk0` folder, and inside that, there's another JSON. By examining Realistic AI, we can see how a SMF mod is structured, so we can use that as a template for our own mod.

Let's make a copy of the Realistic AI folder, and then name that copy `Silvio Caruso Swap`. Next, we'll open that folder and delete the 3 content-**\*\*** folders. The folder structure for our mod will be quite simple, as it only includes one option. So, we'll create a folder within the Silvio Caruso Swap folder named `content`, and then inside the content folder, we'll create another folder named `chunk0`. This chunk0 folder is where we're going to place the 5 depends folders and the `00873434CB4F9FCD.entity.json` file from earlier. So, all we need to do is access that folder, and move the contents to the chunk0 folder.

The final piece of the puzzle is the mod's manifest. We can either modify Realistic AI's manifest.json, or create our own. For the purpose of this tutorial, let's open the existing manifest.json and erase the contents. Then, if we access the `Manifest.md` document located at `HITMAN 3\Simple Mod Framework\Mods`, we can see it gives the following example:

```json
{
    "version": "1.0.0",
    "id": "YourNameOrUserName.FirstMod",
    "name": "Your First Mod",
    "description": "Extremely good description",
    "authors": ["YourNameOrUserName"],
    "contentFolder": "content",
    "frameworkVersion": "1.5.7"
}
```

The "frameworkVersion" will change depending on what version of SMF you're using. As of this writing, the current version is 1.5.7.

If we copy this section and paste it into our `manifest.json`, we can then change the version, id, name, description, and authors to our liking. You can call it whatever you'd like, just make sure to only modify the text within the quotation marks. This needs to follow proper JSON syntax, including all quotation marks, commas, brackets, etc. If the syntax is incorrect, SMF will be unable to load any mods at all, and the mod list will appear blank. If you ever run into this issue, the `manifest.json` for one of your mods is likely broken.

When you're done modifying the example to your liking, you should have something like this:

```json
{
  "version": "1.0.0",
  "id": "HitmanModder.SilvioCarusoSwap",
  "name": "Silvio Caruso Swap",
  "description": "Swaps 47's Signature Suit with Silvio Caruso.",
  "authors": ["HitmanModder"],
  "contentFolder": "content",
  "frameworkVersion": "1.5.7"
}
```

Save the manifest.json file, and open up SMF's Mod Manager, which can be accessed at either `\HITMAN 3\Simple Mod Framework\Mod Manager.cmd` or `\HITMAN 3\Simple Mod Framework\Load Order Manager\Load Order Manager.exe`. If your `manifest.json` was set up correctly, you should see your mod listed in the Available Mods section on the left. If it's missing, there must be an issue with your `manifest.json`, so you would need to go back and compare with either the included manifest example, or Realistic AI's `manifest.json`.

If your mod appears on the list, all you need to do is click the "Enable" button next to it, and then the "Apply Enabled Mods" button at the top. This will deploy your mod, and any other mods you have enabled. The only thing left to do is launch Hitman 3, and load into a level with 47's Signature Suit. If you've done everything correctly, Silvio Caruso will be in 47's place.

Congrats! You are now an official modder :)

## Sharing a Mod

If you have followed the instructions above correctly, you should now have a folder with your mod in your `HITMAN 3\Simple Mod Framework\Mods` folder. To share this mod, simply add the Silvio Caruso Swap folder to a ZIP file. Note that it must be in the ZIP format, as other compression formats like RAR or 7z will not work. This ZIP file can now be shared with friends or uploaded to [Nexus Mods](https://www.nexusmods.com/hitman3). To install your mod, the end user only needs to import the ZIP file using SMF.

When uploading mods to Nexus Mods, there are a few things to keep in mind. First, you'll want to make sure that what you're uploading is unique and has not already been released by another modder. For example, since azirus3 has already uploaded an NPC swap pack that includes Silvio Caruso, we probably wouldn't want to upload our swap as a stand-alone mod. Also, you'll want to consider if what you're releasing will need its own stand-alone page and will appeal to as many users as possible. For example, if we were to create a number of small suit modifications and release them all as separate mods, it could lead to a lot of clutter (think ReShade presets). But if we were to collect all those modifications and release them as a single mod, not only would it make things less cluttered, but it would also be easier for the end user as everything would be available in one place.

Of course, you are free to release whatever you'd like as long as it doesn't break any rules or include other people's work without their permission. These are only guidelines for those new to the modding scene.

## TL;DR

1. Import the Runtime folder into RPKG Tool.
2. Find the outfit\_\*\*\*\*\*\*" TEMP file for the outfit/NPC you're looking for.
3. Extract both the TEMP's QuickEntity JSON and the recursive hash depends to the chunk0 folder in your Simple Mod Framework mod.
4. Find the TEMP value for the suit you want to replace.
5. Open the outfit's \*\*\*\*\*\*.entity.json and replace its tempHash value with the value you found in step 4.
6. Open the \*\*\*\*\*\*.TEMP folder within the ALLDEPENDS folder. You will only need the depends from the chunk the suit is in (e.g. if the suit is in chunk1, you will only need the files from chunk1 and its patches). Move everything in each patchX folder to the outfit's base chunkX folder (e.g. chunk1patch1 to chunk1, then chunk1patch2 to chunk1, overwriting anything in the base chunk if necessary).
7. Move all the depends from the outfit's base chunkX folder to the chunk0 folder in your SMF mod (the same place your **\*\***.entity.json is located).
8. Delete whatever remains in the ALLDEPENDS folder.
9. Make sure the folder structure for your Simple Mod Framework mod is correct, with the JSON/depends in a chunk0 folder, and make sure there are no errors in your mod's manifest.json.
10. Enable the mod in Simple Mod Framework and then click "Apply Enabled Mods".

## Credits

`Metaphoria` - Tutorial author.

`Oakheart` - Editing and conversion to markdown, as well as the V2 chunk flowchart.

`invalid` - Original chunk flowchart, of which V2 was based.

`Notex`, `REDACTED`, [and all RPKG contributors](https://github.com/glacier-modding/RPKG-Tool/graphs/contributors) - RPKG Tool.

`HMBM47` - Hitman 3 Outfits spreadsheet. The original lists were created by grappigegovert and 2kpr, which were then formatted, expanded, organized and later added to by HMBM47.

`grappigegovert`- Original outfit list.

`2kpr` - Compiled a list of the NPCs by their names, their outfits, their pieces, etc.

`Atampy26` - Simple Mod Framework, QuickEntity, and QuickEntity Editor.

[All contributors to wiki.notex.app](https://github.com/glacier-modding/wiki.notex.app/graphs/contributors)

## Suit Codenames

```
birthsuit = Premiere White Suit
lifesuit = Crimson Red Suit
deathsuit = Ultimate Black Suit
[color]specialsuit = All Platform Specific Suits (e.g. blackspecialsuit = The Black Streak)
hotsummersuit = Summer Suave Suit
newzealandsuit = Tactical Wetsuit
northamericasuit = Suburban Suit
northseasuit = Tuxedo and Mask
outdoor = Snow Festival Suit/Intro Suit
prologue = Tactical Turtleneck
s1challengesnormalall = Classic All-Black Suit
s1elusive = Black Winter Suit
s2elusivesa1 = The Undying Look
s2elusive15 = Casual Undercover
snakecharmer = The Cashmerian
spring_break = Blue Flamingo Suit
wolverine = Subject 47
summersuit = Summer Sightseeing Suit
```

## Suit Level Codename Examples

```
bulldog = Dartmoor (e.g. outfit_agent47_bulldog_heroa_v0 = Classic Cut Long Coat Suit)
fox = Berlin (e.g. outfit_agent47_fox_gloves_heroa_v0 = Number Six with Gloves)
stingray = Haven Island (stingray = The Tropical Islander, reward_stingray = The Tropical Suit)
```
