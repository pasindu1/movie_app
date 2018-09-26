<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class categoryAdder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            'cate_name' => str_random(10)           
        ]);
    }
}
