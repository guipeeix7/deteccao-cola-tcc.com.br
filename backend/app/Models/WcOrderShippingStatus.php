<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WcOrderShippingStatus extends Model
{
    protected $table = 'wc_order_shipping_status';

    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;

    protected $fillable = [
        'order_id',
        'shipping_status',
        'wc_order_shipping_statuscol'
    ];
}?>