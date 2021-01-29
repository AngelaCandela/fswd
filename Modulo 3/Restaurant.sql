-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 24, 2021 at 04:46 PM
-- Server version: 8.0.22-0ubuntu0.20.04.3
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Restaurant`
--

-- --------------------------------------------------------

--
-- Table structure for table `Employees`
--

CREATE TABLE `Employees` (
  `employee_name` varchar(64) NOT NULL,
  `employee_id` int NOT NULL,
  `employee_phone` int NOT NULL,
  `employee_email` varchar(128) NOT NULL,
  `employee_role` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Employees`
--

INSERT INTO `Employees` (`employee_name`, `employee_id`, `employee_phone`, `employee_email`, `employee_role`) VALUES
('John Smith', 1, 611284185, 'jsmith@gmail.com', 'waiter'),
('Amanda White', 2, 638562654, 'awhite@gmail.com', 'bartender'),
('Elizabeth Fox', 3, 743846788, 'efox@gmail.com', 'manager');

-- --------------------------------------------------------

--
-- Table structure for table `Menu`
--

CREATE TABLE `Menu` (
  `dish_id` int NOT NULL,
  `dish_name` varchar(32) NOT NULL,
  `dish_type` varchar(32) NOT NULL,
  `dish_price` int NOT NULL,
  `assigned_day` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Menu`
--

INSERT INTO `Menu` (`dish_id`, `dish_name`, `dish_type`, `dish_price`, `assigned_day`) VALUES
(1, 'tiramisu', 'dessert', 5, 'Monday'),
(2, 'pimientos del padrón', 'starter', 4, 'Wednesday'),
(3, 'pizza margherita', 'main', 7, 'Friday'),
(4, 'croquetas', 'starter', 4, 'Saturday'),
(5, 'bacalao', 'main', 11, 'Tuesday'),
(6, 'paella', 'main', 20, 'Thursday');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Employees`
--
ALTER TABLE `Employees`
  ADD PRIMARY KEY (`employee_id`);

--
-- Indexes for table `Menu`
--
ALTER TABLE `Menu`
  ADD PRIMARY KEY (`dish_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Employees`
--
ALTER TABLE `Employees`
  MODIFY `employee_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `Menu`
--
ALTER TABLE `Menu`
  MODIFY `dish_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=502;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
