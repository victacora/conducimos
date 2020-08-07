<?php

namespace App\Repository\Query;

class ConConceptQuery extends BaseQuery
{
    public const CON_CONCEPT_ORDER_ALLOWED = ['id', 'name'];

    public function __construct()
    {
        $this->setDefaults([
            'orderBy' => 'name',
            'order' => self::ORDER_DESC,
        ]);
    }
}
