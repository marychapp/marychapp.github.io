(function() {
	"use strict";
	var $menu = $("#menu-dropdown");
	var $menuItems = $("#menu-items");
	var height = $menuItems.height();

	if($menu.is(":visible"))
		$menuItems.hide();

	$menu.on("click", function() {
		$menuItems.slideToggle(150);
	});
})();