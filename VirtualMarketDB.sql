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