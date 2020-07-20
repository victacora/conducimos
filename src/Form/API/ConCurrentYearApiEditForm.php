<?php


namespace App\Form\API;

use App\Form\ConCurrentYearEditForm;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ConCurrentYearApiEditForm extends ConCurrentYearEditForm
{
    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        parent::configureOptions($resolver);

        $resolver->setDefaults([
            'csrf_protection' => false,
        ]);
    }
}
