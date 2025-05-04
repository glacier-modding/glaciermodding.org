---
sidebar_position: 7
description: Planning Contract
---

# Planning Contract

For this tutorial, we will go over creating a custom planning contract.

Each custom mission scene will need a planning contract.

## Creating the Planning Contract file
Let's use the Raccoon scene's planning contract as an example and modify it to fit our new scene.

We created a hash for this planning contract in the previous step. We will need to use that hashed value in hexadecimal format when naming our new planning contact file. Copy that value from the `menumapsetup_s2` if you don't still have it on your clipboard.

In GlacierKit, go to the `Game content` tab and enter `(planning_contract) greedy` and press enter. You will see the `(planning_contract) greedy raccoon` file. Click it and click the `Extract file` button.

Navigate to the `content/chunk0/Planning Contracts/bank` folder. For the file name, use the hashed value `0027913897DEC7E8`. You should now have a new file with the name: `0027913897DEC7E8.json`. It will also have created a file named `0027913897DEC7E8.json.meta`. We don't actually need that file, so we can delete it. 

## Modifying the Planning Contract file

Our `0027913897DEC7E8.json` file is not currently formatted, so let's format it before we continue working on it.

Right-click within the file and click `Format Document`.

Now that it's formatted, let's change the `scene` field to point to our new scene. Delete the text in the value that is already there and replace it with `[assembly:/_pro/scenes/missions/hitman_campaign_demo/mission_bank/scene_bank.entity].entitytemplate`.