---
sidebar_position: 3
description: Modifying an image in the menu
---
To continue on the adding parts article, you'll likely also want to modify the image in the menu to reflect the changes you've made, change the suit's name and even add in your own custom suit's descritpion. I'll also mention a potential issue that arises when adding parts to your suit that dont come from a similar chunk which will have to be addressed in the manifest. If you haven't read the documentation on manifest and other things in SMF (the little book icon on the left that shows up when you enable developer mode), I suggest you read those or atleast skim through them and come back for more clarification. I also advise to go back and forth between reading those, the tutorial pages on this site and modding yourself over time, so things start making more sense and you can practice in the meanwhile.
Here's another grat resource site for understanding the engine of hitman WOA. It's very abstract at the moment, tho.
https://hitman-resources.netlify.app/documentation



---

# Adding custom images to the menu

## Step 1: Locating the Suit

There are 2 methods to find your suit's image

### Method 1: Using RPKG

1. Open **RPKG** 
2. In RPKG, click on **"Import"** in the top left corner.
3. Select **"Import RPKGs folder"** and locate your Hitman 3 runtimes folder (it usually looks like this: `D:\SteamLibrary\steamapps\common\HITMAN 3\Runtime`).
4. Once the folder is imported, click on the big **"REPO"** button next to **"Resource Overview"**.
5. Then, click **"Load REPO from RPKGS folder"**. Now you’ll see everything neatly ordered with a good overview.
6. Expand the **Outfits** section.

### Method 2: Using GlacierKit

1. Open **GlacierKit**
2. Select the game contents tab on the left. 
3. Paste this repo's file hash, which is 00204D1AFD76AB13, on the search bar and hit enter. You should now see a single file called **pro.repo**. Open it and then click on "Open in editor".
4. You can then start searching for your suit below in the "Unmodified section".
Note that **GlacierKit** doesn't display the pictures when clicking on files you click but the code on the right is the exact same as in **RPKG**.
5. To double check if you have the right suit selected, you can simply copy the image code in **GlacierKit** on the right and paste that in the game contents tab on the left.
If the image matches the suit you want to modify, you're all set for the next step

Example of an image code to copy and paste: 
   ```json
   "Image": "images/unlockables_override/47_outfits_bloodmoney_gloves.jpg"
   ```

## Step 2: Find Your Suit


2. Find the suit you modified, the one for which you want to change the picture in the game menu. Type in a keyword (example: "bloodmoney")
3. Click on the suit, and look at the text box on the right-hand side.  
   There will be a code starting with **"Image:"**. For example:  
   ```json
   "Image": "images/unlockables_override/47_outfits_bloodmoney_gloves.jpg"
   ```
4. Remember the **file path** ("images/unlockables_override/") and **file name** (47_outfits_bloodmoney_gloves.jpg).

:::warning
Keep **RPKG** or **GlacierKit** open, you’ll need it in the next steps.
:::

---

## Step 3: Set Up the Blobs Folder

1. Open your mod folder and create a folder called **"blobs"** in the root directory (where your manifest is located).
2. In **"blobs"** (or whatever you want to name it), create folders that match the path you found in RPKG or GlacierKit.
   - For example, if the path was `"images/unlockables_override/"`, the folder structure should look like this:  
     `blobs/images/unlockables_override/`
3. Place your custom image inside this folder.  
   - The file must have the **exact same name** and file **type** as the original that is getting replaced.  
   - For example:  
     `blobs/images/unlockables_override/47_outfits_bloodmoney_gloves.jpg`
   
   Your result should look like this:
   ```
   📁YourModFolder
   ├ └── 📁blobs
   ├     └── 📁images
   ├          └── 📁unlockables_override
   ├               └── 47_outfits_bloodmoney_gloves.jpg
   ├   
   ├📁content
   ├── manifest.json
   └── project.json
   ```

:::note
You can use any image you like, as long as it’s in the same file type format (`.jpg` in this case) and the name of the suit's image is identical. Including the underscores. Change the file extension manually if needed to `.jpg` or `.png` in some cases. It shouldn't corrupt your image.
:::

---

## Step 4: Update the Manifest

1. Open your mod’s **manifest** file.
2. Add the following line to refer to the **blobs** folder:
   ```json
   "blobsFolders": ["blobs"]
   ```
3. If you named your "blobs" folder something else (e.g., "MyCustomImages"), you’ll need to adjust this line accordingly like this:
   ```json
   "blobsFolders": ["MyCustomImages"]
   ```
 but make sure the internal folder structure and file names match exactly. You can do this for any image in the game, as long as you find the image path and the image's name. If there are multiple images with the same mapping, you can just add them in there alongside the bloodmoney image. Just follow the naming convention too.

---

That's it! You’ve successfully replaced the suit’s image in the game with your own custom picture. Now, when you deploy your mod and load up the game, your new image will appear in place of the default one. Don't close GlacierKit yet if you already are moving on to the next article. It'll make things alot quicker. 

--- 

