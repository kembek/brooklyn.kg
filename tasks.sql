-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Сен 08 2018 г., 12:43
-- Версия сервера: 5.7.20-log
-- Версия PHP: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `b_db`
--

-- --------------------------------------------------------

--
-- Структура таблицы `tasks`
--

CREATE TABLE `tasks` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(80) NOT NULL,
  `description` longtext,
  `category_id` int(10) UNSIGNED DEFAULT NULL,
  `text` longtext NOT NULL,
  `translate` longtext NOT NULL,
  `translate_id` int(10) UNSIGNED NOT NULL,
  `is_status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `description`, `category_id`, `text`, `translate`, `translate_id`, `is_status`, `created_at`, `updated_at`) VALUES
(13, 'Перевод', '', 1, 'Never give up!', 'Не когда не сдавайся!', 2, 1, '2018-09-08 13:16:26', '2018-09-08 13:16:26'),
(21, 'Перевод', '', 1, 'My level is beginner', 'У меня начинающий уровень ', 2, 1, '2018-09-08 13:21:05', '2018-09-08 13:22:52'),
(22, 'Перевод', '', 1, 'My is bigger ', 'Мой больше ', 2, 1, '2018-09-08 13:25:15', '2018-09-08 13:25:15'),
(23, 'Перевод ', '', 1, 'I do not know', 'Я не знаю', 2, 1, '2018-09-08 13:25:46', '2018-09-08 13:25:46'),
(24, 'Перевод ', '', 1, 'I do not understand ', 'Я не понял', 2, 1, '2018-09-08 13:26:27', '2018-09-08 13:26:27'),
(25, 'Перевод ', '', 1, 'Can you reapeat?', 'Вы можете повторить?', 2, 1, '2018-09-08 13:28:13', '2018-09-08 13:28:13'),
(26, 'Перевод ', '', 1, 'Can you explain? ', 'Вы можете объяснить?', 2, 1, '2018-09-08 13:30:03', '2018-09-08 13:30:03'),
(27, 'Перевод ', '', 1, 'Can you explain? ', 'Вы можете объяснить?', 2, 1, '2018-09-08 13:30:03', '2018-09-08 13:30:03'),
(28, 'Перевод ', '', 1, 'I like it', 'Мне это нравится ', 2, 1, '2018-09-08 13:30:47', '2018-09-08 13:30:47'),
(29, 'Перевод ', '', 1, 'Dreams come true ', 'Мечты сбываются ', 2, 1, '2018-09-08 13:32:00', '2018-09-08 13:32:00');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tasks_category_id_foreign` (`category_id`),
  ADD KEY `tasks_translate_id_foreign` (`translate_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tasks_translate_id_foreign` FOREIGN KEY (`translate_id`) REFERENCES `translates` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
