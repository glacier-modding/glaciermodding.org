---
title: You Shouldn't Make RPKG Mods
description: You have no reason to make a mod that way. You think you do, but you don't.
---

It's as simple as that - you have no reason to make a mod that way. You think you do, but you don't.

## RPKGs are packed files

Whatever disadvantage you can think of that applies to an archive format like `zip` or `rar` would also apply to `rpkg`. You can't directly modify anything inside without first unpacking it.

## You don't have to edit the packagedefinition.txt file

In case you weren't aware that Simple Mod Framework could install RPKG mods. If you were actually manually editing the packagedefinition file, well, you should stop doing that.

## You're working with raw game files

Another disadvantage is that you have to convert GlacierKit's `entity.json` files to `TEMP` and `TBLU` files, or new textures in `texture.tga` format to `TEXT` and `TEXD` files. If you want to make a quick tweak to one of the converted files, you're going to need to spend time converting them back to game file formats and then compiling them into an `rpkg` archive again.

Besides that, you cannot take advantage of one of Simple Mod Framework and QuickEntity's strengths, the patching system. Since you are replacing a game file wholesale, you cannot make fine changes like an `entity.patch.json` can in an SMF mod. Even worse still, your RPKG mod is far more likely to break other mods and require updating when the game updates. This is especially true if you modify the repository or unlockables.

## The experience for you and the user are both worse

As far as authorship is concerned:

Not only do you have to convert your `entity.json` files that GlacierKit makes and so on to raw game files to pack them, you lose a big advantage of GlacierKit which is opening your mod folder as a project. It is so much easier especially when actually making and iterating upon the mod itself, to just have an SMF mod folder, make a change, deploy the mod in SMF with one click and then boot the game. Not having to mess around with RPKG tool and conversions to raw files back and forth. Just let the computer handle it.

As far as users are concerned:

As mentioned, you aren't using the QuickEntity patching system, meaning you can't make small fixes or additions to other mods if you need to. Any compatibility with other mods will be completely accidental. At worst, none at all. And let's suppose you quit modding and a while down the line a user wants to tweak your mod because it broke in a game update, or something else to suit their own needs, they cannot do so with any ease.

## "But RPKG is stupid simple. Making an SMF mod is hard."

No, it's really, really not. Yes you have to spend 30 seconds writing a manifest, but here, I'll **give** you a basic one:

```json
{
    "$schema": "https://raw.githubusercontent.com/atampy25/simple-mod-framework/main/Mod%20Manager/src/lib/manifest-schema.json",
    "version": "1.0.0",
    "id": "YourName.MyAwesomeMod",
    "name": "My Awesome Mod",
    "description": "A truly amazing mod",
    "authors": ["Your Name"],
    "frameworkVersion": "2.33.33",
    "contentFolders": ["content"]
}
```

There. Just go to your Simple Mod Framework installation, go into the Mods folder, make a new folder, put a `manifest.json` file in there, paste the above text in there and save. Then make a folder called `content`. And in the content folder make a chunk folder, depending on what your mod does, it's *probably* `chunk0`. And in chunk0 put your `entity.json` or your texture or whatever it is your mod does. You *can* even use raw game files like `TEXT` and `TEXD` if you *really* want to but you shouldn't.

That's all. Just really don't do RPKG mods. They're worse in every way.
