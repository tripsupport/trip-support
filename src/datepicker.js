import Datepicker from '@themesberg/tailwind-datepicker/Datepicker';

	// Initialize a new element using the Datepicker constructor and optionally add custom options based on your needs:
	const datepickerEl = document.getElementById('datepickerId');
	new Datepicker(datepickerEl, {
		// options
	});

	// If you want to use the Tailwind Date Range Picker you have to import the DateRangePicker module:
	import DateRangePicker from '@themesberg/tailwind-datepicker/DateRangePicker';

	const dateRangePickerEl = document.getElementById('dateRangePickerId');
	new DateRangePicker(dateRangePickerEl, {
		// options
	});