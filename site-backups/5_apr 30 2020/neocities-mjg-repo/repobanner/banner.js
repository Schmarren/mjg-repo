  var imageURLs = [
       "repobanner/0.png"
     , "repobanner/1.png"
	 , "repobanner/2.png"
	 , "repobanner/3.png"
	 , "repobanner/4.png"
	 , "repobanner/5.png"
	 , "repobanner/6.png"
	 , "repobanner/7.png"
	 , "repobanner/8.png"
  ];
  function getImageTag() {
    var img = '<img src=\"';
    var randomIndex = Math.floor(Math.random() * imageURLs.length);
    img += imageURLs[randomIndex];
    img += '\" alt=\"Some alt text\"/>';
    return img;
  }