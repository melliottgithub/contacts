CREATE TABLE interviews (
    id bigserial,
    contact_id varchar(25),
    contact_fullname varchar(60),
    appointment_date timestamp,
    stage varchar(15)
);

/*
insert into interviews
(id, contact_id, contact_fullname, appointment_date, stage)
values (1, '11111111', 'Company Inc', CURRENT_TIMESTAMP, 'contact');

*/


SELECT stage, count(*), 
(SELECT count(*) FROM interviews) countAll
FROM interviews
GROUP BY stage;