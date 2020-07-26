<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * ConBoxOpening
 *
 * @ORM\Table(name="con_box_opening", indexes={@ORM\Index(name="id_user_box_opening_idx", columns={"id_user"})})
 * @ORM\Entity
 */
class ConBoxOpening
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
     * @var float
     *
     * @ORM\Column(name="initial_cash", type="float", precision=10, scale=0, nullable=false)
     */
    private $initialCash;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="open_at", type="datetime", nullable=false)
     */
    private $openAt;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="closed_at", type="datetime", nullable=true)
     */
    private $closedAt;

    /**
     * @var float|null
     *
     * @ORM\Column(name="total_cash", type="float", precision=10, scale=0, nullable=true)
     */
    private $totalCash;

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
     * @ORM\ManyToMany(targetEntity="ConBoxBalance", mappedBy="idBoxOpening")
     */
    private $idBoxBalance;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->idBoxBalance = new \Doctrine\Common\Collections\ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getInitialCash(): ?float
    {
        return $this->initialCash;
    }

    public function setInitialCash(float $initialCash): self
    {
        $this->initialCash = $initialCash;

        return $this;
    }

    public function getOpenAt(): ?\DateTimeInterface
    {
        return $this->openAt;
    }

    public function setOpenAt(\DateTimeInterface $openAt): self
    {
        $this->openAt = $openAt;

        return $this;
    }

    public function getClosedAt(): ?\DateTimeInterface
    {
        return $this->closedAt;
    }

    public function setClosedAt(?\DateTimeInterface $closedAt): self
    {
        $this->closedAt = $closedAt;

        return $this;
    }

    public function getTotalCash(): ?float
    {
        return $this->totalCash;
    }

    public function setTotalCash(?float $totalCash): self
    {
        $this->totalCash = $totalCash;

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
     * @return Collection|ConBoxBalance[]
     */
    public function getIdBoxBalance(): Collection
    {
        return $this->idBoxBalance;
    }

    public function addIdBoxBalance(ConBoxBalance $idBoxBalance): self
    {
        if (!$this->idBoxBalance->contains($idBoxBalance)) {
            $this->idBoxBalance[] = $idBoxBalance;
            $idBoxBalance->addIdBoxOpening($this);
        }

        return $this;
    }

    public function removeIdBoxBalance(ConBoxBalance $idBoxBalance): self
    {
        if ($this->idBoxBalance->contains($idBoxBalance)) {
            $this->idBoxBalance->removeElement($idBoxBalance);
            $idBoxBalance->removeIdBoxOpening($this);
        }

        return $this;
    }
}
