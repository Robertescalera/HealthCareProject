<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('index1', 'Home::index1');
$routes->post('login', 'Home::login');
$routes->post('admin_login', 'Home::admin_login');
$routes->get('admpanel', 'Home::adminPanel1');
$routes->get('doctor-panel', 'Home::docpanel');
$routes->get('/index', 'Home::logout');
$routes->get('func', 'Home::patlogin');
$routes->get('viewpat', 'Home::view');



