<?php
/**
 * Define the {@link Wordlift_Mapping_DBO} class.
 * Used for CRUD on a mapping item tables
 *
 * @since      3.25.0
 * @package    Wordlift
 * @subpackage Wordlift/includes/sync-mappings
 */
final class Wordlift_Mapping_DBO {

	/**
	 * The {@link wpdb} instance.
	 *
	 * @since  3.25.0
	 * @access private
	 * @var \wpdb $wpdb The {@link wpdb} instance.
	 */
	private $wpdb = null;

	/**
	 * Construct DBO object.
	 */
	public function __construct() {
		global $wpdb;
		$this->wpdb = $wpdb;

	}

	/**
	 * Insert new mapping item with title
	 *
	 * @param String $title Title of the mapping item.
	 */
	public function insert_mapping_item( $title ) {
		$mapping_table_name = $this->wpdb->prefix . WL_MAPPING_TABLE_NAME;
		$this->wpdb->insert( $mapping_table_name, array( 'mapping_title' => $title ) );
		return $this->wpdb->insert_id;
	}

	/**
	 * Update mapping item with new title
	 *
	 * @param Int    $mapping_id Primary key for mapping table.
	 *
	 * @param String $title Title of the mapping item.
	 */
	public function update_mapping_item( $mapping_id, $title ) {
		$mapping_table_name = $this->wpdb->prefix . WL_MAPPING_TABLE_NAME;
		$this->wpdb->replace( 
			$mapping_table_name,
			array(
				'mapping_title' => $title,
				'mapping_id'    => $mapping_id,
			)
		);	
	}

	/**
	 * Inserts rule item.
	 *
	 * @param Int    $mapping_id Primary key for mapping table.
	 * @param String $rule_field_one   The first rule field.
	 * @param String $rule_logic_field The Logic field.
	 * @param String $rule_field_two   The second rule field.
	 */
	public function insert_rule_item( $mapping_id, $rule_field_one,
	$rule_logic_field, $rule_field_two ) {
		$rule_table_name = $this->wpdb->prefix . WL_RULE_TABLE_NAME;
		$this->wpdb->insert(
			$rule_table_name,
			array(
				'rule_field_one'   => $rule_field_one,
				'rule_field_two'   => $rule_field_two,
				'rule_logic_field' => $rule_logic_field,
			)
		);
		$rule_id = $this->wpdb->insert_id;
		// Insert rule group if it is not present in db.
		$this->insert_or_update_rule_group( (int) $mapping_id, (int) $rule_id );
		return $rule_id;
	}

	/**
	 * Updates rule item.
	 *
	 * @param Array $rule_item_data   The rule_item_data, should contain rule_id.
	 */
	public function update_rule_item( $rule_item_data ) {
		$mapping_id = $rule_item_data['mapping_id'];
		// Remove mapping id key from rule item data.
		unset( $rule_item_data['mapping_id'] );
		$rule_table_name = $this->wpdb->prefix . WL_RULE_TABLE_NAME;
		$this->wpdb->replace(
			$rule_table_name,
			$rule_item_data
		);
		$this->insert_or_update_rule_group(
			(int) $mapping_id,
			(int) $rule_item_data['rule_id']
		);
	}

	/**
	 * If a rule group exists doesn't do anything, but if rule group
	 * didn't exist then it inserts a new entry.
	 *
	 * @param Int $mapping_id Primary key for mapping table.
	 *
	 * @param Int $rule_id Primary key for rule table.
	 */
	private function insert_or_update_rule_group( $mapping_id, $rule_id ) {
		$rule_group_table_name = $this->wpdb->prefix . WL_RULE_GROUP_TABLE_NAME;
		// Check if a rule group id exists.
		$rule_group_row = $this->wpdb->get_row(
			$this->wpdb->prepare(
				"SELECT * FROM $rule_group_table_name WHERE mapping_id = %d AND rule_id = %d",
				$mapping_id,
				$rule_id
			)
		);

		if ( ! is_object( $rule_group_row ) ) {
			// Rule group id not present, so insert the row.
			$this->wpdb->insert(
				$rule_group_table_name,
				array(
					'mapping_id' => $mapping_id,
					'rule_id'    => $rule_id,
				)
			);
		}
	}

}
