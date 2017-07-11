function requiredOn(form, attributes, params) {
	
	attributes.map(function(item){
		
		value = form.getValue(item);
		var valueDepend = form.getValue(params.field);
		
		if (params.hasOwnProperty('ne')) {
			if (valueDepend != params.ne)
				required(form, [item]);
		}
		
		if (params.hasOwnProperty('eq')) {
			if (valueDepend == params.eq)
				required(form, [item]);
		}
		
		if (params.hasOwnProperty('regex')) {
			eval("var regex = " + params.regex + ";");  
			if (regex.test(valueDepend))
				required(form, [item]);
		}
		
	})
	
}