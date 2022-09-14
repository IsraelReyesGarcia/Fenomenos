use slimdevelopers

delimiter $
create procedure consultarProyecto(in id int)
    begin
        declare id int(11);
        start transaction;
            select 
             
