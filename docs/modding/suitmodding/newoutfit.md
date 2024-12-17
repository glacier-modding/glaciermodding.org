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

A lot of this won't make sense right now, but don't worry, we will cover each step in detail. Again, before continuing, please make sure you have all the tools in the [requirements](.). While it's exciting to make entirely new outfits we definitely recommend beginners try the first two tutorials to get accustomed to the tools before continuing, as this tutorial will go into more advanced concepts.

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

Repository entries and outfit bricks point to localized lines, `LINE` files. These files don't actually contain the text itself but reference entries in `LOCR` files which for Hitman 3 are localized text lists with entries in English, French, Italian, German, Spanish, Russian, Chinese, Traditional Chinese and Japanese.

### Blobs

Blobs are online resources cached to disk, for playing offline. This includes a lot of things but most important for us is inventory images for outfits.

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

Every charset has three categories; Actor, HeroA, and Nude.

Actor is what the NPC variation looks like when fully clothed. HeroA is what 47 looks like when wearing that variation. And Nude is the NPC when 47 has taken their clothes, or they are otherwise undressed.

Note that the charset doesn't necessarily need to have outfits for all categories. For instance, when it comes to 47's starter outfits, their charset will only have one single variation, which is HeroA. The Actor and Nude entries point to nothing, since no NPCs are supposed to wear that outfit.

And female NPCs only have Actor entries, because 47 can't wear their clothes and hence they will never be nude either. This applies to most unique male NPCs and targets as well.

Charset variations point to an outfit entity, which leads us to...

### Outfit

This part is what you can actually see with your eyes in the game. It contains the models that the outfit is made of. Head, hairs, top, hands, legs, and feet, as well as any eventual materials to overwrite with new textures, or wet logic for the Chongqing rain. This is the part that we patched in the [Patching suits with new parts](addingparts.md) tutorial.

As a fun example, the Paris CICADA bodyguards have 8 variations. With Actor, HeroA and Nude, that means a grand total of **24** outfit entities, for **one** charset!

### Unlockables

Unlockables, to keep it simple, is a list of things that you can own through DLC, or unlock through challenges and mastery. All the weapons, items, starting locations, stashes or outfits you can pick in pre-planning before going into a mission. But it also includes things you can unlock for your Freelancer hideout. You can think of it like your player inventory.

### In summary

![Outfit hierarchy diagram](/img/suitmodding/newoutfit/diagram.svg)

This is a diagram of what we've just covered. To start, we only need to concern ourselves with making a charset, outfit, patching an existing suit's entry in globaldata, altering its name and description with a localization override and changing its image.

The other parts come into play for the extra credit portion of the tutorial which concerns making an addon version for Peacock. But the upside is, that part is not terribly difficult when everything else is already in place!

Everything click so far? If not, don't worry, you should get the hang of things after actually working with it.

## Foundations

Let's begin by making our mod folder and selecting it with GlacierKit.

Go into `/Simple Mod Framework/mods/` and create a new folder. Name it `MyName.StreetSmart`. Enter the folder and make two folders: `content` and `blobs`. Enter the `content` folder and make a `chunk0` subfolder.

In the `blobs` folder make a subfolder called `images`, and in that folder make a subfolder called `unlockables_override`.

This should be the structure of your mod:

```
📁MyName.StreetSmart
├── 📁blobs
│   └── 📁images
│       └── 📁unlockables_override
└── 📁content
    └── 📁chunk0
```

Now that the folder hierarchy is set up, select the `MyName.StreetSmart` folder in GlacierKit by clicking **Select a project** and navigating to the `/Simple Mod Framework/mods/` folder.

Right click the **MyName.StreetSmart** folder and click **New File**. Call it **manifest.json** and hit enter. Click the file to open it.

Feel free to paste the following into your manifest to get started.

```json
{
    "$schema": "https://raw.githubusercontent.com/atampy25/simple-mod-framework/main/Mod%20Manager/src/lib/manifest-schema.json",
    "id": "MyName.StreetSmart",
    "name": "Street Smart",
    "description": "A Street Smart outfit for 47.",
    "authors": ["My Name"],
    "frameworkVersion": "2.33.22",
    "version": "1.0.0",
    "contentFolders": ["content"],
    "blobsFolders": ["blobs"]
}
```

## The charset

We carry on by making the suit's charset. We can use IOI's work as a base for this. In the game files tab search for `signaturesuit`.

![Searching for the signature suit charset](/img/suitmodding/newoutfit/search_charset.png)

Under the `/_pro/characters/templates/hero/agent47/agent47_outfits.template?/` folders, find and click the charset for the signature suit. Click **Open in editor**.

With the entity now open, first go into the **Metadata** tab. We should make up a new factory and blueprint path here before continuing. Let us again borrow IOI's design conventions.

If you go back to the other tab, the resource overview for the signature suit charset's factory, we see its path is `[assembly:/_pro/characters/templates/hero/agent47/agent47_outfits.template?/charset_agent47_signaturesuit.entitytemplate].pc_entitytype`. Let's copy this and use it to derive a path for ourselves by simply changing `signaturesuit` to `street_smart`, which is the name of our suit.

When we enter `[assembly:/_pro/characters/templates/hero/agent47/agent47_outfits.template?/charset_agent47_street_smart.entitytemplate].pc_entitytype` into the factory hash field and press enter, GlacierKit will automatically hash the path, and save the path into our project so we can find it later. Let's do the same for the blueprint hash field. The path is the same, but change the ending filetype `.pc_entitytype` to `.pc_entityblueprint`.

![Entering new paths hashes them automatically in GlacierKit](/img/suitmodding/newoutfit/charset_paths.png)

Now we go back to the **Tree** tab. Let's click the root entity, `CHARSET_Agent47_SignatureSuit` and change its name to `CHARSET_Agent47_Street_Smart`.

If you expand the Actor, HeroA and Nude folders you can see there is one entry in each. Computers begin counting at zero, so they're all called variation 0. You may notice from examining that only the HeroA variation has an `m_Outfit` property. As we previously explained, this is because NPCs aren't supposed to ever wear this.

Go into the HeroA variation and in the `m_Outfit` property, change the resource path. As it is now, it points to the signature suit outfit entity, whose factory path is `[assembly:/_pro/characters/templates/hero/agent47/agent47_outfits.template?/outfit_agent47_signaturesuit_heroa_v0.entitytemplate].pc_entitytemplate`.

Let's tweak that path and make it our own - `[assembly:/_pro/characters/templates/hero/agent47/agent47_outfits.template?/outfit_agent47_street_smart_heroa_v0.entitytemplate].pc_entitytemplate`. This is our outfit's factory path. We will be using it again later when making the outfit entity.

For now we can save our changes so click the **Save** button on the charset tab we have open. Navigate to the `/content/chunk0/` path in the mod folder and save the file as `charset_street_smart`.

You can now close the tab and that's our charset done.

## The outfit

Now for the outfit itself. This is the fun part.

We already have a concept for how we want the suit to look. A more casual streetwear suit with a beanie, bomber jacket, undershirt, jeans and sneakers. But first let's get a basic outfit entity we can build onto.

In the last step we used the signature suit charset so why not the signature suit outfit, too? In the game files tab search for `signaturesuit` and this time click `outfit_agent47_signaturesuit_heroa_v0.entitytemplate` in the search results.

You will notice there is two of these, the second one in the list is for a specific cutscene in Romania so click the first one of the two, then **Open in editor**.

As before we should go to the **Metadata** tab and enter new paths. In configuring our charset we already devised a factory path for the outfit, which is `[assembly:/_pro/characters/templates/hero/agent47/agent47_outfits.template?/outfit_agent47_street_smart_heroa_v0.entitytemplate].pc_entitytemplate`. So let's enter this as the factory path. And as before, the blueprint path is the same but with `.pc_entityblueprint` at the end.

![Entering new paths for our outfit in GlacierKit](/img/suitmodding/newoutfit/outfit_paths.png)

Next let's go to the **Tree** view and begin building our outfit. First we can change the root entity name from `OUTFIT_Agent47_SignatureSuit_HeroA_V0` to `OUTFIT_Agent47_Street_Smart_HeroA_V0`.

Let us save here before continuing. Click the **Save** button on the open tab, navigate to the `/content/chunk0/` path in the mod folder and save the file as `outfit_street_smart`.

At this point, our outfit is just the stock signature suit. So let's clean out all the things we don't need. Right click and delete all parts in the tree aside from 47's head. Your tree ought to look like this.

![Cleaned out outfit tree with just a head.](/img/suitmodding/newoutfit/clean_tree.png)

### Hat

Let's give his cold head a nice warm beanie. In the game content tab, switch the filter from **All** to **Templates**. Then search for `beanie`. You will find a factory - `TEMP` - without a path called hat_beanie_cuffed. Let's click that to open its resource overview. We see the beanies partition is super (chunk0) which is perfect, it means we won't have to add it to dependencies in our manifest.

:::caution Chunks

We briefly mentioned this toward the end in the [Patching suits with new parts](addingparts.md) tutorial, but any parts you want to use in an outfit has to be in **chunk0** if it's a starter suit you can wear on any level. Any part that isn't in chunk0 will need to be added to the `dependencies` array in your manifest.

:::

The positioning and scaling for *hats* to look good on 47's head can be very specific, so it would be prudent to copy it from some other outfit. Click **Reverse dependencies** in the beanie's resource overview and you'll see a list of outfits that uses the beanie. Let's click the first `m_heroa` outfit in the list, which happens to be `outfit_flamingo_worker_journalist_m_heroa_v4`. Open this outfit in the editor.

Expand the `Head_Attacher` entity, there's our beanie. We don't want the headphones though, so right click them and delete them.

Next, right click `Head_Attacher`, select Clipboard and click Copy.

![Copying an entity.](/img/suitmodding/newoutfit/copy_entity.png)

Tab back to our custom outfit, right click the root outfit entity, select Clipboard and click Paste. Now the `Head_Attacher` is in our outfit as well. But, we need to make sure all the properties are looking as they should. Compare the `Head_Attacher` and `hat_beanie_cuffed` in our outfit with the one in the journalist outfit.

Compare for yourself first. Do you see it?

In `Head_Attacher`, the properties `m_linkedEntity` and `m_eidParent`, and in `hat_beanie_cuffed`, the property `m_rLinkedProxyEntity`, have all had their values nulled. Why is that?

Well, these values all pointed to the root entity of the journalist outfit, whose ID was `1351129995b8231f`. This ID doesn't exist in our custom outfit, so GlacierKit nulls these values when pasting the entity. These properties are essential for the attacher and the hat to work, so we will need to supply the ID of our root entity into these values ourselves. As you copy and paste entities back and forth when making mods, take great care that you are hooking up property values correctly after pasting.

Right click the root `OUTFIT_Agent47_Street_Smart_HeroA_V0` entity and click **Copy ID**.

Paste the ID into the values of `m_linkedEntity` and `m_eidParent` on `Head_Attacher`, and `m_rLinkedProxyEntity` on `hat_beanie_cuffed`. You will need to enclose the ID in double quotes. It should look something like this now. *(IDs may or may not be different for you.)*

![Adjusting the ID values of Head_Attacher.](/img/suitmodding/newoutfit/head_attacher.png)

![Adjusting the ID values of hat_beanie_cuffed.](/img/suitmodding/newoutfit/beanie.png)

That's all we need to do for the hat. Save your changes and let's look for a jacket then.

### Jacket

Back to the game content tab, again with the filter on **Templates**, search for jacket_bomber. Click the first jacket_bomber_open `TEMP` in the list. This one is also in chunk0, great! You will find that plenty of clothing templates are in chunk0 in fact, IOI did this to make assembling NPCs and outfits easier for themselves.

Again go into **Reverse references** to see the outfits that make use of the template. Let's click `outfit_raccoon_civilian_bankcustomer_m_actor_v8.entitytemplate` and open that outfit in the editor.

Just like last time. Expand the root entity, right click Jacket_Bomber_Open, select Clipboard and click Copy.

Go back to our outfit, right click the root entity, select Clipboard and click Paste.

We will also need an undershirt, which the bankcustomer outfit also has. So tab back, copy `TShirt_CrewNeck_Cut_Jacket` and paste that as well into our outfit. Do the same for `Hands` as well.

Now your tree should look something like this.

![The tree with some new parts in it.](/img/suitmodding/newoutfit/tops.png)