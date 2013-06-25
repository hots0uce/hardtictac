$(function() {
	var curPerson = 'p1';
	$('.square').on('click',function(){
		var $this = $(this);

		$this.toggleClass('selected');
		$this.find('.indicator').removeClass('p1 p2');
		if($this.hasClass('selected')) {
			$this.find('.indicator').addClass(curPerson);
		}

		curPerson = curPerson == 'p1' ? 'p2' : 'p1';
	});
});