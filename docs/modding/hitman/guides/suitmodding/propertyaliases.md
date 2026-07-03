---
sidebar_position: 8
description: Exploring templates, property aliases and input copying
---

# Property Aliases, Input Copying and Template Anatomy

The particularly eagle eyed out there may have noticed in the [Street Smart outfit we made](./newoutfit.md) that the bomber jacket and jeans don't actually change much in the rain. But how is that possible? We are changing the constant vectors with our lerp, so it should work?

This is because the `Jacket_Bomber_Open` and `Pants_Jeans_Skinny` templates we are using don't have an *input copying* set up for the constant vectors we are using. First though let's start with a related concept known as *property aliases*. Property aliases allow us to specify things like colors, or a template's mesh.

## Property aliases

Let's open our Street Smart outfit project. In the `outfit_street_smart.entity.json` file, click `Jacket_Bomber_Open` in the tree.

![Opening the bomber jacket template](/img/suitmodding/propertyaliases/open_factory.png)

Right click the factory path and click **Open factory in new tab.** This is the jacket's template. Some properties in the screenshot have been collapsed for brevity.

![The jacket template open](/img/suitmodding/propertyaliases/jacket_template.png)

The top layer entity is just a blank zentity. It's essentially a clean slate and needs to be configured. It needs to pass our constant vectors along to material entities down the tree. For this, property aliases are used.

For example, by *exposing* the `Mesh` entity's `m_pMeshResource` property through a property alias, we can easily change the `m_pMeshResource` directly through the template's properties as we need to, in an outfit for example.

The same is true for `Diffuse_Color_01_Value` and `ConstantVector1D_01_Value`. Consider the top-most property alias:

```json
"ConstantVector1D_01_Value": [
    {
        "originalProperty": "ConstantVector1D_01_Value",
        "originalEntity": "4bcc2cbe47581fe1"
    }
]
```

This simply means that any `ConstantVector1D_01_Value` supplied to the template will be *forwarded* to the sub-entity `4bcc2cbe47581fe1` with the property `ConstantVector1D_01_Value`.

The property alias itself can be named whatever we want, as long as the `originalProperty` is the correct property name. And we can supply multiple subentities for each property alias. As an example this is perfectly valid:

```json
"Shinyness": [
    {
        "originalProperty": "ConstantVector1D_14_Value",
        "originalEntity": "cafefb0bd0b2a258"
    },
    {
        "originalProperty": "ConstantVector1D_04_Value",
        "originalEntity": "cafebe430153005e"
    }
]
```

Then in an outfit where we implement the template, both of these constant vectors would be changed if we supply a property like this:

```json
"Shinyness": {
    "type": "float32",
    "value": 15.0
}
```

## Input copying

Input copying is a related concept to property aliases but you are forwarding events instead. The wet logic fires events at the clothing templates, but since there is no input copying to forward the event to the material entity inside, nothing happens.

The beanie and the t-shirt in the Street Smart outfit actually have this set up already. Let's look at the t-shirt for a reference.

![Opening the t-shirt's template.](/img/suitmodding/propertyaliases/open_tshirt.png)

Go back to the Street Smart outfit, find the t-shirt and open its factory.

![The T-shirt templates input copying forwarding events.](/img/suitmodding/propertyaliases/inputcopying.png)

The format is slightly different to the property aliases but you should be able to follow the flow. When the template receives a `ConstantVector1D_06_Value` (bump map strength) event from the wet logic, it forwards it to an array of entities, which right now is only the `base_male_shirt_regular` sub-entity.

Much like property aliases we can also name input copying whatever we want. As an example IOI have done this for 47's suit:

![47's suit having specifically named input copying.](/img/suitmodding/propertyaliases/47_suit_inputcopying.png)

But all we need to worry about is forwarding the constant vector events to the jacket's material entity, and the jeans' material entity. Let's go back to our jacket and do that.

## Creating our patches

### The jacket

With the jacket's template open, create a new object directly after `properties` named `inputCopying`. We will need 3 objects inside `inputCopying` for our 3 constant vectors that forward to the material entity named `base_male_jacket_bomber`. Feel free to copy them here and paste under `inputCopying`:

```json
"ConstantVector1D_06_Value": {
    "ConstantVector1D_06_Value": [
        "4bcc2cbe47581fe1"
    ]
},
"ConstantVector1D_14_Value": {
    "ConstantVector1D_14_Value": [
        "4bcc2cbe47581fe1"
    ]
},
"ConstantVector1D_01_Value": {
    "ConstantVector1D_01_Value": [
        "4bcc2cbe47581fe1"
    ]
}
```

It should look like this when set up:

![The jacket template with input copying hooked up.](/img/suitmodding/propertyaliases/corrected_jacket.png)

We will also need to make sure that these 3 constant vectors `_op` parameters in the material entity are set to `eReplace`. Go to the `base_male_jacket_bomber` material entity and check.

![The albedo value is set up properly.](/img/suitmodding/propertyaliases/albedo_value.png)

At least `ConstantVector1D_01_Value_op` is set to `eReplace`, but `06` and `14` aren't here. Feel free to copy them here and paste them into properties:

```json
"ConstantVector1D_06_Value_op": {
    "type": "IRenderMaterialEntity.EModifierOperation",
    "value": "eReplace"
},
"ConstantVector1D_14_Value_op": {
    "type": "IRenderMaterialEntity.EModifierOperation",
    "value": "eReplace"
},
```

Now save your changes. Save it under `content/chunk0` with the file name `jacket_bomber_open`.

### The jeans

Go back to the Street Smart outfit and open the factory for `Pants_Jeans_Skinny`. This template doesn't have any properties, so just make `inputCopying` after `blueprint`. Like before we forward our 3 constant vector events to the material entity, named `male_reg_pants_jeans`. Feel free to copy from here:

```json
"ConstantVector1D_06_Value": {
    "ConstantVector1D_06_Value": [
        "ecd31deec793f2a9"
    ]
},
"ConstantVector1D_14_Value": {
    "ConstantVector1D_14_Value": [
        "ecd31deec793f2a9"
    ]
},
"ConstantVector1D_01_Value": {
    "ConstantVector1D_01_Value": [
        "ecd31deec793f2a9"
    ]
}
```

It should look like this when set up:

![The jacket template with input copying hooked up.](/img/suitmodding/propertyaliases/corrected_jeans.png)

Like with the jacket check the material entity `male_reg_pants_jeans` for our 3 constant vector `_op` parameters. `01` and `14` are present but not `06`. Feel free to copy it here and paste under properties.

```json
"ConstantVector1D_06_Value_op": {
    "type": "IRenderMaterialEntity.EModifierOperation",
    "value": "eReplace"
},
```

Now save your changes. Save it under `content/chunk0` with the file name `pants_jeans_skinny`.

Deploy and see that you should now be properly soggy, with the pants and jacket wet!

![47 more wet than usual.](/img/suitmodding/propertyaliases/properly_soggy.jpg)

## Further reading

If you want to dive deeper into these entity concepts please see the [Hitman Resources](https://hitman-resources.netlify.app/documentation/entity-system/entity-templates/overview).
