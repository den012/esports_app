CREATE TABLE PLAYER (
    player_id INT PRIMARY KEY,
    player_first_name VARCHAR(50),
    player_last_name VARCHAR(50),
    player_nickname VARCHAR(50),
    player_birthday DATETIME,
    player_image VARCHAR(255),
    player_nationality VARCHAR(50),
    player_role VARCHAR(50)
);

CREATE TABLE TEAM (
    team_id INT PRIMARY KEY,
    team_name VARCHAR(50),
    team_image VARCHAR(255),
    team_location VARCHAR(50),
    team_acronym VARCHAR(50)
);

CREATE TABLE TEAM_PLAYER (
    team_id INT,
    player_id INT,
    PRIMARY KEY(team_id, player_id),
    FOREIGN KEY(team_id) REFERENCES TEAM(team_id),
    FOREIGN KEY(player_id) REFERENCES PLAYER(player_id)
);

CREATE TABLE VIDEOGAME (
    videogame_id INT PRIMARY KEY,
    videogame_name VARCHAR(50),
    videogame_version VARCHAR(50),
    videogame_season VARCHAR(50)
);

CREATE TABLE SINGLE_GAME (
    game_id INT PRIMARY KEY,
    game_begin_time DATETIME,
    game_end_time DATETIME,
    game_finished BOOLEAN,
    game_forfeit BOOLEAN,
    game_length INT,
    game_status VARCHAR(50),
    winner_team_id INT,
    FOREIGN KEY (winner_team_id) REFERENCES TEAM(team_id)
);

CREATE TABLE SGAME_TEAM (
    game_id INT,
    team_id INT,
    PRIMARY KEY(game_id, team_id),
    FOREIGN KEY(game_id) REFERENCES SINGLE_GAME(game_id),
    FOREIGN KEY(team_id) REFERENCES TEAM(team_id)
);

CREATE TABLE MATCH_PLAYED (
    match_id INT PRIMARY KEY,
    match_start_time DATETIME,
    match_end_time DATETIME,
    match_draw BOOLEAN,
    match_forfeit BOOLEAN,
    number_of_games INT,
    match_status VARCHAR(50),

    videogame_id INT,
    winner_team_id INT,

    FOREIGN KEY (videogame_id) REFERENCES VIDEOGAME(videogame_id),
    FOREIGN KEY (winner_team_id) REFERENCES TEAM(team_id)
);

CREATE TABLE MATCH_GAME (
    match_id INT,
    game_id INT,
    FOREIGN KEY (match_id) REFERENCES MATCH_PLAYED(match_id),
    FOREIGN KEY (game_id) REFERENCES SINGLE_GAME(game_id),
    PRIMARY KEY (match_id, game_id)
);

CREATE TABLE TOURNAMENT (
    tournament_id INT PRIMARY KEY,
    tournament_name VARCHAR(50),
    tournament_location VARCHAR(100),
    tournament_start DATETIME,
    tournament_end DATETIME,
    tournament_prize VARCHAR(50),
    winner_team_id INT,
    FOREIGN KEY (winner_team_id) REFERENCES TEAM(team_id)

);

CREATE TABLE TOURNAMENT_MATCH (
    tournament_id INT,
    match_id INT,
    PRIMARY KEY(tournament_id, match_id),
    FOREIGN KEY(tournament_id) REFERENCES TOURNAMENT(tournament_id),
    FOREIGN KEY(match_id) REFERENCES MATCH_PLAYED(match_id)
);