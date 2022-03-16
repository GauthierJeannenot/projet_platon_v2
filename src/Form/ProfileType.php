<?php

namespace App\Form;

use App\Entity\InfosUser;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ProfileType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('classType')
            ->add('bio')
            // ->add('knowledges')
            ->add('opinion')
            ->add('personnality')
            // ->add('subCategories')
            // ->add('personnalities')
             ->add('knowledges', ChoiceType::class, [
                 'choices'  => [
                     'Maybe' => null,
                     'Yes' => true,
                     'No' => false,
                 ],
             ])
            //  ->add('preciseKnowledge', ChoiceType::class, [
            //     'choices'  => [
            //         'Maybe' => null,
            //         'Yes' => true,
            //         'No' => false,
            //     ],
            // ])
            //  ->add('preciseKnowledge')
             ->add('sauver', SubmitType::class)
           
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => InfosUser::class,
        ]);
    }
}
