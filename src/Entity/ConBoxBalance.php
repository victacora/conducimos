<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * ConBoxBalance
 *
 * @ORM\Table(name="con_box_balance", indexes={@ORM\Index(name="id_user_box_balance_idx", columns={"id_user"})})
 * @ORM\Entity
 */
class ConBoxBalance
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="created_at", type="datetime", nullable=false)
     */
    private $createdAt;

    /**
     * @var float
     *
     * @ORM\Column(name="total", type="float", precision=10, scale=0, nullable=false)
     */
    private $total;

    /**
     * @var string
     *
     * @ORM\Column(name="observation", type="string", length=5000, nullable=false)
     */
    private $observation;

    /**
     * @var \User
     *
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_user", referencedColumnName="id")
     * })
     */
    private $idUser;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="ConBoxOpening", inversedBy="idBoxBalance")
     * @ORM\JoinTable(name="con_box_balance_detail",
     *   joinColumns={
     *     @ORM\JoinColumn(name="id_box_balance", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="id_box_opening", referencedColumnName="id")
     *   }
     * )
     */
    private $idBoxOpening;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->idBoxOpening = new \Doctrine\Common\Collections\ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getTotal(): ?float
    {
        return $this->total;
    }

    public function setTotal(float $total): self
    {
        $this->total = $total;

        return $this;
    }

    public function getObservation(): ?string
    {
        return $this->observation;
    }

    public function setObservation(string $observation): self
    {
        $this->observation = $observation;

        return $this;
    }

    public function getIdUser(): ?User
    {
        return $this->idUser;
    }

    public function setIdUser(?User $idUser): self
    {
        $this->idUser = $idUser;

        return $this;
    }

    /**
     * @return Collection|ConBoxOpening[]
     */
    public function getIdBoxOpening(): Collection
    {
        return $this->idBoxOpening;
    }

    public function addIdBoxOpening(ConBoxOpening $idBoxOpening): self
    {
        if (!$this->idBoxOpening->contains($idBoxOpening)) {
            $this->idBoxOpening[] = $idBoxOpening;
        }

        return $this;
    }

    public function removeIdBoxOpening(ConBoxOpening $idBoxOpening): self
    {
        if ($this->idBoxOpening->contains($idBoxOpening)) {
            $this->idBoxOpening->removeElement($idBoxOpening);
        }

        return $this;
    }

}
