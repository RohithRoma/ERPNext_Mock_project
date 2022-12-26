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

# @frappe.whitelist()
# def rdm(data):
#     data = frappe.db.sql(""" SELECT dc.month FROM `tabDeduction Calculation` as
#                          dc JOIN `tabEmployee Deduction` as ed
#                          ON ed.name = dc.parent
#                          WHERE ed.name = 'EMP-DED-00004';""", as_list=1)
    
#     data = sorted(list(set(data)))
#     arr=[]
#     for i in data:
#         b= "-".join(i.split('-')[0:3])
#         arr.append(b)
        
#     output = []
#     for i in arr:
#         if i not in output:
#             output.append(i)
    
#     return output
        

@frappe.whitelist()
def month_between(date1, date2):
    y0 = int( date1.split('-')[0] ) # 2014
    y1 = int( date2.split('-')[0] ) # 2016

    m0 = int( date1.split('-')[1] ) - 1 # 10-1 --> 9 because will be used for indexing
    m1 = int( date2.split('-')[1] ) - 1 # 01-1 --> 0 because will be used for indexing

    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    result = []
    start = m0
    for y in range(y0, y1+1):
        for m in range(start,12):
            result.append( str( months[m  % 12])+'-'+str(y) )
            if y == y1 and (m % 12) == m1:
                break
        start = 0

    return result

        







