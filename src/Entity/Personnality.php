<?php

namespace App\Entity;

use App\Repository\PersonnalityRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PersonnalityRepository::class)
 */
class Personnality
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $name;

    /**
     * @ORM\ManyToMany(targetEntity=InfosUser::class, inversedBy="personnalities")
     */
    private $infosUser;

    public function __construct()
    {
        $this->infosUser = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, InfosUser>
     */
    public function getInfosUser(): Collection
    {
        return $this->infosUser;
    }

    public function addInfosUser(InfosUser $infosUser): self
    {
        if (!$this->infosUser->contains($infosUser)) {
            $this->infosUser[] = $infosUser;
        }

        return $this;
    }

    public function removeInfosUser(InfosUser $infosUser): self
    {
        $this->infosUser->removeElement($infosUser);

        return $this;
    }
}
