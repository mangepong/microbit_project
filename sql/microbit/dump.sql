-- MySQL dump 10.16  Distrib 10.1.30-MariaDB, for CYGWIN (x86_64)
--
-- Host: 127.0.0.1    Database: microbit
-- ------------------------------------------------------
-- Server version	8.0.14

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `microbitdata`
--

DROP TABLE IF EXISTS `microbitdata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `microbitdata` (
  `id` int(100) DEFAULT NULL,
  `temp` char(100) DEFAULT NULL,
  `light` char(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `microbitdata`
--

LOCK TABLES `microbitdata` WRITE;
/*!40000 ALTER TABLE `microbitdata` DISABLE KEYS */;
INSERT INTO `microbitdata` VALUES (1,'27','14'),(1,'27','14'),(1,'31','27\r'),(1,'30','27\r'),(1,'30','27\r'),(1,'30','27\r'),(1,'30','27\r'),(1,'30','27\r'),(1,'30','27\r'),(1,'30','28\r'),(1,'30','28\r'),(1,'30','28\r'),(1,'30','28\r'),(1,'30','28\r'),(1,'30','28\r'),(1,'30','28\r'),(1,'30','28\r'),(1,'30','28\r'),(1,'30','28\r'),(1,'30','27\r'),(1,'30','28\r'),(1,'30','27\r'),(1,'30','27\r'),(1,'30','27\r'),(1,'30','27\r'),(1,'30','28\r'),(1,'30','28\r'),(1,'30','28\r'),(1,'30','223\r'),(1,'30','243\r'),(1,'30','28\r'),(1,'30','28\r');
/*!40000 ALTER TABLE `microbitdata` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-25 13:49:01
