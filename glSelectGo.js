(function($){
	$.fn.glSelectGo = function() {
		return this.each(function() {
			// set variables
			var $this = $(this);
			
			// find the url from the value of the selected option and send the window to that url
			$this.change(function() {
				var selectUrl = $this.find('option:selected').val();
				if (selectUrl !== "") {
					window.location.href = selectUrl;	
				}
			});
		});  
	};
})(jQuery);


jQuery(document).ready(function() {
	jQuery('form#selector select').glSelectGo();
});