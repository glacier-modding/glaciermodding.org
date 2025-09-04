---
sidebar_position: 6
title: "ResourcePackage (.rpkg)"
description: Details about RPKG and RPK2, the file format used by Glacier 2.
---

# RPKG

RPKGs (Resource Packages) are the archive format Glacier 2 Engine games use.
Hitman 3 introduced a new kind of resource package file (RPK2), It is structurally similar to RPKG and the game is backward compatible with the previous format.

### HITMAN WOA

#### Base archive structure

| Type         | Size | Description                            | \*                 |
| ------------ | ---- | -------------------------------------- | ------------------ |
| string       | 32   | File magic, GKPR or 2KPR               |
| unsigned int | 32   | unknown (always seems to be 0x1)       | not in GKPR        |
| unsigned int | 8    | chunk number                           | not in GKPR        |
| unsigned int | 8    | chunk type (0x00 standard, 0x01 addon) | not in GKPR        |
| unsigned int | 8    | chunk patch number                     | not in GKPR        |
| unsigned char[]            | 16    | language_code (default: xx)      | not in GKPR        |
| unsigned int | 32   | resource count                         |
| unsigned int | 32   | resource data table size               |
| unsigned int | 32   | patch deletion entry count             | only in patch file |

##### patch entries (if patch deletion entry count > 0):

| Type         | Size | Description                             |
| ------------ | ---- | --------------------------------------- |
| unsigned int | 64   | resource hash value (RuntimeResourceID) |

##### resource data table, per entry:

| Type         | Size | Description                                              |
| ------------ | ---- | -------------------------------------------------------- |
| unsigned int | 64   | resource hash value (RuntimeResourceID)                  |
| unsigned int | 64   | resource data offset                                     |
| unsigned int | 32   | resource (compressed) data size (and XOR scrambled flag) |

##### resource metadata table, per entry:

| Type            | Size | Description                                   |
| --------------- | ---- | --------------------------------------------- |
| unsigned char[] | 32   | type extension                                |
| unsigned int    | 32   | resource references table size                |
| unsigned int    | 32   | resource states table size (unused)           |
| unsigned int    | 32   | resource (uncompressed) size final            |
| unsigned int    | 32   | resource size requirement inside memory       |
| unsigned int    | 32   | resource size requirement inside video memory |

##### if the resource references table size is > 0 and there are hash references

| Type         | Size | Description              |
| ------------ | ---- | ------------------------ |
| unsigned int | 32   | resource reference count |

##### reference flags, per entry:

| Type | Size | Description                                          |
| ---- | ---- | ---------------------------------------------------- |
| byte | 5    | language code                                        |
| bool | 1    | is acquired resource                                 |
| byte | 2    | reference type (0x0 Install, 0x1 Normal or 0x2 Weak) |

##### reference RuntimeResourceIDs, per entry:

| Type         | Size | Description                   |
| ------------ | ---- | ----------------------------- |
| unsigned int | 64   | reference's RuntimeResourceID |
