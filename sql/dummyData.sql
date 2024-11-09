INSERT INTO PLAYER (player_id, player_first_name, player_last_name, player_nickname, player_birthday, player_image, player_nationality, player_role)
VALUES
(1, 'John', 'Doe', 'JDoe', '1990-05-10', 'https://picsum.photos/200/300?random=1', 'USA', 'Mid'),
(2, 'Jane', 'Smith', 'JSmith', '1992-07-15', 'https://picsum.photos/200/300?random=2', 'UK', 'Support'),
(3, 'David', 'Johnson', 'DJon', '1991-11-30', 'https://picsum.photos/200/300?random=3', 'Canada', 'ADC'),
(4, 'Emily', 'Brown', 'EBrown', '1993-03-20', 'https://picsum.photos/200/300?random=4', 'Australia', 'Top'),
(5, 'Chris', 'Williams', 'CWilliams', '1994-08-25', 'https://picsum.photos/200/300?random=5', 'Germany', 'Jungler'),
(6, 'Alex', 'Miller', 'AMiller', '1995-02-10', 'https://picsum.photos/200/300?random=6', 'USA', 'Support'),
(7, 'Sophia', 'Davis', 'SDavis', '1996-01-20', 'https://picsum.photos/200/300?random=7', 'UK', 'Top'),
(8, 'Ethan', 'Martinez', 'EMartinez', '1997-05-25', 'https://picsum.photos/200/300?random=8', 'Mexico', 'Mid'),
(9, 'Lily', 'Gonzalez', 'LGonzalez', '1993-09-15', 'https://picsum.photos/200/300?random=9', 'Spain', 'ADC'),
(10, 'Oliver', 'Wilson', 'OWilson', '1992-11-12', 'https://picsum.photos/200/300?random=10', 'Canada', 'Jungler'),
(11, 'Charlotte', 'Moore', 'CMoore', '1994-12-07', 'https://picsum.photos/200/300?random=11', 'Australia', 'Support'),
(12, 'Jackson', 'Taylor', 'JTaylor', '1995-04-08', 'https://picsum.photos/200/300?random=12', 'Germany', 'Top');

INSERT INTO TEAM (team_id, team_name, team_image, team_location, team_acronym)
VALUES
(1, 'Team Phoenix', 'https://picsum.photos/300/200?random=1', 'USA', 'TP'),
(2, 'Red Dragons', 'https://picsum.photos/300/200?random=2', 'UK', 'RD'),
(3, 'Alpha Squad', 'https://picsum.photos/300/200?random=3', 'Germany', 'AS'),
(4, 'Fire Tigers', 'https://picsum.photos/300/200?random=4', 'Australia', 'FT'),
(5, 'Thunder Warriors', 'https://picsum.photos/300/200?random=5', 'Canada', 'TW');

INSERT INTO TEAM_PLAYER (team_id, player_id)
VALUES
(1, 1),  -- Player 1 in Team Phoenix
(1, 2),  -- Player 2 in Team Phoenix
(1, 6),  -- Player 6 in Team Phoenix
(2, 3),  -- Player 3 in Red Dragons
(2, 7),  -- Player 7 in Red Dragons
(2, 8),  -- Player 8 in Red Dragons
(3, 4),  -- Player 4 in Alpha Squad
(3, 9),  -- Player 9 in Alpha Squad
(3, 10), -- Player 10 in Alpha Squad
(4, 5),  -- Player 5 in Fire Tigers
(4, 11), -- Player 11 in Fire Tigers
(4, 12); -- Player 12 in Fire Tigers

INSERT INTO VIDEOGAME (videogame_id, videogame_name, videogame_version, videogame_season)
VALUES
(1, 'League of Legends', '13.21', 'Summer 2024'),
(2, 'Dota 2', '7.32', 'Autumn 2024'),
(3, 'Valorant', 'V5.10', 'Winter 2024');

INSERT INTO SINGLE_GAME (game_id, game_begin_time, game_end_time, game_finished, game_forfeit, game_length, game_status)
VALUES
(1, '2024-10-15 14:00:00', '2024-10-15 14:30:00', TRUE, FALSE, 30, 'Completed'),
(2, '2024-10-16 15:00:00', '2024-10-16 15:45:00', TRUE, FALSE, 45, 'Completed'),
(3, '2024-10-17 16:00:00', '2024-10-17 16:20:00', TRUE, FALSE, 20, 'Completed');

INSERT INTO GAME_TEAM (game_id, team_id)
VALUES
(1, 1),  -- Team Phoenix in Game 1
(2, 2),  -- Red Dragons in Game 2
(3, 3);  -- Alpha Squad in Game 3

INSERT INTO MATCH_PLAYED (match_id, match_start_time, match_end_time, match_draw, match_forfeit, number_of_games, match_status, videogame_played, game_id, videogame_id)
VALUES
(1, '2024-10-15 14:00:00', '2024-10-15 15:30:00', FALSE, FALSE, 3, 'Finished', 'League of Legends', 1, 1),
(2, '2024-10-16 15:00:00', '2024-10-16 16:30:00', FALSE, FALSE, 2, 'Finished', 'Dota 2', 2, 2),
(3, '2024-10-17 16:00:00', '2024-10-17 17:00:00', TRUE, FALSE, 1, 'Draw', 'Valorant', 3, 3);

INSERT INTO TOURNAMENT (tournament_id, tournament_name, tournament_prize, tournament_start, tournament_end)
VALUES
(1, 'International Championship 2024', '$100,000', '2024-10-10', '2024-10-20'),
(2, 'Summer League 2024', '$50,000', '2024-06-01', '2024-06-10'),
(3, 'Winter Masters 2024', '$75,000', '2024-12-01', '2024-12-15');

INSERT INTO TOURNAMENT_MATCH (tournament_id, match_id)
VALUES
(1, 1),  -- Match 1 in Tournament 1
(2, 2),  -- Match 2 in Tournament 2
(3, 3);  -- Match 3 in Tournament 3

