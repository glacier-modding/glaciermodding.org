---
sidebar_position: 2
description: Documentation for the HitmanDB API.
---

# API

### <span class="badge badge--primary">POST</span> /search
Searches the Hash DB with the specified parameters.  
You can use any HTTP request method, but it is recommended to use POST.  

**Type:** JSON  
**Required Headers:** Content-Length  
**Note:** Any status code other than 200 should be considered an error. The following JSON will be returned if an error has occurred:

```json
{
    "error": "invalid request json"
}
```
This is currently the only error that can occur.

#### Request Fields (all are required, case insensitive):

| Field Name        | Type          | Description                                                            |
|-------------------|---------------|------------------------------------------------------------------------|
| search_term       | string        | Term to search for                                                     |
| number_of_results | int           | How many results should be returned on one "page"                      |
| resource_type     | string (type) | What type to search for ([see list of types](#list-of-types)) e.g. ANY |
| page_number       | int           | What page to return results from (starting from 0)                     |

#### Example Request:

```json
{
    "search_term": "azalea",
    "number_of_results": 3,
    "resource_type": "any",
    "page_number": 0
}
```

#### Response Fields:

| Field Name        | Type           | Description                                                                          |
|-------------------|----------------|--------------------------------------------------------------------------------------|
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
    "number_of_results": 3,
    "page_number": 0,
    "results": [
        {
            "hash": "00800A1DAA3DB1B2",
            "string": "azalea_green_a",
            "type": "TEMP"
        },
        {
            "hash": "00A48D280A10793D",
            "string": "azalea_green_a",
            "type": "TBLU"
        },
        {
            "hash": "00200F50F4F10A24",
            "string": "azalea_green_b",
            "type": "TEMP"
        }
    ]
}
```

#### List of Types:

Same as [Glacier 2 File Formats](/glacier2/fileformats) but with an added `ANY` type which will return all types.
