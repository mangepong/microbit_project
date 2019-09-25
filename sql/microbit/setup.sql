DROP DATABASE IF EXISTS microbit;

CREATE DATABASE microbit;

DROP USER IF EXISTS 'user'@'%';

CREATE USER IF NOT EXISTS 'user'@'%'
    IDENTIFIED WITH mysql_native_password
    BY 'pass'
;

-- Ge användaren alla rättigheter på en specifik databas.
GRANT ALL PRIVILEGES
    ON *.*
    TO 'user'@'%'
;
