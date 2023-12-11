
-- Replace 'open' with any string you want to search for... see below
select * from procedures
where name ilike '%open%';

-- select * from procedures
-- where name ilike '%$1%';