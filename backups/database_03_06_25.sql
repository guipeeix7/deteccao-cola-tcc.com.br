-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: gabs
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_reset_tokens_table',1),(3,'2019_08_19_000000_create_failed_jobs_table',1),(4,'2019_12_14_000001_create_personal_access_tokens_table',1),(5,'2023_03_16_205115_create_sessions_table',1),(6,'2023_04_05_180640_create_permission_tables',2),(7,'2023_05_22_171113_create_ALUNO_table',0),(8,'2023_05_22_171113_create_AREA_table',0),(9,'2023_05_22_171113_create_ASSUNTO_table',0),(10,'2023_05_22_171113_create_BANCA_table',0),(11,'2023_05_22_171113_create_CONCURSO_table',0),(12,'2023_05_22_171113_create_CONTABANCARIA_table',0),(13,'2023_05_22_171113_create_CORRECAO_table',0),(14,'2023_05_22_171113_create_CURSO_table',0),(15,'2023_05_22_171113_create_DISCIPLINA_table',0),(16,'2023_05_22_171113_create_FATURA_compra_table',0),(17,'2023_05_22_171113_create_MODULO_table',0),(18,'2023_05_22_171113_create_ORGAO_table',0),(19,'2023_05_22_171113_create_PDF_table',0),(20,'2023_05_22_171113_create_PEDIDOREEMBOLSO_table',0),(21,'2023_05_22_171113_create_POSICAO_table',0),(22,'2023_05_22_171113_create_PROFESSOR_table',0),(23,'2023_05_22_171113_create_PROVA_table',0),(24,'2023_05_22_171113_create_QUESTAO_table',0),(25,'2023_05_22_171113_create_RESUMO_table',0),(26,'2023_05_22_171113_create_VIDEO_table',0),(27,'2023_05_22_171113_create_abrange_table',0),(28,'2023_05_22_171113_create_acrescenta_table',0),(29,'2023_05_22_171113_create_agrega_table',0),(30,'2023_05_22_171113_create_agrupa_table',0),(31,'2023_05_22_171113_create_alternativa_table',0),(32,'2023_05_22_171113_create_categoriza_table',0),(33,'2023_05_22_171113_create_detalhada_table',0),(34,'2023_05_22_171113_create_emprega_table',0),(35,'2023_05_22_171113_create_endereco_table',0),(36,'2023_05_22_171113_create_engloba_table',0),(37,'2023_05_22_171113_create_escreve_table',0),(38,'2023_05_22_171113_create_especificada_table',0),(39,'2023_05_22_171113_create_explicada_table',0),(40,'2023_05_22_171113_create_failed_jobs_table',0),(41,'2023_05_22_171113_create_foca_table',0),(42,'2023_05_22_171113_create_focada_table',0),(43,'2023_05_22_171113_create_incorpora_table',0),(44,'2023_05_22_171113_create_integra_table',0),(45,'2023_05_22_171113_create_model_has_permissions_table',0),(46,'2023_05_22_171113_create_model_has_roles_table',0),(47,'2023_05_22_171113_create_organizada_table',0),(48,'2023_05_22_171113_create_password_reset_tokens_table',0),(49,'2023_05_22_171113_create_permissions_table',0),(50,'2023_05_22_171113_create_personal_access_tokens_table',0),(51,'2023_05_22_171113_create_qualificada_table',0),(52,'2023_05_22_171113_create_realiza_table',0),(53,'2023_05_22_171113_create_responde_table',0),(54,'2023_05_22_171113_create_role_has_permissions_table',0),(55,'2023_05_22_171113_create_roles_table',0),(56,'2023_05_22_171113_create_rotulada_table',0),(57,'2023_05_22_171113_create_sessions_table',0),(58,'2023_05_22_171113_create_telefone_table',0),(59,'2023_05_22_171113_create_users_table',0),(60,'2023_05_22_171113_create_utiliza_table',0),(61,'2023_05_22_171116_add_foreign_keys_to_ALUNO_table',0),(62,'2023_05_22_171116_add_foreign_keys_to_ASSUNTO_table',0),(63,'2023_05_22_171116_add_foreign_keys_to_CONCURSO_table',0),(64,'2023_05_22_171116_add_foreign_keys_to_CONTABANCARIA_table',0),(65,'2023_05_22_171116_add_foreign_keys_to_CORRECAO_table',0),(66,'2023_05_22_171116_add_foreign_keys_to_CURSO_table',0),(67,'2023_05_22_171116_add_foreign_keys_to_FATURA_compra_table',0),(68,'2023_05_22_171116_add_foreign_keys_to_MODULO_table',0),(69,'2023_05_22_171116_add_foreign_keys_to_PEDIDOREEMBOLSO_table',0),(70,'2023_05_22_171116_add_foreign_keys_to_PROFESSOR_table',0),(71,'2023_05_22_171116_add_foreign_keys_to_QUESTAO_table',0),(72,'2023_05_22_171116_add_foreign_keys_to_abrange_table',0),(73,'2023_05_22_171116_add_foreign_keys_to_acrescenta_table',0),(74,'2023_05_22_171116_add_foreign_keys_to_agrega_table',0),(75,'2023_05_22_171116_add_foreign_keys_to_agrupa_table',0),(76,'2023_05_22_171116_add_foreign_keys_to_alternativa_table',0),(77,'2023_05_22_171116_add_foreign_keys_to_categoriza_table',0),(78,'2023_05_22_171116_add_foreign_keys_to_detalhada_table',0),(79,'2023_05_22_171116_add_foreign_keys_to_emprega_table',0),(80,'2023_05_22_171116_add_foreign_keys_to_endereco_table',0),(81,'2023_05_22_171116_add_foreign_keys_to_engloba_table',0),(82,'2023_05_22_171116_add_foreign_keys_to_escreve_table',0),(83,'2023_05_22_171116_add_foreign_keys_to_especificada_table',0),(84,'2023_05_22_171116_add_foreign_keys_to_explicada_table',0),(85,'2023_05_22_171116_add_foreign_keys_to_foca_table',0),(86,'2023_05_22_171116_add_foreign_keys_to_focada_table',0),(87,'2023_05_22_171116_add_foreign_keys_to_incorpora_table',0),(88,'2023_05_22_171116_add_foreign_keys_to_integra_table',0),(89,'2023_05_22_171116_add_foreign_keys_to_model_has_permissions_table',0),(90,'2023_05_22_171116_add_foreign_keys_to_model_has_roles_table',0),(91,'2023_05_22_171116_add_foreign_keys_to_organizada_table',0),(92,'2023_05_22_171116_add_foreign_keys_to_qualificada_table',0),(93,'2023_05_22_171116_add_foreign_keys_to_realiza_table',0),(94,'2023_05_22_171116_add_foreign_keys_to_responde_table',0),(95,'2023_05_22_171116_add_foreign_keys_to_role_has_permissions_table',0),(96,'2023_05_22_171116_add_foreign_keys_to_rotulada_table',0),(97,'2023_05_22_171116_add_foreign_keys_to_telefone_table',0),(98,'2023_05_22_171116_add_foreign_keys_to_utiliza_table',0);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `model_has_permissions`
--

DROP TABLE IF EXISTS `model_has_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `model_has_permissions` (
  `permission_id` bigint unsigned NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`),
  CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `model_has_permissions`
--

LOCK TABLES `model_has_permissions` WRITE;
/*!40000 ALTER TABLE `model_has_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `model_has_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `model_has_roles`
--

DROP TABLE IF EXISTS `model_has_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `model_has_roles` (
  `role_id` bigint unsigned NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`),
  KEY `model_type` (`model_type`),
  CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `model_has_roles`
--

LOCK TABLES `model_has_roles` WRITE;
/*!40000 ALTER TABLE `model_has_roles` DISABLE KEYS */;
INSERT INTO `model_has_roles` VALUES (53,'App\\Models\\User',1),(53,'App\\Models\\User',121),(55,'App\\Models\\User',117),(55,'App\\Models\\User',118),(55,'App\\Models\\User',119),(55,'App\\Models\\User',120),(55,'App\\Models\\User',122),(55,'App\\Models\\User',124),(55,'App\\Models\\User',125),(55,'App\\Models\\User',126),(55,'App\\Models\\User',127),(55,'App\\Models\\User',128),(55,'App\\Models\\User',129),(55,'App\\Models\\User',130),(55,'App\\Models\\User',131),(55,'App\\Models\\User',132),(55,'App\\Models\\User',133),(55,'App\\Models\\User',134),(55,'App\\Models\\User',135),(56,'App\\Models\\User',2),(56,'App\\Models\\User',122),(56,'App\\Models\\User',123);
/*!40000 ALTER TABLE `model_has_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
INSERT INTO `password_reset_tokens` VALUES ('admin@gmail.com','$2y$10$ONEJHxn.liOO7rLG11TkaOJeRnE6v8OmPg3JpiNCiVWfaEjqgU39a','2023-12-27 18:09:48'),('aluno6@gmail.com','$2y$10$sGKFaUS9DI4a.VxsdzFbDOurxY62mMeHgZkmBOuGSRLDqOraX7LH2','2023-12-23 19:03:14'),('staff@gmail.com','$2y$10$wu4ni2AHsaZ5FxdYCC.93ux6m2ENwjiZPZrB1554UMwMzkoDys56O','2023-12-23 19:15:41');
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permissions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(125) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(125) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`)
) ENGINE=InnoDB AUTO_INCREMENT=169 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` VALUES (118,'create role','web','2023-07-22 01:14:31','2023-07-22 01:14:31'),(119,'update role','web','2023-07-22 01:14:45','2023-07-22 01:14:45'),(120,'delete role','web','2023-07-22 01:14:52','2023-07-22 01:14:52'),(121,'read role','web','2023-07-22 04:14:44','2023-07-22 04:14:44'),(122,'create permission','web','2023-07-22 04:33:56','2023-07-22 04:33:56'),(123,'update permission','web','2023-07-22 04:34:05','2023-07-22 04:34:05'),(124,'delete permission','web','2023-07-22 04:34:16','2023-07-22 04:34:16'),(125,'read permission','web','2023-07-22 04:34:26','2023-07-22 04:34:26'),(150,'create usuario','web','2023-07-22 05:30:48','2023-07-22 05:30:48'),(151,'update usuario','web','2023-07-22 05:30:57','2025-03-13 10:03:04'),(152,'delete usuario','web','2023-07-22 05:31:08','2023-07-22 05:31:08'),(153,'read usuario','web','2023-07-22 05:31:14','2023-07-22 05:31:14'),(168,'read users/search','web','2025-05-06 08:41:33','2025-05-06 08:41:33');
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_has_permissions`
--

DROP TABLE IF EXISTS `role_has_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_has_permissions` (
  `permission_id` bigint unsigned NOT NULL,
  `role_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `role_has_permissions_role_id_foreign` (`role_id`),
  CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_has_permissions`
--

LOCK TABLES `role_has_permissions` WRITE;
/*!40000 ALTER TABLE `role_has_permissions` DISABLE KEYS */;
INSERT INTO `role_has_permissions` VALUES (118,53),(119,53),(120,53),(121,53),(122,53),(123,53),(124,53),(125,53),(150,53),(151,53),(152,53),(153,53),(168,53);
/*!40000 ALTER TABLE `role_has_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(125) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(125) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (53,'admin','web','2023-07-16 09:24:47','2023-07-16 09:24:47'),(55,'client','web','2023-07-16 09:25:14','2025-04-18 21:14:33'),(56,'staff','web','2023-07-16 09:35:16','2023-07-16 09:35:16');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `apelido` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cpf` bigint DEFAULT NULL,
  `dataNascimento` date DEFAULT NULL,
  `status` decimal(1,0) DEFAULT '1',
  `lastIpAddress` varchar(46) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fotoPerfil` varchar(120) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefone` bigint DEFAULT NULL,
  `schoolSufix` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=136 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (121,'admin','admin@gmail.com','2023-12-27 19:22:54','$2y$10$thcUoum9Gv0LSvlts68PL.ulyMcyWkMk5YVLmJZSlJAuDlXRavOYe',NULL,'2023-09-26 21:00:16','2025-05-17 05:54:53',NULL,NULL,NULL,1,NULL,'users/1CQgOU3cWIuc6DYCIe23PxUJ6LiEZf7iuoNJoMqx.jpg',61991675903,'(AVIAOZINHO)');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-03  1:45:52
