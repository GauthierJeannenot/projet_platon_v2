<?php

namespace App\Form;

use App\Entity\Catalogue;
use App\Entity\SubCategories;
use App\Entity\InfosUser;
use App\Entity\Personnality;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProfileType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('classType', ChoiceType::class, [
                'choices' => [
                    'presentiel' => 'présentiel',
                    'visio' => 'visio',

                ],
                'multiple' => true,
                'expanded' => true,
                'label' => ' '
            ])

            ->add('bio', TextareaType::class, [
                'label' => false,
            ])

            ->add('opinion', null, [
                'required' => false,
                'label' => false,
            ])

            ->add('personnality', EntityType::class, [
                'class' => Personnality::class,
                'multiple' => true,
                'expanded' => true,
                'by_reference' => false,
                'choice_label' => 'name'
            ])

            // ->add('catalogues', EntityType::class, [
            //     'class' => Catalogue::class,
            //     'multiple' => true,
            //     'by_reference' => false,
            //     'choice_label' => 'name'
            // ])

            ->add('subCategories', EntityType::class, [
                'class' => SubCategories::class,
                'multiple' => true,
                'by_reference' => false,
                'choice_label' => 'name',
                'label' => false,
            ])



            ->add('sauver', SubmitType::class);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => InfosUser::class,
        ]);
    }
}
