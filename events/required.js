function required(form, attributes, params) {
	
	attributes.map(function(item){
		
		value = form.getValue(item);
		
		if (value == null || value.trim().length() == 0) {
			throw i18n.translate(item) + ' ' + i18n.translate('as_required');
		}
		
	})
}