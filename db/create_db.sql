create table houses (
  id serial primary key, 
  name varchar(30) not null, 
  address varchar(100) not null, 
  city varchar(100) not null, 
  state varchar(2) not null, 
  zip int not null,
  img text, 
  mortgage decimal, 
  rent decimal

) 