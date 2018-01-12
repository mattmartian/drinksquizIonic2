BEGIN TRANSACTION;
CREATE TABLE "SessionLines" (
	'sessionId'	INTEGER,
	'answerId'	INTEGER,
	'questionId'	INTEGER,
	PRIMARY KEY('sessionId','answerId','questionId'),
	FOREIGN KEY('sessionId') REFERENCES sessionId,
	FOREIGN KEY('answerId') REFERENCES 'answerId',
	FOREIGN KEY('questionId') REFERENCES 'questionId'
);
CREATE TABLE 'Session' (
	'sessionId'	INTEGER,
	'date'	TEXT,
	PRIMARY KEY('sessionId')
);
CREATE TABLE "Questions" (
	'questionId'	INTEGER,
	'question'	TEXT,
	'drink'	TEXT,
	'image'	BLOB,
	'quantity'	TEXT,
	'actualAnswer'	INTEGER,
	PRIMARY KEY('questionId'),
	FOREIGN KEY('actualAnswer') REFERENCES answerId
);
INSERT INTO 'Questions' VALUES (1,'How much sugar is in this','Energy Drink',NULL,'500mL',1);
INSERT INTO 'Questions' VALUES (2,'How much sugar is in this','Can of Orange Pop',NULL,'355mL',8);
INSERT INTO 'Questions' VALUES (3,'How much sugar is in this','Small Chocolate Milk',NULL,'237mL',9);
INSERT INTO 'Questions' VALUES (4,'How much sugar is in this','Can of Iced tea',NULL,'355mL',13);
INSERT INTO 'Questions' VALUES (5,'How much sugar is in this','Sports Drink',NULL,'700mL',19);
INSERT INTO 'Questions' VALUES (6,'How much sugar is in this','Cola',NULL,'591mL',21);
INSERT INTO 'Questions' VALUES (7,'How much sugar is in this','Slushy',NULL,'500mL',26);
INSERT INTO 'Questions' VALUES (8,'How much sugar is in this','Box of orange juice',NULL,'200mL',31);
INSERT INTO 'Questions' VALUES (9,'How much sugar is in this','Small box of chocolate soy beverage',NULL,'250mL',33);
INSERT INTO 'Questions' VALUES (10,'How much sugar is in this','Ice Cappuccino',NULL,'500mL',40);
INSERT INTO 'Questions' VALUES (11,'How much sugar is in this','Small Hot Chocolate',NULL,'286mL',41);
INSERT INTO 'Questions' VALUES (12,'How much sugar is in this','Fruit Punch',NULL,'355mL',45);
INSERT INTO 'Questions' VALUES (13,'How much sugar is in this','Clear Pop',NULL,'355mL',49);
INSERT INTO 'Questions' VALUES (14,'How much sugar is in this','Milk Shake',NULL,'473mL',54);
INSERT INTO 'Questions' VALUES (15,'How much sugar is in this','Vitamin Water',NULL,'591mL',60);
INSERT INTO 'Questions' VALUES (16,'How much sugar is in this','Can of Lemonade',NULL,'355mL',61);
INSERT INTO 'Questions' VALUES (17,'How much sugar is in this','Can of root beer',NULL,'355mL',66);
INSERT INTO 'Questions' VALUES (18,'How much sugar is in this','Small bottle of Cranberry Juice Drink/Cocktail',NULL,'450mL',71);
INSERT INTO 'Questions' VALUES (19,'How much sugar is in this','Kool aid jammer',NULL,'180mL',73);
INSERT INTO 'Questions' VALUES (20,'How much sugar is in this','Bottle of water',NULL,'any',80);
CREATE TABLE "Answers" (
	'answerId'	INTEGER,
	'value'	TEXT,
	'questionId'	INTEGER,
	PRIMARY KEY('answerId'),
	FOREIGN KEY('questionId') REFERENCES questionId
);
INSERT INTO 'Answers' VALUES (1,'12',1);
INSERT INTO 'Answers' VALUES (2,'0',1);
INSERT INTO 'Answers' VALUES (3,'5',1);
INSERT INTO 'Answers' VALUES (4,'20',1);
INSERT INTO 'Answers' VALUES (5,'15',2);
INSERT INTO 'Answers' VALUES (6,'30',2);
INSERT INTO 'Answers' VALUES (7,'5',2);
INSERT INTO 'Answers' VALUES (8,'10',2);
INSERT INTO 'Answers' VALUES (9,'3',3);
INSERT INTO 'Answers' VALUES (10,'5',3);
INSERT INTO 'Answers' VALUES (11,'10',3);
INSERT INTO 'Answers' VALUES (12,'15',3);
INSERT INTO 'Answers' VALUES (13,'6',4);
INSERT INTO 'Answers' VALUES (14,'15',4);
INSERT INTO 'Answers' VALUES (15,'50',4);
INSERT INTO 'Answers' VALUES (16,'30',4);
INSERT INTO 'Answers' VALUES (17,'0',5);
INSERT INTO 'Answers' VALUES (18,'5',5);
INSERT INTO 'Answers' VALUES (19,'10',5);
INSERT INTO 'Answers' VALUES (20,'20',5);
INSERT INTO 'Answers' VALUES (21,'12',6);
INSERT INTO 'Answers' VALUES (22,'5',6);
INSERT INTO 'Answers' VALUES (23,'6',6);
INSERT INTO 'Answers' VALUES (24,'20',6);
INSERT INTO 'Answers' VALUES (25,'50',7);
INSERT INTO 'Answers' VALUES (26,'12',7);
INSERT INTO 'Answers' VALUES (27,'9',7);
INSERT INTO 'Answers' VALUES (28,'42',7);
INSERT INTO 'Answers' VALUES (29,'4',8);
INSERT INTO 'Answers' VALUES (30,'18',8);
INSERT INTO 'Answers' VALUES (31,'5',8);
INSERT INTO 'Answers' VALUES (32,'10',8);
INSERT INTO 'Answers' VALUES (33,'4',9);
INSERT INTO 'Answers' VALUES (34,'3',9);
INSERT INTO 'Answers' VALUES (35,'11',9);
INSERT INTO 'Answers' VALUES (36,'22',9);
INSERT INTO 'Answers' VALUES (37,'8',10);
INSERT INTO 'Answers' VALUES (38,'25',10);
INSERT INTO 'Answers' VALUES (39,'16',10);
INSERT INTO 'Answers' VALUES (40,'9',10);
INSERT INTO 'Answers' VALUES (41,'9',11);
INSERT INTO 'Answers' VALUES (42,'11',11);
INSERT INTO 'Answers' VALUES (43,'20',11);
INSERT INTO 'Answers' VALUES (44,'17',11);
INSERT INTO 'Answers' VALUES (45,'10',12);
INSERT INTO 'Answers' VALUES (46,'31',12);
INSERT INTO 'Answers' VALUES (47,'12',12);
INSERT INTO 'Answers' VALUES (48,'2',12);
INSERT INTO 'Answers' VALUES (49,'9',13);
INSERT INTO 'Answers' VALUES (50,'29',13);
INSERT INTO 'Answers' VALUES (51,'12',13);
INSERT INTO 'Answers' VALUES (52,'10',13);
INSERT INTO 'Answers' VALUES (53,'8',14);
INSERT INTO 'Answers' VALUES (54,'12',14);
INSERT INTO 'Answers' VALUES (55,'19',14);
INSERT INTO 'Answers' VALUES (56,'3',14);
INSERT INTO 'Answers' VALUES (57,'10',15);
INSERT INTO 'Answers' VALUES (58,'43',15);
INSERT INTO 'Answers' VALUES (59,'50',15);
INSERT INTO 'Answers' VALUES (60,'8',15);
INSERT INTO 'Answers' VALUES (61,'10',16);
INSERT INTO 'Answers' VALUES (62,'32',16);
INSERT INTO 'Answers' VALUES (63,'44',16);
INSERT INTO 'Answers' VALUES (64,'19',16);
INSERT INTO 'Answers' VALUES (65,'22',17);
INSERT INTO 'Answers' VALUES (66,'10',17);
INSERT INTO 'Answers' VALUES (67,'41',17);
INSERT INTO 'Answers' VALUES (68,'5',17);
INSERT INTO 'Answers' VALUES (69,'34',18);
INSERT INTO 'Answers' VALUES (70,'45',18);
INSERT INTO 'Answers' VALUES (71,'13',18);
INSERT INTO 'Answers' VALUES (72,'56',18);
INSERT INTO 'Answers' VALUES (73,'4',19);
INSERT INTO 'Answers' VALUES (74,'42',19);
INSERT INTO 'Answers' VALUES (75,'24',19);
INSERT INTO 'Answers' VALUES (76,'11',19);
INSERT INTO 'Answers' VALUES (77,'12',20);
INSERT INTO 'Answers' VALUES (78,'33',20);
INSERT INTO 'Answers' VALUES (79,'14',20);
INSERT INTO 'Answers' VALUES (80,'0',20);

COMMIT;
