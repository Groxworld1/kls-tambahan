-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2019 at 10:17 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bunis`
--

-- --------------------------------------------------------

--
-- Table structure for table `fb_table`
--

CREATE TABLE `fb_table` (
  `username` varchar(255) NOT NULL,
  `fbID` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fb_table`
--

INSERT INTO `fb_table` (`username`, `fbID`, `password`) VALUES
('Groxworld1', '', 'ewf3f'),
('groxworld1', '118719152490753', 'qweqwe');

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

CREATE TABLE `movie` (
  `movieID` varchar(255) DEFAULT NULL,
  `srow` varchar(255) DEFAULT NULL,
  `scolumn` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`movieID`, `srow`, `scolumn`, `time`, `date`) VALUES
('Sitting Ducks', 'E', '3', '17:20', '13/12/2019'),
('Test: Endgame', 'C', '4', '15:20', '13/12/2019'),
('Moonlighter', 'E', '10', '17:20', '13/12/2019'),
('Test: Endgame', 'E', '4', '15:20', '12/1/2019'),
('Test: Endgame', 'C', '3', '17:20', '12/1/2019'),
('Test: Endgame', 'C', '4', '15:20', '11/1/2019'),
('Test: Endgame', 'B', '4', '17:20', '13/12/2019'),
('Test: Endgame', 'A', '4', '15:20', '12/1/2019'),
('Sitting Ducks', 'E', '6', '17:20', '13/12/2019'),
('Moonlighter', 'C', '6', '15:20', '11/1/2019');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
