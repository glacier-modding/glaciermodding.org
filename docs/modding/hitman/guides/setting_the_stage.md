---
sidebar_position: 0
description: Hitman 3 modding basics
---

## Background

The Glacier 2 Engine is IO Interactive's proprietary custom game engine designed to run Hitman games. What is known about the engine is a result of reverse-engineering the files provided to the community via the games themselves.

## Game Assets

In order to understand the basics of Glacier 2 modding, there are a few core concepts to grasp. First, navigate to the Hitman 3 game directory.

The `Runtime` folder contains files with the `rpkg` file extension. These are the game's assets, listed in a set order and separated by chunks. For example, `chunk0` contains the global assets used in all the game's missions. You can view what each chunk represents [here](/docs/modding/hitman/guides/locating_locations.md).

> **Note**: You may also notice chunk "patch" files corresponding to the chunk files. These are updates to the original files. You'll be using chunk patches to mod the game.

`rpkg` files contain unique asset types within them. Assets contained in these files have a hash (an alphanumeric sequence generated from the asset's name) and the asset data itself. You can view the different file formats names and their details [here](/docs/glacier2/fileformats.md).

Asset data formats are diverse, but both readable and editable when using the proper tools. To make sense of these files, download the fittingly-named `rpkg` tool [here](https://www.glaciermodding.org/rpkg).<sup>1</sup> Make sure you have the [.NET Framework](https://dotnet.microsoft.com/download/dotnet-framework) installed on your machine.

Also included in the `Runtime` folder is a `packagedefinition.txt` file. This file tracks the patches - updates and mod additions - to the game's content. The included file in a retail installation limits the amount of patches that the file can contain, so it itself also needs to be patched! You can find the patched version as well as a decoder and encoder [here](https://www.glaciermodding.org/tools/online/xtea).
