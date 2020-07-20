<?php

namespace App\Repository\Query;

class ConCurrentYearQuery extends BaseQuery
{
    public const CON_CURRENT_YEAR_ORDER_ALLOWED = ['id', 'year'];

    public function __construct()
    {
        $this->setDefaults([
            'orderBy' => 'year',
            'order' => self::ORDER_DESC,
        ]);
    }
}
