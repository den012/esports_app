-- Player Data
INSERT INTO PLAYER(player_id, player_first_name, player_last_name, player_nickname, player_birthday, player_image, player_nationality, player_role)
VALUES
-- Astralis
(1, 'Nicolai', 'Reedtz', 'de1vice', '1995-09-08', 'https://escorenews.com/media/news/n56211.jpeg', 'DE', 'AWPer'),
(2, 'Lukas', 'Rossander', 'gla1ve', '1995-06-07', '', 'DE', 'IGL'),
(3, 'Benjamin', 'Brekke', 'BlameF', '1997-06-19', '', 'DE', 'Rifler'),
(4, 'Christian', 'Andersen', 'Buzz', '2003-05-19', '', 'DE', 'Entry Fragger'),
(5, 'Victor', 'Staehr', 'Staehr', '2002-03-22', '', 'DE', 'Rifler'),

-- Navi
(6, 'Aleksandr', 'Kostyliev', 's1mple', '1997-10-02', 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRsMtsPWy-gf5Z6JT_H90RjdfVtnH0oq1WzKKfX0T5_R0Oit9-_Fm2H5VfrQiqqVqql52QqgfcmjyKzgYw', 'UA', 'Rifler'),
(7, 'Valerii', 'Vakhovskyi', 'B1t', '2003-01-05', '', 'UA', 'Rifler'),
(8, 'Justinas', 'Lekavicius', 'jL', '2001-08-05', '', 'LT', 'Entry Fragger'),
(9, 'Mihai', 'Ivan', 'iM', '2000-06-18', '', 'RO', 'Rifler'),
(10, 'Aleksi', 'Virolainen', 'Aleksib', '1997-03-30', '', 'FI', 'IGL'),
-- Furia
(11, 'Gabriel', 'Toledo', 'FalleN', '1991-05-30', 'https://thebusinessofesports.com/wp-content/uploads/2022/03/FalleN_@_PGL_Major_Stockholm_2021.jpg', 'BR', 'IGL'),
(12, 'Kaike', 'Cerato', 'KSCERATO', '1999-10-11', '', 'BR', 'Rifler'),
(13, 'Yuri', 'Santos', 'yuurih', '1999-07-30', '', 'BR', 'Rifler'),
(14, 'Marcelo', 'Cespedes', 'Chelo', '1998-11-01', '', 'BR', 'Support'),
(15, 'Andre', 'Abreu', 'drop', '2000-06-06', '', 'BR', 'Support'),
-- 00Nation
(16, 'Marcelo', 'David', 'coldzera', '1994-10-31', 'https://res.cloudinary.com/pley-gg/image/upload/c_fill/v1/players/Copyright_-_Jak-Howard_-_Coldzera_uroarp', 'BR', 'Rifler'),
(17, 'Eduardo', 'Wolff', 'dumau', '2003-10-02', '', 'BR', 'Rifler'),
(18, 'Bruno', 'Nakano', 'latto', '2002-06-05', '', 'BR', 'Entry Fragger'),
(19, 'Lucas', 'Soares', 'nqz', '2005-05-15', '', 'BR', 'AWPer'),
(20, 'Carlos', 'Alves', 'skullz', '2002-08-30', '', 'BR', 'Rifler'),
-- Falcons
(21, 'Kenny', 'Schrub', 'kennyS', '1995-05-19', 'https://www.dexerto.fr/cdn-image/wp-content/uploads/sites/2/2021/03/kennys-envisagerait-de-passer-sur-valorant-apres-sa-mise-a-lecart-de-g2.jpg', 'FR', 'AWPer'),
(22, 'Nathan', 'Schmitt', 'NBK-', '1994-06-05', '', 'FR', 'Support'),
(23, 'Bryan', 'Ferrand', 'Maka', '1997-10-01', '', 'FR', 'AWPer'),
(24, 'Jordan', 'Graves', 'Python', '2000-04-20', '', 'FR', 'Rifler'),
(25, 'Aurélien', 'Lemaître', 'misutaaa', '2003-08-26', '', 'FR', 'Rifler'),
-- Apeks Legends
(26, 'Richard', 'Papillon', 'shox', '1992-05-27', 'https://sans-filtre.fr/wp-content/uploads/2018/07/67258919_2006028742835229_219857571995975680_o.jpg', 'FR', 'Entry Fragger'),
(27, 'Tim', 'Jonassen', 'nawwk', '1997-10-30', '', 'SE', 'AWPer'),
(28, 'Martin', 'Styk', 'STYKO', '1996-02-09', '', 'SK', 'Support'),
(29, 'Joakim', 'Myhre', 'jL', '2001-06-01', '', 'NO', 'Entry Fragger'),
(30, 'Jakub', 'Gurdziek', 'kuben', '1989-09-10', '', 'PL', 'Coach'),

-- Fnatic
(31, 'William', 'Mejer', 'mezii', '1999-04-02', '', 'GB', 'IGL'),
(32, 'Fredrik', 'Johansson', 'roeJ', '1994-05-22', '', 'DK', 'Entry Fragger'),
(33, 'Dion', 'Kay', 'volt', '2004-08-10', '', 'GB', 'Rifler'),
(34, 'Niclas', 'Gustafsson', 'nicoodoz', '1998-07-16', '', 'DK', 'AWPer'),
(35, 'Patrick', 'Hansen', 'Regali', '2002-01-15', '', 'RO', 'AWPer');

-- Team Data
INSERT INTO TEAM (team_id, team_name, team_image, team_location, team_acronym)
VALUES
(1, 'Astralis', '', 'Denmark', 'AST'),
(2, 'NaVi', '', 'Ukraine', 'NAVI'),
(3, 'FURIA', '', 'Brazil', 'FUR'),
(4, '00Nation', '', 'Brazil', '00N'),
(5, 'Falcons', '', 'France', 'FLC'),
(6, 'Apeks Legends', '', 'France', 'APX'),
(7, 'Fnatic', '', 'Sweden', 'FNC');

-- Team Player Data
INSERT INTO TEAM_PLAYER (team_id, player_id)
VALUES 
(1, 1), (1,2), (1,3), (1,4), (1,5),
(2, 6), (2,7), (2,8), (2,9), (2,10),
(3, 11), (3,12), (3,13), (3,14), (3,15),
(4, 16), (4,17), (4,18), (4,19), (4,20),
(5, 21), (5,22), (5,23), (5,24), (5,25),
(6, 26), (6,27), (6,28), (6,29), (6,30),
(7, 31), (7,32), (7,33), (7,34), (7,35);









-- Video Game Data
INSERT INTO VIDEOGAME (videogame_id, videogame_name, videogame_version, videogame_season)
VALUES 
(1, 'Counter-Strike: Global Offensive', '1.37.8.9', 'Season 2023'),
(2, 'Valorant', '6.07', 'Season 3'),
(3, 'League of Legends', '11.19', 'Season 2024'),
(4, 'Dota 2', '7.33', 'Season 2024');

-- Single Game Data (Best of 3 and Best of 5)
INSERT INTO SINGLE_GAME (game_id, game_begin_time, game_end_time, game_finished, game_forfeit, game_length, game_status, winner_team_id)
VALUES 
(1, '2024-11-10 14:00:00', '2024-11-10 14:15:00', TRUE, FALSE, 15, 'Completed', 1),  -- Astralis vs NaVi (Astralis won)
(2, '2024-11-10 14:15:00', '2024-11-10 14:30:00', TRUE, FALSE, 15, 'Completed', 2),  -- Astralis vs NaVi (NaVi won)
(3, '2024-11-10 14:30:00', '2024-11-10 14:45:00', TRUE, FALSE, 15, 'Completed', 1),  -- Astralis vs NaVi (Astralis won)

(4, '2024-11-11 12:00:00', '2024-11-11 12:15:00', TRUE, FALSE, 15, 'Completed', 8),  -- NiP vs Fnatic (NiP won)
(5, '2024-11-11 12:15:00', '2024-11-11 12:30:00', TRUE, FALSE, 15, 'Completed', 5),  -- NiP vs Fnatic (Fnatic won)
(6, '2024-11-11 12:30:00', '2024-11-11 12:45:00', TRUE, FALSE, 15, 'Completed', 8),  -- NiP vs Fnatic (NiP won)

(7, '2024-11-12 14:00:00', '2024-11-12 14:10:00', TRUE, FALSE, 10, 'Completed', 5),  -- Fnatic vs NiP (Fnatic won)
(8, '2024-11-12 14:10:00', '2024-11-12 14:20:00', TRUE, FALSE, 10, 'Completed', 8),  -- Fnatic vs NiP (NiP won)
(9, '2024-11-12 14:20:00', '2024-11-12 14:30:00', TRUE, FALSE, 10, 'Completed', 5),  -- Fnatic vs NiP (Fnatic won)

(10, '2024-11-13 16:00:00', '2024-11-13 16:20:00', TRUE, FALSE, 20, 'Completed', 5),  -- Fnatic vs Team Liquid (Fnatic won)
(11, '2024-11-13 16:20:00', '2024-11-13 16:40:00', TRUE, FALSE, 20, 'Completed', 6),  -- Fnatic vs Team Liquid (Team Liquid won)
(12, '2024-11-13 16:40:00', '2024-11-13 17:00:00', TRUE, FALSE, 20, 'Completed', 5),  -- Fnatic vs Team Liquid (Fnatic won)
(13, '2024-11-13 17:00:00', '2024-11-13 17:20:00', TRUE, FALSE, 20, 'Completed', 6),  -- Fnatic vs Team Liquid (Team Liquid won)
(14, '2024-11-13 17:20:00', '2024-11-13 17:40:00', TRUE, FALSE, 20, 'Completed', 5),  -- Fnatic vs Team Liquid (Fnatic won)

(15, '2024-11-14 14:00:00', '2024-11-14 14:20:00', TRUE, FALSE, 20, 'Completed', 6),  -- Team Liquid vs Fnatic (Team Liquid won)
(16, '2024-11-14 14:20:00', '2024-11-14 14:40:00', TRUE, FALSE, 20, 'Completed', 5),  -- Team Liquid vs Fnatic (Fnatic won)
(17, '2024-11-14 14:40:00', '2024-11-14 15:00:00', TRUE, FALSE, 20, 'Completed', 6),  -- Team Liquid vs Fnatic (Team Liquid won)

(18, '2024-11-15 15:00:00', '2024-11-15 15:30:00', TRUE, FALSE, 30, 'Completed', 7);

-- Tournament Data
INSERT INTO TOURNAMENT (tournament_id, tournament_name, tournament_location, tournament_begin_time, tournament_end_time, tournament_prize)
VALUES 
(1, 'DreamHack Masters', 'Stockholm, Sweden', '2024-11-10', '2024-11-15', '150.000$'),
(2, 'ESL Pro League', 'Berlin, Germany', '2024-11-12', '2024-11-20', '250.000$');

-- Match Data
INSERT INTO MATCHES (match_id, tournament_id, match_team1_id, match_team2_id, match_winner_team_id, match_begin_time, match_end_time)
VALUES 
(1, 1, 1, 2, 1, '2024-11-10 14:00:00', '2024-11-10 14:15:00'),
(2, 1, 3, 4, 2, '2024-11-10 14:15:00', '2024-11-10 14:30:00');