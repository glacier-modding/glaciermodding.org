---
sidebar_position: 1
title: Launch arguments
---

import GameFilter from "@site/src/components/GameFilter"

The Glacier engine exposes two types of launch arguments:

- **-ao arguments** that configure the engine itself.
- **Console commands** registered through the game’s `ConsoleCmd` system. These can be provided in thumbs.dat or as launch arguments, and are usually more specific to the game’s implementation.

> The values documented below are based on reverse-engineering and documentation on the options can be incomplete or missing

Launch arguments use the following format:

```text
-ao <argument> <value>
ConsoleCmd <argument> <value>
```

---

<GameFilter label="Show exclusive options for:"/>

## The `-ao` arguments

### Benchmark

#### Start Benchmark

> `-ao start_benchmark <0-1>`

Starts the benchmark scene. 
`0`: Off / `1`: On

#### Benchmark Scene Index

> `-ao benchmark_scene_index <1-3>`

Selects the benchmark scene to run. 
The mapping from index to a scene is defined the the `BENCHMARK_SCENE` variables set in the `thumbs.dat` file.

#### Auto Quit Engine

> `-ao auto_quit_engine <seconds>`

Defines a timeout in seconds before the engine automatically quits.

### Display

#### Resolution

> `-ao resolution <width>x<height>`

Accepts `<width>`x`<height>`. Sets the resolution in width × height format.

#### Fullscreen

> `-ao fullscreen <0-3>`

| Value | Setting |
|---:|---|
| `0` | Windowed |
| `1` | Fullscreen |
| `2` | Exclusive Fullscreen |

#### Monitor

> `-ao monitor <0-n>`

Accepts a value between 0 and `<amount of monitors - 1>`. Selects the output monitor.

#### DXGI Adapter

> `-ao dxgiadapter <0-n>`

Accepts a value between 0 and `<amount of adapters* - 1>`. Selects the rendering device/GPU.

*_The adapter list includes the software renderer_

---

### Graphics Debugging

<div data-games="2016,h2,h3">

#### Limit Multi-GPU

> `-ao limitmultigpu <?>`

</div>

<div data-games="2016,h2,h3">

#### Disable Temp Alloc Reuse

> `-ao disabletempallocreuse <?>`

</div>

<div data-games="2016,h2,h3">

#### Disable Async Compute

> `-ao disableasynccompute <?>`

</div>

<div data-games="2016,h2,h3">

#### Leak Virtual Back Buffer

> `-ao leakvirtualbackbuffer <?>`

</div>

<div data-games="2016,h2,h3">

#### Debug Back Buffer

> `-ao debugbackbuffer <?>`

</div>

<div data-games="2016,h2,h3">

#### Disable Discard

> `-ao disablediscard <?>`

</div>

<div data-games="h3">

#### Enable Device Trim

> `-ao EnableDeviceTrim <?>`

Enables renderDevice [trimming](https://learn.microsoft.com/en-us/windows/win32/api/dxgi1_3/nf-dxgi1_3-idxgidevice3-trim). 

</div>

<div data-games="h3">

#### Device Trim Wait Copy Queues

> `-ao DeviceTrimWaitCopyQueues <?>`

Controls whether renderDevice trimming waits for copy queues.

</div>

<div data-games="007">

#### Clear Driver Pipeline Cache

> `-ao ClearDriverPipelineCache <?>`

Clears the Vulkan [Pipeline Cache](https://docs.vulkan.org/guide/latest/pipeline_cache.html). 

</div>

#### Full Memory Dump

> `-ao FullMemoryDump <?>`

---

## ConsoleCmd arguments

The `ConsoleCmd` system allows the commands to be defined as either a launch arguments or in the `thumbs.dat` file. All of the following `ConsoleCmd` variables can be defined in either of those places. There are additional `ConsoleCmd` options found inside the `thumbs.dat`. They cannot be defined as launch arguments, unless they are described here.

---

### Graphics Settings

<div data-games="2016">

#### Shadow Resolution

> `settings_setshadowresolution <0-2>`

| Value | Setting |
|---:|---|
| `0` | Low — 512 |
| `1` | Medium — 1024 |
| `2` | High — 2048 |

</div>

<div data-games="2016">

#### Shadow Maps

> `settings_setshadowmaps <0-3>`

| Value | Setting |
|---:|---|
| `0` | Low — 4 |
| `1` | Medium — 8 |
| `2` | High — 16 |
| `3` | Ultra — 32 |

</div>

<div data-games="h2,h3,007">

#### Shadow Quality

> `settings_setshadowquality <0-3>`

| Value | Setting | Shadow Maps |
|---:|---|---:|
| `0` | Low | 4 |
| `1` | Medium | 8 |
| `2` | High | 16 |
| `3` | Ultra | 32 |

</div>

<div data-games="h2,h3,007">

#### Simulation Quality

> `settings_setsimulationquality <0-2>`

| Value | Setting |
|---:|---|
| `0` | Base |
| `1` | Better |
| `2` | Best |

</div>

#### Detail LOD

> `settings_setdetaillod <0-3>`

| Value | Setting |
|---:|---|
| `0` | Low |
| `1` | Medium |
| `2` | High |
| `3` | Ultra |

#### Texture Filtering

> `settings_settexturefilter <0-4>`

| Value | Setting |
|---:|---|
| `0` | Trilinear |
| `1` | Anisotropic 2× |
| `2` | Anisotropic 4× |
| `3` | Anisotropic 8× |
| `4` | Anisotropic 16× |

#### Texture Quality

> `settings_settexturequality <0-2>`

| Value | Setting |
|---:|---|
| `0` | Low |
| `1` | Normal |
| `2` | High |

<div data-games="2016">

#### Anti-Aliasing

> `settings_setantialiasing <0-2>`

| Value | Setting |
|---:|---|
| `0` | Off |
| `1` | FXAA |
| `2` | SMAA |

</div>

<div data-games="2016">

#### SSAO

> `settings_setssao <0-5>`

| Value | Setting |
|---:|---|
| `0` | Off |
| `1` | Minimum |
| `2` | Low |
| `3` | Medium |
| `4` | High |
| `5` | Ultra |

</div>

<div data-games="h2,h3">

#### ASSAO Quality

> `settings_setassaoquality <?>`

Controls ASSAO quality.

</div>

<div data-games="h2,h3,007">

#### Reflection Quality

> `settings_setreflectionquality <0-3>`

| Value | Setting |
|---:|---|
| `0` | Off |
| `1` | Low |
| `2` | Medium |
| `3` | High |

</div>

<div data-games="h2,h3,007">

#### Screen-Space Shadows

> `settings_setscreenspaceshadows <?>`

Controls screen-space shadow rendering.

</div>

<div data-games="h3,007">

#### Screen-Space Reflections (SSR) Quality

> `settings_setssrquality <0-3>`

| Value | Setting |
|---:|---|
| `0` | Off |
| `1` | Low |
| `2` | Medium |
| `3` | High |

</div>

<div data-games="h2,h3">

#### Motion Blur

> `settings_setmotionblur <0-3>`

| Value | Setting |
|---:|---|
| `0` | Off |
| `1` | Low |
| `2` | Medium |
| `3` | High |

</div>

<div data-games="h2,h3,007">

#### Sharpening

> `settings_setsharpening <0-3>`

| Value | Setting |
|---:|---|
| `0` | Off |
| `1` | Weak |
| `2` | Moderate |
| `3` | Strong |

</div>

<div data-games="h3,007">

#### VRS Profile

> `settings_setvrsprofile <?>`

Controls the Variable Rate Shading profile.

</div>

<div data-games="007">

#### Terrain Quality

> `settings_setterrainquality <?>`

Controls terrain rendering quality.

</div>

<div data-games="007">

#### Volumetric Fog Quality

> `settings_setvolumetricfogquality <?>`

Controls volumetric fog quality. 

</div>

<div data-games="007">

#### Volumetric Effects Quality

> `settings_setvolumetriceffectsquality <?>`

Controls the quality of volumetric effects.

</div>

<div data-games="007">

#### Global Illumination Quality

> `settings_setglobalilluminationquality <?>`

Controls global illumination quality.

</div>

---

<div data-games="h3,007">

### Ray Tracing & Path Tracing
</div>


<div data-games="h3">

#### Ray Tracing

> `settings_rtenabled <0-1>`

`0`: Off / `1`: On

</div>

<div data-games="h3">

#### Ray-Traced Shadows

> `settings_rtshadowenabled <0-1>`

`0`: Off / `1`: On

</div>

<div data-games="h3">

#### Ray-Traced Reflections

> `settings_rtreflectionenabled <0-1>`

`0`: Off / `1`: On

</div>

<div data-games="007">

#### Path Tracing

> `settings_pathtracingenabled <?>`

007 First Light seems to replace the individual HITMAN 3 ray-tracing toggles with a single path-tracing toggle.

</div>

---

<div data-games="h3,007">

### Upscaling & Frame Generation
</div>

<div data-games="h3,007">

#### SSAA Method

> `settings_setssaamethod <0-3>`

| Value | Method |
|---:|---|
| `0` | Off |
| `1` | XeSS |
| `2` | DLSS |
| `3` | FSR 2 |

</div>

<div data-games="h3">

#### SSAA Quality

> `settings_setssaaquality <0-3>`

| Value | Setting |
|---:|---|
| `0` | Performance |
| `1` | Balanced |
| `2` | Quality |
| `3` | Ultra Quality |

</div>

<div data-games="h3">

#### DLSS

> `settings_setdlss <0-1>`

`0`: Off / `1`: On

</div>

<div data-games="007">

#### DLSS Quality

> `settings_setdlssquality <?>`

Replaces the HITMAN 3 `settings_setdlss` on/off toggle with a quality setting.

</div>

<div data-games="007">

#### DLSS Ray Reconstruction

> `settings_setdlssrr <?>`

Controls DLSS Ray Reconstruction.

</div>

<div data-games="h3">

#### DLSS Frame Generation

> `settings_SetDLSSG <0-1>`

`0`: Off / `1`: On

007 First Light exposes the same feature under: `settings_setdlssframegen`.

</div>

<div data-games="007">

#### DLSS Frame Generation

> `settings_setdlssframegen <0-1>`

`0`: Off / `1`: On

HITMAN 3 exposes the same feature under: `settings_SetDLSSG`.

</div>

<div data-games="007">

#### FSR Resolution

> `settings_setfsrresolution <?>`

Controls the FSR render resolution.

</div>

<div data-games="h3">

#### NVIDIA Reflex

> `settings_SetReflex <0-2>`

| Value | Setting |
|---:|---|
| `0` | Off |
| `1` | On |
| `2` | On + Boost |

</div>

---

### Display Settings

#### VSync

> `settings_vsync <0-1>`

`0`: Off / `1`: On


#### VSync Interval

> `settings_setvsyncinterval <1-2>`

| Value | Setting |
|---:|---|
| `1` | 100% FPS |
| `2` | 50% FPS |


#### Supersampling

> `settings_setsupersampling <0.0-inf>`

Recommended range:

```text
1.0 – 2.0
```

#### HDR

> `settings_sethdr <0-1>`

`0`: Off / `1`: On

---

### Profiling and Debugging

#### Profile Data

> `ui_showprofiledata <0-1>`

`0`: Off / `1`: On

Shows FPS statistics on the top left of the screen, used during benchmarks.

<div data-games="h2,h3,007">

#### Profile Statistics

> `ui_showprofilestats`

Displays profile statistics.

`0`: Off / `1`: On

Shows level statistics on the top left of the screen, used during benchmarks.

</div>

#### FPS Limiter

> `enablefpslimiter <0-1>`

`0`: Off / `1`: On

<div data-games="2016,h2,h3">

#### Render Discard

> `render_discard <0-1>`

`0`: Off / `1`: On

</div>

<div data-games="h2,h3,007">

#### Sound Simulation Quality Override

> `sound_simulationqualityoverride <?>`

Overrides the simulation quality used by the sound system.

</div>

---

<div data-games="h3,007">

### Online / Development Commands

**Commands:** `online_EpicDevId <id>`, `online_EpicDevToken <token>`

These are used to configure the Epic Online Services SDK

</div>

---

## Misc launch arguments

- HITMAN (2016) and HITMAN 2 (2018) support selecting the Direct3D rendering API:
Launching with `-D3D12` starts the Direct3D 12 version of HITMAN.
- The `launcher.exe` found in HITMAN (2016), HITMAN 2 and HITMAN 3 can be omitted by adding the `-SKIP_LAUNCHER` argument to it.