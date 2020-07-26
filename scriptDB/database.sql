    
CREATE DATABASE portfolio;

USE portfolio;

CREATE TABLE portfolio(
id_portfolio INTEGER AUTO_INCREMENT,
descricao VARCHAR (255) NULL,
detalhes TEXT NULL,
PRIMARY KEY (id_portfolio) );

INSERT INTO portfolio(descricao,detalhes)
VALUES('Desenvolvimento de websites','Tecnologias Javascript , Nodejs, Express e MySQL');
INSERT INTO portfolio(descricao,detalhes)
VALUES('Desenvolvimento de API','Tecnologias Javascript , Nodejs, Express e MySQL');