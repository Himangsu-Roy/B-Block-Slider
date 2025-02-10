<?php
/**
 * Plugin Name: B Block Slider 
 * Description: Short description of the plugin
 * Version: 1.0.0
 * Author: bPlugins
 * Author URI: https://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: b-blocks
 */

// ABS PATH
if (! defined('ABSPATH')) {
	exit;
}

// Constant
define('PREFIX_VERSION', isset($_SERVER['HTTP_HOST']) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0');
define('PREFIX_DIR_URL', plugin_dir_url(__FILE__));
define('PREFIX_DIR_PATH', plugin_dir_path(__FILE__));

if (! class_exists('PREFIXPlugin')) {
	class PREFIXPlugin
	{
		function __construct()
		{
			add_action('init', [$this, 'onInit']);
			add_action('enqueue_block_assets', [$this, 'blockAssets']);
			add_action('wp_enqueue_scripts', [$this, 'blockAssets']);
		}

		function onInit()
		{
			register_block_type(__DIR__ . '/build');
		}

		// function blockAssets()
		// {
		// 	wp_enqueue_script("swiper_js", PREFIX_DIR_URL . '/public/js/swiper.js', [], "11.2.2", true);

		// 	wp_enqueue_style("swiper_css", PREFIX_DIR_URL . '/public/css/swiper.js', [], "11.2.2");
		// }

		function blockAssets()
		{
			wp_enqueue_script('swiper_js', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', [], null, true);
			wp_enqueue_style('swiper_css', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
			wp_enqueue_style('animation_css', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
		}
	}
	new PREFIXPlugin();
}