<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\ArticleRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=ArticleRepository::class)
 * @ORM\HasLifecycleCallbacks()
 * @ApiResource(normalizationContext={"groups"={"articles_read"}})
 * @UniqueEntity("title",message="Un article possède déja ce titre")
 */
class Article
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"articles_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="Ce Champ est obligatoire")
     * @Assert\Length(min=10,minMessage="Le titre de l'article est trop court")
     * @Groups({"articles_read","cat_read"})
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     * @Assert\NotBlank(message="Ce Champ est obligatoire")
     * @Assert\Length(min=300,minMessage="Le contenu de l'article est trop court")
     * @Groups({"articles_read"})
     */
    private $content;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(message="Ce Champ est obligatoire")
     * @Assert\Url(message="Le type de donnée saisi n'est pas une URL valide")
     * @Groups({"articles_read","cat_read"})
     */
    private $image;

    /**
     * @ORM\Column(type="datetime")
     * @Assert\NotBlank(message="Ce Champ est obligatoire")
     * @Groups({"articles_read","cat_read"})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"articles_read"})
     */
    private $likes;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="articles")
     * @Assert\NotBlank(message="Ce Champ est obligatoire")
     * @Groups({"articles_read"})
     */
    private $author;

    /**
     * @ORM\ManyToOne(targetEntity=Category::class, inversedBy="article")
     * @Groups({"articles_read"})
     */
    private $category;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Assert\Length(min=100,minMessage="L'introduction est trop courte")
     */
    private $introduction;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Assert\Length(min=150,minMessage="Le paragraphe est trop court")
     * @Groups({"articles_read"})
     */
    private $first_paragraph;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Assert\Length(min=150,minMessage="Le paragraphe est trop court")
     * @Groups({"articles_read"})
     */
    private $second_paragraph;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Assert\Length(min=150,minMessage="Le paragraphe est trop court")
     * @Groups({"articles_read"})
     */
    private $third_paragraph;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Assert\Length(min=150,minMessage="Le paragraphe est trop court")
     * @Groups({"articles_read"})
     */
    private $fourth_paragraph;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Assert\Length(min=150,minMessage="La conclusion est trop courte")
     * @Groups({"articles_read"})
     */
    private $conclusion;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Url(message="Le type de donnée saisi n'est pas une URL valide")
     * @Groups({"articles_read"})
     */
    private $first_image;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Url(message="Le type de donnée saisi n'est pas une URL valide")
     * @Groups({"articles_read"})
     */
    private $second_image;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Url(message="Le type de donnée saisi n'est pas une URL valide")
     * @Groups({"articles_read"})
     */
    private $third_image;

    /**
     * @ORM\PrePersist
     */
    public function setCreatedAtValue()
    {
        $this->createdAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

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

    public function getLikes(): ?int
    {
        return $this->likes;
    }

    public function setLikes(?int $likes): self
    {
        $this->likes = $likes;

        return $this;
    }

    public function getAuthor(): ?User
    {
        return $this->author;
    }

    public function setAuthor(?User $author): self
    {
        $this->author = $author;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getIntroduction(): ?string
    {
        return $this->introduction;
    }

    public function setIntroduction(?string $introduction): self
    {
        $this->introduction = $introduction;

        return $this;
    }

    public function getFirstParagraph(): ?string
    {
        return $this->first_paragraph;
    }

    public function setFirstParagraph(?string $first_paragraph): self
    {
        $this->first_paragraph = $first_paragraph;

        return $this;
    }

    public function getSecondParagraph(): ?string
    {
        return $this->second_paragraph;
    }

    public function setSecondParagraph(?string $second_paragraph): self
    {
        $this->second_paragraph = $second_paragraph;

        return $this;
    }

    public function getThirdParagraph(): ?string
    {
        return $this->third_paragraph;
    }

    public function setThirdParagraph(?string $third_paragraph): self
    {
        $this->third_paragraph = $third_paragraph;

        return $this;
    }

    public function getFourthParagraph(): ?string
    {
        return $this->fourth_paragraph;
    }

    public function setFourthParagraph(?string $fourth_paragraph): self
    {
        $this->fourth_paragraph = $fourth_paragraph;

        return $this;
    }

    public function getConclusion(): ?string
    {
        return $this->conclusion;
    }

    public function setConclusion(?string $conclusion): self
    {
        $this->conclusion = $conclusion;

        return $this;
    }

    public function getFirstImage(): ?string
    {
        return $this->first_image;
    }

    public function setFirstImage(?string $first_image): self
    {
        $this->first_image = $first_image;

        return $this;
    }

    public function getSecondImage(): ?string
    {
        return $this->second_image;
    }

    public function setSecondImage(?string $second_image): self
    {
        $this->second_image = $second_image;

        return $this;
    }

    public function getThirdImage(): ?string
    {
        return $this->third_image;
    }

    public function setThirdImage(?string $third_image): self
    {
        $this->third_image = $third_image;

        return $this;
    }
}
