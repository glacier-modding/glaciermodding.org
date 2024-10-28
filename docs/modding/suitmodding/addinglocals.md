To improve clarity and structure in the article, I’ll organize the information in a more logical flow. The goal will be to avoid overwhelming the reader with too much technical detail upfront and to guide them step-by-step, with each section focusing on one aspect of the process. Here's a revised version:

---

# Part 2: Localisation Overrides

In this section, we'll focus on changing the **suit name and description** in the game by modifying the localisation files. You will need **GlacierKit** and a mod folder with a manifest file, but no content files are required. Everything will be handled through the manifest.

If you’re editing the manifest using **GlacierKit**, it will auto-suggest code to keep things clean and help reduce errors.

### Prerequisites

Before we begin, there are a few tools and optional recommendations that will make this process easier:

1. **Required Tools**:
   - **GlacierKit** for editing your mod.
   - A mod folder that contains a **manifest** file.

2. **Recommended Tools** (optional but helpful):
   - **Visual Studio Code (VS Code)**: This makes editing files easier and cleaner.
   - **Manifest Schema**: Adding this to your manifest file will allow VS Code to check for errors automatically. Add this schema at the top of your manifest:
     ```json
     "$schema": "https://raw.githubusercontent.com/atampy25/simple-mod-framework/main/Mod%20Manager/src/lib/manifest-schema.json"
     ```
   - If you’re using GlacierKit, it will handle much of the code suggestions and format checks.

> **Note:** It might seem overkill to install Visual Studio Code for this tutorial, but you’ll appreciate the cleaner interface and error-checking features as you continue modding.

---

## Overview of the Process

Here’s a simple summary of what we’ll be doing:

1. **Identify the suit** you want to modify by locating the appropriate LOCR file.
2. **Find the string** representing the suit's name and description.
3. **Convert the string** into a decimal number using GlacierKit.
4. **Modify the manifest** by adding a localisation override for the new name and description.
5. **Save and deploy** your changes.

---

## Step 1: Find the LOCR File for Your Suit

Most suit names and descriptions are stored in **LOCR files**. These files hold all the text for different items in the game, including reward suits.

Each season has its own LOCR file, and we’ve already narrowed down the ones you’ll need:
- **Season 3 Suits**: `004B8C5124A49543`
- **Season 2 Suits**: `009F430D046716BE`
- **Season 1 Suits**: `00985A1100E5EDDC`

> **Tip**: If you’re not sure which season your suit belongs to, either make an educated guess or do a quick online search.

### Finding the Suit

1. Open **GlacierKit** and click the **"Open Project"** button.
2. Navigate to your mod folder inside the **SMF folder** in your game’s contents.
3. Use the **"Game Contents"** tab to paste one of the hashes above in the search bar. This will bring up the relevant LOCR file. For example, if you’re modifying a suit from Season 1, use the hash `00985A1100E5EDDC`.
4. When the search completes, you’ll see a file tree ending in a file with a **language icon** (e.g., `randomwords.sweetmenutext].pc_localized-textlist`). This is your LOCR file.

---

## Step 2: Extracting the Suit’s Name and Description

Now that you have the LOCR file, you need to find the specific string representing the suit you want to modify.

### Finding the Suit in the LOCR File

1. **Open** the LOCR file in GlacierKit, and a **preview text box** will appear on the right side.
2. Scroll through the text or use `Ctrl + F` to search for the suit’s name (for example, "Blood Money Suit").
   
   You will see the suit's name appear multiple times in different languages, but the important part is the **string** associated with the name, which will look something like this:
   ```json
   "989928F2-06D6-42F3-871A-353F07DEF969_LEGACY_HERO_BLOODMONEYSUIT_M_HPA2293_NAME_": "Blood Money Suit"
   ```
   The string before the `:` is the same for each language. **Copy** this string (without the quotation marks), as it will be needed for the next step.

---

## Step 3: Convert the String to a Decimal Number

Now that you have the string, the next step is to convert it into a decimal number.

1. Go to the **Text Tools** tab in GlacierKit.
2. Paste the string into the **Localisation Hash Calculator**. This will generate two codes: a **hex code** and a **decimal code**.
3. **Copy** the **decimal number** (not the hex). We’ll use this in the manifest.

---

## Step 4: Modify the Manifest

Now that you have the decimal number, we can begin modifying the manifest.

1. **Open your manifest file** in GlacierKit or Visual Studio Code.
2. In the manifest, add the following block of code to create a **localisation override**:
   ```json
   "localisationOverrides": {}
   ```
   Hit **Enter** to keep your code readable.

3. **Insert the LOCR file hash** from the file you opened earlier. It will look something like this:
   ```json
   "localisationOverrides": {
       "00985A1100E5EDDC": {}
   }
   ```

4. Now, specify the **language** you want to override (e.g., `"english"`). Inside the language block, insert your **decimal number** and the **new suit name** in quotation marks:
   ```json
   "localisationOverrides": {
       "00985A1100E5EDDC": {
           "english": {
               "1047194709": "New Suit Name"
           }
       }
   }
   ```

5. If you also want to change the **suit description**, repeat the process by adding the decimal and the new text for the description.

Here’s an example of both a name and description override:
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

---

## Step 5: Add Multiple Languages or LOCR Files (Optional)

If you want to add overrides for multiple languages, follow the same structure. For example, here’s how you can add French translations:

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

### Adding Another LOCR File

If you want to modify another LOCR file, you can add additional entries in the `"localisationOverrides"` section. Simply separate them with a comma. Here’s an example of adding another LOCR file:

```json
"localisationOverrides": {
    "00985A1100E5EDDC": {
        "english": {
            "1047194709": "Blood Money Suit with Drip",
            "3718104824": "The Blood Money suit but with extra style."
        }
    },
    "004B8C5124A49543": {
        "english": {
            "987654321": "Another Suit Name"
        }
    }
}
```

---

## Step 6: Save and Deploy

After you’ve made all your changes, save the manifest file and deploy the mod as you normally would. Your suit names and descriptions will now be updated in-game.

---

With these steps, you should be able to modify suit names, descriptions, and other localisation text easily. Don’t hesitate to experiment with other text in the game once you’re comfortable!

---

This version is more structured, gradually introducing the steps with clear explanations. Let me know if this feels clearer and easier to follow!