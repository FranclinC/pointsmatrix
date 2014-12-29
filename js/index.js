$(function(){
	drawMatrix(20,30);
});

function drawMatrix(n, m){
	var htmlMatrix = "";

	for(i =0; i < n; i++){
		htmlMatrix += '<div class="row">';
		for(j=0; j < m;j++){
			htmlMatrix += '<div id="'+i+'-'+j+'" class="point"></div>';
		}
		htmlMatrix += '</div>';
	}

	$("#matrix").html(htmlMatrix);
	$('.point').click(clickPoint)
}

function clickPoint(){
	var id = $(this).attr('id');
	alert(id);
}