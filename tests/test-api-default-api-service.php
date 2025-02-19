<?php
/**
 * Tests: Api Service.
 *
 * @since 3.20.0
 * @package Wordlift
 * @subpackage Wordlift/tests
 */

use Wordlift\Api\Default_Api_Service;

/**
 * Define the Default_Api_Service class.
 *
 * @since 3.35.0
 * @group api
 */
class Wordlift_Default_Api_Service_Test extends Wordlift_Unit_Test_Case {


	public function test_should_post_wp_admin_and_wp_json_headers_for_default_api_request() {

		$callback = array( $this, 'pre_http_request__test_get_data' );

		add_filter( 'pre_http_request', $callback, 10, 3 );

		$response = Default_Api_Service::get_instance()
		                                ->request( 'PUT', 'random_path', array() );
		$response = json_decode( $response->get_body() );
		$this->assertTrue( isset( $response->example ), 'Response must have an `example` property.' );
		$this->assertEquals( 'json', $response->example, 'The `example` property must be `json`.' );

		remove_filter( 'pre_http_request', $callback );
	}

	public function pre_http_request__test_get_data( $preempt, $r, $url ) {

		// Return this value only if header has wp json and wp admin urls.
		$headers = $r['headers'];
		if ( ! array_key_exists( 'X-Wordlift-Plugin-Wp-Admin', $headers ) ||
		     ! array_key_exists( 'X-Wordlift-Plugin-Wp-Json', $headers ) ) {
			return array(
				'response' => array( 'code' => 200 ),
				'headers'  => array( 'content-type' => 'application/json' ),
				'body'     => '{}',
			);
		}

		return array(
			'response' => array( 'code' => 200 ),
			'headers'  => array( 'content-type' => 'application/json' ),
			'body'     => '{ "example": "json" }',
		);
	}
}
