// author: Ned - Nadeem Elahi nadeem@webscripts.biz

ngl.setBackgroundNviewport( background , viewport ); 
load.vertsNcolours(verts, colours);

drawFrame();

function drawFrame(){

	load.tsrp();

	//ngl.drawTriangles(vertsCnt);
	//ngl.drawTriangle_strip(vertsCnt);
	//ngl.drawTriangle_fan(vertsCnt);

	ngl.clear();
	ngl.drawTriangle_fan(vertsCnt);
	
	setTimeout(drawFrame, 100);
}
