<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ConGroupConceptConcepts
 *
 * @ORM\Table(name="con_group_concept_concepts", indexes={@ORM\Index(name="id_concept_group_idx", columns={"id_concept_group"}), @ORM\Index(name="id_year_idx", columns={"id_year"}), @ORM\Index(name="id_concept_idx", columns={"id_concept"})})
 * @ORM\Entity(repositoryClass="App\Repository\ConGroupConceptConceptsRepository")
 */
class ConGroupConceptConcepts
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
     * @var float|null
     *
     * @ORM\Column(name="value", type="float", precision=10, scale=0, nullable=true)
     */
    private $value;

    /**
     * @var \ConConcept
     *
     * @ORM\ManyToOne(targetEntity="ConConcept")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_concept", referencedColumnName="id")
     * })
     */
    private $idConcept;

    /**
     * @var \ConGroupConcept
     *
     * @ORM\ManyToOne(targetEntity="ConGroupConcept")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_concept_group", referencedColumnName="id")
     * })
     */
    private $idConceptGroup;

    /**
     * @var \ConCurrentYear
     *
     * @ORM\ManyToOne(targetEntity="ConCurrentYear")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_year", referencedColumnName="id")
     * })
     */
    private $idYear;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getValue(): ?float
    {
        return $this->value;
    }

    public function setValue(?float $value): self
    {
        $this->value = $value;

        return $this;
    }

    public function getIdConcept(): ?ConConcept
    {
        return $this->idConcept;
    }

    public function setIdConcept(?ConConcept $idConcept): self
    {
        $this->idConcept = $idConcept;

        return $this;
    }

    public function getIdConceptGroup(): ?ConGroupConcept
    {
        return $this->idConceptGroup;
    }

    public function setIdConceptGroup(?ConGroupConcept $idConceptGroup): self
    {
        $this->idConceptGroup = $idConceptGroup;

        return $this;
    }

    public function getIdYear(): ?ConCurrentYear
    {
        return $this->idYear;
    }

    public function setIdYear(?ConCurrentYear $idYear): self
    {
        $this->idYear = $idYear;

        return $this;
    }
}
