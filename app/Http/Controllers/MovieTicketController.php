<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class MovieTicketController extends Controller
{
    public function destroy($movie_id)
    {   
        $user_id = Auth::user()->id;
        DB::table('tickets')->where('movie_id',$movie_id)->where('user_id',$user_id)->delete();
        // $ticket = Ticket::find(Ticket::where('movie_id','=', $movie_id));
        // // $ticket = Ticket::get()->where('movie_id', $movie_id);
        // $ticket->delete();
        return response()->json('Ticket deleted successfully!');
    }
}
