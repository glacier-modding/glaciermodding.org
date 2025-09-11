---
sidebar_position: 2
description: Documentation for the HitmanDB API.
---

# API

### <span class="badge badge--primary">POST</span> /search

Searches the Hash DB with the specified parameters.  
You can use any HTTP request methods except OPTIONS and HEAD, but it is recommended to use POST.

**Type:** JSON  
**Required Headers:** Content-Length  
**Note:** Any status code other than 200 should be considered an error. The following JSON will be returned if an error has occurred:

```json
{
    "error": "invalid request json"
}
```

The following JSON will be returned if number_of_results is greater than 500:

```json
{
    "error": "number_of_results exceeds the limit of 500"
}
```

#### Request Fields (all are required, case insensitive):

| Field Name        | Type          | Description                                                            |
| ----------------- | ------------- | ---------------------------------------------------------------------- |
| search_term       | string        | Term to search for                                                     |
| number_of_results | int           | How many results should be returned on one "page" (max 500)            |
| resource_type     | string (type) | What type to search for ([see list of types](#list-of-types)) e.g. any |
| page_number       | int           | What page to return results from (starting from 0)                     |

#### Example Request:

```json
{
    "search_term": "azalea_green_a",
    "number_of_results": 5,
    "resource_type": "any",
    "page_number": 0
}
```

#### Response Fields:

| Field Name        | Type           | Description                                                                          |
| ----------------- | -------------- | ------------------------------------------------------------------------------------ |
| results           | array (result) | The results returned from the search ([see an example format below](#result-format)) |
| number_of_results | int            | How many results should be returned on one "page" (as specified by user)             |
| page_number       | int            | What page to return results from (starting from 0) (as specified by user)            |

#### Result Format:

```json
{
    "hash": "00C736630357B43C",
    "string": "[assembly:/_pro/design/actor/profession.template?/prof_sapienza_civilian_nakedguy.entitytemplate].pc_entitytype",
    "type": "TEMP"
}
```

#### Example Response:

```json
{
    "number_of_results": 5,
    "page_number": 0,
    "results": [
        {
            "hash": "006729ECDD022710",
            "string": "[[assembly:/_pro/speedtree/colorado/bush_azalea_green_a/azalea_green_a.srt].fxd](dx11,speedtree).pc_mate",
            "type": "MATE"
        },
        {
            "hash": "00A48D280A10793D",
            "string": "[assembly:/_pro/environment/templates/foliage/trees_colorado_a.template?/azalea_green_a.entitytemplate].pc_entityblueprint",
            "type": "TBLU"
        },
        {
            "hash": "00800A1DAA3DB1B2",
            "string": "[assembly:/_pro/environment/templates/foliage/trees_colorado_a.template?/azalea_green_a.entitytemplate].pc_entitytype",
            "type": "TEMP"
        }
    ]
}
```

#### List of Types:

Same as [Glacier 2 File Formats](/docs/glacier2/fileformats.md) but with an added `any` type which will return all types.
