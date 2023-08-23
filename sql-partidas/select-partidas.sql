SELECT 
    jogador_1.nome, jogador_2.nome
FROM
    partidas
        JOIN
    jogadores AS jogador_1 ON jogador_1.id = partidas.jogador1_id
        JOIN
    jogadores AS jogador_2 ON jogador_2.id = partidas.jogador2_id
WHERE
    (jogador1_pontos + jogador2_pontos) > 30 AND duracao > 90
    GROUP BY jogador1_id, jogador2_id
    HAVING COUNT(jogador_1.id) >= 2;