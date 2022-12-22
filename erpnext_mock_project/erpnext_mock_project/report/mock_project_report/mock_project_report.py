# Copyright (c) 2022, Rohith and contributors
# For license information, please see license.txt
from frappe import _
import frappe

def execute(filters=None):
	return get_columns(), get_data(filters)

def get_data(filters):
	print(f"/n/n/n{filters}/n/n/n")
	
	data = frappe.db.sql("""SELECT name, employee_name, no_of_days_in_a_month, total_working_days, present_days, absent_days, shift, holiday_list FROM `tabEmployee`;""")
	return data

def get_columns():
    return [
	"Employee ID:Link/Employee:130",
	"Employee Name:Data:130",
	"No of Days in a month:Int:130",
	"Total Working Days:Int:130",
	"Present days:Int:130",
	"Absent Days:Int:130",
	"Shift:Data:130",
	"Holiday:Data:130"
	]
