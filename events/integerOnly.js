function integerOnly(form, attributes, params) {
	
	attributes.map(function(item){
		
		value = form.getValue(item);
		
		if (params !== null && typeof params === 'object' && params.hasOwnProperty('skipOnEmpty')) {
			if (value == null || value.trim().length() == 0) {
				throw i18n.translate(item) + ' ' + i18n.translate('integer_only');
			}
		}
		
		var regex = /[^0-9]/g;
		if (regex.test(value))
			throw i18n.translate(item) + ' ' + i18n.translate('integer_only');
		
		if ((value == parseInt(value, 10)) == false)
			throw i18n.translate(item) + ' ' + i18n.translate('integer_only');
		
		if (params.hasOwnProperty('min') && parseInt(value) < parseInt(params.min))
			throw i18n.translate(item) + ' ' + i18n.translate('integer_min');
		
		if (params.hasOwnProperty('max') && parseInt(value) > parseInt(params.max))
			throw i18n.translate(item) + ' ' + i18n.translate('integer_max');
		
	})
	
}