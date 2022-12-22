// Copyright (c) 2022, Rohith and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Mock project Report"] = {
	"filters": [
		{
			"fieldname" : "date_of_joining",
			"label" : __("Start date"),
			"fieldtype" : "Date",
			"width" : 100,
		},

		{
			"fieldname" : "relieving_date",
			"label" : __("End date"),
			"fieldtype" : "Date",
			"width" : 100,
		},

		{
			"fieldname" : "employee",
			"label" : __("Employee"),
			"fieldtype" : "Link",
			"width" : 100,
			"options" : "Employee"
		},
		{
			"fieldname" : "shift_type",
			"label" : __("Shift "),
			"fieldtype" : "Data",
			"width" : 100,
		}

	]
};
