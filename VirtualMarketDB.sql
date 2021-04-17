

use VirtualMarket

DROP TABLE tbl_usuario
DROP TABLE tbl_producto
DROP TABLE tbl_carrito
DROP TABLE tbl_producto_carrito
DROP TABLE tbl_checkout

CREATE TABLE tbl_usuario (
	IdUsuario INT AUTO_INCREMENT NOT NULL,
    NombreUsuario VARCHAR(50) NOT NULL,
    Contraseña VARCHAR(50) NOT NULL,
    PRIMARY KEY(IdUsuario)
)	

CREATE TABLE tbl_producto (
	IdProducto INT AUTO_INCREMENT NOT NULL,
    Categoria VARCHAR(20) NOT NULL,
    Nombre VARCHAR(35) NOT NULL,
    Cantidad INT NOT NULL,
    Precio DECIMAL(10,2) NOT NULL,
    FechaRegistro DATETIME,	
    PRIMARY KEY(IdProducto)
)

CREATE TABLE tbl_carrito (
	IdCarrito INT AUTO_INCREMENT NOT NULL,
    IdProducto INT NOT NULL,
    IdUsuario INT NOT NULL,
    PRIMARY KEY(IdCarrito),
    FOREIGN KEY(IdProducto) REFERENCES tbl_producto(IdProducto),
    FOREIGN KEY(IdUsuario) REFERENCES tbl_usuario(IdUsuario)
)

CREATE TABLE tbl_producto_carrito (
	IdProductoCarrito INT AUTO_INCREMENT NOT NULL,
    IdCarrito INT NOT NULL,
    IdProducto INT NOT NULL,
    PRIMARY KEY(IdProductoCarrito),
    FOREIGN KEY(IdCarrito) REFERENCES tbl_carrito(IdCarrito),
    FOREIGN KEY(IdProducto) REFERENCES tbl_producto(IdProducto)
)

CREATE TABLE tbl_checkout (
	IdCheckout INT AUTO_INCREMENT NOT NULL,
    IdCarrito INT NOT NULL,
    SubTotal DECIMAL(10,2) NOT NULL,
    ITBIS DECIMAL(10,2) NOT NULL,
    Total DECIMAL(10,2) NOT NULL,
    TipoTarjeta BIT NOT NULL,
    PRIMARY KEY(IdCheckout),
    FOREIGN KEY(IdCarrito) REFERENCES tbl_carrito(IdCarrito)
)


-- stored procedure

DELIMITER $$
CREATE PROCEDURE  InsertarCarrito
(
	in IdCarrito  INT,
    in IdProducto INT,
    in IdUsuario  INT
)
BEGIN
insert into tbl_carrito(IdCarrito,IdProducto,IdUsuario) values(IdCarrito,IdProducto,IdUsuario);
END;
drop PROCEDURE  InsertarCarrito

DELIMITER $$

CREATE PROCEDURE  InsertarCheckout
(
    in IdCheckout INT,
	in IdCarrito  INT,
    in SubTotal decimal (10,2),
    in ITBIS DECIMAL(10,2),
    in Total DECIMAL(10,2),
    in TipoTarjeta BIT 
)
BEGIN
insert into tbl_checkout(IdCheckout,IdCarrito,SubTotal,ITBIS,Total,TipoTarjeta) values(IdCheckout,IdCarrito,SubTotal,ITBIS,Total,TipoTarjeta);
END;


DELIMITER $$
CREATE PROCEDURE  InsertarProducto_Carrito
(
    in IdProductoCarrito INT,
	in IdCarrito  INT,
    in IdProducto INT
)
BEGIN
insert into tbl_producto_carrito(IdProductoCarrito,IdCarrito,IdProducto) values(IdProductoCarrito,IdCarrito,IdProducto);
END;


DELIMITER $$
CREATE PROCEDURE  InsertarUsuario
(
	in IdUsuario INT,
    in NombreUsuario VARCHAR(50),
    in Contrasena VARCHAR(50) 
)
BEGIN
insert into tbl_usuario(IdUsuario,NombreUsuario,Contrasena) values(IdUsuario,NombreUsuario,Contrasena);
END;

DELIMITER $$
CREATE PROCEDURE  InsertarProducto
(
	in IdProducto INT,
    in Categoria VARCHAR(20),
    in Nombre VARCHAR(35),
    in Cantidad INT ,
    in Precio DECIMAL(10,2),
    in FechaRegistro DATETIME
)
BEGIN
insert into tbl_producto(IdProducto,Categoria,Nombre,Cantidad,Precio,FechaRegistro) values(IdProducto,Categoria,Nombre,Cantidad,Precio,FechaRegistro);
END;


DELIMITER $$
CREATE PROCEDURE EliminarCheckout
(
in IdCheckout int
)

BEGIN
delete from tbl_checkout where IdCheckout='IdCheckout';
END;

DELIMITER $$
CREATE PROCEDURE EliminarProductoCarrito
(
in IdProductoCarrito int
)

BEGIN
delete from tbl_producto_carrito where IdProductoCarrito='IdProductoCarrito';
END;


DELIMITER $$
CREATE PROCEDURE EliminarCarrito
(
in IdCarrito int
)

BEGIN
delete from tbl_carrito where Idcarrito='Idcarrito';
END;


DELIMITER $$
CREATE PROCEDURE EliminarProducto
(
in IdProducto int
)

BEGIN
delete from tbl_producto where IdProducto='IdProducto';
END;


DELIMITER $$
CREATE PROCEDURE EliminarUsuario
(
in IdUsuario int
)

BEGIN
delete from tbl_usuario where IdUsuario='IdUsuario';
END;


DELIMITER $$
CREATE PROCEDURE obtenerProductos(IN IdProducto INT)
BEGIN
    SELECT * 
    FROM productos
    WHERE IdProducto = IdProducto;
END;


