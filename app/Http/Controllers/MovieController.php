<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;
use App\Http\Resources\MovieResource;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $movies = Movie::all();
        return response()->json([

            'status' => 200,

            'movies' => $movies

        ]);
    }
    public function destroy(Movie $movie)
    {
        $movie->delete();
        return response()->json('Movie deleted successfully!');
    }
    
}
