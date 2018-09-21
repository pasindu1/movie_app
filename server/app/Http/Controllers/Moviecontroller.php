<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
use App\MovieDetail;

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
   return  $request-> all();
   }

   public function getcategory(){
       $result = Category::all();
       return $result;
   }

   public function getmovieslist(){
    $result = MovieDetail::all();
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
    $movie->save();
   }

   public function searchmovie(){
       
   }
};
