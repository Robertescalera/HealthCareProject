<?php

namespace App\Controllers;

use CodeIgniter\Controller;

class Home extends BaseController
{
    public function index()
    {
        return view('include/index');
    }

    public function index1()
    {
        return view('index1');
    }

    public function login()
    {
        return view('func'); 
    }

    public function adminPanel1()
    {
        return view('include/admpanel');
    }

    public function docpanel()
    {
        return view('doctor-panel');
    }

    public function logout()
    {
        return view('include/index');
    }

    public function patlogin()
    {
        return view('func');
    }

    public function view()
    {
        return view('viewpat');
    }

}
