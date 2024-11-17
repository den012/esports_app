-- Player Data
INSERT INTO PLAYER(player_id, player_first_name, player_last_name, player_nickname, player_birthday, player_image, player_nationality, player_role)
VALUES
(1, 'Nicolai', 'Reedtz', 'de1vice', '1995-09-08', 'https://liquipedia.net/commons/images/e/e4/Dev1ce_at_Copenhagen_Major_2024_EU_RMR.jpg', 'De', 'AWPer'),
(2, 'Aleksandr', 'Kostyliev', 's1mple', '1997-10-02', 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRsMtsPWy-gf5Z6JT_H90RjdfVtnH0oq1WzKKfX0T5_R0Oit9-_Fm2H5VfrQiqqVqql52QqgfcmjyKzgYw', 'Ua', 'Rifler'),
(3, 'Gabriel', 'Toledo', 'FalleN', '1991-05-30', 'https://liquipedia.net/commons/images/0/0e/FalleN_at_IEM_Katowice_2024.jpg', 'Br', 'IGL'),
(4, 'Marcelo', 'David', 'coldzera', '1994-10-31', 'https://liquipedia.net/commons/images/0/08/Coldzera_at_Copenhagen_Major_2024_AME_RMR.jpg', 'Br', 'Rifler'),
(5, 'Nikola', 'Kovac', 'NiKo', '1997-02-16', 'https://www.dexerto.com/cdn-image/wp-content/uploads/2022/03/04/g2-esports-niko-settings.jpg', 'Ba', 'Rifler'),
(6, 'Kenny', 'Schrub', 'kennyS', '1995-05-19', 'https://liquipedia.net/commons/images/0/0e/KennyS_at_BLAST_Paris_Major_2023_EU_RMR.jpeg', 'Fr', 'AWPer'),
(7, 'Patrik', 'Lindberg', 'f0rest', '1988-06-10', 'https://liquipedia.net/commons/images/5/5c/F0rest_at_IEM_Dallas_2023.jpg', 'Se', 'Rifler'),
(8, 'Richard', 'Papillon', 'shox', '1992-05-27', 'https://liquipedia.net/commons/images/thumb/0/0d/Shox_%40_PGL_Antwerp_2022_Americas_RMR.jpg/450px-Shox_%40_PGL_Antwerp_2022_Americas_RMR.jpg', 'Fr', 'Entry Fragger'),
(9, 'Freddy', 'Johansson', 'KRIMZ', '1994-04-25', 'https://liquipedia.net/commons/images/thumb/7/7c/KRIMZ_at_ESL_Pro_League_S18.jpg/600px-KRIMZ_at_ESL_Pro_League_S18.jpg', 'Se', 'Support'),
(10, 'Jonathan', 'Jablonowski', 'EliGE', '1997-07-07', 'https://liquipedia.net/commons/images/8/8b/EliGE_at_PGL_Major_Copenhagen_2024.jpg', 'Us', 'Entry Fragger');


















-- Team Data
INSERT INTO TEAM (team_id, team_name, team_image, team_location, team_acronym)
VALUES 
(1, 'Astralis', 'astralis.jpg', 'Copenhagen, Denmark', 'AST'),
(2, 'Natus Vincere', 'navi.jpg', 'Kyiv, Ukraine', 'NAVI'),
(3, 'FURIA Esports', 'furia.jpg', 'São Paulo, Brazil', 'FUR'),
(4, 'G2 Esports', 'g2.jpg', 'Berlin, Germany', 'G2'),
(5, 'Fnatic', 'https://randomuser.me/api/portraits/men/5.jpg', 'London, UK', 'FNC'),
(6, 'Team Liquid', 'https://randomuser.me/api/portraits/men/6.jpg', 'Utrecht, Netherlands', 'TL'),
(7, 'Complexity Gaming', 'https://randomuser.me/api/portraits/men/7.jpg', 'Dallas, USA', 'COL'),
(8, 'Ninjas in Pyjamas', 'https://randomuser.me/api/portraits/men/8.jpg', 'Stockholm, Sweden', 'NIP');

-- Team Player Data
INSERT INTO TEAM_PLAYER (team_id, player_id)
VALUES 
(1, 1),  -- dev1ce in Astralis
(2, 2),  -- s1mple in NaVi
(3, 3),  -- FalleN in FURIA
(3, 4),  -- coldzera in FURIA
(4, 5),  -- NiKo in G2
(5, 7),  -- f0rest in Fnatic
(5, 9),  -- KRIMZ in Fnatic
(6, 10), -- EliGE in Team Liquid
(8, 6),  -- kennyS in NiP
(8, 8);  -- shox in NiP

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