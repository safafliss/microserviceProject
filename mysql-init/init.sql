CREATE USER 'spring'@'%' IDENTIFIED BY 'spring';
GRANT ALL PRIVILEGES ON *.* TO 'spring'@'%';
FLUSH PRIVILEGES;