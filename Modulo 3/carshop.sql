-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 25, 2021 at 07:08 PM
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
-- Database: `carshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `Customers`
--

CREATE TABLE `Customers` (
  `customer_id` int NOT NULL,
  `customer_details` varchar(128) DEFAULT NULL,
  `customer_name` varchar(32) DEFAULT NULL,
  `customer_address` varchar(128) DEFAULT NULL,
  `customer_phone` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Customers`
--

INSERT INTO `Customers` (`customer_id`, `customer_details`, `customer_name`, `customer_address`, `customer_phone`) VALUES
(1, NULL, 'Amanda White', '88, Dickson Street', 611284185),
(2, NULL, 'John Smith', '14, Rainkeillor Street', 611284137),
(3, NULL, 'Eva Fox', '27, Clerk Street', 659458765),
(4, NULL, 'Syd Barrett', '74, Bruntsfield Place', 639537639),
(5, NULL, 'Jack London', 'Marchmont Road', 652947609);

-- --------------------------------------------------------

--
-- Table structure for table `Deliveries`
--

CREATE TABLE `Deliveries` (
  `delivery_id` int NOT NULL,
  `sale_id` int DEFAULT NULL,
  `delivery_date` date DEFAULT NULL,
  `other_details` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Deliveries`
--

INSERT INTO `Deliveries` (`delivery_id`, `sale_id`, `delivery_date`, `other_details`) VALUES
(1, 6, '2020-09-27', NULL),
(2, 1, '2021-03-29', NULL),
(3, 3, '1999-04-30', NULL),
(4, 5, '1990-11-28', NULL),
(5, 4, '2017-06-25', NULL),
(6, 2, '1997-07-09', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Ref_Model_Types`
--

CREATE TABLE `Ref_Model_Types` (
  `model_type_code` int NOT NULL,
  `parent_model_type_code` int DEFAULT NULL,
  `model_type_name` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Ref_Model_Types`
--

INSERT INTO `Ref_Model_Types` (`model_type_code`, `parent_model_type_code`, `model_type_name`) VALUES
(1, NULL, 'SPORT-UTILITY VEHICLE (SUV)'),
(2, NULL, 'CONVERTIBLE'),
(3, NULL, 'VAN'),
(4, 3, 'MINIVAN'),
(5, 1, 'CROSSOVER'),
(6, 2, 'HARDTOP CONVERTIBLE');

-- --------------------------------------------------------

--
-- Table structure for table `Sales`
--

CREATE TABLE `Sales` (
  `sale_id` int NOT NULL,
  `customer_id` int DEFAULT NULL,
  `vehicle_id` int DEFAULT NULL,
  `sale_date` date DEFAULT NULL,
  `sale_price` int DEFAULT NULL,
  `other_details` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Sales`
--

INSERT INTO `Sales` (`sale_id`, `customer_id`, `vehicle_id`, `sale_date`, `sale_price`, `other_details`) VALUES
(1, 2, 4, '2021-03-27', 17500, NULL),
(2, 2, 2, '1997-07-04', 34000, NULL),
(3, 4, 1, '1999-04-22', 25350, NULL),
(4, 3, 5, '2017-06-24', 15700, NULL),
(5, 5, 3, '1990-11-28', 45000, NULL),
(6, 1, 6, '2020-09-24', 12800, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Vehicles`
--

CREATE TABLE `Vehicles` (
  `vehicle_id` int NOT NULL,
  `model_type_code` int DEFAULT NULL,
  `vehicle_name` varchar(32) DEFAULT NULL,
  `launch_date` date DEFAULT NULL,
  `other_details` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Vehicles`
--

INSERT INTO `Vehicles` (`vehicle_id`, `model_type_code`, `vehicle_name`, `launch_date`, `other_details`) VALUES
(1, 1, 'Ford Expedition', '1998-08-19', NULL),
(2, 5, 'Renault Captur', '1995-09-22', NULL),
(3, 3, 'Mercedes-Benz Sprinter', '1990-10-25', NULL),
(4, 2, 'BMW 435i', '2020-02-15', NULL),
(5, 2, 'Chevrolet Corvette', '2015-10-21', NULL),
(6, 1, 'Land Rover Defender', '2020-07-28', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Customers`
--
ALTER TABLE `Customers`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `Deliveries`
--
ALTER TABLE `Deliveries`
  ADD PRIMARY KEY (`delivery_id`),
  ADD KEY `sale_id` (`sale_id`);

--
-- Indexes for table `Ref_Model_Types`
--
ALTER TABLE `Ref_Model_Types`
  ADD PRIMARY KEY (`model_type_code`),
  ADD KEY `Ref_Model_Types_ibfk_1` (`parent_model_type_code`);

--
-- Indexes for table `Sales`
--
ALTER TABLE `Sales`
  ADD PRIMARY KEY (`sale_id`),
  ADD KEY `Sales_ibfk_1` (`customer_id`),
  ADD KEY `Sales_ibfk_2` (`vehicle_id`);

--
-- Indexes for table `Vehicles`
--
ALTER TABLE `Vehicles`
  ADD PRIMARY KEY (`vehicle_id`),
  ADD KEY `Vehicles_ibfk_1` (`model_type_code`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Customers`
--
ALTER TABLE `Customers`
  MODIFY `customer_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Deliveries`
--
ALTER TABLE `Deliveries`
  MODIFY `delivery_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `Ref_Model_Types`
--
ALTER TABLE `Ref_Model_Types`
  MODIFY `model_type_code` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Sales`
--
ALTER TABLE `Sales`
  MODIFY `sale_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Vehicles`
--
ALTER TABLE `Vehicles`
  MODIFY `vehicle_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Deliveries`
--
ALTER TABLE `Deliveries`
  ADD CONSTRAINT `Deliveries_ibfk_1` FOREIGN KEY (`sale_id`) REFERENCES `Sales` (`sale_id`) ON DELETE CASCADE;

--
-- Constraints for table `Ref_Model_Types`
--
ALTER TABLE `Ref_Model_Types`
  ADD CONSTRAINT `Ref_Model_Types_ibfk_1` FOREIGN KEY (`parent_model_type_code`) REFERENCES `Ref_Model_Types` (`model_type_code`) ON DELETE CASCADE ON UPDATE RESTRICT;

--
-- Constraints for table `Sales`
--
ALTER TABLE `Sales`
  ADD CONSTRAINT `Sales_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `Customers` (`customer_id`) ON DELETE CASCADE ON UPDATE RESTRICT,
  ADD CONSTRAINT `Sales_ibfk_2` FOREIGN KEY (`vehicle_id`) REFERENCES `Vehicles` (`vehicle_id`) ON DELETE CASCADE ON UPDATE RESTRICT;

--
-- Constraints for table `Vehicles`
--
ALTER TABLE `Vehicles`
  ADD CONSTRAINT `Vehicles_ibfk_1` FOREIGN KEY (`model_type_code`) REFERENCES `Ref_Model_Types` (`model_type_code`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
