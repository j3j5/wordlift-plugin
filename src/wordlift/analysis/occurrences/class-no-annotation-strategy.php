<?php
/**
 * This file provides a default strategy to add the occurences in analysis service.
 * @author Naveen Muthusamy <naveen@wordlift.io>
 * @since 3.32.6
 */

namespace Wordlift\Analysis\Occurrences;

use Wordlift\Common\Singleton;
use Wordlift\Content\Wordpress\Wordpress_Content_Id;
use Wordlift\Content\Wordpress\Wordpress_Content_Service;
use Wordlift\Object_Type_Enum;
use Wordlift\Relation\Object_Relation_Factory;

class No_Annotation_Strategy extends Singleton implements Occurrences {
	/**
	 * @return No_Annotation_Strategy
	 */
	public static function get_instance() {
		return parent::get_instance();
	}


	public function add_occurences_to_entities( $occurrences, $json, $post_id ) {

		$references = Object_Relation_Factory::get_instance( $post_id )->get_references(
			$post_id,
			// TODO: when term content analysis is implemented, the subject_type should be sent by editor.
			Object_Type_Enum::POST
		);

		$content_service = Wordpress_Content_Service::get_instance();

		foreach ( $references as $reference ) {
			$entity_uri                    = $content_service
				->get_entity_id( new Wordpress_Content_Id( $reference->get_id(), $reference->get_type() ) );
			$entity_data                   = wl_serialize_entity( $reference->get_id() );
			$entity_data['occurrences']    = array( 'placeholder-occurrence' );
			$json->entities->{$entity_uri} = $entity_data;
		}

		return $json;
	}

}
