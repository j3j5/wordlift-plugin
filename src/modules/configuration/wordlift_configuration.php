<?php
/**
 * Handles the WordLift Plugin configuration by providing
 *  * configuration screens
 *  * methods for retrieving configuration data
 */

require_once( 'wordlift_configuration_constants.php' );
require_once( 'wordlift_configuration_settings.php' );

/**
 * This function is called by the *wl_admin_menu* hook which is raised when WordLift builds the admin_menu.
 *
 * @since 3.0.0
 *
 * @param string $parent_slug The parent slug for the menu.
 * @param string $capability The required capability to access the page.
 */
function wl_configuration_admin_menu( $parent_slug, $capability ) {

	// see http://codex.wordpress.org/Function_Reference/add_submenu_page
	add_submenu_page(
		$parent_slug, // The parent menu slug, provided by the calling hook.
		__( 'Configuration', 'wordlift' ),  // page title
		__( 'Configuration', 'wordlift' ),  // menu title
		$capability,                   // The required capability, provided by the calling hook.
		'wl_configuration_admin_menu',      // the menu slug
		'wl_configuration_admin_menu_callback' // the menu callback for displaying the page content
	);

}

add_action( 'wl_admin_menu', 'wl_configuration_admin_menu', 10, 2 );

/**
 * Displays the page content.
 *
 * @since 3.0.0
 *
 * @param boolean $display_page_title If true, prints out the page title.
 */
function wl_configuration_admin_menu_callback( $display_page_title = true ) {

	if ( ! current_user_can( 'manage_options' ) ) {
		wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
	}
	?>

	<div class="wrap">

		<?php if ( $display_page_title ) { ?>
			<div id="icon-themes" class="icon32"></div>
			<h2>WordLift</h2>
		<?php } ?>

		<?php settings_errors(); ?>

		<?php
		$active_tab = isset( $_GET['tab'] ) ? $_GET['tab'] : 'general_settings';
		?>

		<h2 class="nav-tab-wrapper">
			<a href="?page=<?php echo( $_GET['page'] ); ?>&tab=general_settings"
			   class="nav-tab <?php echo $active_tab == 'general_settings' ? 'nav-tab-active' : ''; ?>"><?php esc_attr_e( 'General', 'wordlift' ); ?></a>
			<a href="?page=<?php echo( $_GET['page'] ); ?>&tab=advanced_settings"
			   class="nav-tab <?php echo $active_tab == 'advanced_settings' ? 'nav-tab-active' : ''; ?>"><?php esc_attr_e( 'Advanced', 'wordlift' ); ?></a>
		</h2>

		<form action="options.php" method="post">
			<?php

			if ( 'general_settings' === $active_tab ) {
				settings_fields( 'wl_general_settings' );
				do_settings_sections( 'wl_general_settings' );

			} else {
				settings_fields( 'wl_advanced_settings' );
				do_settings_sections( 'wl_advanced_settings' );
			}

			submit_button();
			?>
		</form>

		<div style="margin-top: 100px; font-size: 10px;">The entities blocks are designed by Lukasz M. Pogoda from the
			Noun Project
		</div>
	</div>

<?php
}


/**
 * Configure all the configuration parameters. The configuration parameters are grouped in two tabs:
 *  * General
 *  * Advanced
 *
 * Called by the *admin_init* hook.
 *
 * @since 3.0.0
 */
function wl_configuration_settings() {

	register_setting(
		'wl_general_settings',
		'wl_general_settings',
		'wl_configuration_sanitize_settings'
	);

	register_setting(
		'wl_advanced_settings',
		'wl_advanced_settings',
		'wl_configuration_sanitize_settings'
	);

	add_settings_section(
		'wl_general_settings_section',          // ID used to identify this section and with which to register options
		'General Settings',                              // Title to be displayed on the administration page
		'wl_configuration_general_settings_section_callback', // Callback used to render the description of the section
		'wl_general_settings'              // Page on which to add this section of options
	);

	add_settings_section(
		'wl_advanced_settings_section',          // ID used to identify this section and with which to register options
		'Advanced',                              // Title to be displayed on the administration page
		'wl_configuration_advanced_settings_section_callback', // Callback used to render the description of the section
		'wl_advanced_settings'              // Page on which to add this section of options
	);

	add_settings_field(
		WL_CONFIG_WORDLIFT_KEY,             // ID used to identify the field throughout the theme
		__( 'WordLift Key', 'wordlift' ),   // The label to the left of the option interface element
		'wl_configuration_input_box',       // The name of the function responsible for rendering the option interface
		'wl_general_settings',         // The page on which this option will be displayed
		'wl_general_settings_section',      // The name of the section to which this field belongs
		array(                              // The array of arguments to pass to the callback. In this case, just a description.
			'id'          => 'wl-key',
			'name'        => 'wl_general_settings[key]',
			'value'       => wl_configuration_get_key(),
			'description' => __( 'Insert the WordLift Key', 'wordlift' )
		)
	);

	// Add the setting field for the display as default.
	add_settings_field(
		WL_CONFIG_ENTITY_DISPLAY_AS_DEFAULT_NAME,
		__( 'New Entity Posts are displayed as', 'wordlift' ),
		'wl_configuration_select',
		'wl_general_settings',
		'wl_general_settings_section',
		array(                              // The array of arguments to pass to the callback. In this case, just a description.
			'id'          => 'wl-entity-display-as',
			'name'        => 'wl_general_settings[entity_display_as]',
			'value'       => wl_configuration_get_entity_display_as(),
			'description' => __( 'By default the entity page is displayed as', 'wordlift' ),
			'options'     => array(
				'index' => __( 'Index', 'wordlift' ),
				'page'  => __( 'Page', 'wordlift' )
			)

		)
	);

	add_settings_field(
		WL_CONFIG_ENABLE_COLOR_CODING_ON_FRONTEND_NAME,
		__( 'Enable color coding on front-end', 'wordlift' ),
		'wl_configuration_checkbox',
		'wl_general_settings',
		'wl_general_settings_section',
		array(                              // The array of arguments to pass to the callback. In this case, just a description.
			'id'          => 'wl-enable-color-coding',
			'name'        => 'wl_general_settings[enable_color_coding]',
			'value'       => wl_configuration_get_enable_color_coding(),
			'description' => __( 'Enable color coding', 'wordlift' )
		)
	);


	add_settings_field(
		WL_CONFIG_SITE_LANGUAGE_NAME,
		__( 'Site Language', 'wordlift' ),
		'wl_configuration_select',
		'wl_general_settings',
		'wl_general_settings_section',
		array(                              // The array of arguments to pass to the callback. In this case, just a description.
			'id'          => 'wl-site-language',
			'name'        => 'wl_general_settings[site_language]',
			'value'       => wl_configuration_get_site_language(),
			'description' => __( 'The site language', 'wordlift' ),
			'options'     => wl_configuration_get_languages()
		)
	);

	add_settings_field(
		WL_CONFIG_API_URL,             // ID used to identify the field throughout the theme
		__( 'API URL', 'wordlift' ),   // The label to the left of the option interface element
		'wl_configuration_input_box',       // The name of the function responsible for rendering the option interface
		'wl_advanced_settings',         // The page on which this option will be displayed
		'wl_advanced_settings_section',      // The name of the section to which this field belongs
		array(                              // The array of arguments to pass to the callback. In this case, just a description.
			'id'          => 'wl-api-url',
			'name'        => 'wl_advanced_settings[api_url]',
			'value'       => wl_configuration_get_api_url(),
			'description' => __( 'The API URL', 'wordlift' )
		)
	);

	add_settings_field(
		WL_CONFIG_APPLICATION_KEY_NAME,             // ID used to identify the field throughout the theme
		__( 'Redlink Key', 'wordlift' ),   // The label to the left of the option interface element
		'wl_configuration_input_box',       // The name of the function responsible for rendering the option interface
		'wl_advanced_settings',         // The page on which this option will be displayed
		'wl_advanced_settings_section',      // The name of the section to which this field belongs
		array(                              // The array of arguments to pass to the callback. In this case, just a description.
			'id'          => 'wl-redlink-key',
			'name'        => 'wl_advanced_settings[redlink_key]',
			'value'       => wl_configuration_get_redlink_key(),
			'description' => __( 'The Redlink key', 'wordlift' )
		)
	);

	add_settings_field(
		WL_CONFIG_USER_ID_NAME,             // ID used to identify the field throughout the theme
		__( 'Redlink User Id', 'wordlift' ),   // The label to the left of the option interface element
		'wl_configuration_input_box',       // The name of the function responsible for rendering the option interface
		'wl_advanced_settings',         // The page on which this option will be displayed
		'wl_advanced_settings_section',      // The name of the section to which this field belongs
		array(                              // The array of arguments to pass to the callback. In this case, just a description.
			'id'          => 'wl-redlink-user-id',
			'name'        => 'wl_advanced_settings[redlink_user_id]',
			'value'       => wl_configuration_get_redlink_user_id(),
			'description' => __( 'The Redlink User Id', 'wordlift' )
		)
	);

	add_settings_field(
		WL_CONFIG_DATASET_NAME,             // ID used to identify the field throughout the theme
		__( 'Redlink Dataset name', 'wordlift' ),   // The label to the left of the option interface element
		'wl_configuration_input_box',       // The name of the function responsible for rendering the option interface
		'wl_advanced_settings',         // The page on which this option will be displayed
		'wl_advanced_settings_section',      // The name of the section to which this field belongs
		array(                              // The array of arguments to pass to the callback. In this case, just a description.
			'id'          => 'wl-redlink-dataset-name',
			'name'        => 'wl_advanced_settings[redlink_dataset_name]',
			'value'       => wl_configuration_get_redlink_dataset_name(),
			'description' => __( 'The Redlink Dataset Name', 'wordlift' )
		)
	);

	add_settings_field(
		WL_CONFIG_DATASET_BASE_URI_NAME,             // ID used to identify the field throughout the theme
		__( 'Redlink Dataset URI', 'wordlift' ),   // The label to the left of the option interface element
		'wl_configuration_input_box',       // The name of the function responsible for rendering the option interface
		'wl_advanced_settings',         // The page on which this option will be displayed
		'wl_advanced_settings_section',      // The name of the section to which this field belongs
		array(                              // The array of arguments to pass to the callback. In this case, just a description.
			'id'          => 'wl-redlink-dataset-uri',
			'name'        => 'wl_advanced_settings[redlink_dataset_uri]',
			'value'       => wl_configuration_get_redlink_dataset_uri(),
			'description' => __( 'The Redlink Dataset URI', 'wordlift' )
		)
	);

	add_settings_field(
		WL_CONFIG_ANALYSIS_NAME,             // ID used to identify the field throughout the theme
		__( 'Redlink Application Name', 'wordlift' ),   // The label to the left of the option interface element
		'wl_configuration_input_box',       // The name of the function responsible for rendering the option interface
		'wl_advanced_settings',         // The page on which this option will be displayed
		'wl_advanced_settings_section',      // The name of the section to which this field belongs
		array(                              // The array of arguments to pass to the callback. In this case, just a description.
			'id'          => 'wl-redlink-application-name',
			'name'        => 'wl_advanced_settings[redlink_application_name]',
			'value'       => wl_configuration_get_redlink_application_name(),
			'description' => __( 'The Redlink Application Name', 'wordlift' )
		)
	);

}

add_action( 'admin_init', 'wl_configuration_settings' );

/**
 * Display the general settings description. Called from a hook set by *wl_configuration_settings*.
 *
 * @since 3.0.0
 */
function wl_configuration_general_settings_section_callback() {

	// TODO: set the following text.
	?>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
<?php
}

/**
 * Display the advanced settings description. Called from a hook set by *wl_configuration_settings*.
 *
 * @since 3.0.0
 */
function wl_configuration_advanced_settings_section_callback() {

	// TODO: set the following text.
	?>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
<?php
}

/**
 * Sanitize the configuration settings to be stored. Configured as a hook from *wl_configuration_settings*.
 *
 * @since 3.0.0
 *
 * @param array $input The configuration settings array.
 *
 * @return mixed
 */
function wl_configuration_sanitize_settings( $input ) {

	// TODO: add sanitization checks.
	return apply_filters( 'wl_configuration_sanitize_settings', $input, $input );

}

/**
 * Draw an input text with the provided parameters.
 *
 * @since 3.0.0
 *
 * @param array $args An array of configuration parameters.
 */
function wl_configuration_input_box( $args ) {
	?>

	<input type="text" id="<?php echo esc_attr( $args['id'] ); ?>"
	       name="<?php echo esc_attr( $args['name'] ); ?>"
	       value="<?php echo esc_attr( $args['value'] ); ?>"/>

<?php
}

/**
 * Display a select.
 *
 * @since 3.0.0
 *
 * @param array $args The select configuration parameters.
 */
function wl_configuration_select( $args ) {
	?>

	<select id="<?php echo esc_attr( $args['id'] ); ?>"
	        name="<?php echo esc_attr( $args['name'] ); ?>">
		<?php foreach ( $args['options'] as $value => $label ) { ?>
			<option value="<?php echo esc_attr( $value ); ?>" <?php if ( $args['value'] === $value ) {
				echo 'selected';
			}
			?>><?php echo esc_html( $label ); ?></option>
		<?php } ?>
	</select>

<?php
}

/**
 * Display a checkbox.
 *
 * @since 3.0.0
 *
 * @param array $args The checkbox parameters.
 */
function wl_configuration_checkbox( $args ) {
	?>

	<input type="checkbox" id="<?php echo esc_attr( $args['id'] ); ?>"
	       name="<?php echo esc_attr( $args['name'] ); ?>"
	       value="1" <?php checked( 1, $args['value'], true ); ?>/>

<?php
}

/**
 * Create a link to WordLift settings page.
 *
 * @since 3.0.0
 *
 * @param array $links An array of links.
 *
 * @return array An array of links including those added by the plugin.
 */
function wl_configuration_settings_links( $links ) {

	// TODO: this link is different within SEO Ultimate.
	array_push( $links, '<a href="' . get_admin_url( null, 'admin.php?page=wl_configuration_admin_menu' ) . '">Settings</a>' );

	return $links;
}

// add the settings link for the plugin.
add_filter( "plugin_action_links_wordlift/wordlift.php", 'wl_configuration_settings_links' );


/**
 * Get the available languages.
 *
 * @since 3.0.0
 *
 * @return array An array of languages key values (key being the language code and values the language names).
 */
function wl_configuration_get_languages() {

	// prepare the language array.
	$langs = array();

	// set the path to the language file.
	$filename = dirname( __FILE__ ) . '/ISO-639-2_utf-8.txt';

	if ( ( $handle = fopen( $filename, 'r' ) ) !== false ) {
		while ( ( $data = fgetcsv( $handle, 1000, '|' ) ) !== false ) {
			if ( ! empty( $data[2] ) ) {
				$code           = $data[2];
				$label          = htmlentities( $data[3] );
				$langs[ $code ] = $label;
			}
		}
		fclose( $handle );
	}

	// sort the languages;
	asort( $langs );

	return $langs;

}


/**
 * Get the default recursion depth limitation on *entity metadata rendering*.
 *
 * @return string The default setting.
 */
function wl_config_get_recursion_depth() {

	// get the plugin options.
	$options = get_option( WL_OPTIONS_NAME );

	return ( is_numeric( $options[ WL_CONFIG_RECURSION_DEPTH_ON_ENTITY_METADATA_PRINTING ] )
		? $options[ WL_CONFIG_RECURSION_DEPTH_ON_ENTITY_METADATA_PRINTING ]
		: WL_RECURSION_DEPTH_ON_ENTITY_METADATA_PRINTING );
}


/**
 * Check WordLift's configuration.
 *
 * @since 3.0.0
 *
 * @return bool True if the configuration is set otherwise false.
 */
function wl_configuration_validate() {

	return ( ! ( '' === wl_configuration_get_key() || '' === wl_configuration_get_redlink_key() ) );
}

/**
 * Display admin notices.
 */
function wl_configuration_admin_notices() {

	// TODO: this page link is different in SEO Ultimate.
	// get the settings URL.
	$settings_url = get_admin_url( null, 'admin.php?page=wl_configuration_admin_menu' );
	?>
	<div class="error">
		<p><?php printf( __( 'application-key-not-set', 'wordlift' ), $settings_url ); ?></p>
	</div>

<?php

}

/**
 * Check WordLift configuration. If something is missing, display an admin notice.
 *
 * @since 3.0.0
 *
 * @uses wl_configuration_validate
 */
function wl_configuration_check() {

	if ( false === wl_configuration_validate() ) {
		add_action( 'admin_notices', 'wl_configuration_admin_notices' );
	}
}

add_action( 'admin_init', 'wl_configuration_check' );
