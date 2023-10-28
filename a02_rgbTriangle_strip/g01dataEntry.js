// author: Ned - Nadeem Elahi nadeem@webscripts.biz

// origin bottom left 0,0 , width, height
//var viewport = [ 0.0 , 0.0 , 0.5 , 0.5  ]; // bottom left quadrant
var viewport = [ 0 , 0 , 1.0 , 1.0  ];

// rgba
var background= [ .01 , .01 , .01 , 1 ];

// verts
var vertsCnt = 4;

var verts = [
	-1, 1, 0  ,  // left top
	-1,-1, 0  ,  // left bottom 
	 1, 1, 0  ,  // right top
	 1,-1, 0  ,  // right bottom
];

// colours
var colours = [
	.9 , .0 , .0  ,  // red
	.0 , .9 , .0  ,  // green
	.0 , .0 , .9  ,  // blue
	.9 , .0 , .9  ,  // magenta 
];

//
//  STRIP
//  -will draw : 0,1,2 , 1,2,3
//
//     (0)  (2)
//      +----+
//      |   /|
//      |  / |
//      | /  |
//      |/   |
//      +----+
//     (1)  (3)
//
//





