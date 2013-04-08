// JavaScript Document
mw.require('forms.js');


mw.cart = {
  add : function(selector, price){
	 //  data = mw.$(selector+' input').serialize();
	 data = mw.form.serialize(selector);

	 if(price != undefined && data != undefined){
		data.price= price
	 }



     $.post(mw.settings.api_url+'update_cart', data ,
     function(data) {
		 mw.reload_module('shop/cart');
     });
  },

   remove : function($id){

	  data = {}
	  data.id=$id;

     $.post(mw.settings.api_url+'remove_cart_item', data ,
     function(data) {


		 mw.$('.mw-cart-item-'+$id).fadeOut().remove();


		// mw.reload_module('shop/cart');
      //   mw.$('#tagline').html(data);
     });
  },


  qty : function($id, $qty){

	  data = {}
	  data.id=$id;
	  data.qty= $qty;

     $.post(mw.settings.api_url+'update_cart_item_qty', data ,
     function(data) {
		    mw.reload_module('shop/cart');

		// mw.$('.mw-cart-item-'+$id).fadeOut().remove();


		// mw.reload_module('shop/cart');
      //   mw.$('#tagline').html(data);
     });
  },

    checkout : function(selector){
       var form = mw.$(selector);

       var state = form.dataset("loading");

       if(state == 'true') return false;

       form.dataset("loading", 'true');

       form.find('.mw-checkout-btn').attr('disabled', 'disabled');
form.find('.mw-checkout-btn').hide();
	   var obj = mw.form.serialize(selector);

	  $.ajax({
			  type: "POST",

			  url: mw.settings.api_url+'checkout',
			  data: obj
			}).done(function( data ) {
					 if(data != undefined){


						 mw.$(selector+' .mw-cart-data-btn').removeAttr('disabled');

						 	 mw.$('[data-type="shop/cart"]').removeAttr('hide-cart');

						 var data2 =  (data);

						 if(typeof(data2.error) != 'undefined'){




 mw.$(selector+' .mw-cart-data-holder').show();

                                mw.response(selector,data2);


					    } else if(typeof(data2.success) != 'undefined'){
	 mw.$('[data-type="shop/cart"]').attr('hide-cart', 'completed');
	  mw.reload_module('shop/cart');
 mw.$(selector+' .mw-cart-data-holder').hide();
                                mw.response(selector,data2);

								//mw.$('[data-type="shop/checkout"]').attr('view', 'completed');
								 //mw.reload_module('shop/cart');
								// mw.reload_module('shop/checkout');


					    }  else if(parseInt(data) > 0){
							 mw.$('[data-type="shop/checkout"]').attr('view', 'completed');
							  //mw.reload_module('shop/cart');
							 mw.reload_module('shop/checkout');


						 } else {

							 if(obj.payment_gw != undefined){
								 var callback_func = obj.payment_gw+'_checkout';

								 if(typeof window[callback_func] === 'function'){
									window[callback_func](data,selector);
								 }


								 var callback_func = 'checkout_callback';
								 if(typeof window[callback_func] === 'function'){
									window[callback_func](data,selector);
								 }
							 }
						 }
					 }




        form.dataset("loading", 'false');
       form.find('.mw-checkout-btn').removeAttr('disabled');

        form.find('.mw-checkout-btn').show();









			});









  }
}












