function validateForm(form){
	createValidators(form);
}

function rules(){
	return [
	        {attributes: ['field_1'], validator: 'required', params: { "regex" : "/S|N/gi"}},
	        {attributes: ['field_3'], validator: 'string', params: { "max": 1 }},
//	        {attributes: ['field_2'], validator: 'integerOnly', params: { "min": 0, "max": 80}},
	        {attributes: ['field_2'], validator: 'requiredOn', 'params': { "field" : "field_3", "regex" : "/S|N/gi"}}
	        ];
}

function createValidators(form) {
	var context = this;
	rules().map(function(rule){
		context[rule.validator](form, rule.attributes, rule.params)
	})
}