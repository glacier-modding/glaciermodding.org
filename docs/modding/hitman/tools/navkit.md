---
sidebar_position: 6
---

# NavKit

:::info
NavKit can be downloaded from [here](/navkit)

Source code can be found [https://github.com/glacier-modding/NavKit](https://github.com/glacier-modding/NavKit)
:::

A tool for creating custom Navp (Navmesh) and Airg (AI Reasoning Grid) files for Hitman WoA.

#### Installation:
To install NavKit, click the link above, download the latest release `.msi` installer file, and run it.

You will need to make sure you have ZHMModSDK installed.

#### Installing ZHMModSDK
[ZHMModSDK](https://github.com/OrfeasZ/ZHMModSDK). Follow the instructions on the readme to install this to the Hitman directory.
Briefly:
> 1. Download the latest version of the mod loader and the mods by going here, and downloading ZHMModSDK-Release.zip. This zip file contains the mod loader and a few sample mods.

> 2. Extract the contents of the ZHMModSDK-Release.zip archive to drive:\Path\To\HITMAN3\Retail, where drive:\Path\To\HITMAN3 is the path to your Hitman 3 installation directory. This will be at C:\Program Files\EpicGames\HITMAN3 or C:\Program Files (x86)\Steam\steamapps\common\HITMAN 3 by default. Make sure that you extract the files in the Retail folder and not the root HITMAN3 folder.

You will need to install [Blender](https://www.blender.org/download/), as NavKit uses it to build a 3D mesh of the extracted scene with the level's geometry.

You will also need to install the latest Visual C++ Redistributable from https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-140. Make sure you get the X64 version.

Now you should be able to launch the `NavKit.exe` file and see the NavKit user interface.

#### Usage:

More details for how to use NavKit are available on the [Using NavKit](../guides/customcampaigns/using_navkit) page of the [Custom Campaign and Missions](../guides/customcampaigns) guide.

![navKit](/img/navkit/gui.png)
