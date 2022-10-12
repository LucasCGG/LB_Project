USE project_v01;

/*Insert the Users*/
insert into player(age, email, name, password, username) values 
(25,"admin@wiss.ch","admin","admin","admin"),  
(20, "joe@gmail.com", "Joe", "ichbinKuhl", "joe"),
(15, "luke@gmail.com", "Luke", "1234", "luke"),
(66, "jane@gmail.com", "Jane", "password","janeGirly"),
(24,"hans@gmail.com", "Hans", "password","hanstein"),
(13, "jeff@gmail.com", "Jeff", "222","jeffDaGreat"),
(14, "mary@gmail.com" ,"Mary",  "1234","marylukeJane"),
(15, "john@gmail.com","John Doe Jr.", "1234","johnDoeJr"),
(16, "jane@gmail.com", "Jane Doe Jr.", "1234","janeDoeJr"),
(17, "bob@gmail.com",  "Bob Marley",  "password","bobMarley"),
(18, "sarah@gmail.com" ,"Sarah Connor", "password","sarahConnor"),
(19,"mike@gmail.com" , "Mike Tyson", "password","mikeTyson"),
(20,"lisa@gmail.com" , "Lisa Simpson","password","lisaSimpson"),
(21,"homer@gmail.com" , "Homer Simpson","password","homerSimpson"),
(22,"marge@gmail.com" , "Marge Simpson", "password","margeSimpson"),
(23, "jane@gmail.com", "Jane Doe Jr.", "1234","janeDoeJr"),
(24,"bob@gmail.com",  "Bob Marley",  "password","bobMarley"),
(25,"sarah@gmail.com" ,"Sarah Connor", "password","sarahConnor"), 
(26,"mike@gmail.com" , "Mike Tyson", "password","mikeTyson");
	
/*Insert the Games*/
insert into game(description, name, creator_id) values
("its Just block", "Minecraft", 1),
("Its your Old school nokia snake game", "Snake", 1),
("The Birds are angry", "Angry Birds", 1),
("Candy crush is fun for everyone.", "Candy Crush Saga", 1),
("Just the best game ever.", "Pac-Man", 1),
("Temple run has got everyone running.", "Temple Run", 1),
("just Words....", "Words with Friends Free (Ad Supported)", 1),
("Oh my flappy..bird...", "Flappy Bird (Frozen Version)", 2),
("This is the original Flappy bird game this was pulled from app store :( ", "Flappy Bird Canada & New Zealand Edition", 3),
("Your old time Old School Mario Game for the PC :) Always a classic!", "Mario Forever Block Party v1.0 (Bootleg)", 4);	 
select * from player;
select * from game
