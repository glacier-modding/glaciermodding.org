---
sidebar_position: 2
description: Campaign Menu
---

# Campaign Menu

For this tutorial, we will go over creating a new campaign category.

```json
{
	"file": "0093B70B9E704CE0",
	"type": "JSON",
	"patch": [
		{
			"op": "add",
			"path": "/0",
			"value": {
				"Name": "UI_SONS_OF_PROVIDENCE",
				"Image": "",
				"Type": "mission",
				"Properties": {
					"BackgroundImage": "images/sop/sons_of_providence_tile.jpg"
				},
				"StoryData": [
					{
						"Type": "Mission",
						"Id": "1c427111-cfc7-4049-ab5f-528b91a04e38",
						"_comment": "Institute Mission"
					}
				]
			}
		}
	]
}

```