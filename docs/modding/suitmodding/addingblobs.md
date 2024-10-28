---
sidebar_position: 3
description: Modifying an image in the menu
---
To continue on the adding parts page, you'll likely also want to modify the image in the menu to show the difference, change the suit's name and even add in your own suit's descritpion of it. I'll also mention a potential issue that arises when adding parts to your suit that dont come from a similiar chunk which will have to be addressed in the manifest. If you haven't read the documentation on manifest and other things in SMF (the little book icon on the left that shows up when you enable developer mode), I Suggest you read that and come back for bettter clarification after. I also advise to go back and forth between reading that, the tutorial pages on this site and modding yourself over time, so things start making more sense and you can practice in the meanwhile.

---

# Part 1: Blobs

## Step 1: Locate the Suit in RPKG

1. Open **RPKG** 
(or **GlacierKit**, but for this guide, we’ll stick with RPKG for convenience. The repo's file hash is 00204D1AFD76AB13 if you are a bit familiar with Glacier already).
2. In RPKG, click on **"Import"** in the top left corner.
3. Select **"Import RPKGs folder"** and locate your Hitman 3 runtimes folder (it usually looks like this: `D:\SteamLibrary\steamapps\common\HITMAN 3\Runtime`).
4. Once the folder is imported, click on the big **"REPO"** button next to **"Resource Overview"**.
5. Then, click **"Load REPO from RPKGS folder"**. Now you’ll see everything neatly ordered with a good overview.

## Step 2: Find Your Suit

1. Expand the **Outfits** section.
2. Find the suit you modified, the one for which you want to change the picture in the game menu. Type in a keyword (example: "bloodmoney")
3. Click on the suit, and look at the text box on the right-hand side.  
   There will be a code starting with **"Image:"**. For example:  
   ```json
   "Image": "images/unlockables_override/47_outfits_bloodmoney_gloves.jpg"
   ```
4. Remember the **file name** and **file path** ("images/unlockables_override/" in this case).

> Keep RPKG open, you’ll need it in the next steps.

---

## Step 3: Set Up the Blobs Folder

1. Open your mod folder and create a folder called **"blobs"** in the root directory (where your manifest is located).
2. In **"blobs"** (or whatever you want to name it), create folders that match the path you found in RPKG.
   - For example, if the path was `"images/unlockables_override/"`, the folder structure should look like this:  
     `blobs/images/unlockables_override/`
3. Place your custom image inside this folder.  
   - The file must have the **exact same name** and file **type** as the original.  
   - For example:  
     `blobs/images/unlockables_override/47_outfits_bloodmoney_gloves.jpg`

> You can use any image you like, as long as it’s in `.jpg` format (no `.png` or other formats allowed). Change the file extension manually if needed to `.jpg`.

---

## Step 4: Update the Manifest

1. Open your mod’s **manifest** file.
2. Add the following line to refer to the **blobs** folder:
   ```json
   "blobsFolders": ["blobs"]
   ```
3. If you named your "blobs" folder something else (e.g., "MyCustomImages"), you’ll need to adjust this line accordingly, but make sure the internal folder structure and file names match exactly. You can do this for any image in the game, as long as you find the image path and the image's name. If there are multiple images with the same mapping, you can just add them in there alongside the bloodmoney image. Just follow the naming convention too.

---

That's it! You’ve successfully replaced the suit’s image in the game with your own custom picture. Now, when you deploy your mod and load up the game, your new image will appear in place of the default one. Don't close RPKG yet if you already are moving on to the next article. It'll make things alot quicker

--- 

