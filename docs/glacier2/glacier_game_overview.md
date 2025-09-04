---
sidebar_position: 0
description: A walkthrough of Glacier 2 game structures.
---

# Glacier 2 Game overview

## Background

The Glacier 2 Engine is IO Interactive's proprietary custom game engine designed to run Hitman games. What is known about the engine is a result of reverse-engineering the files provided to the community via the games themselves.

## Game Release format

A Glacier 2 game will usually use the same folder structure:

```binary
.
├── Launcher.exe
├── Retail
│   ├── *.dll
│   ├── thumbs.dat
│   └── GAME.exe
└── Runtime
    ├── *.rpkg
    └── packagedefinition.txt
```

### Launcher.exe
Is used to launch the game's exe file in the retail folder. It's commonly used as way to configure game settings without having to launch the game. The launcher can be omitted using the `-skip_launcher` launch option. 

### thumbs.dat
Configuration file for the Glacier 2 engine. The file is encrypted with an XTEA cipher on retail game releases. It can be decrypted and edited using the [online XTEA tool](/tools/online/xtea/). The format is documented [here](/docs/glacier2/formats/ini_file.md)

### Runtime folder
Stores the resource packages (archives) used by the game. All game's resources are stored encoded and compressed inside `.rpkg` files. An in-depth explanation of the format can be found [here](/docs/glacier2/formats/rpkg.md)

### packagedefinition.txt
Configuration file to keep track of the resource packages. Defines the partitions and root resources of those partitions. While the file is usually encrypted with an XTEA cipher it can easily be decrypted and edited using the [online XTEA tool](/tools/online/xtea/). The game engine is able to read this file in an unencrypted format as well. The format is documented [here](/docs/glacier2/formats/packagedefinitions.md)