function initMap() {
	var location = {
		lat: 51.617844,
		lng: 15.324832
	};
	var map = new google.maps.Map(document.querySelector('.googlemaps'), {
		zoom: 15,
		center: location,
		scrollwheel: false,
		styles: [{
				elementType: 'geometry',
				stylers: [{
					color: '#242f3e'
                }]
            },
			{
				elementType: 'labels.text.stroke',
				stylers: [{
					color: '#242f3e'
                }]
            },
			{
				elementType: 'labels.text.fill',
				stylers: [{
					color: '#746855'
                }]
            },
			{
				featureType: 'administrative.locality',
				elementType: 'labels.text.fill',
				stylers: [{
					color: '#d59563'
                }]
            },
			{
				featureType: 'poi',
				elementType: 'labels.text.fill',
				stylers: [{
					color: '#d59563'
                }]
            },
			{
				featureType: 'poi.park',
				elementType: 'geometry',
				stylers: [{
					color: '#263c3f'
                }]
            },
			{
				featureType: 'poi.park',
				elementType: 'labels.text.fill',
				stylers: [{
					color: '#6b9a76'
                }]
            },
			{
				featureType: 'road',
				elementType: 'geometry',
				stylers: [{
					color: '#38414e'
                }]
            },
			{
				featureType: 'road',
				elementType: 'geometry.stroke',
				stylers: [{
					color: '#212a37'
                }]
            },
			{
				featureType: 'road',
				elementType: 'labels.text.fill',
				stylers: [{
					color: '#9ca5b3'
                }]
            },
			{
				featureType: 'road.highway',
				elementType: 'geometry',
				stylers: [{
					color: '#746855'
                }]
            },
			{
				featureType: 'road.highway',
				elementType: 'geometry.stroke',
				stylers: [{
					color: '#1f2835'
                }]
            },
			{
				featureType: 'road.highway',
				elementType: 'labels.text.fill',
				stylers: [{
					color: '#f3d19c'
                }]
            },
			{
				featureType: 'transit',
				elementType: 'geometry',
				stylers: [{
					color: '#2f3948'
                }]
            },
			{
				featureType: 'transit.station',
				elementType: 'labels.text.fill',
				stylers: [{
					color: '#d59563'
                }]
            },
			{
				featureType: 'water',
				elementType: 'geometry',
				stylers: [{
					color: '#17263c'
                }]
            },
			{
				featureType: 'water',
				elementType: 'labels.text.fill',
				stylers: [{
					color: '#515c6d'
                }]
            },
			{
				featureType: 'water',
				elementType: 'labels.text.stroke',
				stylers: [{
					color: '#17263c'
                }]
            }
        ]
	});
	var marker = new google.maps.Marker({
		position: location,
		map: map
	});
}

//function checking #nav-toggle does it contain active class
//function checkActiveClass() {
//    var hamburger = document.querySelector('.hamburger-section');
//    var hamburgerNavigation = document.querySelector("#nav-toggle");
//    
//        if(hamburgerNavigation.classList.contains("active")){
//            document.addEventListener('click', function(){
//                
//            });
//        }else{
//            console.log('nie dziala');
//        }
//    };

// hamburger ico plus toggle class
var hamburgerNavigation = document.querySelector("#nav-toggle").addEventListener("click", function () {
	var hamburger = document.querySelector('.hamburger-section');
	hamburger.classList.toggle("hidden");
	this.classList.toggle('active');
    
});


$(document).ready(function () {
	arrow_slider();

 function arrow_slider() {
        $('.arrow').on('click', function(event) {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 1000);
			return false;
		});
}
});