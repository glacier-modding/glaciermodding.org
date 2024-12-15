---
sidebar_position: 3
description: Making a new outfit
---

# Making A New Outfit

For this tutorial, we will create an entirely new outfit. In broad steps, this is what we will do:

-   Prepare new character set and outfit entities
-   Brainstorm parts to use, find them in GlacierKit and put them into our outfit
-   Patch globaldata to replace an existing suit
-   Replace that existing suit's inventory image in blobs
-   Replace that existing suit's name and description
-   (Advanced, optional) Patch the repository and unlockables to add the suit to Peacock

A lot of this won't make sense right now, but don't worry, we will cover each step in detail. Again, before continuing, please make sure you have all the tools in the [requirements](.). While it's exciting to make entirely new outfits we definitely recommend beginners try the first two tutorials before continuing to get accustomed to the tools, as this tutorial will go into more advanced concepts.

For the purposes of this tutorial we will be making an outfit we can call "Street Smart". When we are done it will look like this:

![Agent 47 in his new street smart outfit, featuring X, Y, Z.](/img/suitmodding/newoutfit/street_smart.jpg)

## The theory

Before we start with the foundational work you should understand why we are doing it. With this knowledge you will be able to make more advanced mods in the future on your own.

### Repository

The way Glacier 2 handles character appearances, "outfits", starts in the heart of the game which is the **repository**. The repository contains basically everything gameplay related, including but not limited to:

-   Ammo and magazine configurations
-   Areas on the map in each level
-   Difficulty parameters
-   Throwable items like coins
-   Weapons, explosives, poisons and more
-   Keys and other "quest items"
-   NPCs and their names
-   And most relevant for us right now, outfits and disguises

So every outfit in the game, whether wearable by the player or not, has a repository entry. That includes NPCs appearances as well, that's considered an outfit. The entry dictates the outfit's name, language localized description string, language localized name string, category, image, among other things.

We can make changes to the repository through mods, but the drawback is these changes will generally speaking not apply when playing online, with some minor exceptions, because the game synchronizes the repository with IOI's servers when it's running. Playing with Peacock allows us free rein to modify the repository as we like.

### Localization

Repository entries and outfit bricks point to localized lines, in the files as `LINE` files. These files don't actually contain the text itself but reference entries in `LOCR` files which for Hitman 3 are localized text lists with entries in English, French, Italian, German, Spanish, Russian, Chinese, Traditional Chinese and Japanese.

### Blobs

Blobs is cached offline content, this includes a lot of things but most important for us is inventory images for outfits.

### Outfit bricks

The next piece of the puzzle is an **outfit brick**. Because it was built by the Danish, Glacier 2 is designed like Lego, every part segmented into bricks, so the developers can build the game in a segmented way. Every location and mission has its own outfit brick which tells the game how the NPCs should look and what eventual disguises the player can use.

The outfits' entry in the outfit brick also dictates things like: 
-   Footstep sounds
-   Voice modulation for masks
-   Any sound effects that should be used when moving ("foley")
-   Professions, which control enforcers and trespassing areas for the player
-   Voice variations for NPCs
-   Outfit AI Category, which mainly dictates how NPCs adress the player
-   Which character set to use
-   Name and description, which is for the disguise bags in the level

There is also a brick called `globaldata`. This is a brick that the game always loads, and it includes important basic gameplay elements. This includes 47's starter outfits, any outfit you can go into a level with.

### Character set

As we mentioned the outfit brick references a character set. Often this is shortened to `CHARSET` in the files.

The character set will decide what **variations** are available for any given outfit. Since we don't want all NPCs on the map with a particular outfit to all look the same, we make slight variations, with different heads, hair, skin tone and so on. When the charset and outfits are set up all the level designers have to do when placing NPCs is place "guard, variation 3", or "waiter, variation 4".

Each variation has three entries. Actor, HeroA, and Nude.

Actor is what the NPC variation looks like when fully clothed. HeroA is what 47 looks like when wearing that variation. And Nude is the NPC when 47 has taken their clothes, or they are otherwise undressed.

When it comes to 47's starter outfits, their charset will only have one single variation, which is HeroA. The Actor and Nude entries point to nothing, since no NPCs are supposed to wear that outfit.

Each variation points to an outfit entity, which leads us to...

### Outfit

This part is what you can actually see with your eyes in the game. It contains the models that the outfit is made of. Head, hairs, top, hands, legs, feet. Any eventual materials to overwrite with new textures, wet logic for the Chongqing rain. This is the bit that we patched in the [Patching suits with new parts](addingparts.md) tutorial.

### Unlockables

Unlockables, to keep it simple, is a list of things that you can own through DLC, or unlock through challenges and mastery. All the weapons, items, starting locations, stashes or outfits you can pick in pre-planning before going into a mission. But it also includes things you can pick in your Freelancer hideout.

### In summary

![Outfit hierarchy diagram](/img/suitmodding/newoutfit/diagram.svg)

This is a diagram of what we've just covered. To start, we only need to concern ourselves with making a charset, outfit, patching an existing suit's entry in globaldata and altering its name and description with a localization override.

The other parts come into play for the extra credit portion of the tutorial which concerns making an addon version for Peacock.