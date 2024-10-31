---
sidebar_position: 5  
description: Changing the suit's name and description  
---

# Adding Localisation Overrides

In this tutorial, you’ll learn how to modify suit names and descriptions in the game by using localisation overrides. 

You will need: 
- **GlacierKit**
- **manifest file**  
:::note ***Optionally***
install **Visual Studio code** to edit your manifest with this ***"schema"***
    ```json
     "$schema": "https://raw.githubusercontent.com/atampy25/simple-mod-framework/main/Mod%20Manager/src/lib/manifest-schema.json"
     ```
- Copy and paste that in your manifest and **Visual Studio Code** will then know what the manifest can and can't contain.
:::

---

In short, this is what you will do:

1. **Locate the Suit's LOCR File** by identifying the relevant hash.
2. **Extract the Strings** for the suit’s name and description.
3. **Convert the Strings** into a **decimal number** using GlacierKit.
4. **Add Localisation Override code** to the manifest.
5. Save and Deploy changes.

Start by opening your project/mod in **Glacierkit**. 

---

## 1. **LOCATE YOUR LOCR FILE** 
A **LOCR file** is basically a container for the game's text you see in game. All the text you see in game are controlled by **strings** inside of them. More on that later.

### 1. Get your LOCR file
Almost all **localisation** (text on screen) for reward suits are in these **LOCR files**. Below are some of their **HASH** lines:  
- Season 1 suits`00985A1100E5EDDC`, 
- Season 2 suits`009F430D046716BE` ,
- Season 3 suits:`004B8C5124A49543` 

### 2. Go to your LOCR file  
- Simply copy one of the **HASH** lines where your suit is located 
- Go to the *game contents* tab on the left
- Paste your copied **HASH** on the search bar and hit enter. 
:::tip LOCR FILE
You should see a single file
    - named like this `randomwords.sweetmenutext].pc_localized-textlist` 
    - with a language or translation icon.
>This is called a **LOCR file**. This one holds the names and descriptions of suits from a specific "season". 
:::
- Open it by clicking on it.



### 3. Confirm your LOCR file
You will see a *Preview* text box with code on the right and some additional info about the file you clicked on top. Confirm it’s a **LOCR file** and take note of the ***HASH*** code beside it. We will need it for later.

:::info advanced SEARCH
To speed up the process of finding the names and descriptions of suits, I have given the relevant file's **HASHES** for now.  
Later I will explain how to locate any *other text in-game* in the **advanced search** section.  
>After reading that, you will never struggle looking for *any other text* by finding their respective **LOCR files**.  
:::


---

## 2. GET YOUR STRING
Every line of code in the text box consists of a **string** attached to the actual **text you see in-game**. 
 Example:
 ```json
 "989928F2-06D6-42F3-871A-353F07DEF969_LEGACY_HERO_BLOODMONEYSUIT_M_HPA2293_NAME_": "Blood Money Suit"
 ```
    - The **string** is: `989928F2-06D6-42F3-871A-353F07DEF969_LEGACY_HERO_BLOODMONEYSUIT_M_HPA2293_NAME_`
    - and the **text you see in-game** is: `Blood Money Suit`

### 1. Find your Suit
To find the suit name you want to modify easily you will have to enter search mode. To do that: 
- click inside of the textbox with your mouse
- hit `Ctrl + F` on your keyboard
- type in your suit's name 

You'll notice that your suit's name and description is attached to a similar **string**
 
### 2. Copy the string
You only need the **string** for the next part so copy it
>Don't include the quotation marks!

:::warning Search Mode
If you start search mode without clicking the textbox, you will look for letters anywhere else in **GlacierKit** except for the box of code where your suit's name and description is.
:::
---

## 3. CONVERT TO DECIMAL
We first have to convert our **string** into a ***decimal*** before we can effectively use it in the manifest later. That's what the **Text Tools** tab is for.
>Converting the string to a decimal allows us to use it as a key in the localisation override manifest.


### 1. Go to Text Tools 
- Go to the *Text Tools* tab on the left
- Look for the **"Localisation hash calculator"** box. 
>Here you will convert your **string** and get two converted codes below it.
### 2. Convert your string
- Paste your **string** inside the box that says *Localisation hash calculator*
>It now produced *a hex* and a **decimal** form (meaning numbers-only) of your **string**
- Copy **only** the converted **decimal number** which is below the *hex*. 
:::tip clipboard
We have all we need for the next step:
 - a **decimal number** from a **string**
 - the **HASH** from the **LOCR file** where we will alter the text

To keep track of copied code without going back every time for each individual copied code, let's use **Windows clipboard**.

To do so, 
- click the **windows button + V** and you should see a new window appear.
- Now copy both your LOCR's **HASH** and your **decimal**. They will appear right below each other.
- You can close **Windows clipboard** and open it again with the same shortcut. The copied code won't dissapear

>It seems overkill for 2 lines of codes but it'll pay off and it beats using notepad 💀 
:::
---

## 4. UPDATE MANIFEST
Here we will be adding a **Localisation Override** line to your manifest. It will contain:
- **HASH** of your LOCR file
- **decimal** form of your **string**
- *Your new text*


### 1. Add the localisation override line 
Open your manifest and add the line by:


- Either 
    - copying: `"localisationOverrides": {}` and 
    - pasting it in your manifest
- Or
    - manually start typing it in starting with `"` and then continue typing
    - navigate the *suggestions menu* to find `localisationOverrides`.
    - and hit enter or click it with your mouse to get the result below

   ```json
   "localisationOverrides": {}
   ```
:::info "suggestions"
The suggestions function is only supported in **GlacierKit** or in **VS Code** with a ***schema***.
:::


### 2. Add your LOCR HASH 
- Go inside the `{}` and hit enter
- add the **HASH** from the **LOCR file** to it in quotation marks
- add a `:` after that and then another `{}`.
Result:

   ```json
   "localisationOverrides": {
       "yourLOCRhash": {}
   }
    ```

### 3. Set your language

Now go inside that bracket and specify a **language you want to overwrite**. Let’s use English. 

   So type: 
   - `"english"` in quotation marks 
   - add a `:` 
   - add yet another `{}` bracket. This is the last one.

   Your result:
   ```json
   "localisationOverrides": {
       "yourLOCRhash": {
           "english": {}
       }
   }
   ```


### 4. Add your decimal


Now go inside those brackets and **add your converted decimal** in quotation marks with a `:`. 
```json
"localisationOverrides": {
    "yourLOCRhash": {
        "english": {
            "yourconvertednamedecimal": 
        }
    }
}
```

### 5. Place your new text
After your **decimal**, you can place any text you want to be reflected in the game but it has to be in quotes

```json
"localisationOverrides": {
    "yourLOCRhash": {
        "english": {
            "yourconvertednamedecimal": "New Suit Name"
        }
    }
}
````

Now try the same for the description as well.

To add **another string** from the **same LOCR** file:
- **convert the string** for the descrption of your suit
- add a comma and hit enter in the manifest
- add your **newly converted decimal** 

Example:
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
:::info Structure
>If you're on track, you should have noticed that the *LocalisationOverrides* code in the manifest is set up just like our **LOCR file** where we got the strings from, using/in terms of the exact same coding grammar(what do i call that)
    
    *Even better if you have also have noticed how similar this method is to the previous ***blobs*** article.*
:::

### 6. Save & Deploy!
Click the little save icon (it's a floppy disk) on top or click **ctrl+S** on your keyboard. Deploy your mod in **SMF** and your new suit name and description will appear in place of the default one.

:::success
*Looking good, man!* 

You’ve successfully replaced the suit name and description in the game with your own custom text. Now, when you load up the game, your new text will appear in place of the default one. 
>Don't close **GlacierKit** just yet if you already are moving on to the next topic below.
::: 

---
## More on LocalisationOverrides

### Adding More Languages

To add more language support for your new suit, simply:
- add a comma after your english bracket 
- add another language bracket holding the **same decimal** of your string.
:::info same strings
LIf you paid attention in step 2, you may have seen your suit in multiple arrays in different languages. 
    But the **string** of specifically your suit' name is the same in each language array!  
:::
```json
"localisationOverrides": {
        "yourLocrHASH": {
            "english": {
                "yourconverteddecimal": "New Suit Name",
                "yourotherconverteddecimal": "New Suit Description/or Other New Suit name"
            },
            "french": {
                "yourconverteddecimal": "Niveua Costume nome",
                "yourotherconverteddecimal": "Le costume de l'argent du sang mais avec un style supplémentaire. Aucune autre combinaison ne peut rivaliser avec celle-ci"
            }
        }
    }
```
:::info Same STRINGS
No need to convert any strings again either since they’re the same in each `{array}`, remember? Unless you add **new suit names or descriptions** with **different strings** attached to them, you will have to **convert those to decimal again** and just add them inside your **current LOCR array**. 
>If you didn't understand this sentence, you were not paying attention and expected this tutorial to do everything for you. Not looking good, man!  
:::
---
### Adding more LOCR files
If you want to make changes to another LOCR file too, just do the same as you did with the language bracket: 
- add a comma after your previous **LOCR bracket** 
- Repeat the steps with your **new LOCR file**
- Repeat the **string** conversion to get **new decimals**

example:
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
                "somenewconverteddecimal": "More New Suit Name",
                "someotherconverteddecimal": "More New Suit Description/or Other More New Suit name"
            },
            "spanish": {
                "somenewconverteddecimal": "Más nombre de traje nuevo",
                "someotherconverteddecimal": "Más descripción del traje nuevo/u otro nombre del traje más nuevo"
            }
        }
    }
```
:::note language codes
- The reason why "spanish" is used here and not "Español" is because the manifest schema is coded in English. 
- As for why it doesn't use the same language codes as the actual **LOCR files**, i have no clue either. To see how all languages have to be written down in the manifest, see the **manifest info in SMF**. 
>It's the book icon on the left after enabling developer mode. This info will be hammered in, many times.
:::

Let's take a look at a manifest from a mod that has covered every angle of this article for a proper example of everything this article has covered.
To close this article and see every technique applied here, lets take an example of another mod's manifest that has covered every single aspect of this article:


INSERT BIG MANIFESTO HERE

Now to test this with any text in this 
---

If the text you are looking for isn’t there (warning, advanced searches are Case sensitive), go to the next article. It's a very short one.  

Let's find the text we want to modify by looking up the words used in the text we want replaced. Open GlacierKit and click on "Advanced search" on the left. It’s a magnifying icon. Enable only chunk0. That’s where the suits are and so is the text usually. No need to look over the whole game. Only select chunk0 and the checkbox "localisation". Type what needs to be replaced. Example: "blood money" is wrong and will only give us a single dialogue line from some random conversation. I have to look up "Blood Money". You can search multiple times. You can see that in the bar below where it’s doing a search task. Type in as many as you want. This might take a while, hence why we only search in one chunk.  
If search is done, it's important you need a LOCR file. Find your text inside the same way and follow along from there