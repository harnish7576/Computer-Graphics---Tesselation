//
// fill in code that creates the triangles for a cube with dimensions 1x1x1
// on each side (and the origin in the center of the cube). with an equal
// number of subdivisions along each cube face as given by the parameter
//subdivisions
//
function makeCube (subdivisions)  {
    
    // fill in your code here.
    // delete the code below first.
    if( subdivisions < 1 ){
        subdivisions = 1;
    }
	let step = 1. / subdivisions;

	for (let i = 0; i < subdivisions; i++) {	
		let u0 = i * step - 0.5;
		let u1 = (i + 1) * step - 0.5;
        
		for (let j = 0; j < subdivisions; j++) {
			let v0 = j * step - 0.5;
			let v1 = (j + 1) * step - 0.5;
			addTriangle(u1, v0, -0.5, u0, v0, -0.5, u0, v1, -0.5);
			addTriangle(u1, v0, -0.5, u0, v1, -0.5, u1, v1, -0.5);
			addTriangle(u0, v0, 0.5, u1, v0, 0.5, u0, v1, 0.5);
			addTriangle(u0, v1, 0.5, u1, v0, 0.5, u1, v1, 0.5);
			addTriangle(-0.5, u0, v1, -0.5, u1, v0, -0.5, u0, v0);
			addTriangle(-0.5, u1, v1, -0.5, u1, v0, -0.5, u0, v1);
			addTriangle(0.5, u1, v0, 0.5, u0, v1, 0.5, u0, v0);
			addTriangle(0.5, u1, v0, 0.5, u1, v1, 0.5, u0, v1);
			addTriangle(u1, -0.5, v0, u0, -0.5, v1, u0, -0.5, v0);
			addTriangle(u1, -0.5, v0, u1, -0.5, v1, u0, -0.5, v1);
			addTriangle(u0, 0.5, v1, u1, 0.5, v0, u0, 0.5, v0);
			addTriangle(u1, 0.5, v1, u1, 0.5, v0, u0, 0.5, v1);
		}
	}
}

//
// fill in code that creates the triangles for a cylinder with diameter 1
// and height of 1 (centered at the origin) with the number of subdivisions
// around the base and top of the cylinder (given by radialdivision) and
// the number of subdivisions along the surface of the cylinder given by
//heightdivision.
//
function makeCylinder (radialDivisions,heightDivisions){
    // fill in your code here.
    
    if( radialDivisions < 3 ){
        radialDivisions = 3;
    }

    if( heightDivisions < 1 ){
        heightDivisions = 1;
    }

	const PI = 3.14159265358979;
	let alpha = 0.5;
	let y0 = -0.5; 
    let y1, x0, z0, x1,	z1;
	for (let i = 0; i < radialDivisions; i++) {
		x0 = alpha * Math.cos(i * 2 * PI / radialDivisions);
        x1 = alpha * Math.cos((i+1) * 2 * PI / radialDivisions);

		z0 = alpha * Math.sin(i * 2 * PI / radialDivisions);
		z1 = alpha * Math.sin((i+1) * 2 * PI / radialDivisions);

		addTriangle(0, -0.5, 0, x0, -0.5, z0, x1, -0.5, z1);
		addTriangle(x1, 0.5, z1, x0, 0.5, z0, 0, 0.5, 0);

		for (let j = 0; j < heightDivisions; j++) {
			y0 = (j) / heightDivisions - 0.5;
			y1 = (j + 1) / heightDivisions -0.5;
			addTriangle(x0, y1, z0, x1, y1, z1, x0, y0, z0);
			addTriangle(x1, y1, z1, x1, y0, z1, x0, y0, z0);
		}
	}
}

//
// fill in code that creates the triangles for a cone with diameter 1
// and height of 1 (centered at the origin) with the number of
// subdivisions around the base of the cone (given by radialdivision)
// and the number of subdivisions along the surface of the cone
//given by heightdivision.
//
function makeCone (radialDivisions, heightDivisions) {
    // fill in your code here.
    if( radialDivisions < 3 ){
        radialDivisions = 3;
    }

    if( heightDivisions < 1 ){
        heightDivisions = 1;
    }

	const PI = 3.14159265358979;
    let alpha = 0.5;

	for (let i = 0; i < radialDivisions; i++) {
		let x0 = alpha * Math.cos(i * 2 * PI / radialDivisions);
        let x1 = alpha * Math.cos((i + 1) * 2 * PI / radialDivisions);

		let z0 = alpha * Math.sin(i * 2 * PI / radialDivisions);
		let z1 = alpha * Math.sin((i + 1) * 2 * PI / radialDivisions);

		
		addTriangle(x0, -0.5, z0, x1, -0.5, z1, 0.0, -0.5, 0.0);


		
		let cx0 = -x0 / heightDivisions;
        let cx1 = -x1 / heightDivisions;

		let cz0 = -z0 / heightDivisions;
		let cz1 = -z1 / heightDivisions;

        let y0 = -0.5;
		let y1 = 1.0 / heightDivisions;
		
		for (let j = 0; j < heightDivisions - 1; j++) {		


			addTriangle(x0, y0, z0, x0+cx0, y0+y1, z0+cz0, x1, y0, z1);
			addTriangle(x0+cx0, y0+y1, z0+cz0, x1+cx1, y0+y1, z1+cz1, x1, y0, z1);

			x0 += cx0;
			z0 += cz0;
			x1 += cx1;
			z1 += cz1;
			y0 += y1;
		}
		addTriangle(x0, y0, z0, 0.0, 0.5, 0.0, x1, y0, z1);
	}
}
    
//
// fill in code that creates the triangles for a sphere with diameter 1
// (centered at the origin) with number of slides (longitude) given by
// slices and the number of stacks (lattitude) given by stacks.
// For this function, you will implement the tessellation method based
// on spherical coordinates as described in the video (as opposed to the
//recursive subdivision method).
//
function makeSphere (slices, stacks) {
    // fill in your code here.
    if (slices < 1){
		slices = 1;
    }
	if (slices > 5){
		slices = 5;
    }

	if (stacks < 3){
		stacks = 3;
    }

    let radius = 0.5;
	
	let a = radius;
	recursiveTriangle(0, a, -1, -a, 1, 0, a, 1, 0, slices, radius);
	recursiveTriangle(0, a, 1, a, 1, 0, -a, 1, 0, slices, radius);
	recursiveTriangle(0, a, 1, -1, 0, a, 0, -a, 1, slices, radius);
	recursiveTriangle(0, a, 1, 0, -a, 1, 1, 0, a, slices, radius);

	recursiveTriangle(0, a, -1, 1, 0, -a, 0, -a, -1, slices, radius);
	recursiveTriangle(0, a, -1, 0, -a, -1, -1, 0, -a, slices, radius);
	
	recursiveTriangle(0, -a, 1, -a, -1, 0, a, -1, 0, slices, radius);
	recursiveTriangle(0, -a, -1, a, -1, 0, -a, -1, 0, slices, radius);

	recursiveTriangle(-a, 1, 0, -1, 0, -a, -1, 0, a, slices, radius);
	recursiveTriangle(-a, -1, 0, -1, 0, a, -1, 0, -a, slices, radius);
	recursiveTriangle(a, 1, 0, 1, 0, a, 1, 0, -a, slices, radius);
	recursiveTriangle(a, -1, 0, 1, 0, -a, 1, 0, a, slices, radius);
	recursiveTriangle(0, a, 1, -a, 1, 0, -1, 0, a, slices, radius);

	recursiveTriangle(0, a, 1, 1, 0, a, a, 1, 0, slices, radius);
	
	recursiveTriangle(0, a, -1, -1, 0, -a, -a, 1, 0, slices, radius);
	recursiveTriangle(0, a, -1, a, 1, 0, 1, 0, -a, slices, radius);
	
	recursiveTriangle(0, -a, -1, -a, -1, 0, -1, 0, -a, slices, radius);

	recursiveTriangle(0, -a, -1, 1, 0, -a, a, -1, 0, slices, radius);
	recursiveTriangle(0, -a, 1, -1, 0, a, -a, -1, 0, slices, radius);
	recursiveTriangle(0, -a, 1, a, -1, 0, 1, 0, a, slices, radius);
}

function recursiveTriangle(x0, y0, z0, x1, y1, z1, x2, y2, z2, subdivision, radius)
{
	if (subdivision == 1){
		let norm0 = Math.pow((Math.pow(x0, 2) + Math.pow(y0, 2) + Math.pow(z0, 2)), 0.5);
		x0 = (x0 / norm0) * radius;
		y0 = (y0 / norm0) * radius;
		z0 = (z0 / norm0) * radius;
		let norm1 = Math.pow((Math.pow(x1, 2) + Math.pow(y1, 2) + Math.pow(z1, 2)), 0.5);
		x1 = (x1 / norm1) * radius;
		y1 = (y1 / norm1) * radius;
		z1 = (z1 / norm1) * radius;
		
		let norm2 = Math.pow((Math.pow(x2, 2) + Math.pow(y2, 2) + Math.pow(z2, 2)), 0.5);
		x2 = (x2 / norm2) * radius;
		y2 = (y2 / norm2) * radius;
		z2 = (z2 / norm2) * radius;
		addTriangle(x0, y0, z0, x1, y1, z1, x2, y2, z2);
	}
	else{   
        let midx01 = (x0 + x1) / 2;
		let midy01 = (y0 + y1) / 2;
		let midz01 = (z0 + z1) / 2;

		let midx12 = (x1 + x2) / 2;
		let midy12 = (y1 + y2) / 2;
		let midz12 = (z1 + z2) / 2;

		let midx20 = (x0 + x2) / 2;
		let midy20 = (y0 + y2) / 2;
		let midz20 = (z0 + z2) / 2;

		recursiveTriangle(x0, y0, z0, midx01, midy01, midz01, midx20, midy20, midz20, (subdivision - 1), radius);

		recursiveTriangle(midx01, midy01, midz01, midx12, midy12, midz12, midx20, midy20, midz20, (subdivision - 1), radius);
		recursiveTriangle(midx01, midy01, midz01, x1, y1, z1, midx12, midy12, midz12, (subdivision - 1), radius);
		recursiveTriangle(midx20, midy20, midz20, midx12, midy12, midz12, x2, y2, z2, (subdivision - 1), radius);
	}
}


////////////////////////////////////////////////////////////////////
//                               //
//  Do not edit below this line  //
//                               //
///////////////////////////////////////////////////////////////////

function radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function addTriangle (x0,y0,z0,x1,y1,z1,x2,y2,z2) {

    
    var nverts = points.length / 4;
    
    // push first vertex
    points.push(x0);  bary.push (1.0);
    points.push(y0);  bary.push (0.0);
    points.push(z0);  bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
    
    // push second vertex
    points.push(x1); bary.push (0.0);
    points.push(y1); bary.push (1.0);
    points.push(z1); bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++
    
    // push third vertex
    points.push(x2); bary.push (0.0);
    points.push(y2); bary.push (0.0);
    points.push(z2); bary.push (1.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
}

