<?php

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Form;

use App\Entity\ConCity;
use App\Entity\ConDocumentType;
use App\Entity\ConState;
use App\Entity\Customer;
use App\Repository\ConDocumentTypeRepository;
use App\Repository\ConCityRepository;
use App\Repository\ConStateRepository;
use App\Form\Type\MailType;
use App\Form\Type\GenderType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use App\Form\Type\DateTimePickerType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormEvent;

class CustomerEditForm extends AbstractType
{
    use EntityFormTrait;

    private $conDocumentTypeRepository;
    private $conStateRepository;
    private $conCityRepository;

    public function __construct(ConDocumentTypeRepository $conDocumentTypeRepository, ConStateRepository $conStateRepository, ConCityRepository $conCityRepository)
    {
        $this->conDocumentTypeRepository = $conDocumentTypeRepository;
        $this->conStateRepository = $conStateRepository;
        $this->conCityRepository = $conCityRepository;
    }
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        if (isset($options['data'])) {
            /** @var Customer $customer */
            $customer = $options['data'];
            $options['currency'] = $customer->getCurrency();
        }

        $builder
            ->add('name', TextType::class, [
                'label' => 'label.name',
                'required' => true,
            ])
            ->add('idDocumentType', EntityType::class, [
                'label' => 'label.id_document_type',
                'placeholder' => 'label.id_document_type_place_holder',
                'class' => ConDocumentType::class,
                'choice_label' => 'name',
                'choices' => $this->conDocumentTypeRepository->listConDocumentTypes(),
                'required' => true,
            ])
            ->add('number', IntegerType::class, [
                'label' => 'label.number',
                'required' => true,
                'attr' => [
                    'autofocus' => 'autofocus'
                ],
            ])
            ->add('gender', GenderType::class, [
                'label' => 'label.gender',
                'placeholder' => 'label.gender_place_holder',
                'required' => true,
            ])
            ->add('birthDay', DateTimePickerType::class, [
                'format' => 'dd.MM.yyyy HH:mm',
                'label' => 'label.birth_day',
                'required' => true,
            ])
            ->add('address', TextType::class, [
                'label' => 'label.address',
                'required' => true,
            ])
            ->add('idCity', EntityType::class, [
                'label' => 'label.id_city',
                'placeholder' => 'label.id_city_place_holder',
                'class' => ConCity::class,
                'choice_label' => 'name',
                'choices' => $this->conCityRepository->listConCities(),
                'required' => true,
            ])
            ->add('idState', EntityType::class, [
                'label' => 'label.id_state',
                'placeholder' => 'label.id_state_place_holder',
                'class' => ConState::class,
                'choice_label' => 'name',
                'choices' => $this->conStateRepository->listConStates(),
                'required' => true,
            ])
            ->add('phone', TelType::class, [
                'label' => 'label.phone',
                'required' => false,
            ])
            ->add('mobile', TelType::class, [
                'label' => 'label.mobile',
                'required' => true,
                'attr' => ['icon' => 'mobile'],
            ])
            ->add('email', MailType::class, [
                'required' => true,
            ]);

        $this->addCommonFields($builder, $options);
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Customer::class,
            'csrf_protection' => true,
            'csrf_field_name' => '_token',
            'csrf_token_id' => 'admin_customer_edit',
            'currency' => Customer::DEFAULT_CURRENCY,
            'include_budget' => false,
            'attr' => [
                'data-form-event' => 'kimai.customerUpdate'
            ],
        ]);
    }
}
