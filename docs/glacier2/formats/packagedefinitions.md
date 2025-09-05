---
sidebar_position: 1
title: "packagedefinition.txt"
description: A walkthrough of the packagedefinition.txt format
---

# Packagedefinition.txt file format

A `packagedefinition.txt` file is a configuration file used to define the resource partitions found within Glacier 2 games. It is stored next to resource package (`.rpkg`) files and maps the packages to partitions.

> For more in-depth information on the difference between packages and partitions read [this page](/docs/glacier2/resource_management.md)

## Partition Definition
Partitions are a set of resource packages consisting of one base package and zero or more patch packages. Each partition is defined with a name, parent, type and patch level.

- `name`: A human-readable name for the partition
- `parent`: The parent partition. Resources from this partition will be available.
- `type`: A subtype for the partition
- `patchlevel`: The amount of patch packages attached to the base package. In H2016 this value has to be the exact amount of patches. From H2 onwards, any value can be used; the game will check all possible indices for their existence.

#### Hitman 1
```cmd
## --- Chunk 00 Base Game & Polar Bear
#chunk patchlevel=100

## --- DLC01 Octopus
#dlc patchlevel=100
```

`#chunk` or `#dlc` identifies the partition definition and its type. Only the patchlevel is defined after it. The parent will always be the previously defined partition. The name can usually be found in the comment above.


#### Hitman 2
```cmd
// --- Chunk 00 Base Game & Polar Bear
@chunk patchlevel=310

// --- DLC 03 Copperhead, Python & Mamba (Sapienza/Marrakesh)
@dlc patchlevel=310
```

`@chunk` or `@dlc` identifies the partition definition and its type. Only the patchlevel is defined after it. The parent will always be the previously defined partition. The name can usually be found in the comment above.


#### Hitman 3
```cmd
@partition name=super parent=none type=standard patchlevel=310
```
`@partition` identifies the partition definition. The name, parent name, type, and patchlevel are defined after it.


## Resource Entries (Roots)

Resource entries specify the top-level resources included in the partition. Each resource is defined by a platform independent ResourceID.

The ResourceIDs inside the packagedefinition.txt are platform-independent; this means that they don't contain the usual `pc_`, `xb1_` or `orbis_` prefix on the extension.
```c
// Wrong
[example:/path/to/resource.txt].pc_txt

// correct
[example:/path/to/resource.txt].txt
```


## Comments
Comments are extensively used to include custom text within the file. 

```cmd
[Hitman 1]
    ## this is a comment

[Hitman 2, 3]
    // this is a comment
```