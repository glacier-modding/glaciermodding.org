---
sidebar_position: 4
description: The Runtime chunk files and their descriptions
---

# Chunk Data

### Information

The game's data is split into `chunk` files, which have an `.rpkg` extension. These chunks contain all the assets the game uses, and are numbered from `chunk0` through `chunk28`. Each of these "base" chunks will also be accompanied by two "patch" chunks, which follow the format `chunkXpatchX.rpkg`. Generally, these chunk files correspond to a location in the game and hold the content that is specific to that location (e.g., chunk27 = Paris). When the game loads a level, it will only load the content needed for that level, but the chunks will also be accessed in a specific order. However, some chunks contain assets used in most levels and will therefore always be loaded (e.g., chunk0).

To visualize the relationship between chunks, we can use the `Hitman 3 Chunk Hierarchy flowchart`. After locating the chunk on the flowchart, all we need to do is follow the arrows. Using chunk27 (Paris) as an example, we can see the chunks are accessed in the following order:

> chunk27 (Paris) -> chunk21 (Season 1) -> chunk8 (Legacy) -> chunk1 (Base) -> chunk0 (Boot).

Note that while chunk0 can be accessed _from_ anywhere, it is a one-way street; chunks higher in the hierarchy cannot access chunks lower in the hierarchy. The lower the chunk _number_, the higher it is in the chunk _hierarchy_. Therefore, while chunk1 can access chunk0, chunk0 can not access chunk1, because chunk1 (Level 1) is lower in the hierarchy than chunk0 (Level 0). Furthermore, chunks cannot access adjacent chunks. So, as we can see from the flowchart, chunk12 can not access chunk11, but it can access chunk9.

![Chunk Diagram](../assets/chunkdata/chunk_data_diagram.svg)

### Hitman 3

| chunk    | codename     | name         | location               |
| -------- | ------------ | ------------ | ---------------------- |
| Chunk 0  | Golden       | Gecko / Boot | Dubai                  |
| Chunk 1  |              | Base         |                        |
| Chunk 2  |              | Season3      |                        |
| Chunk 3  | Ancestral    | Bulldog      | Dartmoor               |
| Chunk 4  | Edgy         | Fox          | Berlin                 |
| Chunk 5  | Elegant      | Llama        | Mendoza                |
| Chunk 6  | Wet          | Rat          | Chongqing              |
| Chunk 7  | Trapped      | Wolverine    | Romania                |
| Chunk 8  |              | Legacy       |                        |
| Chunk 9  |              | Season2      |                        |
| Chunk 10 | Opulent      | Stingray     | Haven Island           |
| Chunk 11 | Caged        | Falcon       | Prison Sniper Map      |
| Chunk 12 | Greedy       | Raccoon      | New York               |
| Chunk 13 | Salty        | Seagull      | Hantu Port Sniper Map  |
| Chunk 14 | Austria      | Hawk         | Himmelstein Sniper Map |
| Chunk 15 | The Ark      | Magpie       | Isle of Sgàil          |
| Chunk 16 | Suburbia     | Skunk        | Whittleton Creek       |
| Chunk 17 | Mumbai       | Mongoose     | Mumbai                 |
| Chunk 18 | Colombia     | Hippo        | Santa Fortuna          |
| Chunk 19 | Miami        | Flamingo     | Miami                  |
| Chunk 20 | New Zealand  | Sheep        | Hawke’s Bay            |
| Chunk 21 |              | Season1      |                        |
| Chunk 22 | Hokkaido     | Snowcrane    | Hokkaido               |
| Chunk 23 | Colorado     | Bull         | Colorado               |
| Chunk 24 | Bangkok      | Tiger        | Bangkok                |
| Chunk 25 | Marrakesh    | Spider       | Marrakesh              |
| Chunk 26 | Coastal Town | Octopus      | Sapienza               |
| Chunk 27 | Paris        | Peacock      | Paris                  |
| Chunk 28 | Rocky        | Dugong       | Ambrose Island         |

### Hitman 2

| chunk/dlc | codename     | name                       | location                 |
| --------- | ------------ | -------------------------- | ------------------------ |
| Chunk 0   |              | Polar Bear / Base          | ICA facility             |
| dlc 0     | Paris        | Peacock                    | Paris                    |
| dlc 1     | Coastal Town | Octopus                    | Sapienza                 |
| dlc 2     | Marrakesh    | Spider                     | Marrakesh                |
| dlc 3     |              | Copperhead, Python & Mamba | Sapienza & Marrakesh     |
| dlc 4     | Bangkok      | Tiger                      | Bangkok                  |
| dlc 5     | Colorado     | Bull                       | Colorado                 |
| dlc 6     | Hokkaido     | Snowcrane                  | Hokkaido                 |
| dlc 7     | New Zealand  | Sheep                      | Hawke’s Bay              |
| dlc 8     | Miami        | Flamingo                   | Miami                    |
| dlc 9     | Colombia     | Hippo                      | Santa Fortuna            |
| dlc 10    | Mumbai       | Mongoose                   | Mumbai                   |
| dlc 11    | Suburbia     | Skunk                      | Whittleton Creek         |
| dlc 12    | The Ark      | Magpie                     | Isle of Sgàil            |
| dlc 13    | Austria      | Hawk                       | Himmelstein Sniper Map   |
| dlc 14    | Salty        | Seagull                    | Hantu Port Sniper Map    |
| dlc 15    |              | Anaconda & KingCobra       | Santa Fortuna & Mumbai   |
| dlc 16    | Greedy       | Raccoon                    | New York                 |
| dlc 17    | Caged        | Falcon                     | Prison Sniper Map        |
| dlc 18    |              | Cottonmouth & GartenSnake  | Miami & Whittleton Creek |
| dlc 19    | Opulent      | Stingray                   | Haven Island             |

### Hitman 2016

| chunk/dlc | codename     | name                       | location             |
| --------- | ------------ | -------------------------- | -------------------- |
| Chunk 0   |              | Polar Bear / Base          | ICA facility         |
| dlc 0     | Paris        | Peacock                    | Paris                |
| dlc 1     | Coastal Town | Octopus                    | Sapienza             |
| dlc 2     | Marrakesh    | Spider                     | Marrakesh            |
| dlc 3     |              | Copperhead, Python & Mamba | Sapienza & Marrakesh |
| dlc 4     | Bangkok      | Tiger                      | Bangkok              |
| dlc 5     | Colorado     | Bull                       | Colorado             |
| dlc 6     | Hokkaido     | Snowcrane                  | Hokkaido             |
