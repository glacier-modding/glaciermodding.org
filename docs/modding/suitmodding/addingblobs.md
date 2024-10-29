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
If you haven't yet read the documentation on the manifest and other things in SMF (the little book icon on the left that shows up when you enable developer mode), I suggest you read those or atleast skim through them and come back for more clarification. I also advise to go back and forth between reading those, the documentation pages on this site and modding yourself over time, so things start making more sense while you practice modding for the game.
Below is another great resource site for understanding the engine of hitman WOA. It's very abstract at the moment without any practical examples, but it explains how systems functions in the engine. Not necessary for now but 
definitely worthy of bookmarking for later.

https://hitman-resources.netlify.app/documentation
:::


---

## Step 1: Locating the Suit in the Repository

There are 2 methods for this part. I'll do **RPKG** first since it's a bit more easier to find and confirm your image directly. I still suggest you try the **GlacierKit** method too for reasons I will explain later on.

### Method 1: Using RPKG

1. Open **RPKG** 
2. In **RPKG**, click on *"Import"* in the top left corner.
3. Select *"Import RPKGs folder"* and locate your Hitman 3 runtimes folder (it usually looks like this: `D:\SteamLibrary\steamapps\common\HITMAN 3\Runtime`).
4. Once the folder is imported, click on the big **REPO** tab button next to *"Resource Overview"*.
5. Then, click *"Load REPO from RPKGS folder"*. Now you’ll see everything neatly ordered with a good overview of each category. This is the **Repository**.
6. Expand the *Outfits* section below. Search for your outfit there. Or use the search bar on top.

>You can leave your **RPKG** program open after finding your suit

### Method 2: Using GlacierKit

1. Open **GlacierKit**
2. Select the *"game contents"* tab on the left. 
3. Copy the following **repository's** file hash,  ```00204D1AFD76AB13```, and paste it on the search bar and hit enter.
   
   Or 
   simply type ***pro.repo*** on the search bar and hit enter.

   You should now see a single file called **pro.repo**. 
   
:::tip
You now know the exact name of the file. Next time you want to open the ***repository*** in **Glacier** just type ***pro.repo*** and it should lead you to the same file instead of having to copy and paste the hash you saw earlier each time. This is an important file you'll be using more.
:::

4. Open it by clicking on it (obviously) and then click on *"Open in editor"* in the new menu that popped up on the right.

5. You can then start searching for your suit below in the *"Unmodified section"*.

:::note
**GlacierKit**, unlike **RPKG**, doesn't display the pictures when clicking on files in the ***repository*** 

*BUT*

the ***repository*** code lines you see on the right are the exact same in both programs for similar files. Feel free to verify it yourself.
Let's double confirm wether you have found the right picture in **GlacierKit** anyway.
:::

6. Double check if you have the right suit selected by looking up the image in **GlacierKit**.
To do so, simply 

- find the correct image code line that starts with ***"Image":".....*** on the right.

Example of a full image code: 
   ```json
   "Image": "images/unlockables_override/47_outfits_bloodmoney_gloves.jpg"
   ```

- copy the ***assembly path*** 

The ***assembly path*** is the line after **image:** inside the quotation marks like so:
   ```json
   images/unlockables_override/47_outfits_bloodmoney_gloves.jpg
   ```

- Paste that in the search bar in the ***game contents*** tab on the left 
- and hit enter on your keyboard.


If the image you found matches the suit you want to modify, you're all set for the next step and you can go back to your ***repository*** file. (Where you saw your code).


>You can leave open your **GlacierKit** program after finding your suit


:::info Sticking to GlacierKit
These are the 2 methods to find your suit's image. It's highly advised to use **GlacierKit** as much as possible because that's where you'll do most of your modding in the future. 

While **RPKG** does have its usecases, they become deminishing in usecase the more advanced you get with modding. This is one tiny example where I prefer to use **RPKG** alongside **GlacierKit** just because the images load up with each file in the ***repository***.
This is also a very rare case where **RPKG** looks more streamlined than **GlacierKit** but this couldn't be further from the truth as you will learn over time.
However, I still advise to try finding your suit's image using both methods to get familiar with each program and the game files in general.
:::

## Step 2: Find Your Suit's image

1. After opening the ***repository*** and locating the correct suit in one of the programs, locate the **image code** from your suit, which is displayed on the right. 

(You should have already found it with the Glacier method)

2. Click on your suit and look at the text box of code on the right-hand side. This code you see will be identical in each program.
   There will be a line of code starting with *"Image":"....* 

:::example
   For example:  
   ```json
   "Image": "images/unlockables_override/47_outfits_bloodmoney_gloves.jpg"
   ```
:::

4. Remember the **file path** `images/unlockables_override/` and 
   **file name** `47_outfits_bloodmoney_gloves.jpg` of your image. 
   
   These 2 together are called the ***assembly path*** of your image.

:::warning
Keep **RPKG** and/or **GlacierKit** open, you’ll need it in the next steps.
:::

---

## Step 3: Set Up the Blobs Folder

1. Open your mod folder and create a folder called ***blobs*** in the root directory (where your manifest is located).
You can do this from inside **GlacierKit** if you opened your mod as a project in there or in **Explorer**.
2. In ***blobs***, create folders that match your suit image's ***assembly path*** you found in **RPKG** or **GlacierKit**.

   - For example, if the **file path** was `"images/unlockables_override/"`, the folder structure of your **blobs folder** should look like this:  
     `blobs/images/unlockables_override/`

3. Place your custom image inside the last folder (in this case, it's *unlockables_ooverride* ) so it matches your ***assembly path***.  
   - Your image file must have the **exact same name** and **file type** as the original image file you will be overwriting.  
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
 If you want to have multiple images replaced but they use the same ***assembly path***, you can just add them in the same map alongside any other custom images. Just follow the same naming convention.

:::warning
Make sure the image that you're replacing is similar in aspect ratio with the image you're replacing by comparing your image's resolution and the one your replacing it to avoid weird strecthed images.

example: The picture of the blood money suit is in Resolution: 696x520. This is an aspect ratio of approximately 4:3.
You can only see your picture's **resolution** precisely when opening the image in **GlacierKit**.
:::

---

## Step 4: Update the Manifest

1. Open your mod’s **manifest** file. (Recommended to do so in **GlacierKit**)
2. Add the following line that refers to the **blobs** folder:
   ```json
   "blobsFolders": ["blobs"]
   ```
:::example
3. If you named your **blobs** folder something else (e.g., "MyCustomImages"), you’ll need to adjust this line accordingly like this:
   ```json
   "blobsFolders": ["MyCustomImages"]
   ```
 Just make sure the internal contents of your **BlobsFolder** have the correct **folder paths** and **file name(s)** that match your image's ***assembly path***. 


:::note
To add more ***blobs*** folders, simply add a comma and the name of the new folder in quotation marks too.

   ```json
   "blobsFolders": ["blobs","MyCustomImages","MoreBlobs"]
   ```
This is useful if your mod will have multiple options that can be selected in your mod. These maps can have the same ***assembly paths*** inside as other **blobs folders**.
:::

 4. **Save & Deploy your mod!**

---
:::success
That's it! You’ve successfully replaced the suit’s image in the game with your own custom picture. Now, when you load up the game, your new image will appear in place of the default one. Don't close **GlacierKit** yet if you already are moving on to the next article or want to try the test below. It'll make things alot quicker. 
:::

--- 

:::info Useful info
- You can use any image you like, as long as it’s the same file type format (`.jpg` in this case) and the name of your custom image is identical to the one found in the code. Including the underscores. 

- Change the file extension manually in regular **Windows Explorer** or **GlacierKit**, if needed, to `.jpg` or even `.png` in some cases. It shouldn't corrupt your image usually. 
   
   *But* in the very rare case it does, you can use an **image converter** (online, Photoshop, GIMP, etc...) that can **convert** and **export** your image to any other image type. 
:::


Now for a test, try replacing more images in the game using only the steps below.
1. Open the ***repository*** and find an image you want to replace  
2. Find the correct **image code** and note its ***assembly path***
3. Set up a brand new ***blobsFolder*** in your mod folder that will hold your custom image. Remember the **File path**.
4. Add your custom image and rename it correctly. Remember the **File name** 
>(optionally try replacing more images)
5. Open your **manifest** and correctly add in your new ***blobsfolder***. Then save it
6. Deploy and test your new images
7. Rehearse the steps above you couldn't complete without referring back to the tutorial and try the test here again.

If you succeeded to add **blobs** by yourself, the next article will be a breeze as its very similiar in method.