<?php

namespace Wordlift\Entity\Remote_Entity;

class Valid_Remote_Entity  implements Remote_Entity {

	/**
	 * @var array<string>
	 */
	private $types;

	public function __construct( $types ) {
		$this->types = $types;
	}


	function getName() {
		// TODO: Implement getName() method.
	}

	function getDescription() {
		// TODO: Implement getDescription() method.
	}

	function getSameAs() {
		// TODO: Implement getSameAs() method.
	}

	function getTypes() {
		return $this->types;
	}
}