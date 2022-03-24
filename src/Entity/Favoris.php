<?php

namespace App\Entity;

use App\Repository\FavorisRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=FavorisRepository::class)
 */
class Favoris
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="favoris")
     */
    private $adder;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="favoris")
     */
    private $added;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAdder(): ?User
    {
        return $this->adder;
    }

    public function setAdder(?User $adder): self
    {
        $this->adder = $adder;

        return $this;
    }

    public function getAdded(): ?User
    {
        return $this->added;
    }

    public function setAdded(?User $added): self
    {
        $this->added = $added;

        return $this;
    }
}
