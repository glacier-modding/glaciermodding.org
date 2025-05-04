---
sidebar_position: 3
description: Repository File
---

# Repository File

For this tutorial, we will go over creating a repository changes file.

## Repository File brief overview

The repository stores metadata about various things in Hitman: World of Assassination, from starting locations to NPCs, to weapons.

For our purposes we will just be adding a new starting location for now. 

## Creating a repository changes file
In GlacierKit, right-click on the `content/chunk0` folder and create a new file named `changes.repository.json`. (The exact filename doesn't really matter, as long as it ends with `.repository.json` but for this tutorial we'll use `changes.repository.json`).

## Modifying the repository changes file
In GlacierKit, click on the `changes.repository.json` file. You will see the repository editor:  
![repository.png](resources/repository.png)
Click on the `New item` button.

```json
{
    "Image": "images/entrances/bank_entrance_ceo.jpg",
    "Name_LOC": "UI_STARTING_LOCATION_BANK_CEO_OFFICE_DEFAULT_NAME",
    "Name": "Bank CEO Office Starting Location",
    "Description": "UI_STARTING_LOCATION_BANK_CEO_OFFICE_DESC"
}
```
You should now see your custom starting location's repository entry.  
![repository_ceo_office.png](resources/repository_ceo_office.png)

Note the new starting location's repository entry's new UUID, just above the Editor text area. We will need that for the next step, so highlight and copy it now.

Click the save icon.

## Next Steps
Now that we have a repostitory entry for our new starting location, we need to set it as unlocked to be able to use it.