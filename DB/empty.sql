USE sql_website;

DROP table if exists basket;
DROP table if exists images;
DROP table if exists product;
DROP table if exists orderdeliv;
DROP table if exists user;
DROP table if exists shop;

CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `img` blob,
  PRIMARY KEY (`id`)
);









INSERT INTO `images` VALUES (1,NULL),(2,NULL);





--







CREATE TABLE `product` (



  `idProduct` int NOT NULL AUTO_INCREMENT,



  `title` varchar(255) NOT NULL,



  `descript` varchar(1023) NOT NULL,



  `price` int NOT NULL,



  `category` varchar(45) NOT NULL,



  `photoid` int NOT NULL,



  PRIMARY KEY (`idProduct`)



);









--



-- Dumping data for table `product`



--









INSERT INTO `product` VALUES (24,'Свеча 22','уууу',1500,'Восковая',1),(30,'Свеча 3','выфвфывыфвфы',500,'Соевая',2);








--



-- Table structure for table `shop`



--











CREATE TABLE `shop` (



  `shop_id` int NOT NULL AUTO_INCREMENT,



  `address` varchar(50) NOT NULL,



  PRIMARY KEY (`shop_id`)



);


INSERT INTO `shop` VALUES (1,'Санкт-Петербург, ул. Большая Морская, д. 1'),(2,'Санкт-Петербург, ул. Большая Морская, д. 1');







-- Table structure for table `user`



--










CREATE TABLE `user` (



  `idUser` int NOT NULL AUTO_INCREMENT,



  `email` varchar(255) NOT NULL,



  `passwd` varchar(45) NOT NULL,



  `name` varchar(255) NOT NULL,



  `login` varchar(255) NOT NULL,



  PRIMARY KEY (`idUser`)



);




CREATE TABLE `orderdeliv` (



  `idOrder` int NOT NULL AUTO_INCREMENT,



  `dateOrder` varchar(100) NOT NULL,



  `dateDeliv` varchar(100) NOT NULL,



  `idShop` int DEFAULT NULL,



  `CustomerId` int NOT NULL,



  PRIMARY KEY (`idOrder`),



  KEY `idShop` (`idShop`),



  KEY `CustomerId` (`CustomerId`),



  CONSTRAINT `orderdeliv_ibfk_1` FOREIGN KEY (`idShop`) REFERENCES `shop` (`shop_id`),



  CONSTRAINT `orderdeliv_ibfk_2` FOREIGN KEY (`CustomerId`) REFERENCES `user` (`idUser`) ON DELETE CASCADE



);




--












CREATE TABLE `basket` (



  `user_id` int NOT NULL,



  `product_id` int NOT NULL,



  KEY `user_id` (`user_id`),



  KEY `product_id` (`product_id`),



  CONSTRAINT `basket_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`idUser`) ON DELETE CASCADE,



  CONSTRAINT `basket_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`idProduct`) ON DELETE CASCADE



);




--












INSERT INTO `user` VALUES (1,'qwerty12@mail.ru','qwerty12','root','root2'),(59,'admin','qwerty12','admin','admin'),(60,'3','4','2','1'),(61,'test','123','Григорий','test'),(62,'denchick@mail.su','123','Денис','Ден');

INSERT INTO `basket` VALUES (60,30);

INSERT INTO `orderdeliv` VALUES (2,'2002-05-20 23:00:00','2005-05-20 23:00:00',1,60),(3,'2002-05-20 23:00:00','2005-05-20 23:00:00',1,60),(4,'2002-05-20 23:00:00','2005-05-20 23:00:00',1,60),(5,'2002-05-20 23:00:00','2005-05-20 23:00:00',1,60),(6,'02.05.2023','05.05.2023',1,60),(7,'03.03.2023','04.03.2023',1,1),(8,'03.05.2023','06.05.2023',1,60),(9,'03.05.2023','06.05.2023',1,60),(10,'04.05.2023','07.05.2023',1,60);


-- Dump completed on 2023-10-24 18:10:45
