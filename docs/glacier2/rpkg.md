---
sidebar_position: 2
description: Details about RPKG, the file format used by Glacier 2.
---

# RPKG

RPKGs (Resource Packages) are the archive format Glacier 2 Engine games use.

### HITMAN 3

#### Base archive structure

| Type     | Description                       |
| -------- | --------------------------------- |
| string   | 2KPR                              |
| uint32_t | unknown (always seems to be 0x1)  |
| uint8_t  | chunk number                      |
| uint8_t  | unknown (always seems to be 0x0)  |
| uint8_t  | chunk patch number                |
| uint8_t  | unknown (always seems to be 0x78) |
| uint8_t  | unknown (always seems to be 0x78) |
| uint32_t | resource count                    |
| uint32_t | resource data table size          |

##### resource data table, per entry:

| Type     | Description                     |
| -------- | ------------------------------- |
| uint64_t | resource hash value (runtimeID) |
| uint64_t | resource data offset            |
| uint32_t | resource (compressed) data size |

##### resource meta data table, per entry:

| Type             | Description                                   |
| ---------------- | --------------------------------------------- |
| unsigned char[4] | type extension                                |
| uint32_t         | resource references table size                |
| uint32_t         | resource states table size (unused)           |
| uint32_t         | resource (uncompressed) size final            |
| uint32_t         | resource size requirement inside memory       |
| uint32_t         | resource size requirement inside video memory |

##### if the resource references table size is > 0 and there are hash references

| Type     | Description              |
| -------- | ------------------------ |
| uint32_t | resource reference count |

##### reference flags, per entry:

| Type    | Description      |
| ------- | ---------------- |
| uint8_t | reference's flag |

##### reference RuntimeIDs, per entry:

| Type     | Description           |
| -------- | --------------------- |
| uint64_t | reference's runtimeID |

#### Patch archive structure

| Type     | Description                       |
| -------- | --------------------------------- |
| string   | 2KPR                              |
| uint32_t | unknown (always seems to be 0x1)  |
| uint8_t  | chunk number                      |
| uint8_t  | unknown (always seems to be 0x0)  |
| uint8_t  | chunk patch number                |
| uint8_t  | unknown (always seems to be 0x78) |
| uint8_t  | unknown (always seems to be 0x78) |
| uint32_t | resource count                    |
| uint32_t | resource data table size          |
| uint32_t | patch deletion entry count        |

##### patch entries (if patch deletion entry count > 0):

| Type     | Description                     |
| -------- | ------------------------------- |
| uint64_t | resource hash value (runtimeID) |

##### resource data table, per entry:

| Type     | Description                     |
| -------- | ------------------------------- |
| uint64_t | resource hash value (runtimeID) |
| uint64_t | resource data offset            |
| uint32_t | resource (compressed) data size |

##### resource meta data table, per entry:

| Type             | Description                                   |
| ---------------- | --------------------------------------------- |
| unsigned char[4] | type extension                                |
| uint32_t         | resource references table size                |
| uint32_t         | resource states table size (unused)           |
| uint32_t         | resource (uncompressed) size final            |
| uint32_t         | resource size requirement inside memory       |
| uint32_t         | resource size requirement inside video memory |

##### if the resource references table size is > 0 and there are hash references

| Type     | Description              |
| -------- | ------------------------ |
| uint32_t | resource reference count |

##### reference flags, per entry:

| Type    | Description      |
| ------- | ---------------- |
| uint8_t | reference's flag |

##### reference RuntimeIDs, per entry:

| Type     | Description           |
| -------- | --------------------- |
| uint64_t | reference's runtimeID |
