const filterContainer = document.querySelector('.gallery-filter');
const galleryItems = document.querySelectorAll('.gallery-item');


filterContainer.addEventListener('click', function(event){
	if(event.target.classList.contains('filter-item')){
		//desactiva active 
		filterContainer.querySelector('.active').classList.remove('active');
		//activa active
		event.target.classList.add('active');
		

		const filterValue = event.target.textContent;
		console.log(filterValue)

		galleryItems.forEach(function(img){
			if (img.classList.contains(filterValue) || filterValue == 'all') {
				img.classList.remove('hide');
				img.classList.add('show');
				console.log('miau')
			}else{
				img.classList.remove('show');
				img.classList.add('hide');

			}
		})
	}
})
