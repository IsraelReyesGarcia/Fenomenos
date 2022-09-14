use fenomenoPluvial;

delimiter $
create procedure registrarDeclaratoria(in fenomeno varchar(100), in causas varchar(110), 
in estado varchar(100), in municipio varchar(100), in cp int, in fecha_registro date, 
in fecha_inicio date, in fecha_fin date)
    begin
        declare idD int(11);
        declare idM int(11);
        start transaction;
            insert into declaratoria(fenomeno,causas, fecha_registro,fecha_inicio,fecha_fin) 
            values(fenomeno,causas,fecha_registro,fecha_inicio,fecha_fin);
            set idD = (select max(id_declaratoria) from declaratoria);
            insert into municipio(nombre,cp) values(municipio,cp);
            set idM = (select max(id_municipio) from municipio);
            insert into estado(nombre,id_municipio) values(estado,idM);
            insert into declaratoria_municipio values(idD,idM);
        commit;
    end 
$;


/* PROCEDIMIENTO PARA REGISTRAR NIVELES DE MAR */
delimiter $
create procedure registrarNivelMar(in fenomeno nvarchar(100), in causas nvarchar(110), 
in estado nvarchar(100), in municipio nvarchar(100), in cp int, in fecha_registro date, 
in fecha_inicio date, in fecha_fin date, in nombre_mar nvarchar(100), in nivel_mar dec(7,3))
    begin
        declare idD int;
        declare idM int;
        start transaction;
            insert into declaratoria(fenomeno,causas, fecha_registro,fecha_inicio,fecha_fin) 
            values(fenomeno,causas,fecha_registro,fecha_inicio,fecha_fin);
            set idD = (select max(id_declaratoria) from declaratoria);
            insert into municipio(nombre,cp) values(municipio,cp);
            set idM = (select max(id_municipio) from municipio);
            insert into estado(nombre,id_municipio) values(estado,idM);
            insert into declaratoria_municipio values(idD,idM);
            insert into mar(id_declaratoria, nombre, nivel_mar) values (idD,nombre_mar,nivel_mar);
        commit;
    end 
$

/* PROCEDIMIENTO PARA REGISTRAR NIVELES DE RIOS */
delimiter $
create procedure registrarNivelRio(in fenomeno nvarchar(100), in causas nvarchar(110), 
in estado nvarchar(100), in municipio nvarchar(100), in cp int, in fecha_registro date, 
in fecha_inicio date, in fecha_fin date, in nombre_rio nvarchar(100), in nivel_rio dec(7,3))
    begin
        declare idD int;
        declare idM int;
        start transaction;
            insert into declaratoria(fenomeno,causas, fecha_registro,fecha_inicio,fecha_fin) 
            values(fenomeno,causas,fecha_registro,fecha_inicio,fecha_fin);
            set idD = (select max(id_declaratoria) from declaratoria);
            insert into municipio(nombre,cp) values(municipio,cp);
            set idM = (select max(id_municipio) from municipio);
            insert into estado(nombre,id_municipio) values(estado,idM);
            insert into declaratoria_municipio values(idD,idM);
            insert into mar(id_declaratoria, nombre, nivel_rio) values (idD,nombre_rio,nivel_rio);
        commit;
    end 
$

