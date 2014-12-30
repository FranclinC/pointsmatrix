//CANVAS
var canvas;
var ctx

//MATRIX CONFIG
var h_points = 20;
var v_points = 10;
var points = [];
var widthPoints = 5;
var pointsDistance = 20;
var fillable = [];

//controles do jogo
var player = 0;
var players = [];

//inicia matriz de pontos
for(var i=0; i<h_points; i++) {
		points[i] = new Array(v_points);
	}
	
//inicia matriz de quadrados preenchíveis
var columns = h_points - 1;
var lines = v_points - 1;
for(var i=0; i<lines; i++) {
		fillable[i] = new Array(columns);
}

$(function(){
	players[0] = prompt("Digite o nome do player 1");
	players[1] = prompt("Digite o nome do player 2");

	$("#player").html(players[player]);

	canvas = document.getElementById('matrix');
	ctx = canvas.getContext('2d');
	
	drawMatrix(h_points,v_points);
	
});

function drawMatrix(n, m){
	
	for(i =0; i < n; i++){
		
		for(j=0; j < m;j++){
			
			ctx.fillRect(i*pointsDistance,j*pointsDistance,widthPoints,widthPoints);
			var line = points[i];
			line[j] = ({w:widthPoints, h:widthPoints,x:i*pointsDistance,y:j*pointsDistance});
		}
		
	}
	
	canvas.addEventListener('click', clickPoint , false);
	
}

function clickPoint(e){
        console.log('clicked: ' + e.offsetX + '/' + e.offsetY);
		var rect = collides(points, e.offsetX, e.offsetY);
        if (rect) {
            console.log('collision: ' + rect.x + '/' + rect.y);
        } else {
            console.log('no collision');
        }
    }

function collides(points, x, y) {
    var isCollision = false;
    for (var i = 0;i < points.length; i++) {
		for(j=0; j < points[0].length;j++){
			var left = points[i][j].x, right = points[i][j].x+points[i][j].w;
			var top = points[i][j].y, bottom = points[i][j].y+points[i][j].h;
			if (right >= x
				&& left <= x
				&& bottom >= y
				&& top <= y) {
				isCollision = points[i][j];
			}
		}
    }
    return isCollision;
}