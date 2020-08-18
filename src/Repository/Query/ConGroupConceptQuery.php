<?php

namespace App\Repository\Query;

class ConGroupConceptQuery extends BaseQuery
{
    public const CON_GROUP_CONCEPT_ORDER_ALLOWED = ['id', 'name'];

    public function __construct()
    {
        $this->setDefaults([
            'orderBy' => 'name',
            'order' => self::ORDER_ASC,
        ]);
    }
}
