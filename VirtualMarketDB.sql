use VirtualMarket

CREATE TABLE Tbl_Usuario(
IdUsuario int primary key not null,
Nombre varchar(40) not null,
Apellido varchar(40) not null,
Contacto char(10)
)

CREATE TABLE TblCategoria(
IdCategoria int primary key not null,
NombreCategoria varchar(40) not null,
Descripcion varchar(200) not null
)
Drop TABLE TblCategoria

CREATE TABLE TblProducto(
IdProducto  int primary key not null,
IdCategoria int not null,
Nombre varchar(40) not null,
Precio decimal(8,2)not nuu,
FechaRegistro Date not null,
FOREIGN KEY (IdCategoria) REFERENCES TblCategoria(IdCategoria)
)