<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use App\Models\Ticket;
use Illuminate\Http\Request;

class MovieTicketController extends Controller
{
    public function destroy(Movie $movie_id)
    {   
        
        $ticket = Ticket::get()->where('movie_id', $movie_id);
        $ticket->delete();
        return response()->json('Ticket deleted successfully!');
    }
}
