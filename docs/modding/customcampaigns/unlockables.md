---
sidebar_position: 4
description: Unlockables File
---

# Unlockables File

For this tutorial, we will go over creating an unlockables file.

## Brief overview of the Unlockables File
The Unlockables file contains metadata about, well, you guessed it, things that can be unlocked. This includes things like starting locations, outfits, and locations.

## Creating an Unlockables File
In GlacierKit, right-click on the `content/chunk0` folder and create a new file named `changes.unlockables.json`. Similarly to the repository file we created in the previous section, the only important part of the name is `.unlockables.json`, so you can name it whatever you'd like, but for this tutorial we'll refer to it as `changes.unlockables.json`.

## Modifying the Unlockables file
In GlacierKit, click on the `changes.unlockables.json` file. You should see the Unlockables entries.  
![unlockables.png](resources/unlockables.png)

## Adding a new entry for the starting location 
Click the `New Item` button. In the editor for your new entry, set the contents to:

```json
{
    "Id": "STARTING_LOCATION_BANK_CEO_OFFICE",
    "Type": "access",
    "Subtype": "startinglocation",
    "ImageId": null,
    "RMTPrice": -1,
    "GamePrice": -1,
    "IsPurchasable": false,
    "IsPublished": true,
    "IsDroppable": false,
    "Capabilities": [],
    "Qualities": {},
    "Properties": {
      "Location": "LOCATION_GREEDY_RACCOON",
      "RepositoryId": "[UUID OF STARTING LOCATION]",
      "UnlockOrder": 3
    },
    "Rarity": null
}
```

Note, the `STARTING_LOCATION_BANK_CEO_OFFICE` text matches what we set in the manifest for `UI_STARTING_LOCATION_BANK_CEO_OFFICE_DEFAULT_NAME` and `UI_STARTING_LOCATION_BANK_CEO_OFFICE_DESC`. This is how the game knows to use those strings for this location, so make sure they match.

Set the `RepositoryId` to the value copied from the repositories file in the previous step.  

![unlockables_ceo_office.png](resources/unlockables_ceo_office.png)

## Updating the Starting Package
Now that we have an unlockable entry for the starting location, we will need to add it to the starting package so that it is unlocked by default when you launch the mod.

In the full unlockables list, search for `starting package` and you should see the starting package entry:
![unlockables_starting_package.png](resources/unlockables_starting_package.png)

On the right panel of the editor, add the following line to the `Unlocks` list:
```json
        "STARTING_LOCATION_BANK_CEO_OFFICE"
```

Your `changes.unlockables.json` file should now look like this:  
![unlockables_starting_package_updated.png](resources/unlockables_starting_package_updated.png)

Click the save button.

## Next Steps
Now that we have the Unlockables File set, let's create a planning contract for our scene. 