<?php

namespace App\Form;

use App\Entity\Catalogue;
use App\Entity\SubCategories;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SubCategoriesType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('name', TextType::class);
            // ->add('catalogue', EntityType::class, [
            //     'class' => Catalogue::class,
            //     'choice_label' => 'name',
            //     'multiple' => false,
            // ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => SubCategories::class,
        ]);
    }
}
