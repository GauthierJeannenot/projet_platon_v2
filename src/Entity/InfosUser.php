<?php

namespace App\Entity;

use App\Repository\InfosUserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=InfosUserRepository::class)
 */
class InfosUser
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $classType = [];

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $bio;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $opinion;

    /**
     * @ORM\ManyToMany(targetEntity=SubCategories::class, inversedBy="infosUsers")
     */
    private $subCategories;

    /**
     * @ORM\ManyToMany(targetEntity=Personnality::class, mappedBy="infosUser")
     */
    private $personnality;

    /**
     * @ORM\ManyToMany(targetEntity=Catalogue::class)
     */
    private $catalogues;

    public function __construct()
    {
        $this->subCategories = new ArrayCollection();
        $this->personnality = new ArrayCollection();
        $this->catalogues = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getClassType(): ?array
    {
        return $this->classType;
    }

    public function setClassType(?array $classType): self
    {
        $this->classType = $classType;

        return $this;
    }

    public function getBio(): ?string
    {
        return $this->bio;
    }

    public function setBio(?string $bio): self
    {
        $this->bio = $bio;

        return $this;
    }

    public function getOpinion(): ?int
    {
        return $this->opinion;
    }

    public function setOpinion(?int $opinion): self
    {
        $this->opinion = $opinion;

        return $this;
    }

    /**
     * @return Collection<int, SubCategories>
     */
    public function getSubCategories(): Collection
    {
        return $this->subCategories;
    }

    public function addSubCategory(SubCategories $subCategory): self
    {
        if (!$this->subCategories->contains($subCategory)) {
            $this->subCategories[] = $subCategory;
        }

        return $this;
    }

    public function removeSubCategory(SubCategories $subCategory): self
    {
        $this->subCategories->removeElement($subCategory);

        return $this;
    }

    /**
     * @return Collection<int, Personnality>
     */
    public function getPersonnality(): Collection
    {
        return $this->personnality;
    }

    public function addPersonnality(Personnality $personnality): self
    {
        if (!$this->personnality->contains($personnality)) {
            $this->personnality[] = $personnality;
            $personnality->addInfosUser($this);
        }

        return $this;
    }

    public function removePersonnality(Personnality $personnality): self
    {
        if ($this->personnality->removeElement($personnality)) {
            $personnality->removeInfosUser($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Catalogue>
     */
    public function getCatalogues(): Collection
    {
        return $this->catalogues;
    }

    public function addCatalogue(Catalogue $catalogue): self
    {
        if (!$this->catalogues->contains($catalogue)) {
            $this->catalogues[] = $catalogue;
        }

        return $this;
    }

    public function removeCatalogue(Catalogue $catalogue): self
    {
        $this->catalogues->removeElement($catalogue);

        return $this;
    }
}
