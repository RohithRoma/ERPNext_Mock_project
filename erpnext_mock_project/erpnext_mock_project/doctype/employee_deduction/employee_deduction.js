// Copyright (c) 2022, Rohith and contributors
// For license information, please see license.txt

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////  end_date fetching   /////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


frappe.ui.form.on('Deduction Detail', {
	start_date: function(frm, cdt, cdn) { 
		var dd = locals[cdt][cdn]
		frappe.call({
			method: "erpnext_mock_project.erpnext_mock_project.doctype.employee_deduction.employee_deduction.my_date", //dotted path to server method
			args : {
				my_date: dd.start_date
			},
			callback: function(r) {
				// code snippet
				console.log(r)
				// frappe.msgprint(r)
				if(dd.deduction_type == 'Onetime'){
					frappe.model.set_value(cdt,cdn,'end_date',r.message)
				}
			}
		});
	},
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////         Amount should be greater than 0  validation  ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	amount: function(frm, cdt, cdn) {
		let am = locals[cdt][cdn]
		if (am.amount == 0){
			frappe.throw("Amount should be greater than 0")
		}
	},
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////// End date Validation /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	end_date : function(frm, cdt, cdn) {
		let ed = locals[cdt][cdn]
		if (ed.end_date <= ed.start_date){
			frappe.msgprint('End date should be greater than Start Date.')
		}
	}

});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////         Amount should be greater than 0  validation  ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// frappe.ui.form.on('Deduction Detail', {
// 	amount: function(frm, cdt, cdn) {
// 		var at = locals[cdt][cdn]
// 		frappe.call({
// 			method: "erpnext_mock_project.erpnext_mock_project.doctype.employee_deduction.employee_deduction.amount_validate",
// 			args : {
// 				total_amt : at.amount
// 			},
// 			callback: function(r) {
// 				console.log(r)
// 				frappe.msgprint(r.message)
// 			}
// 		});
// 	}
// });

// frappe.ui.form.on('Deduction Calculation',{
// 	before_save: function(frm, cdt, cdn) {
// 		var onetime = locals[cdt][cdn]
// 		frappe.call({
// 			method: "erpnext_mock_project.erpnext_mock_project.doctype.employee_deduction.employee_deduction.total_onetime",
// 			callback: function(r) {
// 				console.log(r)
// 				frappe.msgprint(r.message)
// 				frappe.model.set_value(cdt,cdn,'onetime',r.message)
// 			}
// 		})
// 	}
// });


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////       Month year Calculation          ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// frappe.ui.form.on('Deduction Detail', {
// 	before_save: function(frm, cdt, cdn) { 
// 		var d = locals[cdt][cdn]
// 		frappe.call({
// 			method: "erpnext_mock_project.erpnext_mock_project.doctype.employee_deduction.employee_deduction.month_year", //dotted path to server method
// 			args : {
// 				mon_date: d.start_date
// 			},
// 			callback: function(r) {
// 				// code snippet
// 				console.log(r)
// 				frappe.msgprint(r)
// 				frappe.model.set_value(cdt,cdn,'month',r.message)
// 			}
// 		});
// 	},
// });

frappe.ui.form.on('Deduction Detail', {
	amount: function(frm, cdn, cdt){
		let d = locals[cdn][cdt]

		if(d.start_date){
			frappe.call({
				method:"erpnext_mock_project.erpnext_mock_project.doctype.employee_deduction.employee_deduction.month_year",
				args:{mon_date : d.start_date},
				callback : function(r) {
					console.log(r)
					var childTable = cur_frm.add_child("deduction_calculation");

					if(d.deduction_type == 'Onetime'){
						childTable.month=r.message;
						childTable.onetime = d.amount
					}
					
					


					cur_frm.refresh_fields("deduction_calculation");

				}
			})
		}
	},
	// amount: function(frm,cdt,cdn) {
    //     var d = locals[cdt][cdn];

	// 	if(d.deduction_type = 'Onetime'){

	// 		var amt = d.amount
	// 		var child = cur_frm.add_child("deduction_calculation");
	// 		child.onetime = amt

	// 		cur_frm.refresh_fields("deduction_calculation");
	// 	}
        
    //    frm.refresh_field('child_table_name');
    // }
});





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////                                        ////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// frappe.ui.form.on('Employee Deduction', {
// 	validate: function(frm) {
// 		let row1 = frm.add_child('deduction calculation', {
// 			month : 'Nov 2022',
// 			onetime : '200',
// 			recurring : '300',
// 			total : '500',
// 			actual_paid_amount : '100',
// 			balance : '400',

// 		})
// 	}
	
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// frappe.ui.form.on('Deduction Calculation',{
// 		month: function(frm, cdt, cdn) {
// 			var mon = locals[cdt][cdn]
// 			frappe.call({
// 				method: "erpnext_mock_project.erpnext_mock_project.doctype.employee_deduction.employee_deduction.rdm",
// 				args : {data : mon.month},
// 				callback: function(r) {
// 					console.log(r)
// 					frappe.msgprint(r.message)
// 				}
// 			})
// 		}
// 	});
