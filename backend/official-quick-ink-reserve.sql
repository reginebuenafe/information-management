-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 02, 2023 at 07:54 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `official-quick-ink-reserve`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `addressID` int(11) NOT NULL,
  `street` varchar(50) NOT NULL,
  `barangay` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `postalCode` varchar(5) NOT NULL,
  `userID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `billing`
--

CREATE TABLE `billing` (
  `billingID` int(11) NOT NULL,
  `billingMethod` varchar(50) NOT NULL,
  `paidStatus` tinyint(4) NOT NULL DEFAULT 0,
  `cvv` smallint(6) NOT NULL,
  `orderID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cartdetails`
--

CREATE TABLE `cartdetails` (
  `cartDetails` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `userID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cartservices`
--

CREATE TABLE `cartservices` (
  `cartServicesID` int(11) NOT NULL,
  `cartServicesTotal` decimal(5,2) NOT NULL,
  `submissionID` int(11) NOT NULL,
  `cartDetailsID` int(11) NOT NULL,
  `specServiceID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `genservices`
--

CREATE TABLE `genservices` (
  `genServicesID` int(11) NOT NULL,
  `genServiceName` varchar(50) NOT NULL,
  `genServiceDesc` text NOT NULL,
  `genServiceImageUrl` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `materials`
--

CREATE TABLE `materials` (
  `matID` int(11) NOT NULL,
  `matName` varchar(100) NOT NULL,
  `matSize` varchar(50) NOT NULL,
  `matCount` int(11) NOT NULL,
  `matQty` int(11) NOT NULL,
  `matUnit` varchar(20) NOT NULL,
  `matImageUrl` varchar(255) NOT NULL,
  `color` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `materials`
--

INSERT INTO `materials` (`matID`, `matName`, `matSize`, `matCount`, `matQty`, `matUnit`, `matImageUrl`, `color`, `description`, `createdAt`, `updatedAt`) VALUES
(4, 'Hard Copy Short Bond Paper', '8.5 x 11 inches (Letter Size)', 500, 3, 'Reams', 'uploads\\1698564792140@hardcopy.webp', 'White', '\"Hard Copy Short Bond Paper\" is a premium brand of bond paper renowned for its exceptional quality and versatility. Designed for a variety of printing and documentation needs, this brand stands out for its reliable performance. With a shorter size, it is ', '2023-10-29 15:33:12', '2023-10-29 15:33:12'),
(5, 'Hard Copy Long Bond Paper', '8.5 x 13 inches (Letter Size)', 500, 3, 'Reams', 'uploads\\1698564834136@hardcopy.webp', 'White', '\"Hard Copy Long Bond Paper\" is a reliable and versatile brand of bond paper known for its high-quality printing capabilities. It is specifically designed for long documents, making it an excellent choice for various professional and academic applications.', '2023-10-29 15:33:54', '2023-10-29 15:33:54'),
(7, 'Epson 003 Genuine Ink', 'Regular', 1, 15, 'Bottle', 'uploads\\1698580677501@epsonblack.jpg', 'Black', 'Vivid Printing Quality: Instant-drying, water and light resistance. Ultra-High Yield: Print up to 7,500 for colour and 4,500 pages for black. Spill-Free Refilling: Enjoy spill-free refilling with individual bottles which have unique key nozzles that fit o', '2023-10-29 19:57:57', '2023-10-29 19:57:57');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `orderID` int(11) NOT NULL,
  `orderGenID` varchar(15) NOT NULL,
  `orderTotal` decimal(7,2) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `deliveryMethod` tinyint(4) DEFAULT 0,
  `cartServicesID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `servicematerials`
--

CREATE TABLE `servicematerials` (
  `serviceMaterialID` int(11) NOT NULL,
  `specServiceID` int(11) NOT NULL,
  `matID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `specservices`
--

CREATE TABLE `specservices` (
  `specServiceID` int(11) NOT NULL,
  `specServiceName` varchar(50) NOT NULL,
  `specServiceDesc` varchar(100) NOT NULL,
  `specServiceImageUrl` varchar(50) NOT NULL,
  `specServiceRate` decimal(5,2) NOT NULL,
  `neededMatCount` int(11) NOT NULL,
  `featured` tinyint(4) NOT NULL,
  `genServicesID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `submission`
--

CREATE TABLE `submission` (
  `submissionID` int(11) NOT NULL,
  `submissionName` varchar(50) NOT NULL,
  `submissionFileType` varchar(50) NOT NULL,
  `submissionPageCount` int(11) NOT NULL,
  `uploadedAt` date NOT NULL DEFAULT curdate()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userID` int(11) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `userEmail` varchar(50) NOT NULL,
  `userPassword` varchar(255) NOT NULL,
  `userNumber` varchar(15) DEFAULT NULL,
  `userRole` enum('ADMIN','MEMBER') NOT NULL DEFAULT 'MEMBER',
  `profilePicture` varchar(255) DEFAULT NULL,
  `createdAt` date NOT NULL DEFAULT curdate(),
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userID`, `userName`, `userEmail`, `userPassword`, `userNumber`, `userRole`, `profilePicture`, `createdAt`, `updatedAt`) VALUES
(1, 'Mark Allen Jugalbot', '19104099@usc.edu.ph', '$2b$10$jY6RGF1RbvccGU8NtvsoUu2XR9GXAUFa8LkU0yQj4/oy/ye9Gi9wy', '09691946556', 'ADMIN', 'uploads\\1697031228948@pfp.jpg', '0000-00-00', NULL),
(3, 'Hiro', 'hiro@gmail.com', '$2b$10$RFHi83Jn1aBqISsG8qC2GuBW7yf3NNoozETIfRDOaEMtsY8d5sLqO', NULL, 'MEMBER', NULL, '2023-10-29', NULL),
(4, 'Zenno', 'zenno@gmail.com', '$2b$10$TbBAGgtbZnQc3uSZPVR6le5b.xRpiy3lLTXqA4pLUQvhP/fBiFz0S', NULL, 'MEMBER', 'uploads\\1698563077121@page 2.png', '2023-10-29', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`addressID`),
  ADD KEY `FK_user_TO_address` (`userID`);

--
-- Indexes for table `billing`
--
ALTER TABLE `billing`
  ADD PRIMARY KEY (`billingID`),
  ADD KEY `FK_order_TO_billing` (`orderID`);

--
-- Indexes for table `cartdetails`
--
ALTER TABLE `cartdetails`
  ADD PRIMARY KEY (`cartDetails`),
  ADD KEY `FK_user_TO_cartDetails` (`userID`);

--
-- Indexes for table `cartservices`
--
ALTER TABLE `cartservices`
  ADD PRIMARY KEY (`cartServicesID`),
  ADD KEY `FK_submission_TO_cartServices` (`submissionID`),
  ADD KEY `FK_cartDetails_TO_cartServices` (`cartDetailsID`),
  ADD KEY `FK_specServices_TO_cartServices` (`specServiceID`);

--
-- Indexes for table `genservices`
--
ALTER TABLE `genservices`
  ADD PRIMARY KEY (`genServicesID`);

--
-- Indexes for table `materials`
--
ALTER TABLE `materials`
  ADD PRIMARY KEY (`matID`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`orderID`),
  ADD KEY `FK_cartServices_TO_order` (`cartServicesID`);

--
-- Indexes for table `servicematerials`
--
ALTER TABLE `servicematerials`
  ADD PRIMARY KEY (`serviceMaterialID`),
  ADD KEY `FK_specServices_TO_serviceMaterials` (`specServiceID`),
  ADD KEY `FK_materials_TO_serviceMaterials` (`matID`);

--
-- Indexes for table `specservices`
--
ALTER TABLE `specservices`
  ADD PRIMARY KEY (`specServiceID`),
  ADD KEY `FK_genServices_TO_specServices` (`genServicesID`);

--
-- Indexes for table `submission`
--
ALTER TABLE `submission`
  ADD PRIMARY KEY (`submissionID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `addressID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `billing`
--
ALTER TABLE `billing`
  MODIFY `billingID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cartdetails`
--
ALTER TABLE `cartdetails`
  MODIFY `cartDetails` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cartservices`
--
ALTER TABLE `cartservices`
  MODIFY `cartServicesID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `genservices`
--
ALTER TABLE `genservices`
  MODIFY `genServicesID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `materials`
--
ALTER TABLE `materials`
  MODIFY `matID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `orderID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `servicematerials`
--
ALTER TABLE `servicematerials`
  MODIFY `serviceMaterialID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `specservices`
--
ALTER TABLE `specservices`
  MODIFY `specServiceID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `submission`
--
ALTER TABLE `submission`
  MODIFY `submissionID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `FK_user_TO_address` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`);

--
-- Constraints for table `billing`
--
ALTER TABLE `billing`
  ADD CONSTRAINT `FK_order_TO_billing` FOREIGN KEY (`orderID`) REFERENCES `order` (`orderID`);

--
-- Constraints for table `cartdetails`
--
ALTER TABLE `cartdetails`
  ADD CONSTRAINT `FK_user_TO_cartDetails` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`);

--
-- Constraints for table `cartservices`
--
ALTER TABLE `cartservices`
  ADD CONSTRAINT `FK_cartDetails_TO_cartServices` FOREIGN KEY (`cartDetailsID`) REFERENCES `cartdetails` (`cartDetails`),
  ADD CONSTRAINT `FK_specServices_TO_cartServices` FOREIGN KEY (`specServiceID`) REFERENCES `specservices` (`specServiceID`),
  ADD CONSTRAINT `FK_submission_TO_cartServices` FOREIGN KEY (`submissionID`) REFERENCES `submission` (`submissionID`);

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `FK_cartServices_TO_order` FOREIGN KEY (`cartServicesID`) REFERENCES `cartservices` (`cartServicesID`);

--
-- Constraints for table `servicematerials`
--
ALTER TABLE `servicematerials`
  ADD CONSTRAINT `FK_materials_TO_serviceMaterials` FOREIGN KEY (`matID`) REFERENCES `materials` (`matID`),
  ADD CONSTRAINT `FK_specServices_TO_serviceMaterials` FOREIGN KEY (`specServiceID`) REFERENCES `specservices` (`specServiceID`);

--
-- Constraints for table `specservices`
--
ALTER TABLE `specservices`
  ADD CONSTRAINT `FK_genServices_TO_specServices` FOREIGN KEY (`genServicesID`) REFERENCES `genservices` (`genServicesID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
