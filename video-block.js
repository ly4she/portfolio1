var videoFild = document.querySelector('.main-video-block');
			var handler = function () {this.innerHTML = '<iframe width="100%" height="700px" src="https://www.youtube.com/embed/wyWT3KRDoaA?list=PL6_ZR0e6wVcnXpuL-Vzw4eGR7PMoRW4pR;autoplay=1" frameborder="0" allowfullscreen></iframe>;'}; 
	document.querySelector('.start-video').addEventListener('click', function (e) { this.removeEventListener('click', handler, false); handler.apply(videoFild, arguments); } , false);
	