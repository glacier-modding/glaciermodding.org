---
sidebar_position: 1
title: Templates
description: Templates you can copy and paste into QNE!
---

### How to use

1. Hover your mouse over the template you wish to use and click the copy button at the very right hand side.
   ![video showcasing the first step](/img/quickentity-editor/templates/step1.gif)
2. Right click the entity that you wish to paste the template into and click Clipboard > Paste Entity.
   ![video showcasing the second step](/img/quickentity-editor/templates/step2.gif)

## Templates

### Add camera to inventory

```
{"feed6a9b0b72ffec":{"parent":"3a4fd7620d2fc601","name":"Add camera to inventory","factory":"[modules:/zentity.class].pc_entitytype","blueprint":"[modules:/zentity.class].pc_entityblueprint"},"feed362e9b575bf4":{"parent":"feed6a9b0b72ffec","name":"HeroItemCondition","factory":"[modules:/zheroitemcondition.class].pc_entitytype","blueprint":"[modules:/zheroitemcondition.class].pc_entityblueprint","properties":{"m_bCheckEquippedItem":{"type":"bool","value":false},"m_bCheckInventory":{"type":"bool","value":true},"m_ItemKeyToFind":{"type":"SEntityTemplateReference","value":"feed4fa38bcf652b","postInit":true}},"events":{"OnTrue":{"SetTrue":["feed6ab06cd505cc"]}}},"feedd2ecb25f1b29":{"parent":"feed6a9b0b72ffec","name":"HeroItemAction","factory":"[modules:/zheroitemaction.class].pc_entitytype","blueprint":"[modules:/zheroitemaction.class].pc_entityblueprint"},"feed4fa38bcf652b":{"parent":"feed6a9b0b72ffec","name":"DONT_USE_ON_LEVEL_ItemKey_Gadget_Camera","factory":"[modules:/zitemrepositorykeyentity.class].pc_entitytype","blueprint":"[modules:/zitemrepositorykeyentity.class].pc_entityblueprint","properties":{"m_RepositoryId":{"type":"ZGuid","value":"f3f8ac31-195d-4701-9e7c-775d621a405a"}}},"feed5b93c1388855":{"parent":"feed6a9b0b72ffec","name":"ItemSpawner","factory":"[modules:/zitemspawner.class].pc_entitytype","blueprint":"[modules:/zitemspawner.class].pc_entityblueprint","properties":{"m_mTransform":{"type":"SMatrix43","value":{"rotation":{"x":0,"y":0,"z":0},"position":{"x":81.0267562866211,"y":-218.77810668945312,"z":15.957030296325684}}},"m_rMainItemKey":{"type":"SEntityTemplateReference","value":"feed4fa38bcf652b"},"m_bSpawnOnStart":{"type":"bool","value":false},"m_eRoomBehaviour":{"type":"ZSpatialEntity.ERoomBehaviour","value":"ROOM_STATIC"},"m_eidParent":{"type":"SEntityTemplateReference","value":"fffffffffffffffe","postInit":true}},"events":{"Item":{"SetItem":["feedd2ecb25f1b29"]},"ItemReady":{"PickupIntoPocket":["feedd2ecb25f1b29"]}}},"feed6ab06cd505cc":{"parent":"feed6a9b0b72ffec","name":"Phone is or has been in inventory","factory":"[assembly:/_pro/design/logic/valuebool.template?/valuebool_basic.entitytemplate].pc_entitytype","blueprint":"[assembly:/_pro/design/logic/valuebool.template?/valuebool_basic.entitytemplate].pc_entityblueprint"},"feed37f2ce71d51a":{"parent":"feed6a9b0b72ffec","name":"Avoid duplication when save_Loading","factory":"[assembly:/_pro/design/logic/valuebool.template?/valuebool_poll.entitytemplate].pc_entitytype","blueprint":"[assembly:/_pro/design/logic/valuebool.template?/valuebool_poll.entitytemplate].pc_entityblueprint","properties":{"m_rValueEntity":{"type":"SEntityTemplateReference","value":"feed6ab06cd505cc"}},"events":{"PollFalse":{"SpawnItem":["feed5b93c1388855"]}}},"feed547ee90e425f":{"parent":"feed6a9b0b72ffec","name":"GameEventListener","factory":"[modules:/zgameeventlistenerentity.class].pc_entitytype","blueprint":"[modules:/zgameeventlistenerentity.class].pc_entityblueprint","properties":{"m_eEvent":{"type":"EGameEventType","value":"GET_IntroCutEnd"}},"events":{"EventOccurred":{"Poll":["feed37f2ce71d51a"]}}},"origin":"001CE8D69E024ABD"}
```

You can modify the repository ID to spawn a different item in the ZItemRepositoryKeyEntity entity. Depending on the item type you might need to modify the `PickupIntoPocket` output pin in the ZItemSpawner entity to `PickupIntoHands` instead.

**More templates will come later, feel free to contribute some with a PR over at https://github.com/glacier-modding/wiki.glaciermodding.org**
