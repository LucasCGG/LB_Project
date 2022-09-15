DROP DATABASE IF EXISTS Project_V01;
CREATE DATABASE Project_V01;
USE Project_V01;

/*CREATE TABLE IF NOT EXISTS `Player`
(
  `id` int NOT NULL AUTO_INCREMENT,
  `Username` varchar(255) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Age` int NOT NULL CHECK( `Age` between 5 and 100),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
*/
/*CREATE TABLE IF NOT EXISTS `Game`
(
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
*/
CREATE TABLE IF NOT EXISTS `Category`
(
  `id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `Game_Category`
(
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int NOT NULL,
  `game_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `LeaderBoard`
(
  `id` int NOT NULL AUTO_INCREMENT,
  `game_id` int NOT NULL,
  `game_name` varchar(255) NOT NULL,
  `player_id` INT NOT NULL,
  `player_UName` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
