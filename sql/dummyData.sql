-- Video Game Data
INSERT INTO VIDEOGAME (videogame_id, videogame_name, videogame_image, videogame_version, videogame_season)
VALUES 
(1, 'Counter-Strike: Global Offensive','', '1.37.8.9', 'Season 2023'),
(2, 'Valorant','', '6.07', 'Season 3'),
(3, 'League of Legends','', '11.19', 'Season 2024'),
(4, 'Dota 2','', '7.33', 'Season 2024');

-- Team Data
INSERT INTO TEAM (team_id, team_name,team_logo, team_image, team_location, team_acronym, videogame_id)
VALUES
(1, 'Astralis', 'https://www.gamereactor.fr/media/46/astralisclaimwin_1914653.png', 'image', 'Denmark', 'AST', '1'),
(2, 'NaVi', 'logo', 'image', 'Ukraine', 'NAVI', '1'),
(3, 'FURIA', 'https://mir-s3-cdn-cf.behance.net/projects/404/8a7c8b121361693.Y3JvcCwxMzc5LDEwNzksMjY5LDA.png','image', 'Brazil', 'FUR', '1'),
(4, '00Nation', 'https://mir-s3-cdn-cf.behance.net/projects/404/1a57e8195414067.Y3JvcCw1OTQsNDY0LDk4Miw0ODg.png','image', 'Brazil', '00N', '1'),
(5, 'Falcons', 'https://settiny.com/storage/teams/dcooytJN4TOkpKgAKXe2UYupqYvsxi0pQA6cDMJI.png','image', 'France', 'FLC', '1'),

(7, 'Sentinels', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjVVxE-om_bIheX2urKjq2Yyxd0oeqAWNeQZnv4jPrfC4CIERpXPb6YwXuXVF42q1sRiM&usqp=CAU', 'image', 'USA', 'SEN', '2'),
(8, 'Fnatic', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRU9ZBd0CN2qjCNrQB9XQ8Pk6522EJBf9TfxkkD6nwSS1lcqVCmmH4TkV_ilbCoT_y6_g&usqp=CAU', 'image', 'UK', 'FNC', '2'),
(9, '100 Thieves', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrH0zsYDCaORngrfkcVc0BWe3Nj5Q1pLmDdw&s', 'image', 'USA', '100T', '2'),
(10, 'Team Liquid', 'https://pbs.twimg.com/profile_images/1836098752484126720/9tV6JzMz_400x400.jpg', 'image', 'USA', 'TL', '2'),

(11, 'T1', 'https://www.gamereactor.fr/media/12/t1extendskeria_4391243.jpg','image', 'South Korea', 'T1', '3'),
(12, 'G2 Esports', 'https://upload.wikimedia.org/wikipedia/fr/e/e4/G2_Esports.svg','image', 'Germany', 'G2', '3'),
(13, 'JD Gaming', 'https://cdn.dribbble.com/users/4691853/screenshots/15705603/jdg_4x.png','image', 'China', 'JDG', '3'),
(14, 'DRX', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZIGctkEsVKcp7Ctr6aynuSGsW-5kamG87cQ&s','image', 'South Korea', 'DRX', '3');


-- Player Data
INSERT INTO PLAYER(player_id, player_first_name, player_last_name, player_nickname, player_birthday, player_image, player_nationality, player_role, team_id)
VALUES
-- CS GO
-- Astralis
(101, 'Nicolai', 'Reedtz', 'de1vice', '1995-09-08', 'https://escorenews.com/media/news/n56211.jpeg', 'DE', 'AWPer', 1),
(102, 'Lukas', 'Rossander', 'gla1ve', '1995-06-07', 'https://res.cloudinary.com/pley-gg/image/upload/c_fill,w_900/v1/players/gla1ve_1_ukr3tv', 'DE', 'IGL', 1),
(103, 'Benjamin', 'Brekke', 'BlameF', '1997-06-19', 'https://e.sport.fr/wp-content/uploads/2021/11/blameF-Complexity.jpg', 'DE', 'Rifler', 1),
(104, 'Christian', 'Andersen', 'Buzz', '2003-05-19', 'https://telegrafi.com/wp-content/uploads/2022/12/buzastralis-780x439.jpg', 'DE', 'Entry Fragger', 1),
(105, 'Victor', 'Staehr', 'Staehr', '2002-03-22', 'https://blix.gg/wp-content/uploads/2024/10/0c4520fba5dff59f.jpeg', 'DE', 'Rifler', 1),

-- Navi
(106, 'Aleksandr', 'Kostyliev', 's1mple', '1997-10-02', 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRsMtsPWy-gf5Z6JT_H90RjdfVtnH0oq1WzKKfX0T5_R0Oit9-_Fm2H5VfrQiqqVqql52QqgfcmjyKzgYw', 'UA', 'Rifler', 2),
(107, 'Valerii', 'Vakhovskyi', 'B1t', '2003-01-05', 'https://www.dexerto.com/cdn-image/wp-content/uploads/2021/11/01/b1t-PGL-Major.jpg', 'UA', 'Rifler', 2),
(108, 'Justinas', 'Lekavicius', 'jL', '2001-08-05', 'https://cdn.sanity.io/images/6znhzi10/production/18df325e56e321ef69bcf5f7965ac0ea61288130-2048x1366.jpg?w=736&auto=format', 'LT', 'Entry Fragger', 2),
(109, 'Mihai', 'Ivan', 'iM', '2000-06-18', 'https://www.dexerto.com/cdn-image/wp-content/uploads/2023/06/21/GamerLegion-iM-BLAST-Paris-Major.jpg?width=1200&quality=60&format=auto', 'RO', 'Rifler', 2),
(110, 'Aleksi', 'Virolainen', 'Aleksib', '1997-03-30', 'https://www.setup.gg/wp-content/uploads/2024/08/Aleksib-Player-Image-e1724354737990.jpg', 'FI', 'IGL', 2),
-- Furia
(111, 'Gabriel', 'Toledo', 'FalleN', '1991-05-30', 'https://www.academiadasapostasbrasil.com/uploads/default/og_images/csgo-team-liquid-oficializa-saida-de-fallen.png', 'BR', 'IGL', 3),
(112, 'Kaike', 'Cerato', 'KSCERATO', '1999-10-11', 'https://image-proxy.bo3.gg/uploads/news/49054/title_image/webp-bad67a5186add3b855f96f762291b6da.webp.webp?w=960&h=480', 'BR', 'Rifler', 3),
(113, 'Yuri', 'Santos', 'yuurih', '1999-07-30', 'https://pbs.twimg.com/profile_images/1748495641209167872/r4uTWjnA_400x400.jpg', 'BR', 'Rifler', 3),
(114, 'Marcelo', 'Cespedes', 'Chelo', '1998-11-01', 'https://sm.ign.com/t/ign_br/screenshot/default/fotojet-2024-10-13t105940321_1yea.1200.jpg', 'BR', 'Support', 3),
(115, 'Andre', 'Abreu', 'drop', '2000-06-06', 'https://noticias.maisesports.com.br/wp-content/uploads/2023/04/drop-iem-rio-800x533.jpg', 'BR', 'Support', 3),
-- 00Nation
(116, 'Marcelo', 'David', 'coldzera', '1994-10-31', 'https://res.cloudinary.com/pley-gg/image/upload/c_fill/v1/players/Copyright_-_Jak-Howard_-_Coldzera_uroarp', 'BR', 'Rifler', 4),
(117, 'Eduardo', 'Wolff', 'dumau', '2003-10-02', 'https://img-cdn.hltv.org/gallerypicture/pdFWbQmTDlZ9pqGEFswgd0.jpg?ixlib=java-2.1.0&w=1200&s=8d8e1a83d870035c4c53b4b8e1c2652c', 'BR', 'Rifler', 4),
(118, 'Bruno', 'Nakano', 'latto', '2002-06-05', 'https://noticias.maisesports.com.br/wp-content/uploads/2019/11/49028458888_fcedda82d2_k.jpg', 'BR', 'Entry Fragger', 4),
(119, 'Lucas', 'Soares', 'nqz', '2005-05-15', 'https://img-cdn.hltv.org/gallerypicture/QZvEqpLEoY1nWk6JDLKtF4.jpg?ixlib=java-2.1.0&w=1200&s=87f261f8a7fbd557f2bdb0d5cee79004', 'BR', 'AWPer', 4),
(120, 'Carlos', 'Alves', 'skullz', '2002-08-30', 'https://assets.gamearena.gg/wp-content/uploads/2024/06/19114955/skullz-Liquid-1-1024x683.jpg', 'BR', 'Rifler', 4),
-- Falcons
(121, 'Kenny', 'Schrub', 'kennyS', '1995-05-19', 'https://www.dexerto.fr/cdn-image/wp-content/uploads/sites/2/2021/03/kennys-envisagerait-de-passer-sur-valorant-apres-sa-mise-a-lecart-de-g2.jpg', 'FR', 'AWPer', 5),
(122, 'Nathan', 'Schmitt', 'NBK-', '1994-06-05', 'https://www.team-aaa.com/upload/admin/Valorant/Galendder/nbk/nbk2.jpg', 'FR', 'Support', 5),
(123, 'Bryan', 'Ferrand', 'Maka', '1997-10-01', 'https://static1.millenium.org/articles/1/37/06/91/@/1405577-maka-fraglider-article_m-3.jpg', 'FR', 'AWPer', 5),
(124, 'Jordan', 'Graves', 'Python', '2000-04-20', 'https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=pad%2Cgravity=auto%2Cheight=675%2Cq=85%2Csharpen=2%2Cwidth=1200/wp-content/uploads/python.png', 'FR', 'Rifler', 5),
(125, 'Aurélien', 'Lemaître', 'misutaaa', '2003-08-26', 'https://img.championat.com/news/big/p/h/francuzskij-igrok-misutaaa-v-cs-go-zakonchil-kartu-so-statistikoj-0-18_15847825021148610079.jpg', 'FR', 'Rifler', 5),

-- Valorant
-- VALORANT TEAM: Sentinels
(201, 'Tyson', 'Ngo', 'TenZ', '2001-05-05', '', 'CA', 'Duelist', 7),
(202, 'Hunter', 'Mims', 'SicK', '1998-09-02', '', 'US', 'Flex', 7),
(203, 'Jared', 'Gitlin', 'zombs', '1998-10-02', '', 'US', 'Controller', 7),
(204, 'Michael', 'Grzesiek', 'shroud', '1994-06-02', '', 'CA', 'Flex', 7),
(205, 'Shahzeeb', 'Khan', 'ShahZaM', '1993-10-08', '', 'US', 'IGL', 7),

-- VALORANT TEAM: Fnatic
(206, 'Jake', 'Howlett', 'Boaster', '1995-05-25', '', 'GB', 'IGL', 8),
(207, 'Nikita', 'Sirmitev', 'Derke', '2003-02-06', '', 'FI', 'Duelist', 8),
(208, 'Emir', 'Mekić', 'Alfajer', '2005-02-12', '', 'TR', 'Flex', 8),
(209, 'Leo', 'Jannesson', 'Leo', '2003-04-19', '', 'SE', 'Initiator', 8),
(210, 'James', 'Baxter', 'Mistic', '2000-11-15', '', 'GB', 'Controller', 8),

-- VALORANT TEAM: 100 Thieves
(211, 'Peter', 'Mazuryk', 'Asuna', '2003-07-26', '', 'US', 'Duelist', 9),
(212, 'Brenden', 'McGrath', 'stellar', '1998-03-15', '', 'US', 'IGL', 9),
(213, 'Derrek', 'Ha', 'Derrek', '1998-09-29', '', 'US', 'Initiator', 9),
(214, 'Sean', 'Kaiwai', 'bang', '2004-07-04', '', 'US', 'Controller', 9),
(215, 'Ethan', 'Arnold', 'Ethan', '2000-03-02', '', 'US', 'Flex', 9),

-- VALORANT TEAM: Team Liquid
(216, 'Adil', 'Benrlitom', 'ScreaM', '1994-07-02', '', 'BE', 'Duelist', 10),
(217, 'Dom', 'Sulcas', 'soulcas', '1998-03-15', '', 'GB', 'Flex', 10),
(218, 'Nabil', 'Benrlitom', 'Nivera', '2001-06-25', '', 'BE', 'Sentinel', 10),
(219, 'Elias', 'Olkkonen', 'Jamppi', '2001-07-22', '', 'FI', 'Duelist', 10),
(220, 'Travis', 'Mendoza', 'Travis', '1999-08-15', '', 'US', 'Initiator', 10),



-- League of Legends
-- LEAGUE OF LEGENDS TEAM: T1
(301, 'Sang-hyeok', 'Lee', 'Faker', '1996-05-07', '', 'KR', 'Mid Laner', 11),
(302, 'Woo-je', 'Choi', 'Zeus', '2004-01-31', '', 'KR', 'Top Laner', 11),
(303, 'Min-hyeong', 'Moon', 'Oner', '2002-12-24', '', 'KR', 'Jungler', 11),
(304, 'Ji-won', 'Ryu', 'Keria', '2002-10-14', '', 'KR', 'Support', 11),
(305, 'Jun-ho', 'Lee', 'Cuzz', '1999-12-31', '', 'KR', 'Jungler', 11),

-- LEAGUE OF LEGENDS TEAM: G2 Esports
(306, 'Sergen', 'Çelik', 'BrokenBlade', '2000-01-19', '', 'DE', 'Top Laner', 12),
(307, 'Martin', 'Hansen', 'Yike', '2001-01-12', '', 'SE', 'Jungler', 12),
(308, 'Rasmus', 'Winther', 'Caps', '1999-11-17', '', 'DK', 'Mid Laner', 12),
(309, 'Steven', 'Liv', 'Hans Sama', '1999-09-02', '', 'FR', 'AD Carry', 12),
(310, 'Mihael', 'Mehle', 'Mikyx', '1998-11-02', '', 'SI', 'Support', 12),

-- LEAGUE OF LEGENDS TEAM: JD Gaming
(311, 'Zhen', 'Zhuo', '369', '1999-12-18', '', 'CN', 'Top Laner', 13),
(312, 'Rui', 'Gao', 'Kanavi', '2000-11-03', '', 'CN', 'Jungler', 13),
(313, 'Zeng', 'Qi', 'Yagao', '1998-08-01', '', 'CN', 'Mid Laner', 13),
(314, 'Hao-Han', 'Park', 'Ruler', '1998-12-29', '', 'KR', 'AD Carry', 13),
(315, 'Jia-Hao', 'Zhao', 'LokeN', '1998-12-28', '', 'CN', 'Support', 13),

-- LEAGUE OF LEGENDS TEAM: DRX
(316, 'Dong-ha', 'Kim', 'Kingen', '1999-02-14', '', 'KR', 'Top Laner', 14),
(317, 'Geon-bu', 'Hong', 'Pyosik', '2000-01-14', '', 'KR', 'Jungler', 14),
(318, 'Young-jae', 'Kim', 'Zeka', '2003-11-22', '', 'KR', 'Mid Laner', 14),
(319, 'Hyuk-kyu', 'Kim', 'Deft', '1996-10-23', '', 'KR', 'AD Carry', 14),
(320, 'Jin-hyuk', 'Kim', 'BeryL', '1997-04-15', '', 'KR', 'Support', 14);


-- Tournament Data
INSERT INTO TOURNAMENT (tournament_id, tournament_name, tournament_location, tournament_start, tournament_end, tournament_prize, winner_team_id, tournament_image)
VALUES 
(1, 'IEM Katowice 2024', 'Katowice, Poland', '2024-11-10', '2024-11-13', '1500000', 1, 'https://media.assettype.com/afkgaming%2F2023-12%2Ffb425522-6eb5-44df-bb79-7d4bd7c62250%2FCover_Image___IEM_Katowice_2024___All_Qualified_CS2_Teams.jpg?auto=format%2Ccompress&dpr=1.0&w=1200'),
(2, 'BLAST Premier Spring 2024', 'London, UK', '2024-11-10', '2024-11-13', '1700000', 13, 'https://cdn.sanity.io/images/6znhzi10/production/fc5e6d2af25db09e69d2d304e5b6f02551c982e9-2048x1365.jpg?w=736&auto=format'),

(3, 'LCS Spring 2024', 'Los Angeles, USA', '2024-11-10', '2024-11-13', '2100000', NULL, 'https://cdn.sanity.io/images/dsfx7636/news_live/a8592ff5a4e360cf9a19d73926f64f59d109c669-1600x900.jpg'),

(4, 'The International 2025', 'Copenhagen, Denmark', '2025-11-10', '2025-11-13', '4000000', NULL , 'https://clan.cloudflare.steamstatic.com/images/3703047/040f3cd7b283452e7939cf075284647905cbb900.png'),
(5, 'Lol Worlds 2025', 'Seoul, South-Korea', '2025-11-10', '2025-11-13', '400000', NULL, 'https://www.22esport.gg/wp-content/uploads/2024/10/17297862884247.jpg');


-- Match Data
INSERT INTO MATCH_PLAYED (match_id, match_start_time, match_end_time, match_draw, match_forfeit, number_of_games, match_status, tournament_id, winner_team_id, team_1_id, team_2_id)
VALUES
(1, '2024-11-10 14:00:00', '2024-11-10 14:45:00', FALSE, FALSE, 3, 'Completed', 1, 1, 1, 2),
(2, '2024-11-10 15:00:00', '2024-11-10 15:50:00', FALSE, FALSE, 2, 'Completed', 1, 3, 3, 4),
(3, '2024-11-10 16:10:00', '2024-11-10 17:30:00', FALSE, FALSE, 1, 'Completed', 1, 1, 1, 5),

(4, '2024-11-11 15:00:00', '2024-11-11 15:40:00', FALSE, FALSE, 2, 'Completed', 2, 11, 11, 12),
(5, '2024-11-11 16:00:00', '2024-11-11 16:45:00', FALSE, FALSE, 2, 'Completed', 2, 13, 11, 13),
(6, '2024-11-11 17:00:00', '2024-11-11 18:00:00', FALSE, FALSE, 1, 'Completed', 2, 13, 13, 14),
(7, '2024-11-11 18:15:00', '2024-11-11 19:00:00', FALSE, FALSE, 3, 'Completed', 2, 12, 12, 14);

INSERT INTO SINGLE_GAME (game_id, game_begin_time, game_end_time, game_finished, game_forfeit, game_length, game_status, game_winner, match_id)
VALUES
(1, '2024-11-10 14:00:00', '2024-11-10 14:45:00', TRUE, FALSE, 45, 'Completed', 1, 1),
(2, '2024-11-10 15:00:00', '2024-11-10 15:50:00', TRUE, FALSE, 50, 'Completed', 1, 1),
(3, '2024-11-10 16:10:00', '2024-11-10 17:30:00', TRUE, FALSE, 80, 'Completed', 2, 1),

(4, '2024-11-11 15:00:00', '2024-11-11 15:40:00', TRUE, FALSE, 40, 'Completed', 3, 2),
(5, '2024-11-11 16:00:00', '2024-11-11 16:45:00', TRUE, FALSE, 45, 'Completed', 3, 2),

(6, '2024-11-11 17:00:00', '2024-11-11 18:00:00', TRUE, FALSE, 60, 'Completed', 1, 3),

(7, '2024-11-11 18:15:00', '2024-11-11 19:00:00', TRUE, FALSE, 45, 'Completed', 11, 4),
(8, '2024-11-11 19:15:00', '2024-11-11 20:00:00', TRUE, FALSE, 45, 'Completed', 11, 4),

(9, '2024-11-11 20:15:00', '2024-11-11 21:00:00', TRUE, FALSE, 45, 'Completed', 13, 5),
(10, '2024-11-11 21:15:00', '2024-11-11 22:00:00', TRUE, FALSE, 45, 'Completed', 13, 5),

(11, '2024-11-11 22:15:00', '2024-11-11 23:00:00', TRUE, FALSE, 45, 'Completed', 13, 6),

(12, '2024-11-11 23:15:00', '2024-11-11 00:00:00', TRUE, FALSE, 45, 'Completed', 12, 7),
(13, '2024-11-11 00:15:00', '2024-11-11 01:00:00', TRUE, FALSE, 45, 'Completed', 12, 7),
(14, '2024-11-11 01:15:00', '2024-11-11 02:00:00', TRUE, FALSE, 45, 'Completed', 14, 7);