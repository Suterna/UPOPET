-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-02-2020 a las 22:40:10
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `upopet`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

CREATE TABLE `citas` (
  `codVeterinario` int(3) NOT NULL,
  `codCliente` int(3) NOT NULL,
  `codChip` int(3) NOT NULL,
  `fechaCita` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `citas`
--

INSERT INTO `citas` (`codVeterinario`, `codCliente`, `codChip`, `fechaCita`) VALUES
(12, 1, 12, '2020-02-06'),
(18, 2, 13, '2020-03-03'),
(19, 3, 17, '2020-08-14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `codCliente` int(3) NOT NULL,
  `nombre` varchar(25) COLLATE utf8mb4_spanish_ci NOT NULL,
  `apellidos` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `telefono` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`codCliente`, `nombre`, `apellidos`, `telefono`) VALUES
(1, 'Lola', 'Mento', 111111111),
(2, 'Aitor', 'Menta', 222222222),
(3, 'Juan', 'Palomo', 333333333);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascotas`
--

CREATE TABLE `mascotas` (
  `codChip` int(3) NOT NULL,
  `codCliente` int(3) NOT NULL,
  `raza` varchar(15) COLLATE utf8mb4_spanish_ci NOT NULL,
  `sexo` char(1) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `mascotas`
--

INSERT INTO `mascotas` (`codChip`, `codCliente`, `raza`, `sexo`) VALUES
(12, 1, 'Perro', 'M'),
(13, 1, 'Gato', 'H'),
(14, 3, 'Leon', 'M'),
(15, 3, 'Pantera', 'M'),
(16, 2, 'Flamenco', 'M'),
(17, 2, 'Caimán', 'H');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `veterinarios`
--

CREATE TABLE `veterinarios` (
  `codVeterinario` int(3) NOT NULL,
  `nombre` varchar(20) COLLATE utf8mb4_spanish_ci NOT NULL,
  `apellidos` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `telefono` int(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `veterinarios`
--

INSERT INTO `veterinarios` (`codVeterinario`, `nombre`, `apellidos`, `telefono`) VALUES
(12, 'Jose Luis', 'Diaz', 608208536),
(18, 'Alvaro', 'Alvarez', 608208535),
(19, 'Natalia', 'Zarzuela', 678478987);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `citas`
--
ALTER TABLE `citas`
  ADD KEY `FK_codCliente` (`codCliente`) USING BTREE,
  ADD KEY `FK_codVeterinario` (`codVeterinario`) USING BTREE,
  ADD KEY `FK_codChip` (`codChip`) USING BTREE;

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`codCliente`);

--
-- Indices de la tabla `mascotas`
--
ALTER TABLE `mascotas`
  ADD PRIMARY KEY (`codChip`),
  ADD KEY `FK_codCliente` (`codCliente`);

--
-- Indices de la tabla `veterinarios`
--
ALTER TABLE `veterinarios`
  ADD PRIMARY KEY (`codVeterinario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mascotas`
--
ALTER TABLE `mascotas`
  MODIFY `codChip` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `veterinarios`
--
ALTER TABLE `veterinarios`
  MODIFY `codVeterinario` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `citas`
--
ALTER TABLE `citas`
  ADD CONSTRAINT `FK_codChip` FOREIGN KEY (`codChip`) REFERENCES `mascotas` (`codChip`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_codCliente_2` FOREIGN KEY (`codCliente`) REFERENCES `clientes` (`codCliente`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_codVeterinario` FOREIGN KEY (`codVeterinario`) REFERENCES `veterinarios` (`codVeterinario`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `mascotas`
--
ALTER TABLE `mascotas`
  ADD CONSTRAINT `FK_codCliente` FOREIGN KEY (`codCliente`) REFERENCES `clientes` (`codCliente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
