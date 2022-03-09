DROP TABLE IF EXISTS `room_detail`;

CREATE TABLE `room_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `room_detail_page_id` int(11) DEFAULT NULL,
  `station` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `price_img_url` varchar(255) DEFAULT NULL,
  `price_img_position` varchar(50) DEFAULT NULL,
  `neighbourhood` varchar(255) DEFAULT NULL,
  `geocode` varchar(255) DEFAULT NULL,
  `area` double DEFAULT NULL,
  `house_type` varchar(100) DEFAULT NULL,
  `floor` varchar(100) DEFAULT NULL,
  `is_geocoded` varchar(50) DEFAULT 'n',
  `is_processed` varchar(50) DEFAULT 'n',
  PRIMARY KEY (`id`),
  KEY `index_for_key` (`room_detail_page_id`),
  KEY `index_of_station` (`station`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `room_detail_page`;

CREATE TABLE `room_detail_page` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `room_simple_id` int(11) DEFAULT NULL,
  `page_html` longtext,
  `updated_at` datetime DEFAULT NULL,
  `is_processed` varchar(50) DEFAULT 'n',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `room_list`;

CREATE TABLE `room_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `run_key_id` int(11) NOT NULL,
  `page` int(11) DEFAULT NULL,
  `page_html` longtext,
  `created_at` datetime DEFAULT NULL,
  `is_processed` char(50) DEFAULT 'n',
  PRIMARY KEY (`id`),
  KEY `runkey__id` (`run_key_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `room_simple`;

CREATE TABLE `room_simple` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `room_list_id` int(11) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `station` varchar(100) DEFAULT NULL,
  `is_processed` varchar(50) DEFAULT 'n',
  PRIMARY KEY (`id`),
  KEY `station_index` (`station`),
  KEY `is_processed_index` (`is_processed`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `run_key`;

CREATE TABLE `run_key` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `base_url` varchar(100) NOT NULL,
  `level` int(11) DEFAULT NULL,
  `station` varchar(100) DEFAULT NULL,
  `page` int(11) DEFAULT NULL,
  `is_processed` char(20) NOT NULL DEFAULT 'n',
  PRIMARY KEY (`id`),
  KEY `index_of_is_processed` (`is_processed`,`level`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `search_house`;

CREATE TABLE `search_house` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `house_url` varchar(200) DEFAULT NULL,
  `house_title` varchar(100) DEFAULT NULL,
  `house_area` double DEFAULT NULL,
  `house_floor` varchar(10) DEFAULT NULL,
  `house_model` varchar(10) DEFAULT NULL,
  `house_traffic` varchar(200) DEFAULT NULL,
  `house_subway` varchar(200) DEFAULT NULL,
  `house_geocode` varchar(50) DEFAULT NULL,
  `house_price` int(11) DEFAULT NULL,
  `house_rent` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
