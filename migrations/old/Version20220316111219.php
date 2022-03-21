<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220316111219 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE catalogue (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE comment (id INT AUTO_INCREMENT NOT NULL, sender_id INT NOT NULL, receiver_id INT NOT NULL, content LONGTEXT NOT NULL, date DATETIME NOT NULL, INDEX IDX_9474526CF624B39D (sender_id), INDEX IDX_9474526CCD53EDB6 (receiver_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE infos_user (id INT AUTO_INCREMENT NOT NULL, class_type LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', bio LONGTEXT DEFAULT NULL, personnality LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', knowledges LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', precise_knowledge LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:array)\', opinion INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE infos_user_sub_categories (infos_user_id INT NOT NULL, sub_categories_id INT NOT NULL, INDEX IDX_F81F3C03A0D63835 (infos_user_id), INDEX IDX_F81F3C036DBFD369 (sub_categories_id), PRIMARY KEY(infos_user_id, sub_categories_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE personnality (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE personnality_infos_user (personnality_id INT NOT NULL, infos_user_id INT NOT NULL, INDEX IDX_E6792FEC34E7C3D2 (personnality_id), INDEX IDX_E6792FECA0D63835 (infos_user_id), PRIMARY KEY(personnality_id, infos_user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE sub_categories (id INT AUTO_INCREMENT NOT NULL, catalogue_id INT NOT NULL, name VARCHAR(255) NOT NULL, INDEX IDX_1638D5A54A7843DC (catalogue_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ticket (id INT AUTO_INCREMENT NOT NULL, sender_id INT NOT NULL, receiver_id INT NOT NULL, status INT NOT NULL, content LONGTEXT NOT NULL, date DATETIME NOT NULL, INDEX IDX_97A0ADA3F624B39D (sender_id), INDEX IDX_97A0ADA3CD53EDB6 (receiver_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, infos_user_id INT DEFAULT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, prenom VARCHAR(255) NOT NULL, nom VARCHAR(255) NOT NULL, is_verified TINYINT(1) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), UNIQUE INDEX UNIQ_8D93D649A0D63835 (infos_user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526CF624B39D FOREIGN KEY (sender_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526CCD53EDB6 FOREIGN KEY (receiver_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE infos_user_sub_categories ADD CONSTRAINT FK_F81F3C03A0D63835 FOREIGN KEY (infos_user_id) REFERENCES infos_user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE infos_user_sub_categories ADD CONSTRAINT FK_F81F3C036DBFD369 FOREIGN KEY (sub_categories_id) REFERENCES sub_categories (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE personnality_infos_user ADD CONSTRAINT FK_E6792FEC34E7C3D2 FOREIGN KEY (personnality_id) REFERENCES personnality (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE personnality_infos_user ADD CONSTRAINT FK_E6792FECA0D63835 FOREIGN KEY (infos_user_id) REFERENCES infos_user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE sub_categories ADD CONSTRAINT FK_1638D5A54A7843DC FOREIGN KEY (catalogue_id) REFERENCES catalogue (id)');
        $this->addSql('ALTER TABLE ticket ADD CONSTRAINT FK_97A0ADA3F624B39D FOREIGN KEY (sender_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE ticket ADD CONSTRAINT FK_97A0ADA3CD53EDB6 FOREIGN KEY (receiver_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649A0D63835 FOREIGN KEY (infos_user_id) REFERENCES infos_user (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE sub_categories DROP FOREIGN KEY FK_1638D5A54A7843DC');
        $this->addSql('ALTER TABLE infos_user_sub_categories DROP FOREIGN KEY FK_F81F3C03A0D63835');
        $this->addSql('ALTER TABLE personnality_infos_user DROP FOREIGN KEY FK_E6792FECA0D63835');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649A0D63835');
        $this->addSql('ALTER TABLE personnality_infos_user DROP FOREIGN KEY FK_E6792FEC34E7C3D2');
        $this->addSql('ALTER TABLE infos_user_sub_categories DROP FOREIGN KEY FK_F81F3C036DBFD369');
        $this->addSql('ALTER TABLE comment DROP FOREIGN KEY FK_9474526CF624B39D');
        $this->addSql('ALTER TABLE comment DROP FOREIGN KEY FK_9474526CCD53EDB6');
        $this->addSql('ALTER TABLE ticket DROP FOREIGN KEY FK_97A0ADA3F624B39D');
        $this->addSql('ALTER TABLE ticket DROP FOREIGN KEY FK_97A0ADA3CD53EDB6');
        $this->addSql('DROP TABLE catalogue');
        $this->addSql('DROP TABLE comment');
        $this->addSql('DROP TABLE infos_user');
        $this->addSql('DROP TABLE infos_user_sub_categories');
        $this->addSql('DROP TABLE personnality');
        $this->addSql('DROP TABLE personnality_infos_user');
        $this->addSql('DROP TABLE sub_categories');
        $this->addSql('DROP TABLE ticket');
        $this->addSql('DROP TABLE user');
    }
}
