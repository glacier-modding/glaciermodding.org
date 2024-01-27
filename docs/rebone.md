---
sidebar_position: 4
---

# Rebone

:::info
Rebone can be downloaded from [here](/rebone)

Source code can be found [https://github.com/2kpr/rebone](https://github.com/2kpr/rebone)
:::

A tool for porting Hitman WoA S1 weightedprims to S2 and S3 bonerigs

#### CLI Usage:

```
Usage: rebone.exe [INPUT_PRIM] [FROM_BORG] [TO_BORG] [OUTPUT_PRIM]

Arguments:
  [INPUT_PRIM]
  [FROM_BORG]
  [TO_BORG]
  [OUTPUT_PRIM]

Options:
  -h, --help  Print help
```

#### GUI Usage:

![rebone](/img/rebone/gui.png)

#### Example Output:

```
rebone.exe 001FA83D69D89B24.PRIM 00375A5DF0DE7051.BORG 0017416135CF879C.BORG output.prim

00375A5DF0DE7051.BORG has 231 bones
0017416135CF879C.BORG has 233 bones
Unique bones in 0017416135CF879C.BORG:
  - fa_teeth_dw
  - fa_teeth_up
001FA83D69D89B24.PRIM has 10 meshes
Remapped 33877 joints in 10 meshes
Remapped PRIM file output to output.prim
```
