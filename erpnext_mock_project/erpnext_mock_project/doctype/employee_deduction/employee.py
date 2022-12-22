import frappe

def absent_cal(doc,method):
    doc.absent_days = doc.total_working_days - doc.present_days
    frappe.msgprint("Absent days Updated")
    
def total_working(doc,method):
    if doc.total_working_days >=30:
        frappe.throw("Total working days cannot be more than 30")
        
def present_working(doc,method):
    if doc.present_days >=30:
        frappe.throw("Total present days cannot be morethan 30")