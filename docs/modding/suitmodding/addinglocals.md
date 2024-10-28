---
sidebar_position: 4
description: Changing the suit's name and description
---

# Part 2: Localisation Overrides

Let's change the suit name and description.  
You will need GlacierKit and a mod folder with a manifest (no content files are even needed, everything is done from the manifest).  
If you're editing your manifest in GlacierKit, it will check and auto-suggest code you can use while keeping code clean. You can skip over the Visual studio Code part below.

Recommended but not necessary:  
Have Visual Studio Code and a manifest "schema" that checks errors in your manifest:

```json
"$schema": "https://raw.githubusercontent.com/atampy25/simple-mod-framework/main/Mod%20Manager/src/lib/manifest-schema.json",
```

Copy that in your manifest as a line.  
This only works in Visual Studio. It might be overkill to install Visual Studio for this tutorial, but you'll be grateful down the line for never having to work in Notepad again.  
Also, read any of the info docs in SMF when developer mode is enabled—especially the manifest one. This is just more of a clarification.

### In short, this is what you will do:
- Find the "Suit IDs" of the text in a specific LOCR file (most of this is already done for you).
- Explain how to search for custom text if you can't find the text to modify (Skip this part if you're only looking to modify a suit's name and description).
- Alter the text so it works in your manifest (simple copy-paste job, don’t worry).
- Add a "localisation override line" in your manifest to replace the text you attach (Baby steps, follow along).
- Write what you want to replace the text with (zero effort).
- Save the manifest and deploy.

I will continue with Blood Money, but you can follow along with any reward suit, as long as you're somewhat familiar with the terms used. If you aren’t, follow along with your suit and experiment with other text later to better understand what's happening.

### Step-by-step:
1. Start by selecting the blue "Open project" button when opening GlacierKit and click your mod folder inside of the SMF folder in the Hitman game contents.
2. Almost all localisation (text on screen) for reward suits (suits you can equip in the menu or that 47 can wear across maps) are in these templates seen as hash lines:
   - `004B8C5124A49543` for S3 suits,
   - `009F430D046716BE` for S2 suits,
   - `00985A1100E5EDDC` for S1 suits.

This is easier for now and less prone to errors compared to advanced searches.  
I give these to make it much easier and faster to find your Suit IDs for now.  
After reading the advanced search section, you will never need help looking for any text (localisation) to replace again.  
If you're confused, just follow the steps in the program without changing anything. Nothing will be changed in the game files except for your manifest, so no need to worry about accidentally changing anything. I'll add a clear warning (!!!) when changes are going to happen in case you want to follow along.

### Find the Suit Name and Description:
- Pay attention to the tabs on the left. Start with "Files" at the top and "Settings" at the bottom.
1. Copy one of the hashes above where your suit is located and navigate to the "game contents" tab.
2. Paste your hash in the search bar on top (For Blood Money, I use the S1 suits hash). If you don’t know for sure, take a guess or look it up.
3. You should get a file tree ending in a single file called `randomwords.sweetmenutext].pc_localized-textlist`. It has a language or translation icon.
- Click it, and you will see a "Preview" text box on the right with some additional info about the file on top. Confirm it's a LOCR file and take note of the "HASH" code beside it. We will need it later.

### Modifying the Text:
1. Scroll inside the textbox to see what's inside.  
To find the suit name you want to modify, click inside the textbox and press `Ctrl + F` to search.  
Look up your suit (for example, Blood Money).

2. Notice that you see your suit in multiple arrays in multiple languages. What's important is the long string beside it.  
For example:
```json
"989928F2-06D6-42F3-871A-353F07DEF969_LEGACY_HERO_BLOODMONEYSUIT_M_HPA2293_NAME_": "Blood Money Suit"
```
In German:
```json
"989928F2-06D6-42F3-871A-353F07DEF969_LEGACY_HERO_BLOODMONEYSUIT_M_HPA2293_NAME_": "Blood-Money-Anzug"
```
The "string" is the same before the `:` in every language.  
All we need is the long string inside the quotation marks, for example:  
`"989928F2-06D6-42F3-871A-353F07DEF969_LEGACY_HERO_BLOODMONEYSUIT_M_HPA2293_NAME_"` (without quotation marks).  
Copy that string.

3. Go to the "Text Tools" tab on the left.  
Paste the string inside the "Localisation hash calculator" box. It will produce a hex and a decimal (numbers-only) code underneath.  
Copy the **decimal number**. Now we have the decimal, and we're halfway there.

4. The magic happens in the manifest.  
Add a comma and hit enter after another line in your manifest. Start typing `"lo` and GlacierKit or VS Code will auto-suggest what can be used once the quotation marks are placed.

5. Add the localisation override line by manually typing or using auto-suggestions:
```json
"localisationOverrides": {}
```
Always hit enter inside `{}` brackets to keep the code visually readable.

6. Add the LOCR file hash to it (where all the suits were) in quotation marks, followed by a colon and another `{}`:
```json
"localisationOverrides": {
    "yourLOCRhash": {}
}
```

7. Go inside that bracket and add the language to overwrite.  
For globality, use `"english"`:
```json
"localisationOverrides": {
    "yourLOCRhash": {
        "english": {}
    }
}
```

8. Inside those brackets, add your converted decimal in quotation marks followed by your new text:
```json
"localisationOverrides": {
    "yourLOCRhash": {
        "english": {
            "yourconvertednamedecimal": "New Suit Name"
        }
    }
}
```

If you're on track, repeat the steps for the suit description.  
If you want to add another overwrite (e.g., another suit name or description), simply add a comma and repeat the process.  
End result:
```json
"localisationOverrides": {
    "yourLocrHASH": {
        "english": {
            "yourconverteddecimal": "New Suit Name",
            "yourotherconverteddecimal": "New Suit Description"
        }
    }
}
```

For example:
```json
"localisationOverrides": {
    "00985A1100E5EDDC": {
        "english": {
            "1047194709": "Blood Money Suit with Drip",
            "3718104824": "The Blood Money suit but with extra style."
        }
    }
}
```

### Adding Another Language:
To add another language, just add a comma after `"english"` and repeat for the new language. For example, French:
```json
"localisationOverrides": {
    "00985A1100E5EDDC": {
        "english": {
            "1047194709": "Blood Money Suit with Drip",
            "3718104824": "The Blood Money suit but with extra style."
        },
        "french": {
            "1047194709": "Costume d'argent du sang avec goutte à goutte",
            "3718104824": "Le costume de l'argent du sang mais avec un style supplémentaire."
        }
    }
}
```

### Adding Another LOCR File:
If you need to make changes to another LOCR file, you can add a new entry within the same `"localisationOverrides"` object. Here’s how you can add another LOCR file:

```json
"localisationOverrides": {
    "yourLocrHASH": {
        "english": {
            "yourconverteddecimal": "New Suit Name",
            "yourotherconverteddecimal": "New Suit Description"
        }
    },
    "otherLocrHASH": {
        "english": {
            "someconverteddecimal": "More New Suit Name",
            "someotherconverteddecimal": "More New Suit Description"
        },
        "spanish": {
            "someconverteddecimal": "Más nombre de traje nuevo",
            "someotherconverteddecimal": "Más descripción del traje nuevo"
        }
    }
}
```

In this example:
- `"yourLocrHASH"` refers to the first LOCR file you modified.
- `"otherLocrHASH"` refers to another LOCR file, and within that, you can add different language overrides (e.g., Spanish, English).

The reason why `"spanish"` is used instead of `"español"` is because the manifest schema is coded in English. For all languages you can use in the manifest, see the manifest info in SMF (book icon on the

 left).
```

---
