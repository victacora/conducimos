<?php

namespace App\Form;

use App\Entity\ConCurrentYear;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class ConCurrentYearEditForm extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('year', IntegerType::class, [
                'label' => 'label.year',
                'attr' => [
                    'required' => true,
                    'autofocus' => 'autofocus'
                ],
            ])
            ->add('enabled', CheckboxType::class, [
                'label' => 'label.enabled',
                'data' => false,
                'attr' => [
                    'autofocus' => 'autofocus'
                ],
            ]);
    }


    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ConCurrentYear::class,
            'csrf_protection' => true,
            'required' => false,
            'csrf_field_name' => '_token',
            'csrf_token_id' => 'con_current_year_edit',
            'attr' => [
                'data-form-event' => 'kimai.conCurrentYearUpdate'
            ],
        ]);
    }
}
