<?php

namespace App\Models\Shared;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
/**
 * Class POSICAO
 * Used to mantain and use simple and most common queries in the project
 */
class UtilQueries extends Model
{
    public static function withSimpleSearch($tableName, $params, $searchable, $per_page = 15){
        return DB::table($tableName)->where($searchable, 'LIKE', '%'.$params.'%')->orderBy($searchable)->paginate($per_page);
        // return $tableName::where($searchable, 'LIKE' , "%".$params."%")->orderBy($searchable)->paginate(30);
    }
    public static function withSimpleSearchByClass($tableClass, $params, $searchable){
        // return DB::table($tableName)->where($searchable, 'LIKE', '%'.$params.'%')->orderBy($searchable)->paginate(15);
        return $tableClass::where($searchable, 'LIKE' , "%".$params."%")->orderBy($searchable)->paginate(30);
    }

    public static function withSimpleSearchByFatherId($tableName, $fatherId, $params, $orderBy){
        return DB::table($tableName)->where($params, '=', $fatherId)->orderBy($orderBy)->paginate(15);

        // return $modelInstance::where($params, '=' ,$fatherId)->orderBy($orderBy)->paginate(15);
    }

    public static function withSimpleSearchByFatherIdWithoutOrder($tableName, $fatherId, $params, $orderBy){
        return DB::table($tableName)->where($params, '=' ,$fatherId)->paginate(15);
        // return $modelInstance::where($params, '=' ,$fatherId)->paginate(15);
    }
}
