<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use \DB;

class TestController extends Controller
{
    //
    public function index() {

        $count = DB::table('tbl_categories')->count();

        dd(["index", $count]);
    }
}
