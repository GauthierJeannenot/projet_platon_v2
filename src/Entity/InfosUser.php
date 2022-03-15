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
     * @ORM\Column(type="array", nullable=true)
     */
    private $personnality = [];

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $knowledges = [];

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $preciseKnowledge = [];

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
    private $personnalities;


    public function __construct()
    {
        $this->catalogue = new ArrayCollection();
        $this->subCategories = new ArrayCollection();
        $this->personnalities = new ArrayCollection();
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

    public function getPersonnality(): ?array
    {
        return $this->personnality;
    }

    public function setPersonnality(?array $personnality): self
    {
        $this->personnality = $personnality;

        return $this;
    }

    public function getKnowledges(): ?array
    {
        return $this->knowledges;
    }

    public function setKnowledges(?array $knowledges): self
    {
        $this->knowledges = $knowledges;

        return $this;
    }

    public function getPreciseKnowledge(): ?array
    {
        return $this->preciseKnowledge;
    }

    public function setPreciseKnowledge(?array $preciseKnowledge): self
    {
        $this->preciseKnowledge = $preciseKnowledge;

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
    public function getPersonnalities(): Collection
    {
        return $this->personnalities;
    }

    public function addPersonnality(Personnality $personnality): self
    {
        if (!$this->personnalities->contains($personnality)) {
            $this->personnalities[] = $personnality;
            $personnality->addInfosUser($this);
        }

        return $this;
    }

    public function removePersonnality(Personnality $personnality): self
    {
        if ($this->personnalities->removeElement($personnality)) {
            $personnality->removeInfosUser($this);
        }

        return $this;
    }
}
