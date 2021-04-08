<?php

/**
 * Class Woocommerce_Shipping_Data_Test
 *
 * Use Case #1.3
 * @link https://docs.google.com/spreadsheets/d/1cFpGjB6oJeGV2h0L3VLMs_IgCCHf7wxIY6t0a2jqZ1Y/edit#gid=0
 * @group woocommerce
 */
class Woocommerce_Shipping_Data_Test_1_3 extends WP_UnitTestCase {

	/**
	 * To install required plugins:
	 *
	 * ./bin/install-wp-tests.sh wordpress wordpress password db 5.6 true
	 */

	function test() {

		$this->add_free_shipping_shipping_method_to_default_zone();

		$jsonld = apply_filters( 'wl_entity_jsonld', array(
			'@type'  => 'Product',
			'offers' => array(
				'@type' => 'Offer',
			)
		), - 1, array() );

		$this->assertTrue( isset( $jsonld['offers'][0]['availableDeliveryMethod'] ), 'Property not found in ' . var_export( $jsonld, true ) );
		$this->assertEquals( array( 'ParcelDelivery' ), $jsonld['offers'][0]['availableDeliveryMethod'] );

	}

	private function add_free_shipping_shipping_method_to_default_zone() {

		$default_zone = WC_Shipping_Zones::get_zone( 0 );
		$default_zone->add_shipping_method( 'free_shipping' );
		$default_zone->save();

	}

}
