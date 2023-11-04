---
sidebar_position: 1
title: LOD Setup
description: Details about setting up LOD Levels
---

The following is a short guide on how to setup LOD Levels in your Blender scene.<br />
This guide does not go into creating the LOD meshes, you can do that either manually or with Blender's decimate modifier (Or any other way you can think of).

### PRIM Properties Panel

This is the PRIM Properties Panel where you can assign the LOD Levels for individual meshes. Depending on the complexity and size of your model it may be best to assign the highest geometry mesh with LOD Levels 0 and 1 otherwise you might noticeable pop-in. You'll have to experiment though to get the best results for your model.

![Screenshot of LOD Properties](/img/blender/tutorials/lod_setup/lod_properties.png)

### Assigning LOD Levels

1. First you will need to select your mesh in Blender's scene outline.<br />
   ![Screenshot of Blender's scene outline with a mesh selected](/img/blender/tutorials/lod_setup/lod_selected_mesh.png)
2. Open the "Object Properties" tab.<br />
   ![Screenshot of Blender's object panel selected](/img/blender/tutorials/lod_setup/lod_object_properties_panel.png)
3. Scroll down until you see "Prim Properties".
4. Assign the LOD Levels that you wish the selected mesh to show up by clicking on the buttons under "LOD mask:".<br />
   ![Screenshot of LOD Properties](/img/blender/tutorials/lod_setup/lod_properties.png)

### Example of LOD Levels in-game

The distance between each LOD Level depends on your "Level of detail" setting in-game and seems to change depending on the overall size of your model.

LOD 0:
![Screenshot of LOD Level 0](/img/blender/tutorials/lod_setup/lod_0.png)
LOD 1:
![Screenshot of LOD Level 1](/img/blender/tutorials/lod_setup/lod_1.png)
LOD 2:
![Screenshot of LOD Level 2](/img/blender/tutorials/lod_setup/lod_2.png)
LOD 3:
![Screenshot of LOD Level 3](/img/blender/tutorials/lod_setup/lod_3.png)
LOD 4:
![Screenshot of LOD Level 4](/img/blender/tutorials/lod_setup/lod_4.png)
LOD 5:
![Screenshot of LOD Level 5](/img/blender/tutorials/lod_setup/lod_5.png)
LOD 6 and 7 are too far away to see this specific model.

### Blend file download

[lod_setup.blend](/img/blender/tutorials/lod_setup/lod_setup.blend)
