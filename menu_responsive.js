addEventListener('DOMContentLoaded', () => {
	const btn_menu = document.querySelector('.icono')
	if (btn_menu){
		btn_menu.addEventListener('click', () => {
			const menu_items = document.querySelector('.menu_items')
			menu_items.classList.toggle('show')

			/*Esconder primero el boton*/
			btn_menu.classList.toggle('esconder')
			const btn_menu_cerrar = document.querySelector('.x')
			if (btn_menu_cerrar){
				btn_menu_cerrar.classList.toggle('btn_menu_mostrar')


			}
		})
	}
})

