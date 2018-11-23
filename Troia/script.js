function iniciaModal(modalID)
{
	const modal = document.getElementById(modalID);
	if(modal)
	{
		modal.classList.add('mostrar');

		modal.addEventListener('click', function(e)
		{
			if(e.target.className != 'modal-container')
			{
				modal.classList.remove('mostrar');
			}
		});
	}
}