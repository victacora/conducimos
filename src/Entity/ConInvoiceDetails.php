<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ConInvoiceDetails
 *
 * @ORM\Table(name="con_invoice_details", indexes={@ORM\Index(name="id_invoice_invoice_detail_idx", columns={"id_invoice"}), @ORM\Index(name="id_group_concept_concepts_idx", columns={"id_group_concept_concepts"})})
 * @ORM\Entity
 */
class ConInvoiceDetails
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
     * @ORM\Column(name="value", type="float", precision=10, scale=0, nullable=false)
     */
    private $value;

    /**
     * @var \ConGroupConceptConcepts
     *
     * @ORM\ManyToOne(targetEntity="ConGroupConceptConcepts")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_group_concept_concepts", referencedColumnName="id")
     * })
     */
    private $idGroupConceptConcepts;

    /**
     * @var \Invoice
     *
     * @ORM\ManyToOne(targetEntity="Invoice")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_invoice", referencedColumnName="id")
     * })
     */
    private $idInvoice;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getIdGroupConceptConcepts(): ?ConGroupConceptConcepts
    {
        return $this->idGroupConceptConcepts;
    }

    public function setIdGroupConceptConcepts(?ConGroupConceptConcepts $idGroupConceptConcepts): self
    {
        $this->idGroupConceptConcepts = $idGroupConceptConcepts;

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
}
