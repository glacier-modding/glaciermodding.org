To continue on the adding parts page, you'll likely also want to modify the image in the menu to show the difference, change the suit's name and even add in your own suit's descritpion of it. I'll also mention a potential issue that arises when adding parts to your suit that dont come from a similiar chunk which will have to be addressed in the manifest. If you haven't read the documentation on manifest and other things in SMF (the little book icon on the left that shows up when you enable developer mode), I Suggest you read that and come back for bettter clarification after. I also advise to go back and forth between reading that, the tutorial pages on this site and modding yourself over time, so things start making more sense and you can practice in the meanwhile.

Part 1: Blobs
Lets start by adding an image for the new suit.
Open up the repository, either in RPKG or Glacier and find your suit that you modified and want to change it's picture of. For this tutorial, we will use RPKG just because it has the pictures displayed with each template.
In RPKG, you do that by (once its opened), clicking on "Import" in the top left then click "Import RPKGs folder" and then select your hitman's runtimes folder where the rpkgs are located. Kind of looks like  (D:\SteamLibrary\steamapps\common\HITMAN 3\Runtime). 
From there click on the Big REPO button which is right next to "Resource Overview" and then click "Load REPO from RPKGS folder". Everything is now nicely ordered with a nice overview. Expand the outfits section below and find the suit you changed which you want to reflect in the game menu with your own image later.
Click on the suit if you've found it and look at the little textbox on your right. THeres a code there that wil start with "Image:". Example ("Image": "images/unlockables_override/47_outfits_bloodmoney_gloves.jpg")
All you need to remember is the name of the file and the how its mapped (images/unlockables_override/).
Keep this RPKG instance open. 
Next open your mod folder. in the root (where your manifest is) and make a folder called "blobs".
In "blobs" all you have to do is follow the mapping convention of the image code from the code in rpkg. 
So blobs/images/unlockables_override/. In there you can put any picture you want but it has to be exact same name as the picture youre replacing it with. So the end result will be "blobs/images/unlockables_override/47_outfits_bloodmoney_gloves.jpg" You can put any kind of picture there you made in game, a random picture of someone else online, anything, but it just has to follow the same mapping style and has to have the same filename and type (no .png, xcf or whatever else. JPG only)
Then you need to add a manifest line that puts the picture in the game. So open your manifest and simply add a blobs line that refers to your map.
In our case we made a folder called "blobs", so the code result will be
"blobsFolders": ["blobs"]
If you called your folder "best images" thats fine, but it's only important that the mapping convention is followed inside and that the filename youre overriding is the exact same (filename AND filetype)  