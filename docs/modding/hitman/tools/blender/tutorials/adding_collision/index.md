---
sidebar_position: 2
title: Adding Collision
description: Details about exporting a PRIM with collision
---

The following is a short guide on how to add collision to a mesh.    

# Adding a collider mesh

### Video showing the process
<video controls width="100%">
  <source src="/files/blender/tutorials/adding_collision/adding_collision.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

### Steps

1. First, make sure your mesh is in its own collection under the root Scene Collection. If it's not in a collection, create a new collection, select the meshes, and drag them into the collection. 

2. Duplicate the collection (Right click it and click Duplicate Collection).

3. In the new duplicated collection, join all the meshes together (select them all and press Ctrl + J).

4. On the right sidebar, go to the Physics tab and click Add Triangle Mesh Collider.

5. Drag the TriangleMeshCollider into original collection while holding shift and alt, and then drag it into the original collection again.

6. Delete the temporary duplicate collection (Right click and click Delete Hierarchy).

7. Click on the new TriangleMeshCollider and go to the Physics panel on the sidebar, and set the Collision level to `STATIC_COLLIDABLES_ONLY`.

8. Click on the collection and go the Collection panel on the sidebar, and change the Physics Data Type to `TRIANGLE_MESH`, and the Physics Collection Type to `STATIC`.

9. Now you can export to Glacier PRIM with collision using File > Export > Glacier RenderPrimitive (prims, materials, textures, geomentities and collision). It will export a .ALOC file (collision file), which will be referenced in the GeomEntity template to give your mesh collision.