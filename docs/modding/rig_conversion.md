---
sidebar_position: 4
description: Convert a Season 1 rigged model to the Season 3 rig
---

# Port S1 Rigged Model to S3 Rig

:::info
This tutorial is now deprecated in favour of 2kpr's [rebone](/rebone) tool.
:::

If you use a body part model from season 1 in an outfit that is rigged for season 3, or vice versa, the result will look very silly indeed. This is because IOI altered the skeleton over the years.

![47 attempting to imitate his favorite brand of noodles](/img/rig_conversion/noodly.jpg)

We can fix that by converting the model, you won't need any Blender knowledge for this because we're only going to swap some depends around and rebuild the `PRIM`. You will need [RPKG Tool](../../../rpkg) and comfort in using it, this procedure is a bit advanced so it will be assumed you are a seasoned user of the tool.

This should keep cloth physics intact, as well.

## Prep an RPKG archive to work in

We will be doing work in RPKG Tool itself, and we don't want to overwrite any existing chunk files, not only because it's a really bad move to overwrite vanilla archives but also because saving the chunk file would take way too long. So begin by extracting the `PRIM` you need to convert and its `BORG` depend to a folder on your computer.

For the purposes of this guide we will be converting Ezra Berg's flannel shirt which is `00B618F2DCD237B2.PRIM` with its bonerig `003D8C4FB5037FD2.BORG`.

Extract a S3 rig as well, we can recommend `0017416135CF879C.BORG` which is used by all of 47's season 3 outfits.

With all 3 files in the same directory, plus their `.meta` files, in RPKG Tool click **Generate** -> **Generate RPKG From Folder**. Select the folder where you put the 3 files and their corresponding `.meta` files. You can select the same folder again to spit out the generated .rpkg in the same folder.

Then, in RPKG Tool, click **Import** -> **Import RPKG File** and select your newly minted RPKG archive.

## Step 1: Export model

Right-click the `PRIM` in the Resource View, nested under your new RPKG. Click *Extract 00B618F2DCD237B2.PRIM to GLB file* and make a new folder. Name it something so you can understand that this is the original season 1 version, like shirt_s1. Export the GLB to this folder.

## Step 2: Edit hash depends

With your `PRIM` selected in RPKG Tool, click **Edit Hash Depends** under **Details** on the right. Entry 0 with the flag 1F is the skeleton bonerig. Change this hash to `0017416135CF879C` and click **Save Changes to Hash Depends**. Click OK on the popup and the RPKG will regenerate.

## Step 3: Export model again

RPKG Tool will close your RPKG archive now that it's been regenerated. Go to the bottom of the Resource View and expand it. Find your `PRIM` again and click on it. You will note that the first depend hash has been altered to our new `BORG`. Once again right-click on the `PRIM` in the Resource View and click *Extract 00B618F2DCD237B2.PRIM to GLB file* and make a new folder. Name it something so you can understand that this is the season 3 depends version, like shirt_s3. Export the GLB to this folder.

## Step 4: Overwrite meta files

Go into your shirt_s3 folder and enter the metas folder, nested inside. Copy the `PRIM.meta` and `PRIM.glb.meta` files and back out. Now enter your shirt_s1 folder, and its nested metas folder. Paste and overwrite.

## Step 5: Regenerate PRIM

Go back to RPKG Tool. Click **Rebuild** -> **Rebuild Mesh Primitives (PRIM) From Folder**. Select the shirt_s1 folder. After a brief moment the RPKG Tool will report its success.

You can now enter the shirt_s1 folder, and go into the REBUILT folder nested inside. The `PRIM` file has been rebuilt and you can now use it in your mod. You can clean up the temporary `RPKG` you created and the rest of the files now.

It would be prudent to generate a new hash for this converted `PRIM` in RPKG Tool using **Utilities** -> **Hash Calculator**, so you don't overwrite the original. In this case, we can tweak the original IOI assembly path:

```[assembly:/_pro/characters/assets/individuals/colorado/ezraberg/geometry/male_reg_ezraberg.wl2?/shirt.weightedprim](bodypart).pc_weightedprim```

And simply append s3_rig to it:

```[assembly:/_pro/characters/assets/individuals/colorado/ezraberg/geometry/male_reg_ezraberg.wl2?/shirt_s3_rig.weightedprim](bodypart).pc_weightedprim```

This hashes to `00D6AAA15BD7069F`, so that will be the hash of our new `PRIM`. Technically you can hash any length of text you want, but it's nice to follow convention, no?

![47 modeling his beautiful new flannel shirt](/img/rig_conversion/pretty.jpg)