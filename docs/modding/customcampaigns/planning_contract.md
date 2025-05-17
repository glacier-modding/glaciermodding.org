---
sidebar_position: 7
description: Planning Contract
---

# Planning Contract

For this tutorial, we will go over creating a custom planning contract.

Each custom mission scene will need a planning contract.

## Creating the Planning Contract file
Let's use the Raccoon scene's planning contract as an example and modify it to fit our new scene.

We created a hash for this planning contract in the previous step. We will need to use that hashed value in hexadecimal format when naming our new planning contact file. Copy that value from the `menumapsetup_hitman_campaign_demo.entity.json` file.

In the `content/chunk0` folder, create a new folder named `Planning Contracts`, and in that folder create a new folder named `bank`

In GlacierKit, go to the `Game content` tab and enter `(planning_contract) greedy` and press enter. You will see the `(planning_contract) greedy raccoon` file. Click it and click the `Extract file` button.

Navigate to the `content/chunk0/Planning Contracts/bank` folder. For the file name, use the hashed value we copied from our `menumapsetup...` file (`0027913897DEC7E8`). You should now have a new file with the name: `0027913897DEC7E8.JSON`. It will also have created a file named `0027913897DEC7E8.JSON.meta`. We don't actually need that file, so we can delete it. 

## Modifying the Planning Contract file

In GlacierKit, open the new `0027913897DEC7E8.JSON` file. We can see that this file is not currently formatted, so let's format it before we continue working on it.

Right-click within the file and click `Format Document`.

Now that it's formatted, let's change the `scene` field to point to our new scene. Delete the text in the value that is already there and replace it with:  
`assembly:/_pro/scenes/missions/hitman_campaign_demo/mission_bank/scene_bank.entity`

> Note that this is similar to the IOI string for our bank mission from the manifest, but it is missing the `[` at the start and the `].entitytemplate` at the end.

Delete all the entrances except for one.

Change the id for that last remaining entrance to the one from the repository entry for the CEO's office starting location.

Change the `isDefaultSpawn` and `isPreferredSpawn` values for that entrance from `false` to `true`.

The world transform here isn't actually used by the game, so we can just leave that the same.

The first part of your planning contract file should now look like this:

```json
{
    "scene": "assembly:/_pro/scenes/missions/hitman_campaign_demo/mission_bank/scene_bank.entity",
    "actors": [],
    "entrances": [
        {
            "id": "[INSERT STARTING LOCATION UUID HERE]",
            "isDefaultSpawn": true,
            "isPreferredSpawn": true,
            "WorldTransform": "-0.044435, 0.999012, 0, -0.999012, -0.044435, 0, 0, 0, 1, -53.10691, -23.68412, -1.97"
        }
    ],
```

Click the save button.

## Next Steps
Now that we have a Planning Contract for our mission, let's move on to making a Mission Contract for it.