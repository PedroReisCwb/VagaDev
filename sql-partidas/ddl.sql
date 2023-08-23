CREATE TABLE jogadores (
    id INT AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE partidas(
    id INT AUTO_INCREMENT,
    jogador1_id INT NOT NULL,
    jogador2_id INT NOT NULL,
    jogador1_pontos INT NOT NULL,
    jogador2_pontos INT NOT NULL,
    duracao FLOAT NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT FK_partidas_jogador1 FOREIGN KEY (jogador1_id) REFERENCES jogadores(id),
    CONSTRAINT FK_partidas_jogador2 FOREIGN KEY (jogador2_id) REFERENCES jogadores(id)
);