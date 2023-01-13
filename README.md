# Computer-Graphics-Tesselation
CSCI-610

As a part of the course, Computer Graphics.

Requirements:
This will be the first assignment that makes use of Web GL.
• In the file cgIshape. js, you will find the following program stubs that you will need to fill in.

o function makeCube (subdivisions) - Creates the triangles for a cube with dimensions 1x1x1 on each side (and the origin in the center of the cube). with an
equal number of subdivisions along each cube face as given by the parameter subdivisions

o function makeCylinder (radialdivision, heightdivision)- Creates the triangles for a cylinder with diameter 1 and height of 1 (centered at the origin) with the number of subdivisions around the base and top of the cylinder (given by radialdivision) and the number of subdivisions along the surface of the cylinder given by heightdivision.

o function makeCone (radialdivision, heightdivision) -- Creates the triangles for a cone with diameter 1 and height of 1 (centered at the origin) with the number of subdivisions around the base of the cone (given by radialdivision) and the number of subdivisions along the surface of the cone given by heightdivision.

o function makeSphere (slices, stacks) - Creates the triangles for a sphere with diameter 1 (centered at the origin) with number of slides (longitude) given by slices and the number of stacks (latitude) given by stacks. For this function, you will implement the tessellation method based on spherical coordinates as described in the video (as opposed to the recursive subdivision method).

• The following auxiliary functions are available for your use
addTriangle (x0, YO, z0, x1, y1, z1, x2, y2, z2) - Will add a triangle to the list of triangles to be drawn with vertices (×0, yO, z0), (x1, y1, z1) and (×2, v2, z2). These vertices should be listed in counter-clockwise order. radians (angle) - converts an angle in degrees to radians.
• Note that you should not make any edits to the other files in the code distribution.
