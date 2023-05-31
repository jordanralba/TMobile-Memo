const form = document.getElementById('memo-form');

const call_direction = form.call_direction;
const contact_attempt = form.contact_attempt;
const survivor_name = form.survivor_name;
const phone_number = form.phone_number;
const call_result = form.call_result;
const executive_action = form.executive_action;
const requested_action = form.requested_action;
const deceased_verification = form.deceased_verification;
const autopay_cancelled = form.autopay_cancelled;
const alternate_billing_address = form.alternate_billing_address;
const updated_billing_parameters = form.updated_billing_parameters;
const special_instruction = form.special_instruction;
const eip_status = form.eip_status;
const deipcr_credit = form.deipcr_credit;
const jod_status = form.jod_status;
const hsi_status = form.hsi_status;
const ban_as_facd = form.ban_as_facd;
const sharepoint = form.sharepoint;
const cor_policy = form.cor_policy;
const overall_status = form.overall_status;
const additional_memo = form.additional_memo;



const call_detail_inputs = document.getElementById('details_of_call');
const call_result_radio = document.getElementById('call_result-radio');
const callback_date_div = document.getElementById('callback_date-input');
const requested_action_radio = document.getElementById('requested_action-radio');
const deceased_verification_radio = document.getElementById('deceased_verification-radio');
const jod_radio = document.getElementById('jod-radio');
const hsi_radio = document.getElementById('hsi-radio');
const cancelled_lines_input = document.getElementById('cancelled_lines-input');
const cor_lines_input = document.getElementById('cor_lines-input');
const eip_radio = document.getElementById('eip_radio');
const deipcr_applied_lines_input = document.getElementById('deipcr_applied_lines-input');
const deipcr_applied_lines = document.getElementById('deipcr_applied_line-amount');
const deipcr_ineligible_reason_div = document.getElementById('deipcr_ineligible-reason_input');
const deipcr_ineligible_lines_input = document.getElementById('deipcr_ineligible_lines-input');
const deipcr_radio = document.getElementById('deipcr_radio');
const ban_radio = document.getElementById('ban_as_facd-radio');
const ban_cancelled_date = document.getElementById('ban_date-input');
const eip_dependent = document.getElementById('eip_dependent');
const sharepoint_radio = document.getElementById('sharepoint_radio');
const sharepoint_dependent = document.getElementById('sharepoint_dependent');
const voicemail_dependent = document.getElementById('voicemail_dependent');
const vm_script = document.getElementById('vm_script');
const invalid_dependent = document.getElementById('invalid_dependent');
const resolved_dependent = document.getElementById('resolved_dependent');

executive_action.addEventListener('click', ()=>{
    if(executive_action.checked){
        document.getElementById('executive_action-input').hidden = false;
    }else{
        document.getElementById('executive_action-input').hidden = true;
    }
});

call_result_radio.addEventListener('click', (event)=>{
    callback_date_div.hidden = true;
    voicemail_dependent.hidden = true;
    vm_script.hidden = true;
    invalid_dependent.hidden = true;
    resolved_dependent.hidden = true;
    const resultVal = parseInt(call_result.value);
    if(resultVal <= 1){
        call_detail_inputs.hidden = false;
        callback_date_div.hidden = false;
        if(resultVal === 0){
            callback_date_div.hidden = true;
        }
    }else if(resultVal >= 2) {
        call_detail_inputs.hidden = true;
        callback_date_div.hidden = false;
        if(resultVal === 2){
            voicemail_dependent.hidden = false;
            vm_script.hidden = false;
        }else if(resultVal === 4){
            invalid_dependent.hidden = false;
            callback_date_div.hidden = true;
        }else if(resultVal === 5){
            resolved_dependent.hidden = false;
            callback_date_div.hidden = true;
        }else if(resultVal === 6){
            callback_date_div.hidden = true;
        }
    }
});

requested_action_radio.addEventListener('click', (event)=>{
    if(requested_action[0].checked){
        cor_lines_input.hidden = true;
        document.getElementById('portout-input').hidden = true;
        document.getElementById('backend_date-input').hidden = true;
        document.getElementById('both_lines-input').hidden = true;
        cancelled_lines_input.hidden = false;
    }else if(requested_action[1].checked){
        document.getElementById('portout-input').hidden = true;
        document.getElementById('backend_date-input').hidden = true;
        cancelled_lines_input.hidden = true;
        document.getElementById('both_lines-input').hidden = true;
        cor_lines_input.hidden = false;
    }
    if(requested_action[2].checked){
        document.getElementById('portout-input').hidden = true;
        document.getElementById('backend_date-input').hidden = true;
        cancelled_lines_input.hidden = true;
        cor_lines_input.hidden = true;
        document.getElementById('both_lines-input').hidden = false;
    }else if(requested_action[3].checked){
        cor_lines_input.hidden = true;
        document.getElementById('backend_date-input').hidden = true;
        cancelled_lines_input.hidden = true;
        document.getElementById('both_lines-input').hidden = true;
        document.getElementById('portout-input').hidden = false;
    }else if(requested_action[4].checked){
        cor_lines_input.hidden = true;
        document.getElementById('portout-input').hidden = true;
        cancelled_lines_input.hidden = true;
        document.getElementById('both_lines-input').hidden = true;
        document.getElementById('backend_date-input').hidden = false;
}

});

deceased_verification_radio.addEventListener('click', (event)=>{
    if(deceased_verification[0].checked){
        document.getElementById('website-input').hidden = true;
        document.getElementById('msisdn-input').hidden = true;
        document.getElementById('lexid-input').hidden = false;
    }else if(deceased_verification[1].checked){
        document.getElementById('lexid-input').hidden = true;
        document.getElementById('msisdn-input').hidden = true;
        document.getElementById('website-input').hidden = false;
    }else if(deceased_verification[2].checked){
        document.getElementById('lexid-input').hidden = true;
        document.getElementById('website-input').hidden = true;
        document.getElementById('msisdn-input').hidden = false;
    }else if(deceased_verification[3].checked || deceased_verification[4].checked){
        document.getElementById('lexid-input').hidden = true;
        document.getElementById('website-input').hidden = true;
        document.getElementById('msisdn-input').hidden = true;
    }
});

/*special_instruction.addEventListener('click', ()=>{
if(special_instruction.checked){
    document.getElementById('special_instructions').hidden = false;
}else{
    document.getElementById('special_instructions').hidden = true;
}
});*/

eip_radio.addEventListener('click', (event)=>{
    if(eip_status[0].checked){
        document.getElementById('eip_transfer_email-input').hidden = false;
        eip_dependent.hidden = false;
    }else{
        document.getElementById('eip_transfer_email-input').hidden = true;
        eip_dependent.hidden = true;
    }
});

deipcr_radio.addEventListener('click', (event)=>{
    if(deipcr_credit[0].checked){
        document.getElementById('deipcr_ineligible-reason_input').hidden = true;
        document.getElementById('deipcr_ineligible_lines-input').hidden = true;
        document.getElementById('deipcr_applied_lines-input').hidden = false;
        document.getElementById('deipcr_applied_dependent').hidden = false;
    }else if(deipcr_credit[1].checked){
        document.getElementById('deipcr_applied_lines-input').hidden = true;
        document.getElementById('deipcr_applied_dependent').hidden = true;
        document.getElementById('deipcr_ineligible_lines-input').hidden = false;
        document.getElementById('deipcr_ineligible-reason_input').hidden = false;
    }else{
        document.getElementById('deipcr_applied_lines-input').hidden = true;
        document.getElementById('deipcr_applied_dependent').hidden = true;
        document.getElementById('deipcr_ineligible_lines-input').hidden = true;
        document.getElementById('deipcr_ineligible-reason_input').hidden = true;
    }
});

jod_radio.addEventListener('click', (event)=>{
    if(jod_status[0].checked){
        document.getElementById('jod_ordernumber-input').hidden = false;
        document.getElementById('jod_reason-input').hidden = true;
    }else if(jod_status[1].checked){
        document.getElementById('jod_ordernumber-input').hidden = true;
        document.getElementById('jod_reason-input').hidden = false;
    }else if(jod_status[2].checked){
        document.getElementById('jod_ordernumber-input').hidden = true;
        document.getElementById('jod_reason-input').hidden = true;
    }
});
hsi_radio.addEventListener('click', (event)=>{
    if(hsi_status[0].checked){
        document.getElementById('hsi_ordernumber-input').hidden = false;
        document.getElementById('hsi_reason-input').hidden = true;
    }else if(hsi_status[1].checked){
        document.getElementById('hsi_ordernumber-input').hidden = true;
        document.getElementById('hsi_reason-input').hidden = false;
    }else{
        document.getElementById('hsi_ordernumber-input').hidden = true;
        document.getElementById('hsi_reason-input').hidden = true;
    }
});

ban_radio.addEventListener('click', (event)=>{
    if(ban_as_facd[0].checked){
        ban_cancelled_date.hidden = false;
    }else{
        ban_cancelled_date.hidden = true;
    }
});

sharepoint_radio.addEventListener('click', (event)=>{
    if(form.sharepoint_inprogress.checked){
        sharepoint_dependent.hidden = false;
    }else{
        sharepoint_dependent.hidden = true;
    }
});



function generateMemo() {
    const display = document.getElementById('display-container');
    display.innerHTML = '&nbsp;';
    const displayRow = document.createElement('div');
        displayRow.setAttribute('class', 'row'); 
    const displayText = document.createElement('p');
        displayText.setAttribute('class', 'col-md-12');
    let validate = false;

    //Call Direction
    if(call_direction.value.length > 0){
        document.getElementById('call_direction-error').hidden = true;
        if(form.inbound){
            displayText.innerHTML += 'DECEASE BRP Request Inbound:<br>';
        }else if(form.outbound){
            displayText.innerHTML += 'DECEASE BRP Request Outbound:<br>';
        }
    
    }else if(call_direction.value.length === 0){
        document.getElementById('call_direction-error').hidden = false;
        document.getElementById('call_direction-error').innerText = 'Please select direction of the call.';
        validate = true;
    } 

    //Contact Attempt
    if(contact_attempt.value.length > 0){
        document.getElementById('contact_attempt-error').hidden = true;
        displayText.innerHTML += 'Attempt: '+contact_attempt.value+'<br>';
    }
    else if(contact_attempt.value.length === 0){
        document.getElementById('contact_attempt-error').hidden = false;
        document.getElementById('contact_attempt-error').innerText = 'Please select the current contact attempt.';
        validate = true;
    } 

    //Survivor Name
    if(survivor_name.value.length > 0){
        document.getElementById('survivor_name-error').hidden = true;
        displayText.innerHTML += 'Survivor Name: '+survivor_name.value+'<br>';      
    }
    else if(survivor_name.value.length === 0){
        document.getElementById('survivor_name-error').hidden = false;
        document.getElementById('survivor_name-error').innerText = "Please input the survivor's name.";
        validate = true;
    } 

    //Phone Number Called
    if(phone_number.value.length > 0){
        document.getElementById('phone_number-error').hidden = true;
        displayText.innerHTML += 'Number Called: '+phone_number.value+'<br>';
    
    }else if(phone_number.value.length === 0){
        document.getElementById('phone_number-error').hidden = false;
        document.getElementById('phone_number-error').innerText = "Please input the contact number.";
        validate = true;
    } 

    //Call Results
    if(call_result.value.length > 0){
        document.getElementById('call_result-error').hidden = true;
        if(form.process_completed.checked){
            displayText.innerHTML += 'Results of Call: Process Completed<br>';
        }else if(form.no_action.checked){
            displayText.innerHTML += 'Results of Call: Customer chose no action, callback scheduled on '+form.callback_date.value+'<br>';
        }else if(form.voicemail.checked){
            displayText.innerHTML += 'Results of Call: Un-carrier Outbound Resolution Team called cust and left V/M on [insert customer’s requested contact number] to assist in resolution of a Deceased BRP acct request. If the cust has ? or to proceed with resolution, they can return our call directly if dialing from the same device VM left on, at (800) 298-9746 during the hours of Mon-Fri 6am-4pm PT and Saturday 8am-4pm PT. NORT No Contact SMS send to '+
            form.sms.value + ' Callback scheduled on '+form.callback_date.value+'<br>';
        }else if(form.no_action.checked){
            displayText.innerHTML += 'Results of Call: Could not reach/leave message, callback scheduled on '+form.callback_date.value+'<br>';
        }else if(form.call_invalid.checked){
            displayText.innerHTML += 'Call Results Invalid: '
            if(form.invalid_memo.value === '0'){
                displayText.innerHTML += 'A Deceased BRP request was submitted indicating that the survivor requires a Spanish translator or is a Puerto Rico account. The National Outbound Resolution Team (NORT) is unable to handle Deceased Billing Responsible Party requests for Spanish speaking customers or Puerto Rico accounts. Please transfer to Customer Care: Spanish as outlined in policy: https://c2.t-mobile.com/accounts/deceased-brp-account-requests'
            }else if(form.invalid_memo.value === '1'){
                displayText.innerHTML += 'Invalid deceased BRP request. The can be reached number provided in the submission is invalid. Please resubmit with a valid CBR.'
            }else if(form.invalid_memo.value === '2'){
                displayText.innerHTML += 'A Deceased BRP request was submitted for a TFB account. The National Outbound Resolution Team (NORT) is unable to handle Deceased Billing Responsible Party requests for TFB. Please transfer to Customer Care: Business Care as outlined in policy: https://c2.t-mobile.com/accounts/deceased-brp-account-requests'
            }else if(form.invalid_memo.value === '3'){
                displayText.innerHTML += 'A Deceased BRP request was submitted for an account where the BRP is not deceased. The National Outbound Resolution Team (NORT) is unable to process requests where the BRP is alive, or requests for Power of Attorney. Please refer to policy for POA https://c2.t-mobile.com/accounts/power-of-attorney-add-remove-or-update , End user deceased https://c2.t-mobile.com/accounts/cancellation-quick-guide'
            }else if(form.invalid_memo.value === '4'){
                displayText.innerHTML += 'A Deceased BRP request was submitted for an account in Write Off where the BRP passed afterwards. This is an invalid request. Please follow the process outlined in policy https://c2.t-mobile.com/accounts/write-off-accounts'
            }
            displayText.innerHTML += '<br>'
        }else if(form.already_resolved.checked){
            displayText.innerHTML += 'Results of Call: Already resolved on '+form.resolved_date.value+'<br>';
        }else if(form.escalated.checked){
            displayText.innerHTML += 'Call Escalated, No Dial<br>';
        }
        if(executive_action.checked){
            const detailsSeparated = form.executive_action_memo.value.split('\n');
            displayText.innerHTML += 'Executive Action - Approved by '+form.executive.value+', Details: '+ detailsSeparated.filter(word => word.length > 0).join(', ')+'<br>';
        }
    

    }else if(call_result.value.length === 0){
        document.getElementById('call_result-error').hidden = false;
        document.getElementById('call_result-error').innerText = "Please select the call result.";
        validate = true;
    } 
    if(!call_detail_inputs.hidden){
        //Deceased Verification
        if(deceased_verification.value.length > 0){
            document.getElementById('deceased_verification-error').hidden = true;
            if(form.accurint.checked){
                const lexLinesSeparated = form.lexid.value.split('\n');
                displayText.innerHTML += 'Documentation Verified with Accurint - LexID: '+lexLinesSeparated.filter(word => word.length > 0).join(', ')+'<br>';
            }else if(form.online.checked){
                displayText.innerHTML += 'Documentation Verified Online - Website: '+form.website.value+'<br>';            
            }else if(form.verified_physical.checked){
                displayText.innerHTML += 'Documentation Verified Physically <br>';            
            }else if(form.unverified_sms.checked){
                displayText.innerHTML += 'Documentation Not Verified Sent SMS - MSISDN: '+form.msisdn.value+'<br>';
            }else if(form.unverified_no_contact.checked){
                displayText.innerHTML += 'Documentation Not Verified - No Contact <br>';
            }
        }else if(deceased_verification.value.length === 0){
            document.getElementById('deceased_verification-error').hidden = false;
            document.getElementById('deceased_verification-error').innerText = "Please select verification method.";
            validate = true;
        } 

        //Requested Action 
        if(form.requested_action.value.length > 0){
            document.getElementById('requested_action-error').hidden = true;
            if(form.requested_cancel.checked){
                displayText.innerHTML += 'Requested Action - Cancelled Lines: '+form.cancelled_lines.value+'<br>';
            }else if(form.requested_cor.checked){
                displayText.innerHTML += 'Requested Action - COR Lines: '+form.cor_lines.value+'<br>';
            }else if(form.requested_both.checked){
                displayText.innerHTML += 'Requested Action - COR Lines: '+form.both_cor_lines.value+' Cancelled Lines: '+form.both_cancelled_lines.value+'<br>';
            }else if(form.requested_portout.checked){
                displayText.innerHTML += 'Requested Action - Port Out Date: '+form.portout_date.value+'<br>';
            }else if(form.requested_final.checked){
                displayText.innerHTML += 'Requested Action - Final attempt, email sent to CR. Set follow up Date: '+form.backend_date.value+'<br>';
            }
        }else if(form.requested_action.value.length === 0){
            document.getElementById('requested_action-error').hidden = false;
            document.getElementById('requested_action-error').innerText = "Please select the requested action.";
            validate = true;
        }

        //Autopay Cancelled
        if(autopay_cancelled.checked){
            displayText.innerHTML += 'Autopay Cancelled<br>';
        }
        
        //Updated Billing Address
        if(alternate_billing_address.checked){
            displayText.innerHTML += 'Added Alternate Billing Address<br>';
        }
        
        //Updated Billing Parameters
        if(updated_billing_parameters.checked){
            displayText.innerHTML += 'Billing Parameters Changed<br>';
        
        }

        //EIP Status 
        if(eip_status.value.length > 0){
            document.getElementById('eip_status-error').hidden = true;
            if(form.eip_transferred.checked){
                displayText.innerHTML += 'EIP Transferred - Email: '+form.eip_transfer_email.value+'<br>';
                //DEIPCR Credit 
                if(deipcr_credit.value.length > 0){
                    document.getElementById('deipcr_credit-error').hidden = true;
                    if(form.deipcr_applied.checked){
                        const credit_memo = form.querySelectorAll('[id*="credit_"]');
                        displayText.innerHTML += 'DEIPCR Applied - Lines: '+form.deipcr_applied_lines.value+', ';
                        for(input of credit_memo){
                            displayText.innerHTML += input.labels[0].innerText + input.value +', '
                        }
                        displayText.innerHTML = displayText.innerHTML.slice(0, -2);
                        displayText.innerHTML += '<br>'
                            
                    }else if(form.deipcr_ineligible.checked){
                        displayText.innerHTML += 'DEIPCR Ineligible - Lines: '+form.deipcr_ineligible_lines.value+
                            ' Reason: '+form.deipcr_ineligible_reason.value+'<br>';
                    }else if(form.deipcr_na.checked){
                        displayText.innerHTML += 'DEIPCR N/A<br>';
                    }
                }else if(deipcr_credit.value.length === 0){
                    displayText.innerHTML += 'DEIPCR N/A<br>';
                }
            }else if(form.eip_closed.checked){
                displayText.innerHTML += 'EIP Closed<br>';
            }else if(form.eip_na.checked){
                displayText.innerHTML += 'EIP N/A<br>';
            }
        }else if(eip_status.value.length === 0){
            displayText.innerHTML += 'EIP N/A<br>';
        } 
        
        //JOD Return Status 
        if(jod_status.value.length > 0){
            if(form.jod_return_complete.checked){
                displayText.innerHTML += 'JOD Return Complete - Order Number: '+form.jod_ordernumber.value+'<br>';
            }else if(form.jod_return_incomplete.checked){
                displayText.innerHTML += 'JOD Return Incomplete - Reason: '+form.jod_reason.value+'<br>';
            }else if(form.jod_na.checked){
                displayText.innerHTML += 'JOD Return N/A<br>';
            }                   
        }else if(jod_status.value.length === 0){
            displayText.innerHTML += 'JOD Return N/A<br>';
        }

        //HSI Return Status 
        if(hsi_status.value.length > 0){
            if(form.hsi_return_processed.checked){
                displayText.innerHTML += 'HSI Return Processed - Order Number: '+form.hsi_ordernumber.value+'<br>';
            }else if(form.hsi_return_unprocessed.checked){
                displayText.innerHTML += 'HSI Return Not Processed - Reason: '+form.hsi_reason.value+'<br>';
            }else if(form.hsi_na.checked){
                displayText.innerHTML += 'HSI Return N/A<br>';
            } 
        
        }else if(hsi_status.value.length === 0){
            displayText.innerHTML += 'HSI Return N/A<br>';
        }
        
        //BAN Cancelled as FACD 
        if(ban_as_facd.value.length > 0){
            document.getElementById('ban_as_facd-error').hidden = true;
            if(form.ban_cancelled.checked){
                displayText.innerHTML += 'BAN cancelled as FACD - Effective Date: '+form.ban_date.value+'<br>';
            }else if(form.ban_followup.checked){
                displayText.innerHTML += 'BAN follow up, CR email sent<br>';
            }else if(form.ban_na.checked){
                displayText.innerHTML += 'BAN N/A<br>';
            }
        }else if(ban_as_facd.value.length === 0){
            document.getElementById('ban_as_facd-error').hidden = false;
            document.getElementById('ban_as_facd-error').innerText = "Please select a field.";
            validate = true;
        }

        //Updated Sharepoint 
        if(form.sharepoint_updated.value.length > 0){
            document.getElementById('sharepoint-error').hidden = true;
            if(form.sharepoint_updated.value === '0'){
                displayText.innerHTML += 'Sharepoint Complete<br>';
            }else if(form.sharepoint_updated.value === '1'){   
                displayText.innerHTML += 'Sharepoint In Progress';
                if(form.sharepoint_followup.checked){
                    displayText.innerHTML += ' - Follow up, CR email sent'; 
                }
                displayText.innerHTML += '<br>';
            }else if(form.sharepoint_updated.value === '2'){
                displayText.innerHTML += 'Sharepoint Invalid<br>';
            } 
            
        }else if(form.sharepoint_updated.value.length === 0){
            document.getElementById('sharepoint-error').hidden = false;
            document.getElementById('sharepoint-error').innerText = "Please select a field.";
            validate = true;
        }

        //Followed COR Policy
        if(cor_policy.checked){
            displayText.innerHTML += 'COR policy followed<br>'
        
        }
    }

    //Special Instructions
    if(special_instruction.checked){
        displayText.innerHTML += 'Special Instructions: The BRP is reported deceased. Do not process any upgrades/exchanges, add lines or change SIM cards. If the BAN is cancelled, do not resume; engage NORT via the Deceased BRP Request Form or have the customer call NORT from the number they were reached at from the initial submission. If the BAN is cancelled, DO NOT RESUME; engage an available member of leadership. <br>';
    }

    //Overall Status
    if(overall_status.value.length > 0){
        document.getElementById('overall_status-error').hidden = true;
        if(overall_status.value === '1'){
            displayText.innerHTML += 'Overall Status: Complete<br>';

        }else if(overall_status.value === '2'){
            displayText.innerHTML += 'Overall Status: In Progress - Callback Scheduled<br>';

        }else if(overall_status.value === '3'){
            displayText.innerHTML += 'Overall Status: In Progress - Backend Processing<br>';
        }
    

    }else if(overall_status.value.length <= 0){
        document.getElementById('overall_status-error').hidden = false;
        document.getElementById('overall_status-error').innerText = "Please select the status.";
        validate = true;
    }

    //Additional Memos
    if(form.additional_memo.value.length > 0){
        const linesSeparated = form.additional_memo.value.split('\n');
        displayText.innerHTML += 'Additional Memos: '+linesSeparated.filter(word => word.length > 0).join(', ');
    
    }

    if(!validate){
        displayRow.appendChild(displayText.cloneNode(true));
        display.appendChild(displayRow);
        displayRow.scrollIntoView();
        navigator.clipboard.writeText(displayRow.children[0].innerHTML.replaceAll('<br>', '\n')); 
    }
}
