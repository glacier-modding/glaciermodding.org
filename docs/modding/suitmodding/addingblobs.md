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

:::note Documentation
If you haven’t yet reviewed the SMF manifest and other resources in developer mode (the book icon in SMF), consider skimming these and returning here for context. Familiarizing yourself with these references can be helpful as you get hands-on with modding. I also made a little tutorial on adding parts with screenshots but it's very rough to read. Use it in combination with the previous article. Here’s another excellent resource worth bookmarking for later:

- [Hitman Resources Documentation](https://hitman-resources.netlify.app/documentation) - An advanced look at WOA’s engine systems.
- [Adding Suit Parts guide](https://www.nexusmods.com/hitman3/articles/63) - A guide on adding parts with screenshots. 
:::



---

## STEP 1: **LOCATE YOUR FILE**
First, let's locate the suit within the **repository**, using either RPKG or GlacierKit.

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
3. - Copy the following **repository's** file hash  ```00204D1AFD76AB13``` and paste it on the search bar and hit enter. 
   - Or simply type ***pro.repo*** on the search bar and hit enter.
Both methods should bring you to a single file called **pro.repo**. 
4. Open it by clicking on it (obviously) and then click on *"Open in editor"* in the new menu that popped up on the right. You are now in the ***repository***

:::tip
You now know the exact name of the **repository** file. Next time you want to open the **repository** in **GlacierKit** just type ***pro.repo***.
::: 

5. You can then start searching for your suit below in the *"Unmodified section"*.
6. Double check if you have the right suit selected by looking up the image in **GlacierKit**.
To do so, simply 

   - find the correct image code line on the right that starts with ***"Image":".....***

 

   - and copy the ***assembly path*** 

   The **assembly path** is the line after **"image":"...**" inside the quotation.

     Example of a full image code: 
   ```json
   "Image": "images/unlockables_override/47_outfits_bloodmoney_gloves.jpg"
   ```
   and its **assembly path**
   ```json
   images/unlockables_override/47_outfits_bloodmoney_gloves.jpg
   ```

- Paste that in the search bar in the *game contents* tab on the left 
- and hit enter on your keyboard.


>If the image you found matches the suit you want to modify, you're all set for the next step and you can go back to your ***repository*** file. (Where you saw your code).

>You can leave open your **GlacierKit** program

:::info GlacierKit vs. RPKG
While **RPKG** is helpful for viewing images in the **repository**, it’s best to work primarily in **GlacierKit**, as it will be your main modding tool. The **repository code lines** in both tools are identical, so practicing in **GlacierKit** is encouraged for efficient modding.
:::


---
## STEP 2: **FIND THE IMAGE**
In this step we will have to look for the correct Image code and remember its ***assembly path***.

(You already did this step in the GlacierKit method but follow along)
   ### 1. Open your file
Click on your suit and you should see it's ***repository*** code on the right

   ### 2. Locate the assembly path
There will be a line of code starting with *"Image":"....*

   :::example
   For example:  
   ```json
   "Image": "images/unlockables_override/47_outfits_bloodmoney_gloves.jpg"
   ```
   :::

It consists of a
- **file path** `images/unlockables_override/` and 
- **file name** `47_outfits_bloodmoney_gloves.jpg` of the image. 
   
   These 2 together are called the ***assembly path*** of your file's image.

:::warning
Keep **RPKG** and/or **GlacierKit** open, you’ll need it in the next steps.
:::

---

## STEP 3: **SET UP A BLOBSFOLDER**
In this step, you’ll create a custom folder structure to replace the game’s default image.

### 1. Make a blobs folder

   Create a new folder called `blobs` in your mod's root directory, where the manifest file is located. You can do this in **GlacierKit** or **File Explorer**.

### 2. Recreate the file path

    Create folders to match the **file path** of the image you want to replace. 
    
    For example, if the **file path** is `images/unlockables_override/`, your `blobs` folder structure should look like this:
   ```
   blobs/images/unlockables_override/
   ```
   

### 3. Add your custom image  
   - Place your image in the last folder you created (in this example, `unlockables_override`). 
   - Ensure that the custom image has the same **file name** and **file type** as the original, for example:
   ```
   blobs/images/unlockables_override/47_outfits_bloodmoney_gloves.jpg
   ```
### 4. Confirm the assembly path
This fully recreates the ***assembly path*** of the image you're replacing. 
   
   Your final folder structure should look like this:
   ```
   📁YourModFolder
   ├── 📁blobs
   │   └── 📁images
   │       └── 📁unlockables_override
   │           └── 47_outfits_bloodmoney_gloves.jpg
   ├── 📁content
   ├── manifest.json
   └── project.json
   ```
:::danger Important Tips
- **Aspect Ratio**: Match the aspect ratio of your replacement image with the original to avoid distortion. *Example*: The Blood Money suit image has a 4:3 ratio (resolution 696x520), which you can check in **GlacierKit**.
- **File Corruption**: If changing the file type manually corrupts your image, use an image converter tool (Photoshop, GIMP, etc.).
:::

---

## STEP 4: **UPDATE MANIFEST**

### 1. Open your manifest
Recommended to do so in **GlacierKit** (or in **VS code** with a ***"schema"***).

### 2. Add your blobs folder:
Add the following line that will do a blobs operation and have it refer to your ***`blobs`*** folder
   ```json
   "blobsFolders": ["blobs"]
   ```
 ### 3. Save & Deploy
 Simply click the little save icon on top or click **ctrl+S** on your keyboard. Deploy your mod in **SMF** and you should see your new images loaded in the game.

:::success
That's it! You’ve successfully replaced the suit’s image in the game with your own custom picture. Now, when you load up the game, your new image will appear in place of the default one. Don't close **GlacierKit** yet if you already are moving on to the next article or want to try the test below. It'll make things alot quicker. 
:::
---
## MORE INFO


### - More Blobs images
- If you want to add more images, remember to recreate the **file paths** by making more folders. 
Example;

| Assembly Path (in-game)                    | Your Blobs Folder Structure                      |
|--------------------------------------------|---------------------------------------------|
| `images/unlockables_override/absolution_suit.jpg`             | `blobs/images/unlockables_override/absolution_suit.jpg`        |
| `images/characters/male_suits/caruso_idk.png`            | `blobs/images/characters/male_suits/caruso_idk.png`       |
| `icons/equipment/distraction_device_old.jpg`               | `blobs/icons/equipment/distraction_device_old.jpg`          |

- For multiple images that use the same ***assembly path***, simply place them within the same folders (e.g., images under `unlockables_override`).

### - More Blobs folders
You can add more ***blobsfolders*** in your mod. This is useful if your mod will have multiple options that can be selected in your mod's settings.
The same rules apply inside; 
 - set **file paths** by making folders
 - and use correct **file name(s)**

### - Renaming ***"blobs"***
You can name your **blobs** folder anything (e.g., "MyCustomImages") but you’ll need to adjust this line accordingly in the manifest like this:
   ```json
   "blobsFolders": ["MyCustomImages"]
   ```

These can then be added to the manifest by simply adding a comma and the name of the new folder in quotation marks.

   ```json
   "blobsFolders": ["blobs","MyCustomImages","MoreBlobs"]
   ```

--- 
:::info Challenge
Test your skills by replacing more images in the game. Follow these key steps:

- Locate image(s) in the **repository** and note the ***assembly path(s)***
- Set up new **blobs folders** and create **file paths**
- Add images and ensure **file names** and types match
- Update the **manifest**, deploy, and test in-game

Repeat steps you struggled with until they become familiar—if you can complete these steps without looking at the tutorial, the next article will be a breeze!
:::
