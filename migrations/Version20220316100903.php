<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220316100903 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526CF624B39D FOREIGN KEY (sender_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE comment ADD CONSTRAINT FK_9474526CCD53EDB6 FOREIGN KEY (receiver_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE sub_categories ADD catalogue_id INT NOT NULL');
        $this->addSql('ALTER TABLE sub_categories ADD CONSTRAINT FK_1638D5A54A7843DC FOREIGN KEY (catalogue_id) REFERENCES catalogue (id)');
        $this->addSql('CREATE INDEX IDX_1638D5A54A7843DC ON sub_categories (catalogue_id)');
        $this->addSql('ALTER TABLE ticket ADD sender_id INT NOT NULL, ADD receiver_id INT NOT NULL, DROP id_user1, DROP id_user2');
        $this->addSql('ALTER TABLE ticket ADD CONSTRAINT FK_97A0ADA3F624B39D FOREIGN KEY (sender_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE ticket ADD CONSTRAINT FK_97A0ADA3CD53EDB6 FOREIGN KEY (receiver_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_97A0ADA3F624B39D ON ticket (sender_id)');
        $this->addSql('CREATE INDEX IDX_97A0ADA3CD53EDB6 ON ticket (receiver_id)');
        $this->addSql('ALTER TABLE user ADD is_verified TINYINT(1) NOT NULL, CHANGE infos_user_id infos_user_id INT DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE catalogue CHANGE name name VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE comment DROP FOREIGN KEY FK_9474526CF624B39D');
        $this->addSql('ALTER TABLE comment DROP FOREIGN KEY FK_9474526CCD53EDB6');
        $this->addSql('ALTER TABLE comment CHANGE content content LONGTEXT NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE infos_user CHANGE class_type class_type LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci` COMMENT \'(DC2Type:array)\', CHANGE bio bio LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE personnality personnality LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci` COMMENT \'(DC2Type:array)\', CHANGE knowledges knowledges LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci` COMMENT \'(DC2Type:array)\', CHANGE precise_knowledge precise_knowledge LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci` COMMENT \'(DC2Type:array)\'');
        $this->addSql('ALTER TABLE personnality CHANGE name name VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE sub_categories DROP FOREIGN KEY FK_1638D5A54A7843DC');
        $this->addSql('DROP INDEX IDX_1638D5A54A7843DC ON sub_categories');
        $this->addSql('ALTER TABLE sub_categories DROP catalogue_id, CHANGE name name VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE ticket DROP FOREIGN KEY FK_97A0ADA3F624B39D');
        $this->addSql('ALTER TABLE ticket DROP FOREIGN KEY FK_97A0ADA3CD53EDB6');
        $this->addSql('DROP INDEX IDX_97A0ADA3F624B39D ON ticket');
        $this->addSql('DROP INDEX IDX_97A0ADA3CD53EDB6 ON ticket');
        $this->addSql('ALTER TABLE ticket ADD id_user1 INT NOT NULL, ADD id_user2 INT NOT NULL, DROP sender_id, DROP receiver_id, CHANGE content content LONGTEXT NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE user DROP is_verified, CHANGE infos_user_id infos_user_id INT NOT NULL, CHANGE email email VARCHAR(180) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE password password VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE prenom prenom VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE nom nom VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`');
    }
}
