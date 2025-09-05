---
sidebar_position: 2
title: "Initialization (.ini)"
description: A walkthrough of the ini file format
---
# Ini files

## ini-File (thumbs.dat) file format

The Glacier 2 engine utilizes INI files for configuration purposes. These files control various aspects of how the engine should behave. While they are usually XTEA encrypted, it's easy to decrypt and edit them using the [online XTEA tool](/tools/online/xtea/)

## File Structure

An INI file follows a standard format consisting of:
- **Sections**: Denoted by `[section_name]`, sections group related configuration settings.
- **Variables**: Key-value pairs in the form `key=value` that define specific settings.
- **Directives**: Special commands that define specific settings:
  - `!include <path>`:  includes the content of another ini file.
  - `ConsoleCmd <command>`: defines a command to run when launching the game
- **Comments**: Lines starting with `#` are comments and are ignored by the engine.

### Example structure
```cmd
# Example system config file for the engine

# -----------------------------------------------------------------------------

[application]
ForceVSync=0
CapWorkerThreads=0
SCENE_FILE=assembly:/_PRO/Scenes/Frontend/Boot.entity
GAME_VERSION=
RUNTIME_PATH=runtime
PROJECT_PATH=..\
BOOT_MOVIE=[assembly:/ui/videos/black_loading_slate_01.avi].pc_gfxv
BOOT_MOVIE_LOOPED=true
# ... other variables ...

[Hitman5]
usegamecontroller=1

ConsoleCmd Render_ShowDebug 0
ConsoleCmd UI_EnableMouseEvents 0

```

## Common Sections and Variables

### `[application]` Section

This section contains general application settings.

- `SCENE_FILE`: Specifies the ResourceID of the initial scene to load.
- `GAME_VERSION`: Defines the game version (often left blank).
- `PROJECT_PATH`: Specifies the project directory. This is usually the path the LAUNCHER.exe is located in.
- `RUNTIME_PATH`: Sets the runtime directory. This path is relative to the PROJECT_PATH variable.
- `BOOT_MOVIE`: ResourceID of the boot/loading screen video.
- `BOOT_MOVIE_BENCHMARK`: ResourceID of the video played during benchmarks.
- `BOOT_MOVIE_LOOPED`: If set to `true`, the boot movie will loop.
- `BENCHMARK_SCENE_01`, `BENCHMARK_SCENE_02`: Define scenes used for benchmarking. 
- `ForceVSync`: Enables (`1`) or disables (`0`) V-Sync.
- `CapWorkerThreads`: Limits the number of worker threads. `0` means no limit.
  
- `DefaultActiveTextLocale`: Sets the default language for text.
- `DefaultActiveLocale`: Sets the default spoken locale.
- `AvailableLocales`: Lists the available spoken locales.
- `AvailableTextLocales`: Lists the available text locales.
- `NonInteractiveMode`: Enables (`true`) or disables (`false`) non-interactive mode.
- `NO_RESOURCEDB`: If set to `1`, disables the resource database. Not connected in retail builds of the game.
- `USE_PACKAGE_FILES`: Enables (`1`) or disables (`0`) the use of package files.
- `OnlineDisableAutoReconnect`: If set to `1`, disables automatic online reconnection.

- `PCNewFeatures`: Unknown function.
- `PASSIVE`: Unknown function


### `[Hitman5]` Section

This section includes game-specific settings.

- `usegamecontroller`: Enables (`1`) or disables (`0`) the use of a game controller.

### Console Commands

> Most console commands have been disabled in the retail versions of games.

- `ConsoleCmd Render_ShowDebug 0`: Disables (`0`) the rendering debug overlay. 
- `ConsoleCmd UI_EnableMouseEvents 0`: Disables (`0`) mouse events in the UI.

## Including Other INI Files

The `!include` directive allows you to include the contents of another INI file. This is useful for modularizing configurations and reusing common settings across multiple files.

### Example

```ini
!include another_file.ini
```

This line includes all the configurations from `another_file.ini` into the current INI file.

> **Note**: the position of the `!include` directive is important. All variables in the included file will be placed at the exact location where the `!include` directive appears.
