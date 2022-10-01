---
sidebar_position: 1
---

# Commands

```
-compute_ioi_hash <string>
    Computes the IOI style truncated md5 hash/runtimeid from a string.
-decrypt_packagedefinition_thumbs <path to file>
    Decrypts packagedefinitions.txt / thumbs.dat files.
-encrypt_packagedefinition_thumbs <path to file>
    Encrypts packagedefinitions.txt / thumbs.dat files.
-export_map <path to folder containing RPKG files>
    Scans a directory, commonly Hitman's Runtime dir, and imports and
    scans all available RPKG files and utilizes them during the extraction of a Hitman
    map (entity/brick) whose hash is specified -filter. The map (entity/brick) is then
    extracted to a folder in the form of a number 3D glTF GLB file(s) (non-textured) and
    Godot v4 scene and project files.
-export_map_textured <path to folder containing RPKG files>
    Scans a directory, commonly Hitman's Runtime dir, and imports and
    scans all available RPKG files and utilizes them during the extraction of a Hitman
    map (entity/brick) whose hash is specified -filter. The map (entity/brick) is then
    extracted to a folder in the form of a number 3D glTF GLB file(s) (textured) and
    Godot v4 scene and project files. Mainly for use on smaller maps (entity/brick).
-extract_all_hash_depends_from <path to folder containing RPKG files>
    Extracts all of the recursive hash depends, specified by -filter,
    of a given hash file/resource.
    Scans a directory, commonly Hitman's Runtime dir, and imports and
    scans all available RPKG files for dependency information.
-extract_entity_to_qn <path to folder containing RPKG files>
    Scans a directory, commonly Hitman's Runtime dir, and imports and
    scans all available RPKG files and their patch deletion lists for the existence
    of the hash file/resource, specified by -filter, and extracts and converts a given
    entity (TEMP/TBLU) to a QN (QuickEntity) JSON.
-extract_mati_to_json <path to RPKG file>
    Extracts one or more hash file/resources, specified by -filter, from the input RPKG file
    and converts them to MATI JSON(s).
-extract_non_base_hash_depends_from <path to folder containing RPKG files>
    Extracts all of the recursive hash barring those in chunk0 and chunk1, specified by -filter,
    of a given hash file/resource.
    Scans a directory, commonly Hitman's Runtime dir, and imports and
    scans all available RPKG files for dependency information.
-extract_all_hash_depends_prim_models_from <path to folder containing RPKG files>
    Extracts all of the recursive PRIM Model(s) (GLB/TGA) hash depends,
    specified by -filter, of a given hash file/resource.
    Scans a directory, commonly Hitman's Runtime dir, and imports and
    scans all available RPKG files for dependency information.
-extract_direct_hash_depends_from <path to folder containing RPKG files>
    Extracts the direct hash depends, specified by -filter,
    of a given hash file/resource.
    Scans a directory, commonly Hitman's Runtime dir, and imports and
    scans all available RPKG files for dependency information.
-extract_direct_hash_depends_prim_models_from <path to folder containing RPKG files>
    Extracts all of the direct PRIM Model(s) (GLB/TGA) hash depends,
    specified by -filter, of a given hash file/resource.
    Scans a directory, commonly Hitman's Runtime dir, and imports and
    scans all available RPKG files for dependency information.
-extract_from_rpkg <path to RPKG file>
    Extracts all hash linked files/resources from an RPKG file.
-extract_from_rpkgs <path to folder containing RPKGs>
    Extracts all hash linked files/resources from a folder of RPKG files.
-extract_gfxf_from <path to folder containing RPKG files>
    Extracts all hash linked files/resources located in the GFXF files
    and unpacks them to GFX and if available DDS/TGA files from all
    the RPKG files in a given directory.
-extract_ores_from <path to folder containing RPKG files>
    Extracts all hash linked files/resources located in the ORES files
    by their full IOI path names from all the RPKG files in a given directory.
-extract_wwem_to_ogg_from <path to folder containing RPKG files>
    Extracts all hash linked files/resources of type WWEM to their
    full IOI internal Wwise file paths / names. It also converts
    the WWES (*.wem) files directly to *.ogg files for easy listening.
-extract_wwes_to_ogg_from <path to folder containing RPKG files>
    Extracts all hash linked files/resources of type WWES to their
    full IOI internal Wwise file paths / names. It also converts
    the WWES (*.wem) files directly to *.ogg files for easy listening.
-extract_wwev_to_ogg_from <path to folder containing RPKG files>
    Extracts all hash linked files/resources of type WWEV to their
    partial IOI internal Wwise file paths / names. It also converts
    the WWEV (*.wem) files directly to *.ogg files for easy listening.
-extract_dlge_to_json_from <path to folder containing RPKG files>
    Extracts all hash linked files/resources of type DLGE from
    all the RPKG files in a given directory and then decrypts
    them in memory and outputs / formats them as JSON files.
-extract_locr_to_json_from <path to folder containing RPKG files>
    Extracts all hash linked files/resources of type LOCR from
    all the RPKG files in a given directory and then decrypts
    them in memory and outputs / formats them as JSON files.
-extract_prim_textured_from <path to RPKG file>
    Extracts hash linked files/resources of type PRIM specified by
    -filter from specified RPKG file and then converts them (and the
    textures associated with the PRIM) all in memory and then
    outputs / formats them as a single 3D glTF GLB file(s).
-extract_prim_to_glb_from <path to RPKG file>
    Extracts hash linked files/resources of type PRIM specified by
    -filter from specified RPKG file and then converts them in memory
    and outputs / formats them as a single 3D glTF GLB file(s).
-extract_prim_to_obj_from <path to RPKG file>
    Extracts hash linked files/resources of type PRIM specified by
    -filter from specified RPKG file and then converts them in memory
    and outputs / formats them as a single 3D OBJ file(s).
-extract_rtlv_to_json_from <path to folder containing RPKG files>
    Extracts all hash linked files/resources of type RTLV from
    all the RPKG files in a given directory and then decrypts
    them in memory and outputs / formats them as JSON files.
    and outputs / formats them as a single 3D OBJ file(s).
-extract_sdef_to_json <path to RPKG file>
    Extracts one or more hash file/resources, specified by -filter, from the input RPKG file
    and converts them to SDEF JSON(s).
-extract_prim_model_from <path to RPKG file>
    Extracts hash linked files/resources of type PRIM specified by
    -filter from specified RPKG file and then converts them in memory
    and outputs / formats them as a GLB/TGA file(s).
-extract_all_prim_model_of_temp_from <path to RPKG file>
    Extracts hash linked files/resources of type PRIM which are hash
    depends of TEMP hash files specified by -filter from specified RPKG
    file and then converts them in memory and outputs / formats them
    as GLB/TGA file(s).
-extract_all_text_from <path to folder containing RPKG files>
    Extracts all hash linked files/resources of type TEXT/TEXD from
    all the RPKG files in a given directory and then decrypts
    them in memory and outputs / formats them as TGA files.
-extract_text_from <path to RPKG file>
    Extracts all hash linked files/resources of type TEXT/TEXD from
    all the RPKG files in a given directory and then decrypts
    them in memory and outputs / formats them as TGA files.
-extract_to_rt_json <path to RPKG file>
    Extracts hash linked files/resources of types supported by ResourceTool
    where the hash files are specified by -filter and the Hitman game version
    is specified by -version and then converts them in memory and outputs / formats them
    as RT JSON file(s).
-filter <hash filter>
    Filters hash linked files/resources by string filter.
    String filter can be a full hash value, partial hash value,
    the hash resource type, partial hash resource type, WWES or WWEV
    partial of full file/resource name, etc...
    Can accept multiple filters: -filter <filter1>,<filter2>,...
-generate_rpkg_from <path to folder to generate rpkg from>
    Generates a RPKG file from hash file(s) in a given folder and all subfolders.
    The folder name is used for the filename of the generated RPKG file.
-generate_rpkg_quickly_from <path to folder to generate rpkg from>
    Generates a RPKG file from hash file(s) in a given folder and all subfolders, but q u i c k l y.
    The folder name is used for the filename of the generated RPKG file.
-hash_depends <path to folder containing RPKG files>
    Lists the forward and reverse depends of a given hash file/resource.
    Scans a directory, commonly Hitman's Runtime dir, and imports and
    scans all available RPKG files for dependency information and lists the results.
-hash_probe <path to folder containing RPKG files>
    Probes RPKG files for hash files/resources and displays key data points.
    Scans a directory, commonly Hitman's Runtime dir, and imports and
    scans all available RPKG files for the existence of the hash file/resource.
-hash_meta_to_json <path to hash *.meta file>
    Converts a Hash *.meta file into an easily editable JSON file (*.meta.JSON).
-hex_search <hex string>
-import_map <path to folder containing RPKG files>
    Scans a directory, commonly Hitman's Runtime dir, and imports and
    scans all available RPKG files and utilizes them during the comparison of a Hitman
    map (entity/brick) whose hash is specified -filter, during the map import process.
    During the import process, the matrix transforms are parsed from the Godot v4 project
    files, located in the path specified by -map_path. Finally, any changes found in the
    map are then written to a QN (QuickEntity) JSON, in the format specified by -qn_format.
-json_to_hash_meta <path to hash *.meta.JSON file>
    Converts a Hash meta JSON file (*.meta.JSON) into a Hash *.meta file.
-json_to_mati <path to MATI.JSON file(s) / folder>
    Converts MATI JSON file(s) into MATI file(s) (along with .meta file(s)).
    When a folder is passed to the function it is recursively scanned for all available.
    MATI.JSON files and converts them all to MATI file(s) (along with .meta file(s)).
-json_to_sdef <path to SDEF.JSON file(s) / folder>
    Converts SDEF JSON file(s) into SDEF file(s) (along with .meta file(s)).
    When a folder is passed to the function it is recursively scanned for all available.
    SDEF.JSON files and converts them all to SDEF file(s) (along with .meta file(s)).
-latest_hash <path to folder containing RPKG files>
    Scans a directory, commonly Hitman's Runtime dir, and imports and
    scans all available RPKG files and their patch deletion lists for the existence
    of the hash file/resource, specified by -filter, and determines the RPKG file that
    contains the 'latest' (game used) version of that hash file/resource.
-mati_to_json <path to MATI file(s) / folder>
    Converts MATI file(s) (make sure their .meta file(s) are in the same directory) into
    easily editable MATI JSON file(s).
    When a folder is passed to the function it is recursively scanned for all available.
    MATI files (and their .meta files) and converts them all to MATI JSON file(s).
-map_filters <comma separated parameters for map extraction>
    boxes=true or boxes=false - Enable/Disable volume boxes in the exported map
    spheres=true or spheres=false - Enable/Disable volume spheres in the exported map
    visible=true or visible=false - Enable/Disable nodes with m__bVisible==False from export
-map_path <path to map folder containing Godot v4 project files>
-output_path <path to output folder>
    Specifies output folder path to use instead of the current directory.
-qn_format <QN JSON format>
    Options are: entity or patch
-rebuild_wwev_in <path to folders containing wem files>
    Rebuilds sets of individual Wwise .wem files that were previously
    extracted with (-extract_wwev_from). The folder specified by the
    argument can contain any number of sub folders, where each subfolder's
    name is linked to an individual WWEV that will be built from the *.wem
    files in that folder.
-rebuild_gfxf_in <path to folders containing GFXF/(DDS/TGA) files>
    Rebuilds sets of GFX and if available DDS/TGA files that were previously
    extracted with (-extract_gfxf_from). The folder specified by the
    argument can contain any number of sub folders, where each subfolder's
    name is linked to an individual GFXF that will be built from
    the GFX and if available DDS/TGA files in that folder.
-rebuild_dlge_from_json_from <path to folder containing JSON (DLGE) files>
    Rebuilds DLGE files/resources from JSON (DLGE) files that were previously
    extracted with (-extract_dlge_to_json_from).
-rebuild_locr_from_json_from <path to folder containing JSON (LOCR) files>
    Rebuilds LOCR files/resources from JSON (LOCR) files that were previously
    extracted with (-extract_locr_to_json_from).
-rebuild_prim_in <path to folder containing PRIM files>
    Rebuilds PRIM files/resources from GLB (PRIM) files that were previously
    extracted with (-extract_prim_to_glb_from).
-rebuild_rtlv_from_json_from <path to folder containing JSON (RTLV) files>
    Rebuilds RTLV files/resources from JSON (RTLV) files that were previously
    extracted with (-extract_rtlv_to_json_from).
-rebuild_text_in <path to folder containing TEXT/TEXD files>
    Rebuilds TEXT/TEXD files/resources from TGA (TEXT/TEXD) files that were previously
    extracted with (-extract_text_from or -extract_all_text_from).
-regex_search <regex>
    Specifies the regex which is used to find within hash files/resources.
-sdef_to_json <path to SDEF file(s) / folder>
    Converts SDEF file(s) (make sure their .meta file(s) are in the same directory) into
    easily editable SDEF JSON file(s).
    When a folder is passed to the function it is recursively scanned for all available.
    SDEF files (and their .meta files) and converts them all to SDEF JSON file(s).
-search_rpkg <path to RPKG file>
    Specifies RPKG file whose hash files/resources will to be searched through.
-text_search <text string>
    Specifices the text string to find within hash files/resources.
-version <text string>
    Specifices the ResourceTool Hitman game version. Options are: HM2016, HM2, or HM3.
```
### Examples:
```
Computes the IOI style truncated md5 hash/runtimeid from a string:
    rpkg-cli.exe -compute_ioi_hash "[assembly:/_PRO/Scenes/Missions/CoastalTown/Mission01.entity].pc_entitytemplate"
Decrypts packagedefinitions.txt / thumbs.dat files:
    rpkg-cli.exe -decrypt_packagedefinition_thumbs packagedefinition.txt
Encrypts packagedefinitions.txt / thumbs.dat files:
    rpkg-cli.exe -encrypt_packagedefinition_thumbs packagedefinition.txt.decrypted
Extracts all hash linked files/resources from an RPKG file:
    rpkg-cli.exe -extract_from_rpkg "C:\Program Files\Epic Games\HITMAN3\Runtime\chunk0.rpkg"
Extracts all hash linked files/resources from an RPKG file to an output folder:
    rpkg-cli.exe -output_path "R:\my\output\path" -extract_from_rpkg "C:\Program Files\Epic Games\HITMAN3\Runtime\chunk0.rpkg"
Extracts one hash linked files/resources from an RPKG file by hash filter:
    rpkg-cli.exe -filter 00123456789ABCDE -extract_from_rpkg "C:\Program Files\Epic Games\HITMAN3\Runtime\chunk0.rpkg"
Extracts multiple hash linked files/resources from an RPKG file by hash filter:
    rpkg-cli.exe -filter 00123456789ABCDE,00123456789ABCDE -extract_from_rpkg "C:\Program Files\Epic Games\HITMAN3\Runtime\chunk0.rpkg"
Extracts all hash linked files/resources from an RPKG file by hash resource type filter:
    rpkg-cli.exe -filter ORES -extract_from_rpkg "C:\Program Files\Epic Games\HITMAN3\Runtime\chunk0.rpkg"
Extracts all hash linked files/resources from an RPKG file by hash resource types ORES, REPO, and JSON:
    rpkg-cli.exe -filter ORES,REPO,JSON -extract_from_rpkg "C:\Program Files\Epic Games\HITMAN3\Runtime\chunk0.rpkg"
Generates a RPKG file from hash file(s) in a given folder and all subfolders:
    rpkg-cli.exe -generate_rpkg_from chunk0patch1
Generates a RPKG file from hash file(s) in a given folder and all subfolders but q u i c k l y:
    rpkg-cli.exe -generate_rpkg_quickly_from chunk0patch1
Converts a Hash *.meta file into an easily editable JSON file (*.meta.JSON):
    rpkg-cli.exe -hash_meta_to_json "C:\00123456789ABCDE.meta"
Converts a Hash meta JSON file (*.meta.JSON) into a Hash *.meta file:
    rpkg-cli.exe -json_to_hash_meta "C:\00123456789ABCDE.meta.JSON"
Extracts all of the recursive hash depends, specified by -filter, of a given hash file/resource:
    rpkg-cli.exe -filter 00123456789ABCDE -extract_all_hash_depends_from "C:\Program Files\Epic Games\HITMAN3\Runtime"
Extracts all of the recursive hash depends barring those in chunk0/chunk1, specified by -filter, of a given hash file/resource:
    rpkg-cli.exe -filter 00123456789ABCDE -extract_non_base_hash_depends_from "C:\Program Files\Epic Games\HITMAN3\Runtime"
Extracts all of the recursive PRIM Model(s) (GLB/TGA) hash depends, specified by -filter, of a given hash file/resource:
    rpkg-cli.exe -filter 00123456789ABCDE -extract_all_hash_depends_prim_models_from "C:\Program Files\Epic Games\HITMAN3\Runtime"
Extracts all of the direct hash depends, specified by -filter, of a given hash file/resource:
    rpkg-cli.exe -filter 00123456789ABCDE -extract_direct_hash_depends_from "C:\Program Files\Epic Games\HITMAN3\Runtime"
Extracts all of the direct PRIM Model(s) (GLB/TGA) hash depends, specified by -filter, of a given hash file/resource:
    rpkg-cli.exe -filter 00123456789ABCDE -extract_direct_hash_depends_prim_models_from "C:\Program Files\Epic Games\HITMAN3\Runtime"
Extracts PRIM (to 3D glTF GLB) hash linked files/resources from an RPKG file by hash filter:
    rpkg-cli.exe -filter 00123456789ABCDE -extract_prim_to_glb_from "C:\Program Files\Epic Games\HITMAN3\Runtime\chunk0.rpkg"
Extracts PRIM (to 3D OBJ) hash linked files/resources from an RPKG file by hash filter:
    rpkg-cli.exe -filter 00123456789ABCDE -extract_prim_to_obj_from "C:\Program Files\Epic Games\HITMAN3\Runtime\chunk0.rpkg"
Extracts all hash linked files/resources located in the ORES files from all the RPKG files in a given directory:
    rpkg-cli.exe -extract_ores_from "C:\Program Files\Epic Games\HITMAN3\Runtime"
Extracts all hash linked files/resources located in the ORES files from all the RPKG files in a given directory to an output folder:
    rpkg-cli.exe -output_path "R:\my\output\path" -extract_ores_from "C:\Program Files\Epic Games\HITMAN3\Runtime"
Extracts and decrypts (to JSON) all hash linked files/resources of type DLGE from all the RPKG files in a given directory:
    rpkg-cli.exe -extract_dlge_to_json_from "C:\Program Files\Epic Games\HITMAN3\Runtime"
Extracts and decrypts (to JSON) all hash linked files/resources of type DLGE from all the RPKG files in a given directory to an output folder:
    rpkg-cli.exe -output_path "R:\my\output\path" -extract_dlge_to_json_from "C:\Program Files\Epic Games\HITMAN3\Runtime"
Extracts and decrypts (to JSON) all hash linked files/resources of type LOCR from all the RPKG files in a given directory:
    rpkg-cli.exe -extract_locr_to_json_from "C:\Program Files\Epic Games\HITMAN3\Runtime"
Extracts and decrypts (to JSON) all hash linked files/resources of type LOCR from all the RPKG files in a given directory to an output folder:
    rpkg-cli.exe -output_path "R:\my\output\path" -extract_locr_to_json_from "C:\Program Files\Epic Games\HITMAN3\Runtime"
Extracts and decrypts (to JSON) all hash linked files/resources of type RTLV from all the RPKG files in a given directory:
    rpkg-cli.exe -extract_rtlv_to_json_from "C:\Program Files\Epic Games\HITMAN3\Runtime"
Extracts and decrypts (to JSON) all hash linked files/resources of type RTLV from all the RPKG files in a given directory to an output folder:
    rpkg-cli.exe -output_path "R:\my\output\path" -extract_rtlv_to_json_from "C:\Program Files\Epic Games\HITMAN3\Runtime"
Rebuilds sets DLGE files from JSON files that were previously created with (-extract_dlge_to_json_from):
    rpkg-cli.exe -rebuild_dlge_from_json_from "R:\DLGE"
Rebuilds sets DLGE files from JSON files that were previously created with (-extract_dlge_to_json_from) to an output folder:
    rpkg-cli.exe -output_path "R:\my\output\path" -rebuild_dlge_from_json_from "R:\DLGE"
Rebuilds sets LOCR files from JSON files that were previously created with (-extract_locr_to_json_from):
    rpkg-cli.exe -rebuild_locr_from_json_from "R:\LOCR"
Rebuilds sets LOCR files from JSON files that were previously created with (-extract_locr_to_json_from):
    rpkg-cli.exe -rebuild_locr_from_json_from "R:\LOCR"
Rebuilds sets RTLV files from JSON files that were previously created with (-extract_rtlv_to_json_from) to an output folder:
    rpkg-cli.exe -output_path "R:\my\output\path" -rebuild_rtlv_from_json_from "R:\RTLV"
Rebuilds sets RTLV files from JSON files that were previously created with (-extract_rtlv_to_json_from) to an output folder:
    rpkg-cli.exe -output_path "R:\my\output\path" -rebuild_rtlv_from_json_from "R:\RTLV"
Extracts all hash linked files/resources of type WWEM from all the RPKG files in a given directory:
    rpkg-cli.exe -extract_wwem_to_ogg_from "C:\Program Files\Epic Games\HITMAN3\Runtime"
Extracts all hash linked files/resources of type WWEM from all the RPKG files in a given directory to an output folder:
    rpkg-cli.exe -output_path "R:\my\output\path" -extract_wwem_to_ogg_from "C:\Program Files\Epic Games\HITMAN3\Runtime"
Extracts all hash linked files/resources of type WWES from all the RPKG files in a given directory:
    rpkg-cli.exe -extract_wwes_to_ogg_from "C:\Program Files\Epic Games\HITMAN3\Runtime"
Extracts all hash linked files/resources of type WWES from all the RPKG files in a given directory to an output folder:
    rpkg-cli.exe -output_path "R:\my\output\path" -extract_wwes_to_ogg_from "C:\Program Files\Epic Games\HITMAN3\Runtime"
Extracts all hash linked files/resources of type WWEV from all the RPKG files in a given directory:
    rpkg-cli.exe -extract_wwev_to_ogg_from "C:\Program Files\Epic Games\HITMAN3\Runtime"
Extracts all hash linked files/resources of type WWEV from all the RPKG files in a given directory to an output folder:
    rpkg-cli.exe -output_path "R:\my\output\path" -extract_wwev_to_ogg_from "C:\Program Files\Epic Games\HITMAN3\Runtime"
Rebuilds sets of individual Wwise .wem files that were previously extracted with (-extract_wwev_from):
    rpkg-cli.exe -rebuild_wwev_in "R:\WWEV"
Rebuilds sets of individual Wwise .wem files that were previously extracted with (-extract_wwev_from) to an output folder:
    rpkg-cli.exe -output_path "R:\my\output\path" -rebuild_wwev_in "R:\WWEV"
Lists and extracts the forward depends of a given hash file/resource:
    rpkg-cli.exe -filter 00123456789ABCDE -extract_direct_hash_depends "C:\Program Files\Epic Games\HITMAN3\Runtime"
Lists and extracts the forward depends of two hash files/resources:
    rpkg-cli.exe -filter 00123456789ABCDE,00123456789ABCDE -extract_direct_hash_depends "C:\Program Files\Epic Games\HITMAN3\Runtime"
Lists the forward and reverse depends of a given hash file/resource:
    rpkg-cli.exe -filter 00123456789ABCDE -hash_depends "C:\Program Files\Epic Games\HITMAN3\Runtime"
Lists the forward and reverse depends of two hash files/resources:
    rpkg-cli.exe -filter 00123456789ABCDE,00123456789ABCDE -hash_depends "C:\Program Files\Epic Games\HITMAN3\Runtime"
Probes RPKG files for hash files/resources and displays key data points:
    rpkg-cli.exe -filter 00123456789ABCDE -hash_probe "C:\Program Files\Epic Games\HITMAN3\Runtime"
Probes RPKG files for hash files/resources and displays key data points:
    rpkg-cli.exe -filter 00123456789ABCDE,00123456789ABCDE -hash_probe "C:\Program Files\Epic Games\HITMAN3\Runtime"
Search a RPKG file's hash files/resources by hex string:
    rpkg-cli.exe -hex_search 00112233445566 -search_rpkg "C:\Program Files\Epic Games\HITMAN3\Runtime\chunk0.rpkg"
Search a RPKG file's hash files/resources by regex:
    rpkg-cli.exe -regex_search "assembly:[\w/_]+" -search_rpkg "C:\Program Files\Epic Games\HITMAN3\Runtime\chunk0.rpkg"
Search a RPKG file's hash files/resources by text string:
    rpkg-cli.exe -text_search assembly -search_rpkg "C:\Program Files\Epic Games\HITMAN3\Runtime\chunk0.rpkg"
Search a RPKG file's hash files/resources by regex and filter by type ORES:
    rpkg-cli.exe -filter ORES -regex_search "assembly:[\w/_.]+" -search_rpkg "C:\Program Files\Epic Games\HITMAN3\Runtime\chunk0.rpkg"
```