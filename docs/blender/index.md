---
sidebar_position: 1
title: Glacier 2 Blender Add-on
description: Details about the Glacier 2 Blender Add-on
---

The Glacier 2 [Blender](https://www.blender.org/) Add-on allows importing and exporting various Glacier 2 file formats (Only supports exporting to PRIM at the moment).

![lod_slider](https://user-images.githubusercontent.com/43296291/203970131-4080b2cb-c09e-49e4-b8a9-5aa9a9a61d50.gif)

### [Installation](/blender/installation)

### Supported Titles and Features

The following games are supported by this addon:

-   Hitman 2016
-   Hitman 2
-   Hitman 3

The addon supports the following formats:

| Extension     | Description                    | Can import | Can export |
| ------------- | ------------------------------ | :--------: | :--------: |
| .prim         | Standard RenderPrimitive       |    Yes     |    Yes     |
| .weightedprim | Weighted RenderPrimitive       |    Yes     |     No     |
| .linkedprim   | Linked RenderPrimitive         |    Yes     |     No     |
| .borg         | AnimationBoneData              |    Yes     |     No     |
| .mjba         | MorphemeJointBoneAnimationData |     No     |     No     |
| .mrtr         | MorphemeRuntimeRig             |     No     |     No     |
| .vtxd         | VertexData                     |     No     |     No     |

_Support for more formats or titles may be added in the future_

### Requirements

-   Blender **3.0.0** or above

### Credits

-   [PawREP](https://github.com/pawREP)

    -   For making the original `.prim` editing tool known as PrimIO that was used as a reference.

-   [Khronos Group](https://github.com/KhronosGroup)
    -   For making glTF-Blender-IO that was used as a reference addon.
