<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210604100618 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE article ADD introduction LONGTEXT DEFAULT NULL, ADD first_paragraph LONGTEXT DEFAULT NULL, ADD second_paragraph LONGTEXT DEFAULT NULL, ADD third_paragraph LONGTEXT DEFAULT NULL, ADD fourth_paragraph LONGTEXT DEFAULT NULL, ADD conclusion LONGTEXT DEFAULT NULL, ADD first_image VARCHAR(255) DEFAULT NULL, ADD second_image VARCHAR(255) DEFAULT NULL, ADD third_image VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE article DROP introduction, DROP first_paragraph, DROP second_paragraph, DROP third_paragraph, DROP fourth_paragraph, DROP conclusion, DROP first_image, DROP second_image, DROP third_image');
    }
}
