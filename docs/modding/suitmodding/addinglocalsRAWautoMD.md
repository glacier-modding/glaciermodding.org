---
sidebar_position: 5  
description: Changing the suit's name and description  
---

# Adding Localisation Overrides

In this tutorial, you’ll learn how to modify suit names and descriptions in the game using **localisation overrides**. 

You will need: 
- **GlacierKit**
- **manifest file**  
- (Optionally) install **VS code** and use a ***"schema"*** in your manifest

    ```json
     "$schema": "https://raw.githubusercontent.com/atampy25/simple-mod-framework/main/Mod%20Manager/src/lib/manifest-schema.json"
     ```
---

In short, this is what you will do:

1. **Locate the Suit's LOCR File** by identifying the relevant hash.
2. **Extract the Strings** for the suit’s name and description.
3. **Convert the Strings** into a **decimal number** using GlacierKit.
4. **Add Localisation Override code** to the manifest.
5. Save and Deploy changes.

Start by opening your project/mod in **Glacierkit**. 

---

## Pt. 1: **LOCATE YOUR LOCR** 
*A **LOCR file** is basically a "container" for the game's text you see in game.* 

### 1. Identify your LOCR
Almost all **localisation** (text on screen) are inside these **LOCR files**. Below are some of their **HASH** lines: 
- Season 1 suits`00985A1100E5EDDC`, 
- Season 2 suits`009F430D046716BE` ,
- Season 3 suits:`004B8C5124A49543` 
>You can interpret **HASH** lines as a file's specific address or coordinates. They are the file's *unique identifiers* 

### 2. Go to your LOCR  
- Go to the *game contents* tab on the left
- copy and paste your relevant **HASH** on the search bar and hit enter. 

You'll see a map tree leading to a **LOCR file**.
:::tip LOCR FILE

A **LOCR file** can be identified with 2 attributes:
    - named like `randomwords.sweetmenutext].pc_localized-textlist` 
    - having a language or translation icon.
:::
- Open it 
>by clicking on it. -_-

### 3. Confirm your LOCR
You will see a *Preview* text box with code on the right and some **additional info on top** about the **LOCR file** you opened.

Confirm it by checking if you have
- **LOCR file** and 
- **HASH** code beside it.

:::info advanced SEARCH
To speed up the process of finding the names and descriptions of suits, I have given the relevant file's **HASHES** for now.  
Later I will explain how to locate any *other text in-game* in the [**advanced search**](#advanced-search) section.  
>After reading that, you will never struggle looking for *any other text* by finding their respective **LOCR files**.  
:::

---
#### Part 1: Glossary
- **LOCR File**: 
- **HASH**:
- **Localisation**: 
- **Preview text box**:
- 

---

## Pt. 2: **GET YOUR STRING**
*Every line of code in the text box consists of a **string** attached to the actual **text you see in-game**.* 

Lets break a line down to understand the parts better.

 Example of a suit's name:
 ```json
 "989928F2-06D6-42F3-871A-353F07DEF969_LEGACY_HERO_BLOODMONEYSUIT_M_HPA2293_NAME_": "Blood Money Suit"
 ```
    - The **string** is: `989928F2-06D6-42F3-871A-353F07DEF969_LEGACY_HERO_BLOODMONEYSUIT_M_HPA2293_NAME_`
    - and the **text you see in-game** is: `Blood Money Suit`

### 1. Find your Suit
To find the suit name you want to modify easily you will have to enter search mode. To do that: 
- Click inside the text box of code and press `Ctrl + F` to open the search function.
- type in your suit's name 
:::warning Search Mode
If you don’t click inside the text box first, the search won’t work properly and may look for text elsewhere in **GlacierKit**.
:::

 
### 2. Copy the string
*You will only need the **string** for the next part so copy it without the quotation marks!*

Like so:
`989928F2-06D6-42F3-871A-353F07DEF969_LEGACY_HERO_BLOODMONEYSUIT_M_HPA2293_NAME_`
:::info multi-lingual
Try pasting your copied **string** in the search box.

You will see your **string** attached to multiple languages of your suit's name. 
This shows that a **string** is always the same for each language `{array}`. 
>This is relevant for later!
:::
([Click to return to "Adding More Languages](#6-optionally-add-more-languages))

---

## Pt. 3: **CONVERT TO DECIMAL**
We need to convert the **string** to a **decimal number** so we can use it in our manifest.
That's what the **Text Tools** tab is for.
>Converting the string to a decimal allows us to use it as a key in the localisation override manifest.


### 1. Go to Text Tools 
- Go to the *Text Tools* tab
- Locate the **"Localisation hash calculator"** box. 
>Here you will convert your **string** and get two converted codes below it.
    > - *hex* form 
    > - **decimal** form (meaning numbers-only) of your **string**
### 2. Convert your string
- Paste your **string** inside that box
- Copy **only** the converted **decimal number** below the *hex*. 

We have all we need for the next part:
 - a **decimal number** format of our **string**
 - the **HASH** from the **LOCR file**
:::tip windows clipboard
To keep track of copied code without going back every time for each individual copied code, let's use **Windows clipboard**.

To do so, 
- click the **windows button + V** which will activate it.
- Now copy both your LOCR's **HASH** and your **decimal**.

 *It might seem overkill for 2 lines of codes but it'll pay off and it beats using notepad* 💀 
:::
---

## Pt. 4: **UPDATE MANIFEST**
*Here we will be adding a **Localisation Override** line to your manifest. It will contain:
- **HASH** of your LOCR file
- **decimal** form of your **string**
- *Your new text*
*


### 1. Add the localisation override line 

- Open your manifest
- Add this line: `"localisationOverrides": {}`

Theres 2 methods for it:
- Method 1: 
    - copying: `"localisationOverrides": {}`
    - pasting it in your manifest

 Or

- Method 2:
    - manually start typing it in starting with `"` and then continue typing
    - navigate the *suggestions menu* to find `localisationOverrides`.
    

>Either method should result in:

   ```json
   "localisationOverrides": {}
   ```
:::tip using "suggestions"
You now know how to use the **suggestions feauture**. It will auto-complete most of the tedious functions in the following steps like:
- adding **"quotes"**, 
- adding one of these `:`
- **manually spacing** lines to keep your code readable, like **having to hit enter**. 
- and more

>Suggestions will show up as soon as you type a **quote** `"`


:::

### 2. Insert LOCR HASH 
- Place the **LOCR hash** inside the curly brackets in "quotes" and add another `:` and `{}`

Result:

   ```json
   "localisationOverrides": {
       "yourLOCRhash": {}
   }
    ```
:::info Syntax
If you're paying attention, you might notice that we're setting up the ***LocalisationOverrides*** code in the manifest just like our **LOCR file** where we got the **strings** from. 
Both will be using the same **syntax**.

***Syntax***: 
>A set of rules that define how code is written and organized.
    
    *Even better too if you already have noticed how similar this method is to the previous [***blobs*** article at step 2](addingblobs.md#step-3-set-up-a-blobs-folder) if you recall ***blobsFolders***.*
:::

### 3. Set your language

- Add `"english": {}` to indicate which language to override.

   Result:
   ```json
   "localisationOverrides": {
       "yourLOCRhash": {
           "english": {}
       }
   }
   ```


### 4. Add your decimal and text
- Inside the language brackets, paste your **decimal number** in "quotes"
- Add your new text... Also in "quotes".

Result:
```json
"localisationOverrides": {
    "yourLOCRhash": {
        "english": {
            "yourconvertednamedecimal": "New Suit Name"
        }
    }
}
````



### 6. (Optionally) Add more languages
#### Same Strings:
In [Part 2](#2-copy-the-string) of the tutorial you might have seen how **strings** work in each **language array**
>The takeaway was that the **strings** are the **same in each language** `{array}`
This will make adding languages for each entry very easy.
    

To support more languages, simply:
- add a comma after your english bracket 
- make another **language bracket** 
- add the **same decimal** and add your text


Example of a new language line:

```json
"localisationOverrides": {
        "yourLocrHASH": {
            "english": {
                "yourconverteddecimal": "New Suit Name"
            },
            "french": {
                "yourconverteddecimal": "Niveua Costume nome"
            }
        }
    }
```


:::warning language codes
- The reason why "french" is used here and not "français" is because the manifest schema is coded in English. 
- As for why it doesn't use the same **language codes** as the actual **LOCR files** like `en` or `fr`, is because the manifest schema is coded like that. 

To see how all languages have to be written down in the manifest, see the ***manifest info*** in **SMF**. 
>It's the book icon on the left after enabling developer mode.
Or [click here](#all-languages)
:::
### 7. Add the description
Now try the same for the description as well.
To add **another string** from the **same LOCR** file:

- **convert the string** in **Text Tools**
- add your **newly converted decimal** with the new text you want it to have
- *(Optionally)* add another language for the new description as well

Example:
```json
"localisationOverrides": {
        "yourLocrHASH": {
            "english": {
                "yourconverteddecimal": "New Suit Name",
                "yourotherconverteddecimal": "New Suit Description"
            },
            "french": {
                "yourconverteddecimal": "Niveua Costume nome",
                "yourotherconverteddecimal": "Description du nouveau costume"
            }
        }
    }
```


### 6. Save & Deploy! 
You're all done. Next up is to save the changes you made in your manifest and deploy your mod.

- Click the little save icon (it's a floppy disk) on top or click **ctrl+S** on your keyboard. 
- Deploy your mod in **SMF** 

:::success
You’ve successfully replaced the suit name and description in the game with your own custom text. Now, when you load up the game, your new text will appear in place of the default one. 

*Looking good, man!* 
::: 

---
## More on LocalisationOverrides

### Adding more LOCR files
If you want to make changes to **another LOCR file** too, just do the same as you did with the language bracket but apply it to the **LOCR bracket** instead

- add a comma after your previous **LOCR bracket** 
- Repeat the steps with your **new LOCR file** by giving it a new entry
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
To close this article and see every technique applied here, lets take an example of another mod's manifest that has covered every single aspect of this article:


INSERT BIG MANIFESTO HERE (This part might be unnecasry with the code above and might be too much code to skim thorugh)

### Advanced Search
([Return to Part 1](#3-confirm-your-locr))

If the text you are looking for isn’t there (warning, advanced searches are Case sensitive), 
Let's find the text we want to modify by looking up the words used in the text we want replaced. Open GlacierKit and click on "Advanced search" on the left. It’s a magnifying icon. Enable only chunk0. That’s where the suits are and so is the text usually. No need to look over the whole game. Only select chunk0 and the checkbox "localisation". Type what needs to be replaced. Example: "blood money" is wrong and will only give us a single dialogue line from some random conversation. I have to look up "Blood Money". You can search multiple times. You can see that in the bar below where it’s doing a search task. Type in as many as you want. This might take a while, hence why we only search in one chunk.  
If search is done, it's important you need a LOCR file. Find your text inside the same way and follow along from there
#### All languages
[Return to tutorial](#6-optionally-add-more-languages)

These are all the language codes for the manifest that can be used;
- `"english"`
- `"french"`
- `"italian"`
- `"german"`
- `"spanish"`
- `"russian"`
- `"chineseSimplified"`
- `"chineseTraditional"`
- `"japanese"`