---
sidebar_position: 5  
description: Changing the suit's name and description  
---

# Localisation Overrides AUTORAW MD

In this section, we'll focus on changing the **suit name** and **description** in the game. 
You will need: 
- **GlacierKit**
- A mod folder with a **manifest file** 
:::note 
 Optionally install **Visual Studio code** to edit your manifest with this ***schema***
    ```json
     "$schema": "https://raw.githubusercontent.com/atampy25/simple-mod-framework/main/Mod%20Manager/src/lib/manifest-schema.json"
     ```
Paste that in your manifest and **Visual Studio Code*** will then know what the manifest can and can't contain.

>It might seem overkill to install **Visual Studio Code** just for this tutorial, but you’ll appreciate the cleaner interface and error-checking features as you continue modding. Skip this if you had no idea what you just read.
:::
---

### In short, this is what you will do:
- Track down where your suit's name and description is (This part is pretty much done for you)
- Modify them so they work in your manifest (simple copy-paste job, don’t worry)
- Add a "localisation Override line" in your manifest that replaces the text you attach (Baby steps, follow along)
- Write what you want to replace the text with (zero effort)
- Explain how to advance search for custom text if you can't find your text to modify (Skip this part if you're only looking to modify a suit's name and description.)

- Save the manifest and deploy  

I will be continuing on bloodmoney but you can follow along with any reward suit as long as you're kind of familiar with the terms being used. If you aren’t, just follow along anyway but with your suit and experiment on other text later so you understand better what's being done here.

---

### To start  
1. Select the blue button "Open project" when opening Glacierkit and click your mod folder inside of the SMF folder in Hitman game contents. You should know where that is now. 
2. Almost all localisation (text on screen) for reward suits (suits you can equip in menu or 47 can wear across maps) are in these templates seen as hash lines:  
   - `004B8C5124A49543` for S3 suits,
   - `009F430D046716BE` for S2 suits,
   - `00985A1100E5EDDC` for S1 suits.  

> This is easier for now and less prone to errors compared to advanced searches.  
> I give these to make it much easier and much faster to find your Suit IDs for now.  
> After reading the advanced search section, you will never need help looking for any text (localisation) to replace again.  

If you're already confused, just read and try to follow along the steps in the program without changing anything. Nothing will be changed in the game files except for your manifest so no need to be worried about accidentally changing anything. I'll add a clear warning (!!!) when stuff is going to get changed in case you want to join back in.

- Just take a note first of all the tabs on the left you can click. Starting with "Files" on top until "Settings" on the bottom. Good. I'm just telling to start paying attention.
- Copy one of the hashes above where your suit is located and navigate to the "game contents" tab.
- Paste your hash in the search bar on top. (Blood money suit was released in Season 1, so I pick the S1 suits hash. If you don't know for sure, take a guess or look it up.)  
- You should get a file tree ending in a single file called `randomwords.sweetmenutext].pc_localized-textlist`. It has a language or translation icon.  
- Click it and you will see a "Preview" text box on the right and some additional info about the file on top. Confirm it’s a LOCR file and take note of the "HASH" code beside it. We will need it for later.

---

### Inside the Textbox

The textbox holds every name and description of suits in one season of the game. Scroll it, see what's inside.  

1. To find the Suit name you want to modify, click inside of the textbox with your mouse and hit `Ctrl + F` on your keyboard to start search mode. Look up your suit (example: blood money).  

> Note: If you start search mode before you clicked the textbox, you will look for letters anywhere else in the program except for the box of code where your suit's name is, so just a single mouse click inside the code looking box and hit ctrl+f.

2. Now you may notice that you see your suit in multiple arrays in multiple languages. What's important is the long string beside it. No worries, the "string" of your suit is the same in each language array.  
   - **Example**:
     ```json
     "989928F2-06D6-42F3-871A-353F07DEF969_LEGACY_HERO_BLOODMONEYSUIT_M_HPA2293_NAME_": "Blood Money Suit"
     ```
   - And in German:
     ```json
     "989928F2-06D6-42F3-871A-353F07DEF969_LEGACY_HERO_BLOODMONEYSUIT_M_HPA2293_NAME_": "Blood-Money-Anzug"
     ```
   - Notice, the "string" is the same before `:` for every language.  

All we need is the long "string" inside the quotation marks.  
Copy `"989928F2-06D6-42F3-871A-353F07DEF969_LEGACY_HERO_BLOODMONEYSUIT_M_HPA2293_NAME_"` (without the quotation marks). If you haven't caught on on what a string is by now, re-read this short section and compare it to what you're looking at.

---

### Go to Text Tools

- Now go to the **Text Tools** tab on the left. Paste the string inside the "Localisation hash calculator" box. It will produce a hex and a decimal (numbers-only) code underneath. Copy the decimal number (not the hex) you get below by clicking the copy icon or copy it manually, same same. Now we have the decimal. We're halfway there. The magic happens in the manifest.  

All we need is that decimal number you just copied and the HASH line from the LOCR file earlier (you should still see it on your screen up top, hopefully).

---

### Now Stuff Is Going to Get Altered (!!!)

1. Add a comma and hit enter after another line in your manifest.  
2. Just start typing `"lo` and glacier or VS code will auto-suggest what can be used as soon as the quotation marks are placed.
3. Add the localisation override line by manually typing it in or using your mouse to click or navigating down and hitting enter on `"localisationOverrides"`.

   ```json
   "localisationOverrides": {}
   ```
   
   Every time you go inside a `{}` bracket from now on, hit enter. Keeps code visually readable.

4. Now go inside the `{}` and add the LOCR file hash to it (where all the suits were) in quotation marks and add a `:` after that and then another `{}`.

   ```json
   "localisationOverrides": {
       "yourLOCRhash": {}
   }
   ```

5. Now go inside that bracket and add a language you want to overwrite. For the sake of globality, let’s use english.  
   So type `"english"` in quotation marks and add a `:` and after that add yet another `{}` bracket. This is the last one. Use auto suggestion to quick this up. No need to manually add each bracket and quotation mark manually.

   ```json
   "localisationOverrides": {
       "yourLOCRhash": {
           "english": {}
       }
   }
   ```

Now go inside those brackets and add your converted decimal in quotation marks with a `:`. (I'm changing the name of the suit so I converted the name string to a decimal in text tools). And now you add your own text here also in quotation marks.

---

### Example

```json
"localisationOverrides": {
    "yourLOCRhash": {
        "english": {
            "yourconvertednamedecimal": "New Suit Name"
        }
    }
}
```

If you are on track and know what's happening, you should have figured out how to do the same for the description of your suit. If you want to add another overwrite for the description or maybe another suit name change from the same LOCR file, simply add a comma after the previous one and repeat the decimal step and your new text.

---

### End Result Should Be This:

```json
"localisationOverrides": {
        "yourLocrHASH": {
            "english": {
                "yourconverteddecimal": "New Suit Name",
                "yourotherconverteddecimal": "New Suit Description/or Other New Suit name"
            }
        }
    }
```

---

### Mine Looks Like This:

```json
"localisationOverrides": {
        "00985A1100E5EDDC": {
            "english": {
                "1047194709": "Blood Money Suit with Drip",
                "3718104824": "The blood money suit but with extra style. No other suit can compete compared to this one"
            }
        }
    }
```

---



### Adding French

Simply add a comma after your english bracket and use another language.

```json
"localisationOverrides": {
        "00985A1100E5EDDC": {
            "english": {
                "1047194709": "Blood Money Suit with Drip",
                "3718104824": "The blood money suit but with extra style. No other suit can compete compared to this one"
            },
            "french": {
                "1047194709": "Costume d'argent du sang avec goutte à goutte",
                "3718104824": "Le costume de l'argent du sang mais avec un style supplémentaire. Aucune autre combinaison ne peut rivaliser avec celle-ci"
            }
        }
    }
```

[If you are catching on, you should have noticed that the game file uses the exact same coding grammar (idk what to call it; "the bracket system")?]
No need to convert any strings again either since they’re the same in each `{array}` in the game file. Unless you add new suit names or descriptions with different strings attached to them, you have to convert them to decimal again. If you didn't understand this sentence, you were not paying attention or expected this tutorial to do everything for you.  

---

If you want to make changes to another LOCR file, just add a comma after the first LOCR bracket ends and repeat the same steps inside of it. You can't use a double localisationOverrides line in your manifest. Example:

```json
"localisationOverrides": {
        "yourLocrHASH": {
            "english": {
                "yourconverteddecimal": "New Suit Name",
                "yourotherconverteddecimal": "New Suit Description/or Other New Suit name"
            }
        },
        "otherLocrHASH": {
            "english": {
                "someconverteddecimal": "More New Suit Name",
                "someotherconverteddecimal": "More New Suit Description/or Other More New Suit name"
            },
            "spanish": {
                "someconverteddecimal": "Más nombre de traje nuevo",
                "someotherconverteddecimal": "Más descripción del traje nuevo/u otro nombre del traje más nuevo"
            }
        }
    }
```

The reason why "spanish" is used here and not "español" is because the manifest schema is coded in English. For all languages to use in the manifest, see the manifest info in SMF. It's the book icon on the left.

---

If the text you are looking for isn’t there (warning, advanced searches are Case sensitive), go to the next article. It's a very short one.  

Let's find the text we want to modify by looking up the words used in the text we want replaced. Open GlacierKit and click on "Advanced search" on the left. It’s a magnifying icon. Enable only chunk0. That’s where the suits are and so is the text usually. No need to look over the whole game. Only select chunk0 and the checkbox "localisation". Type what needs to be replaced. Example: "blood money" is wrong and will only give us a single dialogue line from some random conversation. I have to look up "Blood Money". You can search multiple times. You can see that in the bar below where it’s doing a search task. Type in as many as you want. This might take a while, hence why we only search in one chunk.  
If search is done, it's important you need a LOCR file. Find your text inside the same way and follow along from there