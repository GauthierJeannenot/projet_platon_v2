<?php

namespace App\Entity;

use App\Repository\SubCategoriesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SubCategoriesRepository::class)
 */
class SubCategories
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity=Catalogue::class, inversedBy="subCategories")
     * @ORM\JoinColumn(nullable=false)
     */
    private $catalogue;

    /**
     * @ORM\ManyToMany(targetEntity=InfosUser::class, mappedBy="subCategories")
     */
    private $infosUsers;

    public function __construct()
    {
        $this->infosUsers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCatalogue(): ?Catalogue
    {
        return $this->catalogue;
    }

    public function setCatalogue(?Catalogue $catalogue): self
    {
        $this->catalogue = $catalogue;

        return $this;
    }

    /**
     * @return Collection<int, InfosUser>
     */
    public function getInfosUsers(): Collection
    {
        return $this->infosUsers;
    }

    public function addInfosUser(InfosUser $infosUser): self
    {
        if (!$this->infosUsers->contains($infosUser)) {
            $this->infosUsers[] = $infosUser;
            $infosUser->addSubCategory($this);
        }

        return $this;
    }

    public function removeInfosUser(InfosUser $infosUser): self
    {
        if ($this->infosUsers->removeElement($infosUser)) {
            $infosUser->removeSubCategory($this);
        }

        return $this;
    }
}
