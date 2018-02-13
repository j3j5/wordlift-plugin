<?php
/**
 * Storage: Post References Storage Class.
 *
 * @since      3.18.0
 * @package    Wordlift
 * @subpackage Wordlift/includes/linked-data/storage
 */

/**
 * Define the {@link Wordlift_Post_References_Storage} abstract class.
 *
 * @since      3.18.0
 * @package    Wordlift
 * @subpackage Wordlift/includes/linked-data/storage
 */
class Wordlift_Post_References_Storage {


	/**
	 * The {@link Wordlift_Entity_Service} instance.
	 *
	 * @since  3.18.0
	 * @access private
	 * @var \Wordlift_Entity_Service $entity_service The {@link Wordlift_Entity_Service} instance.
	 */
	private $entity_service;

	/**
	 * Create a {@link Wordlift_Post_Related_Storage} instance.
	 *
	 * @since 3.18.0
	 *
	 * @param \Wordlift_Entity_Service $entity_service The {@link Wordlift_Entity_Service} instance.
	 */
	public function __construct( $entity_service ) {

		$this->entity_service = $entity_service;

	}

	/**
	 * Get the property value.
	 *
	 * @since 3.18.0
	 *
	 * @param int $post_id The {@link WP_Post}'s id.
	 *
	 * @return array|string|null A single string, or an array of values or null
	 *                           if the property isn't recognized.
	 */
	public function get( $post_id ) {

		// get related entities.
		$related = wl_core_get_related_entity_ids( $post_id );

		// A reference to the entity service.
		$entity_service = $this->entity_service;

		// Map the related posts' ids to URIs.
		return array_map( function ( $item ) use ( $entity_service ) {
			return $entity_service->get_uri( $item );
		}, $related );
	}

}
