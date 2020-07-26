<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ConPaymentAgreementShares
 *
 * @ORM\Table(name="con_payment_agreement_shares", indexes={@ORM\Index(name="id_invoice_payment_agreement_share_idx", columns={"id_invoice"}), @ORM\Index(name="id_payment_agreement_idx", columns={"id_payment_agreement"}), @ORM\Index(name="id_user_payment_agreement_shares_idx", columns={"id_user"})})
 * @ORM\Entity
 */
class ConPaymentAgreementShares
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
     * @var int
     *
     * @ORM\Column(name="number_share", type="integer", nullable=false)
     */
    private $numberShare;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="payment_at", type="datetime", nullable=false)
     */
    private $paymentAt;

    /**
     * @var float
     *
     * @ORM\Column(name="value", type="float", precision=10, scale=0, nullable=false)
     */
    private $value;

    /**
     * @var float
     *
     * @ORM\Column(name="percentage", type="float", precision=10, scale=0, nullable=false)
     */
    private $percentage;

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
     * @var \ConPaymentAgreement
     *
     * @ORM\ManyToOne(targetEntity="ConPaymentAgreement")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_payment_agreement", referencedColumnName="id")
     * })
     */
    private $idPaymentAgreement;

    /**
     * @var \User
     *
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_user", referencedColumnName="id")
     * })
     */
    private $idUser;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumberShare(): ?int
    {
        return $this->numberShare;
    }

    public function setNumberShare(int $numberShare): self
    {
        $this->numberShare = $numberShare;

        return $this;
    }

    public function getPaymentAt(): ?\DateTimeInterface
    {
        return $this->paymentAt;
    }

    public function setPaymentAt(\DateTimeInterface $paymentAt): self
    {
        $this->paymentAt = $paymentAt;

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

    public function getPercentage(): ?float
    {
        return $this->percentage;
    }

    public function setPercentage(float $percentage): self
    {
        $this->percentage = $percentage;

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

    public function getIdPaymentAgreement(): ?ConPaymentAgreement
    {
        return $this->idPaymentAgreement;
    }

    public function setIdPaymentAgreement(?ConPaymentAgreement $idPaymentAgreement): self
    {
        $this->idPaymentAgreement = $idPaymentAgreement;

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
}
