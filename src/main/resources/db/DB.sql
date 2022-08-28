/*CREATE SEQUENCE hibernate_sequence START 1;

create table product(
    id bigint primary key,
    product_category varchar not null,
    name varchar not null,
    info varchar not null,
    price bigint not null,
    active boolean not null default false

);

/*insert into product(id,product_category,name,info,price,active) values (0,text('stol'),text('stol'),'stol1',12,true);*/*/