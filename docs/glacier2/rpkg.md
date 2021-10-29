---
sidebar_position: 2
description: Details about RPKG, the file format used by Glacier 2.
---

# RPKG

RPKGs (Resource Packages) are the archive format Glacier 2 Engine games use.

### HITMAN 3
#### Base archive structure
| Type              | Description                                                                               |
|-------------------|-------------------------------------------------------------------------------------------|
| string            | 2KPR                                                                                      |
| uint32_t          | unknown (always seems to be 0x1)                                                          |
| uint8_t           | chunk number                                                                              |
| uint8_t           | unknown (always seems to be 0x0)                                                          |
| uint8_t           | chunk patch number                                                                        |
| uint8_t           | unknown (always seems to be 0x78)                                                         |
| uint8_t           | unknown (always seems to be 0x78)                                                         |
| uint32_t          | hash file count                                                                           |
| uint32_t          | hash file data table size                                                                 |
##### hash file data table, per entry:
| Type              | Description                                                                               |
|-------------------|-------------------------------------------------------------------------------------------|
| uint64_t          | hash file hash value                                                                      |
| uint64_t          | hash file data offset                                                                     |
| uint32_t          | hash file data size                                                                       |
##### hash file meta data table, per entry:
| Type              | Description                                                                               |
|-------------------|-------------------------------------------------------------------------------------------|
| uint32_t          | hash file hash reference table size                                                       |
| uint32_t          | unknown (always seems to be 0x0)                                                          |
| uint32_t          | hash size final                                                                           |
| uint32_t          | hash size in memory                                                                       |
| uint32_t          | hash size in video memory                                                                 |
##### if the hash file hash reference table size is > 0 and there are hash references
| Type              | Description                                                                               |
|-------------------|-------------------------------------------------------------------------------------------|
| uint32_t          | hash reference file count                                                                 |
##### hash reference file types/flags, per entry:
| Type              | Description                                                                               |
|-------------------|-------------------------------------------------------------------------------------------|
| uint8_t           | hash reference file type/flag                                                             |
##### hash reference file hash values, per entry:
| Type              | Description                                                                               |
|-------------------|-------------------------------------------------------------------------------------------|
| uint64_t          | hash file hash value                                                                      |

#### Patch archive structure
| Type              | Description                                                                               |
|-------------------|-------------------------------------------------------------------------------------------|
| string            | 2KPR                                                                                      |
| uint32_t          | unknown (always seems to be 0x1)                                                          |
| uint8_t           | chunk number                                                                              |
| uint8_t           | unknown (always seems to be 0x0)                                                          |
| uint8_t           | chunk patch number                                                                        |
| uint8_t           | unknown (always seems to be 0x78)                                                         |
| uint8_t           | unknown (always seems to be 0x78)                                                         |
| uint32_t          | hash file count                                                                           |
| uint32_t          | hash file data table size                                                                 |
| uint32_t          | patch deletion entry count                                                                |
##### patch entries (if patch deletion entry count > 0):
| Type              | Description                                                                               |
|-------------------|-------------------------------------------------------------------------------------------|
| uint64_t          | hash file hash value                                                                      |
##### hash file data table, per entry:
| Type              | Description                                                                               |
|-------------------|-------------------------------------------------------------------------------------------|
| uint64_t          | hash file hash value                                                                      |
| uint64_t          | hash file data offset                                                                     |
| uint32_t          | hash file data size                                                                       |
##### hash file meta data table, per entry:
| Type              | Description                                                                               |
|-------------------|-------------------------------------------------------------------------------------------|
| uint32_t          | hash file hash reference table size                                                       |
| uint32_t          | unknown (always seems to be 0x0)                                                          |
| uint32_t          | hash size final                                                                           |
| uint32_t          | hash size in memory                                                                       |
| uint32_t          | hash size in video memory                                                                 |
##### if the hash file hash reference table size is > 0 and there are hash references
| Type              | Description                                                                               |
|-------------------|-------------------------------------------------------------------------------------------|
| uint32_t          | hash reference file count                                                                 |
##### hash reference file types/flags, per entry:
| Type              | Description                                                                               |
|-------------------|-------------------------------------------------------------------------------------------|
| uint8_t           | hash reference file type/flag                                                             |
##### hash reference file hash values, per entry:
| Type              | Description                                                                               |
|-------------------|-------------------------------------------------------------------------------------------|
| uint64_t          | hash file hash value                                                                      |
