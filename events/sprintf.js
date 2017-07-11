function sprintf() {
	return [].reduce.call(arguments, function (txt, arg) { return txt.replace(/%s/, arg) || txt });
}