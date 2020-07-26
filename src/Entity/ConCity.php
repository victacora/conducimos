<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ConCity
 *
 * @ORM\Table(name="con_city", indexes={@ORM\Index(name="id_state_idx", columns={"id_state"})})
 * @ORM\Entity(repositoryClass="App\Repository\ConCityRepository")
 */
class ConCity
{
    /**
     * @var string
     *
     * @ORM\Column(name="id", type="string", length=30, nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=500, nullable=false)
     */
    private $name;

    /**
     * @var bool
     *
     * @ORM\Column(name="enabled", type="boolean", nullable=false, options={"default"="1"})
     */
    private $enabled = true;

    /**
     * @var \ConState
     *
     * @ORM\ManyToOne(targetEntity="ConState")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="id_state", referencedColumnName="id")
     * })
     */
    private $idState;

    public function getId(): ?string
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

    public function getEnabled(): ?bool
    {
        return $this->enabled;
    }

    public function setEnabled(bool $enabled): self
    {
        $this->enabled = $enabled;

        return $this;
    }

    public function getIdState(): ?ConState
    {
        return $this->idState;
    }

    public function setIdState(?ConState $idState): self
    {
        $this->idState = $idState;

        return $this;
    }
}
