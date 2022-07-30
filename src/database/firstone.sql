--crearla
create database firstone;
use firstone;
create table player(
    id int(6) UNSIGNED auto_increment  primary key,
    name varchar(50) not null,
    message varchar(255) not null
);
show tables;
describe player;