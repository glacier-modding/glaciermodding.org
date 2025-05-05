---
sidebar_position: 5
---

# PrimPort

:::info
PrimPort can be downloaded from [here](/primport)

Source code can be found [here](/files/primport-src.7z)
:::

A tool for porting PRIM files between Hitman versions: HMA, Alpha, HM2016, and WoA

#### CLI Usage:

```
Usage: primport.exe [OPTIONS] [INPUT_PRIM] [INPUT_VERSION] [OUTPUT_VERSION] [OUTPUT_PRIM]

Arguments:
  [INPUT_PRIM]      Path to input PRIM file to port
  [INPUT_VERSION]   Input PRIM game version: HMA, ALPHA, HM2016, WOA
  [OUTPUT_VERSION]  Output PRIM game version: HMA, ALPHA, HM2016, WOA
  [OUTPUT_PRIM]     Path to output ported PRIM file

Options:
  -c          Remove cloth meshes (When porting from ALPHA)
  -v          Enable verbose debug output
  -h, --help  Print help
```

#### GUI Usage:

![rebone](/img/primport/gui.png)
