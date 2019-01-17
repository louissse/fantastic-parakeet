var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var query = "&q=rainbow";
var searchField, searchButton;


function setup() {
  noCanvas();
  noLoop();

  searchField = createInput('');
  searchButton = createButton('Search for gifs');
  searchButton.position(19, 19);
  searchButton.mousePressed(searchGiphy);
}


function gotData(giphy) {
	var oldImages = document.getElementsByClassName('image');
	var loopParameter = oldImages.length;
	for (var i = 0; i < loopParameter; i++) {
		oldImages[0].remove();
	  }
  for (var i = 0; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.original.url).addClass('image');
  }
}

function searchGiphy(){
	var url = api + apiKey + '&q=' + searchField.value();
	loadJSON(url, gotData);
}