<?php
namespace App\Http\Controllers\Shared;

class TimeHelper{
    public function __construct(){
        date_default_timezone_set('America/Sao_Paulo');
    }

    public static function convertIntervals($range){
        // $range = $request->input('rangeDate');

        $dateBegin = new \stdClass();
        $dateEnd = new \stdClass();
        //Input date range filter

        if ($range == "") {
            $dateBegin = new \DateTime(date('Y-m-01', strtotime(date($range))));
            $dateEnd = new \DateTime(date('Y-m-01', strtotime(date($range).' +1 month')));

            // $dateBegin = date($dateBegin);
            // $dateEnd = date($dateEnd);

        } else {
            $rangeStrinExploded = explode("to", $range);
            $beginRange = $rangeStrinExploded[0];
            if(isset($rangeStrinExploded[1])){
                $endRange = $rangeStrinExploded[1];
                $dateEnd = new \DateTime(date($endRange));
            }
            else{
                $dateEnd = new \DateTime(date('Y-m-01', strtotime(date($range).' +1 day')));
            }
            $dateBegin = new \DateTime(date($beginRange));
        }

        return ['begin' => $dateBegin, 'end'=> $dateEnd];

    }

    /**
     * This function auto complete date in between two dates
     * @param $startDate The initial date
     * @param $endDate The end date
     */
    public static function getDatesInBetween($startDate, $endDate) {
        $start = new \DateTime($startDate);
        $end = new \DateTime($endDate);

        $interval = new \DateInterval('P1D'); // 1 day interval
        $dateRange = new \DatePeriod($start, $interval, $end);

        $dates = array();
        foreach ($dateRange as $date) {
            $dates[] = $date->format('Y-m-d');
        }
        return $dates;
    }

    public static function getCurrentDate(){
        return date('Y-m-d', time());
    }


    public static function getCurrentTime(){
        return date('h:i:s', time());
    }
}
