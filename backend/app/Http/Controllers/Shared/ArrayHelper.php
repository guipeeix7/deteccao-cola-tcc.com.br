<?php
namespace App\Http\Controllers\Shared;

class ArrayHelper{
    /**
     * Note The array NEED to be ordered first
     */

    static function arrayByDBindex(&$array, $indexName = ''){
        if(count($array) == 0) return [];
        $maxIndex = $array[0]->$indexName;

        foreach($array as $key => $value){
            $array[$array[$key]->$indexName + $maxIndex] = (array) $array[$key];

            unset($array[$key]);
        }
    }
    /**
     * @param $principalArray, Array containing all keys
     * @param $arrayB Auxiliary array A
     * @param $arrayC Auxiliary array B
     * This method merges 3 arrays based on keys of a principal array whitch have all the keys.
     */

    static function mergeByKeyOnPrincipalArray($principalArray, $arrayA, $arrayB):array{
        $resultant = [];
        $index = 0;

        foreach($principalArray as $key => $value){
            $resultant[$index++] = array_merge($principalArray[$key],$arrayA[$key] ?? [], $arrayB[$key] ?? []);
        }
        return $resultant;
    }
}
