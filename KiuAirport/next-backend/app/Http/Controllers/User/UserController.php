<?php

namespace app\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class UserController extends Controller
{

    /**
     *  Takes
     *
     * @param Request $request
     * @return bool
     */
    public function buyTicket(Request $request) : bool {
        return false;
    }


    /**
     *
     * @param Request $request
     * @return int
     */
    public function countTicketsByUserId(Request $request) : int {
        return 1;
    }


}
