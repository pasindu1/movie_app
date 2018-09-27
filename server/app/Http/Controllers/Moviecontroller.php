<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use App\MovieDetail;
use App\Rate;

class Moviecontroller extends Controller
{
   public function storemovie(Request $request){
       $moviedetail = new MovieDetail;
       $moviedetail->title = $request->title;
       $moviedetail->desc = $request->desc;
       $moviedetail->year = $request->year;
       $moviedetail->img_url = "123";
       $moviedetail->rate = "0";
       $moviedetail->category_id = $request->genre;
       $moviedetail->save();
       $rate = new Rate;
       $rate->clicks = 0;
       $rate->value = 0;
       $rate->movie_id = $moviedetail->id;       
       $rate->save();

   return  $request-> all();
   }

   public function getcategory(){
       $result = Category::all();
       return $result;
   }

   public function getmovieslist(){
    $result = MovieDetail::orderBy('rate','desc')->get();
    return $result;
   }

   public function deletemovie($id){
    $movie = MovieDetail::find($id);
    $movie->delete();
   }

   public function editmovie($id){
       $movie = MovieDetail::find($id);
       $result = Category::all();
       return ($movie);
   }

   public function updatemovie(Request $request, $id){
    $movie = MovieDetail::find($id);
    $movie->title = $request->title;
    $movie->desc = $request->desc;
    $movie->year = $request->year;
    $movie->category_id = $request->genre;
    $movie->save();
   }

   public function searchmovie(Request $request){
    $selectedVal = $request->selectedValue;
    $searchVal = $request->search_val1;
    //dd($request->selectedValue);

    $result = MovieDetail::join('categories', 'movie_details.category_id', '=', 'categories.id')->where($selectedVal, 'like',  $searchVal . '%')->get();
    return $result;
   }
   
   public function getrate(Request $request){
       //dd($request->params);
       $movie_id = $request->params["movie_id"];
       $rateval = $request->params["rateVal"];
       $result = Rate::where('movie_id', '=',$movie_id)->get();
       $clicks = $result[0]->clicks;
       $value = $result[0]->value;
       $result[0]->clicks = $clicks + 1;
       $result[0]->value = $rateval+$value;
       $result[0]->save();
       //updating the rate in movie
       $movie = MovieDetail::find($movie_id); 
       $movie->rate = ($result[0]->value)/($result[0]->clicks);
       $movie->save(); 
       return $movie;      
   }

};
