<?php

/**
 * Class Woocommerce_Shipping_Data_Test
 *
 * Use Case #4
 * @link https://docs.google.com/spreadsheets/d/1cFpGjB6oJeGV2h0L3VLMs_IgCCHf7wxIY6t0a2jqZ1Y/edit#gid=0
 * @group woocommerce
 */
class Woocommerce_Shipping_Data_Test_4_1 extends WP_UnitTestCase {

	/**
	 * To install required plugins:
	 *
	 * ./bin/install-wp-tests.sh wordpress wordpress password db 5.6 true
	 */

	function test() {
		$this->skip_if_plugins_not_active();

		$this->add_zone_italy();
		$this->add_zone_canada_and_united_states();
		$this->set_no_shipping_class_handling_time();
		$product_id = $this->add_product();

		$jsonld = apply_filters( 'wl_entity_jsonld', array(
			'@type'  => 'Product',
			'offers' => array(
				'@type' => 'Offer',
			)
		), $product_id, array() );

		$this->assertEqualSets( array(
			'@type'        => 'ShippingDeliveryTime',
			'handlingTime' => array(
				'@type'    => 'QuantitativeValue',
				'minValue' => 0,
				'maxValue' => 2,
			)
		), $jsonld['offers'][0]['shippingDetails'][0]['deliveryTime'] );

		$this->assertEqualSets( array(
			'@type'        => 'ShippingDeliveryTime',
			'handlingTime' => array(
				'@type'    => 'QuantitativeValue',
				'minValue' => 0,
				'maxValue' => 2,
			)
		), $jsonld['offers'][0]['shippingDetails'][1]['deliveryTime'] );

	}

	private function add_zone_italy() {

		$zone = new WC_Shipping_Zone();
		$zone->save();

		$zone->add_location( 'IT:RM', 'state' );
		$zone->add_location( 'IT:MI', 'state' );

		$zone->add_shipping_method( 'free_shipping' );

		$shipping_method_id        = $zone->add_shipping_method( 'flat_rate' );
		$flat_rate_shipping_method = WC_Shipping_Zones::get_shipping_method( $shipping_method_id );
		$flat_rate_shipping_method->add_rate( array( 'label' => 'Free Shipping', 'cost' => 10, ) );

		update_option( "woocommerce_flat_rate_{$shipping_method_id}_settings", array(
			'title'         => 'Flat rate',
			'tax_status'    => 'taxable',
			'cost'          => '10',
			'class_costs'   => '',
			'no_class_cost' => '',
			'type'          => 'class'
		), true );

		$zone->save();

	}

	private function add_zone_canada_and_united_states() {

		$zone = new WC_Shipping_Zone();
		$zone->save();

		$zone->add_location( 'CA', 'country' );
		$zone->add_location( 'US', 'country' );

		$shipping_method_id           = $zone->add_shipping_method( 'local_pickup' );
		$local_pickup_shipping_method = WC_Shipping_Zones::get_shipping_method( $shipping_method_id );
		$local_pickup_shipping_method->add_rate( array( 'label' => 'Local Pickup', 'cost' => 10, ) );

		update_option( "woocommerce_local_pickup_{$shipping_method_id}_settings", array(
			'title'      => 'Local pickup',
			'tax_status' => 'none',
			'cost'       => '10',
		), true );

		$zone->save();

	}

	private function set_no_shipping_class_handling_time() {

		$option = get_option( 'wpsso_options' );

		$option['wcsdt_handling_c0_minimum']   = 8;
		$option['wcsdt_handling_c0_maximum']   = 36;
		$option['wcsdt_handling_c0_unit_code'] = 'HUR';

		update_option( 'wpsso_options', $option );

	}

	private function add_product() {

		return $this->factory()->post->create( array(
			'post_type' => 'product'
		) );

	}


	private function skip_if_plugins_not_active() {

		foreach (
			array(
				'woocommerce/woocommerce.php',
				'wpsso/wpsso.php',
				'wpsso-wc-shipping-delivery-time/wpsso-wc-shipping-delivery-time.php',
			) as $plugin_name
		) {
			if ( ! is_plugin_active( $plugin_name ) ) {
				$this->markTestSkipped( "{$plugin_name} is not active" );
			}

		}

	}

}
