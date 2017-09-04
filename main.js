$('.js-search-btn').on('click', function(e) {
	e.preventDefault();
	var th = $(this);
	th.addClass('js-submit');
	s($('.header-search'), 'open', e);
});

function s(obj, className, e) {
	e.preventDefault();
	e.stopPropagation();

	if (!obj.hasClass(className)) {
		$('body').on('click', clbck2);
		obj.addClass(className);
	} else {
		obj.removeClass(className);
	}

	function clbck2(e) {
		if (!$(e.target).closest(obj).length) {
			obj.removeClass(className);
			$('body').off('click', clbck2);
		}
	}
}

$('.spinner').spinner();

$('.hamburger').on('click', function(e) {
	s($('.header__nav'), 'open', e);
	s($('.hamburger'), 'is-active', e);
});