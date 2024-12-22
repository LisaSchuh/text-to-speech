CREATE TABLE IF NOT EXISTS my_table (
    id SERIAL PRIMARY KEY,
    text_value TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW(),
    deleted BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO words (text_value, deleted) VALUES ('Ja', false);
INSERT INTO words (text_value, deleted) VALUES ('Nein', false);
INSERT INTO words (text_value, deleted) VALUES ('Danke', false);
INSERT INTO words (text_value, deleted) VALUES ('Bitte', false);
INSERT INTO words (text_value, deleted) VALUES ('Hallo', false);
INSERT INTO words (text_value, deleted) VALUES ('Tschüss', false);
INSERT INTO words (text_value, deleted) VALUES ('Hilfe', false);
INSERT INTO words (text_value, deleted) VALUES ('Schmerz', false);
INSERT INTO words (text_value, deleted) VALUES ('Krankenschwester', false);
INSERT INTO words (text_value, deleted) VALUES ('Arzt', false);
INSERT INTO words (text_value, deleted) VALUES ('Wasser', false);
INSERT INTO words (text_value, deleted) VALUES ('Essen', false);
INSERT INTO words (text_value, deleted) VALUES ('Toilette', false);
INSERT INTO words (text_value, deleted) VALUES ('Heiß', false);
INSERT INTO words (text_value, deleted) VALUES ('Kalt', false);
INSERT INTO words (text_value, deleted) VALUES ('Mehr', false);
INSERT INTO words (text_value, deleted) VALUES ('Weniger', false);
INSERT INTO words (text_value, deleted) VALUES ('Langsamer', false);
INSERT INTO words (text_value, deleted) VALUES ('Ich verstehe nicht', false);
INSERT INTO words (text_value, deleted) VALUES ('OK', false);