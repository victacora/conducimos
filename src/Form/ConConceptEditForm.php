<?php

namespace App\Form;

use App\Entity\ConConcept;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class ConConceptEditForm extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, [
                'label' => 'label.name',
                'attr' => [
                    'required' => true,
                    'autofocus' => 'autofocus'
                ],
            ])
            ->add('description', TextareaType::class, [
                'label' => 'label.description',
                'attr' => [
                    'required' => false,
                    'autofocus' => 'autofocus'
                ],
            ])
            ->add('fixed', CheckboxType::class, [
                'label' => 'label.fixed',
                'attr' => [
                    'autofocus' => 'autofocus'
                ],
            ])
            ->add('expression', TextType::class, [
                'label' => 'label.expression',
                'attr' => [
                    'required' => false,
                    'autofocus' => 'autofocus'
                ],
            ])
            ->add('enabled', CheckboxType::class, [
                'label' => 'label.enabled',
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
            'data_class' => ConConcept::class,
            'csrf_protection' => true,
            'required' => false,
            'csrf_field_name' => '_token',
            'csrf_token_id' => 'con_concept_edit',
            'attr' => [
                'data-form-event' => 'kimai.conCurrentYearUpdate'
            ],
        ]);
    }
}
