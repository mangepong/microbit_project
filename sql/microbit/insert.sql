SET GLOBAL local_infile = 1;
--
-- Insert into data tabell
--
DELETE FROM microbitdata;

LOAD DATA LOCAL INFILE 'data.csv'
INTO TABLE microbitdata
CHARSET utf8
FIELDS
    TERMINATED BY ','
    ENCLOSED BY '"'
LINES
    TERMINATED BY '\n'
IGNORE 1 LINES
;

SHOW WARNINGS;
