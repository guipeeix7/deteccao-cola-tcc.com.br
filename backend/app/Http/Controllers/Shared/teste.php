SELECT POSICAO.nomePosicao,  COUNT(QUESTAO.idQuestao) AS Corrects
FROM PROVA
INNER JOIN abrange ON PROVA.idProva = abrange.idProva
INNER JOIN QUESTAO ON abrange.idQuestao = QUESTAO.idQuestao
INNER JOIN vinculada ON QUESTAO.idQuestao = vinculada.idQuestao
INNER JOIN POSICAO ON vinculada.idMateria = POSICAO.idMateria
LEFT JOIN responde ON QUESTAO.idQuestao = responde.idQuestao
WHERE PROVA.idProva = 2257
AND responde.idUser = 117
GROUP BY POSICAO.idMateria;
