USE burgers_db;
INSERT INTO
  burgers (burger_name, devoured, date_devoured)
VALUES
  ("Chicken", FALSE, "2020-11-21 12:00:00"),
  ("BEEF", TRUE, "2020-11-01 12:00:00"),
  ("Pulled Pork", TRUE, "2020-10-25 12:00:00");

SELECT * FROM burgers;