<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ConPaymentAgreement
 *
 * @ORM\Table(name="con_payment_agreement", indexes={@ORM\Index(name="id_invoice_payment_agreement_idx", columns={"id_invoice"}), @ORM\Index(name="id_user_payment_agreement_idx", columns={"user_id"})})
 * @ORM\Entity
 */
class ConPaymentAgreement
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
     * @var string
     *
     * @ORM\Column(name="status", type="string", length=1, nullable=false)
     */
    private $status;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="created_at", type="datetime", nullable=false)
     */
    private $createdAt;

    /**
     * @var int
     *
     * @ORM\Column(name="current_share", type="integer", nullable=false)
     */
    private $currentShare;

    /**
     * @var int
     *
     * @ORM\Column(name="total_shares", type="integer", nullable=false)
     */
    private $totalShares;

    /**
     * @var float
     *
     * @ORM\Column(name="value", type="float", precision=10, scale=0, nullable=false)
     */
    private $value;

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

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
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

    public function getCurrentShare(): ?int
    {
        return $this->currentShare;
    }

    public function setCurrentShare(int $currentShare): self
    {
        $this->currentShare = $currentShare;

        return $this;
    }

    public function getTotalShares(): ?int
    {
        return $this->totalShares;
    }

    public function setTotalShares(int $totalShares): self
    {
        $this->totalShares = $totalShares;

        return $this;
    }

    public function getValue(): ?float
    {
        return $this->value;
    }

    public function setValue(float $value): self
    {
        $this->value = $value;

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
