function displayMenu() {
		var mobile_nav_div = document.getElementById('mobile_nav_div');
		mobile_nav_div.style.transition = '.5s ease-in-out';
		mobile_nav_div.style.display = 'block';
		mobile_nav_div.style.transform = 'scale(1,1)';

}
function closeMenu(){
	var mobile_nav_div = document.getElementById('mobile_nav_div');
		mobile_nav_div.style.transition = '.3s ease-in-out';
		mobile_nav_div.style.display = 'none';
}
function displaySearch(){
	var mobile_nav_div = document.getElementById('mobile_search_div');
		if(mobile_nav_div.style.display =='none'){
			mobile_nav_div.style.transition = '.5s ease-in-out';
		mobile_nav_div.style.display = 'block';
		mobile_nav_div.style.transform = 'scale(1,1)';
		}else{
			mobile_nav_div.style.transition = '.5s ease-in-out';
		mobile_nav_div.style.display = 'none';
		mobile_nav_div.style.transform = 'scale(1,1)';
		}
}
/*
		$('.close_btn').on('click',function(){
			$('.mobile_nav_div').fadeOut();
		})

		$('.menu_bars').on('click',function(){
			$('.mobile_nav_div').fadeIn('slow');
		})

		$('.search_bar').on('click',function(){
			$('.mobile_search_div').slideToggle('slow');
		})

		*/

	
