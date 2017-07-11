function required(form, attributes, params) {
	
	attributes.map(function(item){
		
		value = form.getValue(item);
		
		if (value == null || value.trim().length() == 0) {
			throw i18n.translate(item) + ' ' + i18n.translate('as_required');
		}
		
		if (params.hasOwnProperty('regex')) {
			eval("var regex = " + params.regex + ";");  
			if (!regex.test(value))
				throw i18n.translate(item) + ' ' + i18n.translate('as_invalid');
		}
		
	})
}