-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 06 Eyl 2013, 23:39:02
-- Sunucu sürümü: 5.5.27
-- PHP Sürümü: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Veritabanı: `kh20`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `emailsettings`
--

CREATE TABLE IF NOT EXISTS `emailsettings` (
  `SMTPAddress` varchar(255) NOT NULL,
  `SMTPPort` int(11) NOT NULL,
  `EMailAddress` varchar(255) NOT NULL,
  `EMailPassword` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Tablo döküm verisi `emailsettings`
--

INSERT INTO `emailsettings` (`SMTPAddress`, `SMTPPort`, `EMailAddress`, `EMailPassword`) VALUES
('mail.polifoni.com.tr', 587, 'suha@polifoni.com.tr', 'SD7842.38726');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `guestbook`
--

CREATE TABLE IF NOT EXISTS `guestbook` (
  `CommentID` int(11) NOT NULL AUTO_INCREMENT,
  `SenderName` varchar(255) NOT NULL,
  `SenderEMail` varchar(255) NOT NULL,
  `SenderIP` varchar(15) NOT NULL,
  `SendTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Message` text NOT NULL,
  `IsOkay` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`CommentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `languages`
--

CREATE TABLE IF NOT EXISTS `languages` (
  `LangID` int(11) NOT NULL AUTO_INCREMENT,
  `LangName` varchar(255) NOT NULL,
  `LangShortName` varchar(2) NOT NULL,
  `LangFlagPath` varchar(255) NOT NULL,
  `LangStatus` int(11) NOT NULL DEFAULT '1',
  `LangOrder` int(11) NOT NULL DEFAULT '999',
  PRIMARY KEY (`LangID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Tablo döküm verisi `languages`
--

INSERT INTO `languages` (`LangID`, `LangName`, `LangShortName`, `LangFlagPath`, `LangStatus`, `LangOrder`) VALUES
(1, 'Türkçe', 'tr', '_uploads/flags/tr.png', 1, 999),
(2, 'English', 'en', '_uploads/flags/en.png', 1, 999),
(3, 'German', 'de', '_uploads/flags/de.png', 0, 999),
(4, 'Russian', 're', '_uploads/flags/ru.png', 0, 999),
(5, 'Holland', 'nl', '_uploads/flags/nl.png', 0, 999),
(6, 'French', 'fr', '_uploads/flags/fr.png', 0, 999);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `othersettings`
--

CREATE TABLE IF NOT EXISTS `othersettings` (
  `PageProfilPhotoWidth` int(11) NOT NULL,
  `PageProfilPhotoHeight` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Tablo döküm verisi `othersettings`
--

INSERT INTO `othersettings` (`PageProfilPhotoWidth`, `PageProfilPhotoHeight`) VALUES
(150, 150);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `pagephotos`
--

CREATE TABLE IF NOT EXISTS `pagephotos` (
  `PhotoID` int(11) NOT NULL AUTO_INCREMENT,
  `PageID` int(11) NOT NULL,
  `PhotoName` varchar(255) NOT NULL,
  `PhotoPath` varchar(255) NOT NULL,
  `PhotoTHPath` varchar(255) NOT NULL,
  `PhotoDescription` varchar(500) NOT NULL,
  `PhotoAddTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `PhotoStatus` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`PhotoID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `pages`
--

CREATE TABLE IF NOT EXISTS `pages` (
  `PageID` int(11) NOT NULL AUTO_INCREMENT,
  `SubPageID` int(11) NOT NULL DEFAULT '0',
  `LangID` int(11) NOT NULL DEFAULT '1',
  `PageTitle` varchar(255) NOT NULL,
  `PageSummary` text NOT NULL,
  `PageContent` text NOT NULL,
  `PageDescription` varchar(255) NOT NULL DEFAULT '-',
  `PageKeywords` varchar(255) NOT NULL DEFAULT '-',
  `PageSefLink` varchar(255) NOT NULL,
  `PageAddTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `PageLastEdit` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `PageIsStatic` int(11) NOT NULL DEFAULT '0',
  `PageStatus` int(11) NOT NULL DEFAULT '1',
  `PageHit` int(11) NOT NULL DEFAULT '0',
  `PageOrder` int(11) NOT NULL DEFAULT '999',
  `PageProfilePhoto` varchar(255) NOT NULL DEFAULT '-',
  PRIMARY KEY (`PageID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=67 ;

--
-- Tablo döküm verisi `pages`
--

INSERT INTO `pages` (`PageID`, `SubPageID`, `LangID`, `PageTitle`, `PageSummary`, `PageContent`, `PageDescription`, `PageKeywords`, `PageSefLink`, `PageAddTime`, `PageLastEdit`, `PageIsStatic`, `PageStatus`, `PageHit`, `PageOrder`, `PageProfilePhoto`) VALUES
(64, 0, 1, 'Deneme Sayfası2', '''''''''''''', '', '', '', 'deneme-sayfasi2', '2013-09-06 19:42:38', '2013-09-07 00:36:29', 0, 1, 0, 999, '_uploads/pages/profile/MTUyMmE0YWVjNjg1MjA.jpg'),
(65, 64, 1, 'Grafik Tasarımı', '''''''''''''''''''''''''', '', '', '', 'grafik-tasarimi', '2013-09-06 21:12:54', '2013-09-07 00:35:19', 0, 1, 0, 999, '_uploads/pages/profile/MTUyMmE0YWFlMjA1ZmM.jpg'),
(66, 65, 1, 'Dondurma Yapımı', '''''', '', '', '', 'dondurma-yapimi', '2013-09-06 21:16:56', '2013-09-07 00:18:12', 0, 1, 0, 999, '_uploads/pages/profile/MTUyMmE0NjlmMzhlMTE.jpg');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `sitesettings`
--

CREATE TABLE IF NOT EXISTS `sitesettings` (
  `SetID` int(11) NOT NULL AUTO_INCREMENT,
  `LangID` int(11) NOT NULL DEFAULT '1',
  `SiteTitle` varchar(255) NOT NULL DEFAULT '-',
  `SiteURL` varchar(255) NOT NULL DEFAULT '-',
  `SiteDescription` varchar(500) NOT NULL DEFAULT '-',
  `SiteKeyWords` varchar(500) NOT NULL DEFAULT '-',
  `SiteEMail` varchar(255) NOT NULL DEFAULT '-',
  `SiteStatus` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`SetID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Tablo döküm verisi `sitesettings`
--

INSERT INTO `sitesettings` (`SetID`, `LangID`, `SiteTitle`, `SiteURL`, `SiteDescription`, `SiteKeyWords`, `SiteEMail`, `SiteStatus`) VALUES
(1, 1, 'KH20 İçerik Yönetim Sistemi - Türkçe', 'http://localhost/GitHubProjects/kh20/', '-', '-', '-', 1),
(2, 2, 'KH20 Content Management System - İngilizce', 'http://localhost/GitHubProjects/kh20/', '-', '-', '-', 1);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `slides`
--

CREATE TABLE IF NOT EXISTS `slides` (
  `SlideID` int(11) NOT NULL AUTO_INCREMENT,
  `SlideTitle` varchar(255) NOT NULL DEFAULT '-',
  `SlideDescription` varchar(500) NOT NULL DEFAULT '-',
  `SlidePath` varchar(255) NOT NULL,
  `SlideTHPath` varchar(255) NOT NULL,
  `SlideAddDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `SlideStatus` int(11) NOT NULL DEFAULT '1',
  `SlideOrder` int(11) NOT NULL DEFAULT '999',
  `LangID` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`SlideID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=23 ;

--
-- Tablo döküm verisi `slides`
--

INSERT INTO `slides` (`SlideID`, `SlideTitle`, `SlideDescription`, `SlidePath`, `SlideTHPath`, `SlideAddDate`, `SlideStatus`, `SlideOrder`, `LangID`) VALUES
(14, '-', '-', '_uploads/slides/MTUyMjQ5Mzg0ODY2YTg.jpg', '_uploads/slides/thumbs/TH-MTUyMjQ5Mzg3OTNmOWU.jpg', '2013-09-02 13:32:57', 1, 1, 1),
(15, 'Ayıcık', 'Tatlı şey', '_uploads/slides/MTUyMjQ5Mzg5NDYxNDQ.jpg', '_uploads/slides/thumbs/TH-MTUyMjQ5MzhjM2ZkZmY.jpg', '2013-09-02 13:33:01', 1, 0, 1),
(16, '-', '-', '_uploads/slides/MTUyMjQ5MzhkYjlkMDg.jpg', '_uploads/slides/thumbs/TH-MTUyMjQ5MzkwY2ZkYTA.jpg', '2013-09-02 13:33:06', 1, 4, 1),
(17, 'ingilizce', '-', '_uploads/slides/MTUyMjQ5NDJkNTIxNTk.jpg', '_uploads/slides/thumbs/TH-MTUyMjQ5NDMwN2NhYzc.jpg', '2013-09-02 13:35:46', 1, 0, 2),
(18, '-', '-', '_uploads/slides/MTUyMjQ5ZjhmY2MwZTU.jpg', '_uploads/slides/thumbs/TH-MTUyMjQ5ZjkyMDBmMGQ.jpg', '2013-09-02 14:24:18', 1, 1, 2),
(19, 'Türkçe', '-', '_uploads/slides/MTUyMjg3YzUzODZhNmQ.jpg', '_uploads/slides/thumbs/TH-MTUyMjg3YzU3NWE3NTU.jpg', '2013-09-05 12:43:05', 1, 2, 1),
(20, '-', '-', '_uploads/slides/MTUyMjg3ZDJmMjBlNzQ.jpg', '_uploads/slides/thumbs/TH-MTUyMjg3ZDMzYWNkZDU.jpg', '2013-09-05 12:46:46', 1, 2, 2),
(21, '-', '-', '_uploads/slides/MTUyMjg4Y2I0NWY5MjM.jpg', '_uploads/slides/thumbs/TH-MTUyMjg4Y2I2NGJjMzE.jpg', '2013-09-05 13:52:54', 1, 999, 2),
(22, '-', '-', '_uploads/slides/MTUyMjg4Y2RkNTRjZTk.jpg', '_uploads/slides/thumbs/TH-MTUyMjg4Y2RmNTk3Yjc.jpg', '2013-09-05 13:53:35', 1, 3, 1);

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `socialnetwork`
--

CREATE TABLE IF NOT EXISTS `socialnetwork` (
  `Facebook` varchar(255) NOT NULL,
  `Twitter` varchar(255) NOT NULL,
  `Google` varchar(255) NOT NULL,
  `Pinterest` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Tablo döküm verisi `socialnetwork`
--

INSERT INTO `socialnetwork` (`Facebook`, `Twitter`, `Google`, `Pinterest`) VALUES
('http://www.facebook.com', 'http://www.twitter.com', 'http://www.google.com', 'http://www.pinterest.com');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `UserID` int(11) NOT NULL AUTO_INCREMENT,
  `UserFullName` varchar(255) NOT NULL,
  `UserName` varchar(255) NOT NULL,
  `UserPassword` varchar(255) NOT NULL,
  `UserEMail` varchar(255) NOT NULL,
  `UserTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UserLastLogin` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `UserRole` int(11) NOT NULL DEFAULT '2',
  `UserIsActive` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- Tablo döküm verisi `users`
--

INSERT INTO `users` (`UserID`, `UserFullName`, `UserName`, `UserPassword`, `UserEMail`, `UserTime`, `UserLastLogin`, `UserRole`, `UserIsActive`) VALUES
(1, 'Süha DURAN', 'suhaduran', 'd3786ec2413a8cd9413bfcb24be95a73', 'suhaduran@gmail.com', '2013-08-26 09:25:36', '2013-09-06 16:52:35', 2, 1),
(12, 'Can Kanber DEMİR', 'candemir', '508c595924ab616ed633a88dbe5dc7c0', 'can@cizgiajans.com', '2013-09-03 09:54:10', '0000-00-00 00:00:00', 2, 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
