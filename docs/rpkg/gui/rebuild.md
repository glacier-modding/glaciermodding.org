---
sidebar_position: 2
---

# Rebuild files

The `Rebuilt` options allows you rebuilt folder containing previously (mass) exported files back into a native format in a RPKG. This allows you to import these files into the game.

The prompt will ask you to select a folder containing the assets. Keep in mind that the folder selected here should be the parent folder of all the assets. Assuming you previously mass extracted files to `C:\Hitman 3\Extracted\TEXT\chunk7.rpkg` the folder that should be selected now when rebuilding is `Extracted`. For the files to be properly rebuild the original `metas` folder needs to be present.
After a folder, the tool will go through all subfolders and convert the assets back into their native format. These will be stored in a `REBUILT` subfolder. The converted assets will also be repacked into RPKG(s) which will be stored in a newly created `RPKGS` folder in the root folder.

The wiki is currently a work in progress at the moment, please feel free to contribute @ https://github.com/glacier-modding/wiki.notex.app
