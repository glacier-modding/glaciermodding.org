---
sidebar_position: 2
---

# Overview

The RPKG tool has two panels.

## Left panel

The left panel includes the tabs Resource View, the Depenency View and the Search

-   The Resource View shows an overview of the currently loaded RPKG(s) and its content in a file tree structure. The content of RPKG's are sorted into categories according to [File Formats](https://wiki.notex.app/glacier2/fileformats).
-   The Depenency View shows an overview of the currently loaded RPKG(s) and its content. Files can be expanded upon to show the dependencies.
-   The Search includes a search field which can be used to search a file containing the string in the filename. The content of RPKG's are sorted into categories according to [File Formats](https://wiki.notex.app/glacier2/fileformats).

In all three views the items can be collapsed or expanded upon and right clicking on a file will present you with the option to extract it or it's dependencies among other options.

## Right Panel

Once a file has been selected by left clicking it's content can be viewed in the right panel which includes Details and Hex Viewer tabs:

-   Details shows an overview of the selected files among which the location of the file in the RPKG, several HEX metadata properties, IOI String, Depenencies and Reverse Depenencies.
-   Hex Viewer present the Hex View of the file. It does not allow for modification to the file although copying is possible.
-   Image Viewer renders the file if it is an image. Only applicable to GFXI and TEXT files.
-   JSON Viewer presents the content of a JSON file. Only applicable to JSON and LOCR files.
-   3D Viewer renders a mesh of the content. Only applicable to RIM files.
-   Audio Player plays the content of a file. Only applicable to WWEM, WWES and WWEV files.

## Functions

In addition to the two main panels the RPKG tool has additional functions which can be accessed through the menu bar.
These are:

-   [Extract](https://wiki.notex.app/rpkg/gui/extracting)
-   [Generate](https://wiki.notex.app/rpkg/gui/generate)
-   [Mass Extract](https://wiki.notex.app/rpkg/gui/mass_extract)
-   [Rebuild](https://wiki.notex.app/rpkg/gui/rebuild)
-   [Map Editing] ()
-   Color Theme
-   [Utilities] ()

The wiki is currently a work in progress at the moment, please feel free to contribute @ https://github.com/glacier-modding/wiki.notex.app
