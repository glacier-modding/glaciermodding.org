---
sidebar_position: 1
description: Font replacement
---

# Font replacement

## Requirements
- [RPKG Tool](/rpkg)
- [JPEXS Free Flash Decompiler](https://github.com/jindrapetrik/jpexs-decompiler)
- [Simple Mod Framework](https://www.nexusmods.com/hitman3/mods/200)

## Introduction
This tutorial assumes that you already know how to use the RPKG Tool and Simple Mod Framework. The [Basic Retexture](../suitmodding/basicretexture.md) tutorial is a good place to start if you don't.

## Extracting the font GFX file
The game has multiple font GFX files. For this tutorial we will be modifying `[assembly:/ui/fonts/fonts_en.swf].pc_swf` which has the hash `00B8A5288E3707E1.GFXF`.

Once you find the font resource in the game right click it and choose the "Extract GFXF files from GFXF" option.

![Screenshot showing RPKG Tool's context menu for GFXF files](pathname:///media/scaleform/fontreplacement/extract-font-gfx.png)

A GFXF folder should be generated in the output path that you choose. Navigate through the folders until you find the font GFX file. In this case it is named: `00B8A5288E3707E1.GFXF.GFX`.

## Modifying the font GFX file
1. Open the font GFX file in JPEXS Free Flash Decompiler. You should see a list of fonts on the left side of the window under the "Fonts" folder.

![](pathname:///media/scaleform/fontreplacement/jpexs-fonts.png)

2. Select the font that you wish to replace and highlight all of the characters on the right side and copy them to the clipboard.

![](pathname:///media/scaleform/fontreplacement/jpexs-font-characters-highlighted.png)

3. Paste the characters into the "Add characters" field, select a source font and then hit "Ok".

![](pathname:///media/scaleform/fontreplacement/jpexs-font-add-characters.png)

4. You will get this warning, just hit "Yes to all".

![](pathname:///media/scaleform/fontreplacement/jpexs-font-replacement-warning.png)

5. You will then get this warning, just hit "Yes" again.

![](pathname:///media/scaleform/fontreplacement/jpexs-font-replacement-2nd-warning.png)

6. You should now notice that the font characters have been replaced.

![](pathname:///media/scaleform/fontreplacement/jpexs-font-replacement-done.png)

7. Click "Save" under the File tab at the top of the program.

8. You can now close JPEXS Free Flash Decompiler.

## Rebuilding the font GFX file
Now you can head back into the RPKG Tool and use the "Rebuild Scaleform GFX/DDS/TGA (GFXF) From Folder" option in the Rebuild menu. Select the GFXF root folder that was generated earlier. You'll now have a "GFXF.rebuilt" folder next to the "00B8A5288E3707E1.GFXF.GFX" file if everything went right. You should be able to find a file named "00B8A5288E3707E1.GFXF" inside of it. You can copy this file into your Simple Mod Framework mod.