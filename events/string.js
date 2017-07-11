function string(form, attributes, params) {
	
	attributes.map(function(item){
		
		value = form.getValue(item);
		
		if (params.min && value.trim().length() < params.min)
			throw i18n.translate(item) + ' ' + i18n.translate('string_min');
		
		if (params.max && value.trim().length() > params.max)
			throw i18n.translate(item) + ' ' + i18n.translate('string_max');
		
	})
	
}