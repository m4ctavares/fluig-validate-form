function validateForm(form){
	createValidators(form);
}

function rules(){
	return [
	        // {attributes: ['field_1', 'field_2'], validator: 'required', params: { "when": "depends"}},
	        {attributes: ['field_1', 'field_2'], validator: 'required'},
	        {attributes: ['field_3'], validator: 'string', params: { "min": 3, "max": 6 }}
	        ];
}

function createValidators(form) {
	var context = this;
	rules().map(function(rule){
		context[rule.validator](form, rule.attributes, rule.params)
	})
}

function required(form, attributes, params) {
	
	var context = this;
	
	if (params !== null && typeof params === 'object') {
		if (params.hasOwnProperty('when')) {
			if (!context[params.when](form))
				return;
		}
	}

	attributes.map(function(item){
		
		value = form.getValue(item);
		
		if (value == null || value.trim().length() == 0) {
			throw i18n.translate(item) + ' ' + i18n.translate('as_required');
		}
		
	})
}

function depends(form) {
	return !form.getValue('campo_3') == 'S';
}

function string(form, attributes, params) {
	return true;
}