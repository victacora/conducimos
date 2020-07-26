<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ConInvoiceStatus
 *
 * @ORM\Table(name="con_invoice_status", indexes={@ORM\Index(name="id_invoice_idx", columns={"id_invoice"}), @ORM\Index(name="id_user_idx", columns={"user_id"})})
 * @ORM\Entity
 */
class ConInvoiceStatus
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
     * @ORM\Column(name="changed_at", type="datetime", nullable=false)
     */
    private $changedAt;

    /**
     * @var string
     *
     * @ORM\Column(name="status", type="string", length=1, nullable=false)
     */
    private $status;

    /**
     * @var string|null
     *
     * @ORM\Column(name="observation", type="string", length=5000, nullable=true)
     */
    private $observation;

    /**
     * @var \Invoice
     *
     * @ORM\ManyToOne(targetEntity="Invoice")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_invoice", referencedColumnName="id")
     * })
     */
    private $idInvoice;

    /**
     * @var \User
     *
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     * })
     */
    private $user;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getChangedAt(): ?\DateTimeInterface
    {
        return $this->changedAt;
    }

    public function setChangedAt(\DateTimeInterface $changedAt): self
    {
        $this->changedAt = $changedAt;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getObservation(): ?string
    {
        return $this->observation;
    }

    public function setObservation(?string $observation): self
    {
        $this->observation = $observation;

        return $this;
    }

    public function getIdInvoice(): ?Invoice
    {
        return $this->idInvoice;
    }

    public function setIdInvoice(?Invoice $idInvoice): self
    {
        $this->idInvoice = $idInvoice;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }
}
