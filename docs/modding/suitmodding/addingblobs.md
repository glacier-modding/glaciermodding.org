---
sidebar_position: 3
description: Modifying an image in the menu

---
# Adding Blobs


To continue on the previous adding/patching of parts article from before, you'll likely also want to;
- modify the image in the menu to reflect the changes you've made 
- change the suit's name in the menu
- and even add in your own custom description for your suit. 

I'll also be mentioning a potential issue that arises when you're trying to
- add parts to your suit that don't come from a reward suit chunk (chunk0) which will have to be solved in the manifest. 

>First up, let's try changing just the image in the menu with your custom image. These are called **"blobs"**

:::info Hold up
If you haven't yet read the documentation on the manifest and other things in SMF (the little book icon on the left that shows up when you enable developer mode), I suggest you read those or atleast skim through them and come back for more clarification. I also advise to go back and forth between reading those, the tutorial pages on this site and modding yourself over time, so things start making more sense while you practice modding for the game.
Below is another great resource site for understanding the engine of hitman WOA. It's very abstract at the moment without any practical examples, but it explains how systems functions in the engine. Not necessary for now but 
definitely worthy of bookmarking.

https://hitman-resources.netlify.app/documentation
:::


---

## Step 1: Locating the Suit

There are 2 methods for this part. I'll do **RPKG** first since it's a bit more easier to find and confirm your image directly. I still suggest you try the **GlacierKit** method too for reasons I will explain later on.

### Method 1: Using RPKG

1. Open **RPKG** 
2. In **RPKG**, click on ***Import*** in the top left corner.
3. Select ***Import RPKGs folder*** and locate your Hitman 3 runtimes folder (it usually looks like this: `D:\SteamLibrary\steamapps\common\HITMAN 3\Runtime`).
4. Once the folder is imported, click on the big ***REPO*** tab button next to ***Resource Overview***.
5. Then, click ***Load REPO from RPKGS folder***. Now you’ll see everything neatly ordered with a good overview of each category.
6. Expand the ***Outfits*** section below. Search for your outfit there. Or use the search bar on top.

>You can leave open your **RPKG** program after finding your suit

### Method 2: Using GlacierKit

1. Open **GlacierKit**
2. Select the ***game contents*** tab on the left. 
3. Paste the repo's file hash, which is ***00204D1AFD76AB13***, on the search bar and hit enter.
   
   Or 
   simply type ***pro.repo***.

   You should now see a single file called **pro.repo**. 
   
:::tip
You now know the exact name of the file. Next time you want to open the repository in **Glacier** just type ***pro.repo*** and it should lead you to the same file instead of having to copy and paste the hash you saw earlier each time. This is an important file you'll be using more.
:::

4. Open it by clicking it and then click on ***Open in editor*** in the new menu on the right.

5. You can then start searching for your suit below in the ***Unmodified section***.

:::note
**GlacierKit**, unlike **RPKG**, doesn't display the pictures when clicking on files in the repository 

*BUT*

the **repository code** lines you see on the right are the exact same in both programs for similar files.
So let's confirm wether you have found the right picture.
:::

6. Double check if you have the right suit selected.
To do so, simply 

- find the correct image code line that starts with ***"Image":".....*** on the right.

Example of a full image code: 
   ```json
   "Image": "images/unlockables_override/47_outfits_bloodmoney_gloves.jpg"
   ```

- copy the ***assembly path*** 

You only have to copy the *assembly path* after **image:** without the quotation marks like so:
   ```json
   images/unlockables_override/47_outfits_bloodmoney_gloves.jpg
   ```

- Paste that in the **search bar** in the ***game contents*** tab on the left 
- and hit enter on your keyboard.


If the image you found matches the suit you want to modify, you're all set for the next step and you can go back to your repo file. (Where you got the code).


>You can leave open your **GlacierKit** program after finding your suit


:::info Sticking to GlacierKit
These are the 2 methods to find your suit's image. It's highly advised to use **GlacierKit** as much as possible because that's where you'll do most of your modding in the future. 

While **RPKG** does have its usecases, they become deminishing the more advanced you get with modding. This is one tiny example where I prefer to use **RPKG** alongside **GlacierKit** just because the images load up with each file in the repository.
This is a very rare case where ***RPKG*** looks more streamlined than ***GlacierKit*** but this couldn't be further from the truth.
However, I still advise to try finding your suit's image using both methods to get familiar with each program and the game files in general.
:::

## Step 2: Find Your Suit's image

1. After opening the repository and locating the correct suit in one of the programs, locate the image code from your suit, which is displayed on the right. 

   (You should have already found it with the Glacier method)

2. I repeat, click on your suit, in either program, and look at the text box of code on the right-hand side. This code you see will be identical in each program.
   There will be a line of code starting with *"Image":"....* 

:::example
   For example:  
   ```json
   "Image": "images/unlockables_override/47_outfits_bloodmoney_gloves.jpg"
   ```
:::

4. Remember the **file path** ("images/unlockables_override/") and 
   **file name** (47_outfits_bloodmoney_gloves.jpg).

:::warning
Keep **RPKG** or **GlacierKit** open, you’ll need it in the next steps.
:::

---

## Step 3: Set Up the Blobs Folder

1. Open your mod folder and create a folder called ***blobs*** in the root directory (where your manifest is located).
You can do this from inside **GlacierKit** if you opened your mod as a project in there or in **Explorer**.
2. In ***blobs***, create folders that match your suit image's assembly path you found in **RPKG** or **GlacierKit**.

   - For example, if the file path was `"images/unlockables_override/"`, the folder structure of your blobs folder should look like this:  
     `blobs/images/unlockables_override/`

3. Place your custom image inside the last folder (in this case, it's *unlockables_ooverride* ).  
   - Your image file must have the **exact same name** and file **type** as the original image file you will be overwriting.  
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

---

## Step 4: Update the Manifest

1. Open your mod’s **manifest** file.
2. Add the following line to refer to the **blobs** folder:
   ```json
   "blobsFolders": ["blobs"]
   ```
:::example
3. If you named your "blobs" folder something else (e.g., "MyCustomImages"), you’ll need to adjust this line accordingly like this:
   ```json
   "blobsFolders": ["MyCustomImages"]
   ```
 Just make sure the internal folder structure and file names of the ***assembly path*** match exactly. 
 You can do this for any image in the game, as long as you find the correct image path and the image's name in their respective ***assembly path***. If there are multiple images with the same mapping, you can just add them in there alongside your custom. Just follow the naming convention too.

:::note
To add more ***blobs*** folders, simply add a comma and the name of the new folder.

   ```json
   "blobsFolders": ["blobs","MyCustomImages","MoreBlobs"]
   ```
This is useful if your mod will have multiple options that can be toggled.
:::
---
:::success
That's it! You’ve successfully replaced the suit’s image in the game with your own custom picture. Now, when you deploy your mod and load up the game, your new image will appear in place of the default one. Don't close GlacierKit yet if you already are moving on to the next article. It'll make things alot quicker. 
:::

--- 

:::info Useful info
- You can use any image you like, as long as it’s the same file type format (`.jpg` in this case) and the name of the suit's image file is identical to the one found in the code. Including the underscores. 

- Change the file extension manually in regular **Windows Explorer** or **GlacierKit**, if needed, to `.jpg` or even `.png` in some cases. It shouldn't corrupt your image usually. 
   
   But in the very rare case it does, you can use an **image converter** (online, Photoshop, GIMP, etc...) that can **convert** and **export** your image to any other image type. 
:::

:::warning
Make sure the image that you're replacing is similar in aspect ratio by comparing your image's resolution and the one your replacing it to avoid weird strecthed images.

example: The picture of the blood money suit is in Resolution: 696x520. This is an aspect ratio of approximately 4:3.
You can only see your picture's **resolution** when opening the image in **GlacierKit**.
:::

Now try any other images in the game without looking at the full steps above.
1. Open the repository
2. Find your suit (or some other image) you want to replace and the corresponding image's ***assembly path***
3. Set up a new ***blobsFolder*** in your mod folder that will hold your custom image to overwrite the original one.
4. Add your custom images (Try more than one)
5. Add your new ***blobsfolder(s)*** in your manifest
6. Deploy and test your new images
7. Practice the steps above you couldn't complete on your own