-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 23, 2024 at 08:07 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `job`
--

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `salary` decimal(10,2) DEFAULT NULL,
  `type` enum('Full-time','Part-time','Contract','Freelance','Internship') NOT NULL,
  `location` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `title`, `salary`, `type`, `location`, `description`, `city`, `date`, `logo`) VALUES
(1, 'Software Engineer', 80000.00, 'Full-time', 'New York', 'Developing software applications', 'New York', '2024-02-11', 'logo1.png'),
(2, 'Marketing Manager', 60000.00, 'Full-time', 'San Francisco', 'Managing marketing campaigns', 'San Francisco', '2024-02-12', 'logo2.png'),
(3, 'Web Developer', 70000.00, 'Full-time', 'Los Angeles', 'Building websites', 'Los Angeles', '2024-02-13', 'logo3.png'),
(4, 'Software Engineer', 80000.00, 'Full-time', 'New York', 'Developing software applications', 'New York', '2024-02-11', 'logo1.png'),
(5, 'Web Developer', 75000.00, 'Full-time', 'San Francisco', 'Building websites', 'San Francisco', '2024-02-12', 'logo2.png'),
(6, 'Data Analyst', 70000.00, 'Full-time', 'Chicago', 'Analyzing data', 'Chicago', '2024-02-13', 'logo3.png'),
(7, 'Product Manager', 85000.00, 'Full-time', 'Los Angeles', 'Managing products', 'Los Angeles', '2024-02-14', 'logo4.png'),
(8, 'Marketing Specialist', 65000.00, 'Full-time', 'Houston', 'Creating marketing campaigns', 'Houston', '2024-02-15', 'logo5.png'),
(9, 'Software Developer', 78000.00, 'Full-time', 'Boston', 'Developing software solutions', 'Boston', '2024-02-16', 'logo6.png'),
(10, 'UX Designer', 70000.00, 'Full-time', 'Seattle', 'Designing user interfaces', 'Seattle', '2024-02-17', 'logo7.png'),
(11, 'Project Manager', 90000.00, 'Full-time', 'Dallas', 'Managing projects', 'Dallas', '2024-02-18', 'logo8.png'),
(12, 'Frontend Developer', 76000.00, 'Full-time', 'Austin', 'Developing frontend applications', 'Austin', '2024-02-19', 'logo9.png'),
(13, 'Backend Developer', 78000.00, 'Full-time', 'Denver', 'Developing backend applications', 'Denver', '2024-02-20', 'logo10.png'),
(14, 'UI Designer', 72000.00, 'Full-time', 'Portland', 'Creating user interfaces', 'Portland', '2024-02-21', 'logo11.png'),
(15, 'Systems Analyst', 75000.00, 'Full-time', 'Phoenix', 'Analyzing system requirements', 'Phoenix', '2024-02-22', 'logo12.png'),
(16, 'Network Engineer', 82000.00, 'Full-time', 'Atlanta', 'Designing and implementing networks', 'Atlanta', '2024-02-23', 'logo13.png'),
(17, 'Database Administrator', 78000.00, 'Full-time', 'Miami', 'Managing databases', 'Miami', '2024-02-24', 'logo14.png'),
(18, 'DevOps Engineer', 85000.00, 'Full-time', 'Las Vegas', 'Implementing DevOps practices', 'Las Vegas', '2024-02-25', 'logo15.png'),
(19, 'Quality Assurance Analyst', 70000.00, 'Full-time', 'Philadelphia', 'Testing software applications', 'Philadelphia', '2024-02-26', 'logo16.png'),
(20, 'Technical Support Specialist', 65000.00, 'Full-time', 'San Diego', 'Providing technical support', 'San Diego', '2024-02-27', 'logo17.png'),
(21, 'Cybersecurity Analyst', 90000.00, 'Full-time', 'Orlando', 'Protecting computer systems', 'Orlando', '2024-02-28', 'logo18.png'),
(22, 'Business Analyst', 75000.00, 'Full-time', 'Charlotte', 'Analyzing business processes', 'Charlotte', '2024-02-29', 'logo19.png'),
(23, 'UI/UX Designer', 78000.00, 'Full-time', 'Minneapolis', 'Designing user interfaces and experiences', 'Minneapolis', '2024-03-01', 'logo20.png'),
(24, 'Software Tester', 70000.00, 'Full-time', 'Detroit', 'Testing software functionality', 'Detroit', '2024-03-02', 'logo21.png'),
(25, 'Systems Administrator', 82000.00, 'Full-time', 'Salt Lake City', 'Managing computer systems', 'Salt Lake City', '2024-03-03', 'logo22.png'),
(26, 'Cloud Architect', 85000.00, 'Full-time', 'Tampa', 'Designing cloud infrastructure', 'Tampa', '2024-03-04', 'logo23.png'),
(27, 'Data Scientist', 90000.00, 'Full-time', 'Raleigh', 'Analyzing complex datasets', 'Raleigh', '2024-03-05', 'logo24.png'),
(28, 'Mobile App Developer', 78000.00, 'Full-time', 'Indianapolis', 'Developing mobile applications', 'Indianapolis', '2024-03-06', 'logo25.png'),
(29, 'Software Architect', 95000.00, 'Full-time', 'Nashville', 'Designing software systems', 'Nashville', '2024-03-07', 'logo26.png'),
(30, 'Technical Writer', 65000.00, 'Full-time', 'Kansas City', 'Creating technical documentation', 'Kansas City', '2024-03-08', 'logo27.png'),
(31, 'IT Consultant', 85000.00, 'Full-time', 'Columbus', 'Providing IT consulting services', 'Columbus', '2024-03-09', 'logo28.png'),
(32, 'Network Administrator', 80000.00, 'Full-time', 'Pittsburgh', 'Managing computer networks', 'Pittsburgh', '2024-03-10', 'logo29.png'),
(33, 'Business Intelligence Analyst', 75000.00, 'Full-time', 'Memphis', 'Analyzing business data', 'Memphis', '2024-03-11', 'logo30.png'),
(34, 'Scrum Master', 90000.00, 'Full-time', 'Louisville', 'Facilitating agile development processes', 'Louisville', '2024-03-12', 'logo31.png'),
(35, 'UX Researcher', 70000.00, 'Full-time', 'Milwaukee', 'Conducting user research', 'Milwaukee', '2024-03-13', 'logo32.png'),
(36, 'Software Support Specialist', 65000.00, 'Full-time', 'Oklahoma City', 'Providing software support', 'Oklahoma City', '2024-03-14', 'logo33.png'),
(37, 'Digital Marketing Manager', 85000.00, 'Part-time', 'Anywhere', 'Leading digital marketing strategies', 'Any City', '2024-02-11', 'logo1.png'),
(38, 'Social Media Specialist', 70000.00, 'Part-time', 'Anywhere', 'Managing social media platforms', 'Any City', '2024-02-12', 'logo2.png'),
(39, 'Content Marketing Strategist', 75000.00, 'Part-time', 'Anywhere', 'Developing content marketing campaigns', 'Any City', '2024-02-13', 'logo3.png'),
(40, 'SEO Analyst', 80000.00, 'Part-time', 'Anywhere', 'Optimizing website for search engines', 'Any City', '2024-02-14', 'logo4.png'),
(41, 'Email Marketing Coordinator', 65000.00, 'Part-time', 'Anywhere', 'Managing email marketing campaigns', 'Any City', '2024-02-15', 'logo5.png'),
(42, 'Digital Advertising Specialist', 75000.00, 'Part-time', 'Anywhere', 'Managing digital advertising campaigns', 'Any City', '2024-02-16', 'logo6.png'),
(43, 'Influencer Marketing Manager', 90000.00, 'Part-time', 'Anywhere', 'Managing influencer marketing campaigns', 'Any City', '2024-02-17', 'logo7.png'),
(44, 'PPC Specialist', 80000.00, 'Part-time', 'Anywhere', 'Managing pay-per-click advertising campaigns', 'Any City', '2024-02-18', 'logo8.png'),
(45, 'Marketing Analytics Manager', 85000.00, 'Part-time', 'Anywhere', 'Analyzing marketing data and metrics', 'Any City', '2024-02-19', 'logo9.png'),
(46, 'Digital Marketing Director', 95000.00, 'Part-time', 'Anywhere', 'Leading overall digital marketing strategy', 'Any City', '2024-02-20', 'logo10.png'),
(47, 'Content Creator', 70000.00, 'Part-time', 'Anywhere', 'Creating engaging content for digital platforms', 'Any City', '2024-02-21', 'logo11.png'),
(48, 'Social Media Manager', 80000.00, 'Part-time', 'Anywhere', 'Managing social media accounts and campaigns', 'Any City', '2024-02-22', 'logo12.png'),
(49, 'Digital Marketing Coordinator', 65000.00, 'Part-time', 'Anywhere', 'Assisting in digital marketing initiatives', 'Any City', '2024-02-23', 'logo13.png'),
(50, 'SEO Specialist', 75000.00, 'Part-time', 'Anywhere', 'Optimizing website content for search engines', 'Any City', '2024-02-24', 'logo14.png'),
(51, 'Email Campaign Manager', 75000.00, 'Part-time', 'Anywhere', 'Creating and managing email marketing campaigns', 'Any City', '2024-02-25', 'logo15.png'),
(52, 'Digital Content Manager', 85000.00, 'Part-time', 'Anywhere', 'Managing digital content creation and distribution', 'Any City', '2024-02-26', 'logo16.png'),
(53, 'Social Media Strategist', 75000.00, 'Part-time', 'Anywhere', 'Developing social media strategies', 'Any City', '2024-02-27', 'logo17.png'),
(54, 'Digital Marketing Analyst', 80000.00, 'Part-time', 'Anywhere', 'Analyzing digital marketing performance', 'Any City', '2024-02-28', 'logo18.png'),
(55, 'Affiliate Marketing Manager', 90000.00, 'Part-time', 'Anywhere', 'Managing affiliate marketing programs', 'Any City', '2024-02-29', 'logo19.png'),
(56, 'Digital Marketing Consultant', 85000.00, 'Part-time', 'Anywhere', 'Providing digital marketing consulting services', 'Any City', '2024-03-01', 'logo20.png'),
(57, 'Content Marketing Manager', 85000.00, 'Part-time', 'Anywhere', 'Overseeing content marketing strategy', 'Any City', '2024-03-02', 'logo21.png'),
(58, 'Digital Marketing Specialist', 75000.00, 'Part-time', 'Anywhere', 'Executing digital marketing campaigns', 'Any City', '2024-03-03', 'logo22.png'),
(59, 'Social Media Coordinator', 65000.00, 'Part-time', 'Anywhere', 'Managing social media channels', 'Any City', '2024-03-04', 'logo23.png'),
(60, 'SEO Manager', 90000.00, 'Part-time', 'Anywhere', 'Overseeing SEO initiatives', 'Any City', '2024-03-05', 'logo24.png'),
(61, 'E-commerce Specialist', 60000.00, 'Part-time', 'New York', 'Managing e-commerce platforms', 'New York', '2024-02-11', 'logo1.png'),
(62, 'Online Store Manager', 65000.00, 'Part-time', 'Los Angeles', 'Managing online store operations', 'Los Angeles', '2024-02-12', 'logo2.png'),
(63, 'Digital Marketing Coordinator (E-commerce)', 55000.00, 'Part-time', 'Chicago', 'Coordinating digital marketing efforts for e-commerce', 'Chicago', '2024-02-13', 'logo3.png'),
(64, 'Customer Service Representative (E-commerce)', 50000.00, 'Part-time', 'Houston', 'Providing customer support for e-commerce customers', 'Houston', '2024-02-14', 'logo4.png'),
(65, 'E-commerce Content Creator', 60000.00, 'Part-time', 'Philadelphia', 'Creating content for e-commerce platforms', 'Philadelphia', '2024-02-15', 'logo5.png'),
(66, 'Product Photographer (E-commerce)', 55000.00, 'Part-time', 'Phoenix', 'Photographing products for e-commerce listings', 'Phoenix', '2024-02-16', 'logo6.png'),
(67, 'E-commerce SEO Specialist', 65000.00, 'Part-time', 'San Antonio', 'Optimizing e-commerce websites for search engines', 'San Antonio', '2024-02-17', 'logo7.png'),
(68, 'E-commerce Data Analyst', 70000.00, 'Part-time', 'San Diego', 'Analyzing data for e-commerce performance', 'San Diego', '2024-02-18', 'logo8.png'),
(69, 'E-commerce Web Developer', 75000.00, 'Part-time', 'Dallas', 'Developing and maintaining e-commerce websites', 'Dallas', '2024-02-19', 'logo9.png'),
(70, 'E-commerce Graphic Designer', 60000.00, 'Part-time', 'San Jose', 'Designing graphics for e-commerce platforms', 'San Jose', '2024-02-20', 'logo10.png'),
(71, 'Online Merchandiser (E-commerce)', 65000.00, 'Part-time', 'Austin', 'Merchandising products for online stores', 'Austin', '2024-02-21', 'logo11.png'),
(72, 'E-commerce Marketing Specialist', 70000.00, 'Part-time', 'Jacksonville', 'Executing marketing campaigns for e-commerce', 'Jacksonville', '2024-02-22', 'logo12.png'),
(73, 'E-commerce Sales Associate', 55000.00, 'Part-time', 'Fort Worth', 'Assisting with sales on e-commerce platforms', 'Fort Worth', '2024-02-23', 'logo13.png'),
(74, 'E-commerce Operations Coordinator', 60000.00, 'Part-time', 'Columbus', 'Coordinating operations for e-commerce business', 'Columbus', '2024-02-24', 'logo14.png'),
(75, 'E-commerce UX/UI Designer', 65000.00, 'Part-time', 'San Francisco', 'Designing user experience for e-commerce websites', 'San Francisco', '2024-02-25', 'logo15.png'),
(76, 'E-commerce Content Manager', 70000.00, 'Part-time', 'Charlotte', 'Managing content strategy for e-commerce platforms', 'Charlotte', '2024-02-26', 'logo16.png'),
(77, 'E-commerce Supply Chain Coordinator', 60000.00, 'Part-time', 'Indianapolis', 'Coordinating supply chain for e-commerce business', 'Indianapolis', '2024-02-27', 'logo17.png'),
(78, 'E-commerce Fulfillment Specialist', 55000.00, 'Part-time', 'Seattle', 'Handling order fulfillment for e-commerce orders', 'Seattle', '2024-02-28', 'logo18.png'),
(79, 'E-commerce Quality Assurance Tester', 65000.00, 'Part-time', 'Denver', 'Testing e-commerce websites for quality assurance', 'Denver', '2024-02-29', 'logo19.png'),
(80, 'E-commerce Business Analyst', 70000.00, 'Part-time', 'Washington', 'Analyzing e-commerce business data', 'Washington', '2024-03-01', 'logo20.png'),
(81, 'E-commerce Marketplace Manager', 75000.00, 'Part-time', 'Boston', 'Managing sales on e-commerce marketplaces', 'Boston', '2024-03-02', 'logo21.png'),
(82, 'E-commerce Customer Experience Specialist', 60000.00, 'Part-time', 'Nashville', 'Enhancing customer experience for e-commerce', 'Nashville', '2024-03-03', 'logo22.png'),
(83, 'E-commerce Inventory Coordinator', 65000.00, 'Part-time', 'Las Vegas', 'Managing inventory for e-commerce business', 'Las Vegas', '2024-03-04', 'logo23.png'),
(84, 'E-commerce Product Analyst', 70000.00, 'Part-time', 'Louisville', 'Analyzing e-commerce product performance', 'Louisville', '2024-03-05', 'logo24.png'),
(85, 'Biology Research Assistant', 60000.00, 'Part-time', 'New York', 'Assisting with biological research projects', 'New York', '2024-02-11', 'logo1.png'),
(86, 'Biologist', 65000.00, 'Part-time', 'Los Angeles', 'Conducting biological studies and experiments', 'Los Angeles', '2024-02-12', 'logo2.png'),
(87, 'Microbiologist', 55000.00, 'Part-time', 'Chicago', 'Studying microorganisms and their effects', 'Chicago', '2024-02-13', 'logo3.png'),
(88, 'Biological Technician', 50000.00, 'Part-time', 'Houston', 'Assisting biologists with laboratory tests and experiments', 'Houston', '2024-02-14', 'logo4.png'),
(89, ' Botanist', 60000.00, 'Part-time', 'Philadelphia', 'Studying plants and their ecosystems', 'Philadelphia', '2024-02-15', 'logo5.png'),
(90, 'Ecologist', 55000.00, 'Part-time', 'Phoenix', 'Studying relationships between organisms and their environments', 'Phoenix', '2024-02-16', 'logo6.png'),
(91, 'Zoologist', 65000.00, 'Part-time', 'San Antonio', 'Studying animal behavior and physiology', 'San Antonio', '2024-02-17', 'logo7.png'),
(92, 'Wildlife Biologist', 70000.00, 'Part-time', 'San Diego', 'Studying wildlife populations and habitats', 'San Diego', '2024-02-18', 'logo8.png'),
(93, 'Marine Biologist', 75000.00, 'Part-time', 'Dallas', 'Studying marine organisms and ecosystems', 'Dallas', '2024-02-19', 'logo9.png'),
(94, 'Biomedical Research Assistant', 60000.00, 'Part-time', 'San Jose', 'Assisting with biomedical research projects', 'San Jose', '2024-02-20', 'logo10.png'),
(95, 'Genetics Counselor', 65000.00, 'Part-time', 'Austin', 'Providing genetic counseling services', 'Austin', '2024-02-21', 'logo11.png'),
(96, 'Environmental Scientist ', 70000.00, 'Part-time', 'Jacksonville', 'Studying environmental issues and impacts', 'Jacksonville', '2024-02-22', 'logo12.png'),
(97, ' Entomologist', 55000.00, 'Part-time', 'Fort Worth', 'Studying insects and their behavior', 'Fort Worth', '2024-02-23', 'logo13.png'),
(98, 'Molecular Biologist', 60000.00, 'Part-time', 'Columbus', 'Studying biological molecules and their interactions', 'Columbus', '2024-02-24', 'logo14.png'),
(99, 'Cell Biologist', 65000.00, 'Part-time', 'San Francisco', 'Studying cells and their functions', 'San Francisco', '2024-02-25', 'logo15.png'),
(100, 'Biostatistician', 70000.00, 'Part-time', 'Charlotte', 'Analyzing biological data using statistical methods', 'Charlotte', '2024-02-26', 'logo16.png'),
(101, 'Ornithologist', 55000.00, 'Part-time', 'Indianapolis', 'Studying birds and their behavior', 'Indianapolis', '2024-02-27', 'logo17.png'),
(102, 'Immunologist', 60000.00, 'Part-time', 'Seattle', 'Studying the immune system and its response to diseases', 'Seattle', '2024-02-28', 'logo18.png'),
(103, 'Biopharmaceutical Research Assistant', 65000.00, 'Part-time', 'Denver', 'Assisting with research in biopharmaceuticals', 'Denver', '2024-02-29', 'logo19.png'),
(104, 'Paleontologist', 70000.00, 'Part-time', 'Washington', 'Studying fossils and prehistoric life forms', 'Washington', '2024-03-01', 'logo20.png'),
(105, ' Biophysicist', 75000.00, 'Part-time', 'Boston', 'Studying biological processes using principles of physics', 'Boston', '2024-03-02', 'logo21.png'),
(106, ' Biochemist', 60000.00, 'Part-time', 'Nashville', 'Studying chemical processes in living organisms', 'Nashville', '2024-03-03', 'logo22.png'),
(107, ' Ecotoxicologist', 65000.00, 'Part-time', 'Las Vegas', 'Studying the effects of toxic substances on ecosystems', 'Las Vegas', '2024-03-04', 'logo23.png'),
(108, 'Biomedical Engineer', 70000.00, 'Part-time', 'Louisville', 'Designing biomedical devices and equipment', 'Louisville', '2024-03-05', 'logo24.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=109;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
