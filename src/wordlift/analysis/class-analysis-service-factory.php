<?php
/**
 *
 * This file provides factory for constructing analysis service based on the feature enabled / disabled.
 *
 * @package  Wordlift\Analysis
 */

namespace Wordlift\Analysis;

/**
 * Factory class to construct @link \Wordlift_Api_Service
 */
class Analysis_Service_Factory {

	/**
	 * Get the analysis service conditionally.
	 *
	 * @return Analysis_Service
	 */
	public static function get_instance() {

		return V1_Analysis_Service::get_instance();
	}

}
