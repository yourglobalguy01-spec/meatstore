<?php
/**
 * SECURE WOOCOMMERCE API PROXY
 * This file hides the WooCommerce Consumer Key and Secret from the frontend.
 * It strictly whitelists which endpoints can be accessed to prevent hackers from
 * reading customer data or modifying the store.
 */

// Allow CORS for local development (Vite). On Hostinger, this handles same-origin automatically.
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ==========================================
// SECURE CREDENTIALS
// Note: In a production environment, these should be loaded securely (e.g. getenv).
// We define them here because Hostinger executes PHP on the server side, keeping them hidden.
// ==========================================
$WC_URL = 'https://skyblue-dunlin-456849.hostingersite.com';
$WC_KEY = 'ck_e58817264372f14f734ae5655d1601b99e7d8603';
$WC_SECRET = 'cs_c4f378362b8a67de5808488b725ea4f94a2bcd1e';

// Get the requested endpoint
$endpoint = isset($_GET['endpoint']) ? $_GET['endpoint'] : '';
$method = $_SERVER['REQUEST_METHOD'];

// ==========================================
// SECURITY: ENDPOINT WHITELISTING
// We ONLY allow specific, safe endpoints. If a hacker tries to access '/customers' 
// to steal data or create fake accounts, it will be blocked here.
// ==========================================
$allowed_endpoints = [
    'GET' => [
        '/wp-json/wc/v3/products',
        '/wp-json/wc/v3/products/categories'
    ],
    'POST' => [
        '/wp-json/wc/v3/orders'
    ]
];

// Check if the exact endpoint or a safe parameterized version is allowed
$is_allowed = false;

if ($method === 'GET') {
    // For GET requests, check if it starts with an allowed path (to allow /products/123 or /products?per_page=100)
    foreach ($allowed_endpoints['GET'] as $allowed) {
        if (strpos($endpoint, $allowed) === 0) {
            $is_allowed = true;
            break;
        }
    }
} else if ($method === 'POST') {
    // For POST requests, strictly match the endpoint
    foreach ($allowed_endpoints['POST'] as $allowed) {
        if ($endpoint === $allowed) {
            $is_allowed = true;
            break;
        }
    }
}

if (!$is_allowed) {
    http_response_code(403);
    echo json_encode(["error" => "Forbidden: This API endpoint is strictly blocked by the security proxy."]);
    exit();
}

// Build the target URL
$target_url = $WC_URL . $endpoint;

// Rebuild query parameters from the frontend (ignoring 'endpoint')
$query_params = $_GET;
unset($query_params['endpoint']);
if (!empty($query_params)) {
    $target_url .= (strpos($target_url, '?') === false ? '?' : '&') . http_build_query($query_params);
}

// Initialize cURL
$ch = curl_init($target_url);

// Set Authentication
curl_setopt($ch, CURLOPT_USERPWD, $WC_KEY . ":" . $WC_SECRET);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

// Pass through POST data
if ($method === 'POST') {
    $input = file_get_contents('php://input');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $input);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Content-Length: ' . strlen($input)
    ]);
}

// Execute and return exactly what WooCommerce returns
$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
    http_response_code(500);
    echo json_encode(["error" => "Proxy Error: " . curl_error($ch)]);
} else {
    http_response_code($http_code);
    echo $response;
}

curl_close($ch);
?>
