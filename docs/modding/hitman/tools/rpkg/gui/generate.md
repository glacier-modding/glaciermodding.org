---
sidebar_position: 2
---

# Generate

The `Generate` options allows you to generate a RPKG using a folder containing previously (mass) exported files.

The first prompt will ask you to select a folder containing the assets sorted in their respective file format folders. Keep in mind that the folder selected here should be the parent folder of all the assets. Assuming you previously extracted files to `C:\Hitman 3\Extracted\TEXT` the folder that should be selected now when rebuilding is `Extracted` For the files to be properly rebuild the original `metas` folder needs to be present. The second will ask for an output folder to store the RPKG.
After selecting both folders, the tool will repack all assets into a RPKG(s) which will be stored the output folder.

Note that unlike the [Rebuild](/docs/modding/hitman/tools/rpkg/gui/rebuild) function `Generate` does not convert files.

The wiki is currently a work in progress at the moment, please feel free to contribute @ https://github.com/glacier-modding/glaciermodding.org
