 <label class="mw-ui-label">Enabled:</label>
 
    <label class="mw-ui-label">Test mode:</label>
 

 <label class="mw-ui-check">
    <input name="paypalpro_testmode" class="mw_option_field"    data-option-group="payments"  value="y"  type="radio"  <? if(get_option('paypalpro_testmode', 'payments') != 'n'): ?> checked="checked" <? endif; ?> >
    <span></span>Yes</label>
    
     <label class="mw-ui-check">
    <input name="paypalpro_testmode" class="mw_option_field"    data-option-group="payments"  value="n"  type="radio"  <? if(get_option('paypalpro_testmode', 'payments') == 'n'): ?> checked="checked" <? endif; ?> >
    <span></span>No</label>
    


<label class="mw-ui-label">Paypal pro username:</label>
<input type="text" class="mw-ui-field mw_option_field" name="paypalpro_username"    data-option-group="payments"  value="<? print get_option('paypalpro_username', 'payments'); ?>" >

<label class="mw-ui-label">Paypal pro api key:</label>
<input type="text" class="mw-ui-field mw_option_field" name="paypalpro_apikey"    data-option-group="payments"  value="<? print get_option('paypalpro_apikey', 'payments'); ?>" >

<label class="mw-ui-label">Paypal pro api password:</label>
<input type="text" class="mw-ui-field mw_option_field" name="paypalpro_apipassword"    data-option-group="payments"  value="<? print get_option('paypalpro_apipassword', 'payments'); ?>" >


<label class="mw-ui-label">Paypal pro api signature:</label>
<input type="text" class="mw-ui-field mw_option_field" name="paypalpro_apisignature"    data-option-group="payments"  value="<? print get_option('paypalpro_apisignature', 'payments'); ?>" >