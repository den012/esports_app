CREATE TABLE VIDEOGAME (
    videogame_id INT PRIMARY KEY,
    videogame_name VARCHAR(50),
    videogame_image VARCHAR(255),
    videogame_version VARCHAR(50),
    videogame_season VARCHAR(50)
);


CREATE TABLE TEAM (
    team_id INT PRIMARY KEY,
    team_name VARCHAR(50),
    team_logo VARCHAR(255),
    team_image VARCHAR(255),
    team_location VARCHAR(50),
    team_acronym VARCHAR(50),

    videogame_id INT,
    FOREIGN KEY (videogame_id) REFERENCES VIDEOGAME(videogame_id)
);

CREATE TABLE PLAYER (
    player_id INT PRIMARY KEY,
    player_first_name VARCHAR(50),
    player_last_name VARCHAR(50),
    player_nickname VARCHAR(50),
    player_birthday DATETIME,
    player_image VARCHAR(255),
    player_nationality VARCHAR(50),
    player_role VARCHAR(50),

    team_id INT,
    FOREIGN KEY (team_id) REFERENCES TEAM(team_id)
);

CREATE TABLE TOURNAMENT (
    tournament_id INT PRIMARY KEY,
    tournament_name VARCHAR(50),
    tournament_location VARCHAR(100),
    tournament_start DATETIME,
    tournament_end DATETIME,
    tournament_prize VARCHAR(50),
    winner_team_id INT,
    tournament_image VARCHAR(255),
    FOREIGN KEY (winner_team_id) REFERENCES TEAM(team_id)

);

CREATE TABLE MATCH_PLAYED (
    match_id INT PRIMARY KEY,
    match_start_time DATETIME,
    match_end_time DATETIME,
    match_draw BOOLEAN,
    match_forfeit BOOLEAN,
    number_of_games INT,
    match_status ENUM('Completed', 'Ongoing', 'Upcoming'),

    tournament_id INT,
    winner_team_id INT,

    team_1_id INT,
    team_2_id INT,

    FOREIGN KEY (team_1_id) REFERENCES TEAM(team_id),
    FOREIGN KEY (team_2_id) REFERENCES TEAM(team_id),

    FOREIGN KEY (tournament_id) REFERENCES TOURNAMENT(tournament_id),
    FOREIGN KEY (winner_team_id) REFERENCES TEAM(team_id)
);

CREATE TABLE SINGLE_GAME (
    game_id INT PRIMARY KEY,
    game_begin_time DATETIME,
    game_end_time DATETIME,
    game_finished BOOLEAN,
    game_forfeit BOOLEAN,
    game_length INT,
    game_status ENUM('Completed', 'Ongoing', 'Upcoming'),

    game_winner INT,
    match_id INT,
    FOREIGN KEY (game_winner) REFERENCES TEAM(team_id),
    FOREIGN KEY (match_id) REFERENCES MATCH_PLAYED(match_id)
);

CREATE TABLE NEWS (
    news_id INT PRIMARY KEY,
    news_title VARCHAR(100),
    news_description TEXT,
    news_image VARCHAR(255),
    news_date DATETIME
)