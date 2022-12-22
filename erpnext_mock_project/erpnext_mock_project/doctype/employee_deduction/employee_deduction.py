# Copyright (c) 2022, Rohith and contributors
# For license information, please see license.txt
from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe import _
import calendar
import datetime
from datetime import datetime


class EmployeeDeduction(Document):
    pass


####################################################################################
#################  Method to Get the End date of the month   #######################
####################################################################################

@frappe.whitelist()
def my_date(my_date):
    a = my_date.split("-")
    end_date = calendar.monthrange(int(a[0]), int(a[1]))[1]
    # return (str(end_date)+'-'+a[1]+'-'+a[0])
    return (a[0]+'-'+a[1]+'-'+str(end_date))

####################################################################################
#################### Method to compare the amount greater than 0 ###################
####################################################################################

# @frappe.whitelist()
# def amount_validate(total_amt):
#     if total_amt == 0:
#         return "Amount should be greater than 0.00"


####################################################################################
################# Method to Count the Onetime type  ###############################$
####################################################################################

# @frappe.whitelist()
# def total_onetime():
#     total = frappe.db.sql("""SELECT AVG(amount)
#     -> FROM `tabDeduction Detail`
#     -> WHERE deduction_type = 'Onetime';""", as_dict=1)
#     return total



@frappe.whitelist()
def month_year(mon_date):
    date_input = mon_date
    datetimeobject = datetime.strptime(date_input,'%Y-%m-%d')
    new_format = datetimeobject.strftime('%b-%Y')
    return new_format

        







