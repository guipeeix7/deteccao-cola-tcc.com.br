<?php
namespace App\Services;


class TreeServiceContainer {

    public function __construct()
    {

    }

    static function buildTree(array $elements, $parentId = 0, $fatherReference = '', $childReference = '') {
        $branch = array();
        // var_dump($elements);
        foreach ($elements as $element) {
            if ($element[$fatherReference] == $parentId) {
                $children = self::buildTree($elements, $element['id']);
                if ($children) {
                    $element[$childReference] = $children;
                }
                $branch[] = $element;
            }
        }

        return $branch;
    }


}
