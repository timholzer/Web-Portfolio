var movsugg= [
'Neighbors (1920)',
'The Playhouse (1920)',
'Cops (1922)',
'The Pilgrim (1923)',
'The Freshman (1925)',
'Metropolis (1927)',
'The Cocoanuts (1929)',
'Freaks (1932)',
'Queen Christina (1933)',
'The New Gulliver (1935)',
'Anna Karenina (1935)',
'A Night At The Opera (1935)',
'Modern Times (1935)',
'Things To Come (1936)',
'Fury (1936)',
'The Good Earth (1936)',
'Snow White And The Seven Dwarves (1937)',
'The Adventures Of Robin Hood (1938)',
'The Wizard Of Oz (1939)',
'Mr. Smith Goes To WAshington (1939)',
'At The Circus (1939)',
'The Grapes Of Wrath (1940)',
'Pinocchio (1940)',
'How Green Was My Valley (1941)',
'Dumbo (1941)',
'Citizen Kane (1941)',
'To Be Or Not To Be (1942)',
'A Tree Grows In Brooklyn (1945)',
'Mildred Pierce (1945)',
'A Matter Of Life And Death (1945)',
"It's A Wonderful Life (1946)",
'The Treasure Of The Sierra Madre (1948)',
'The Third Man (1949)',
"All The King's Men (1949)",
'Gun Crazy (1950)',
'Bedtime For Bonzo (1951)',
'Alice In Wonderland (1951)',
'The Day The Earth Stood Still (1951)',
'Ivanhoe (1952)',
'Ikiru (1952)',
'Seven Samurai (1954)',
'On The Waterfront (1954)',
'The Forbidden Planet (1956)',
'The Man Who Knew Too Much (1956)',
'A Face In The Crowd (1957)',
'Spartacus (1960)',
'The Magnificent Seven (1960)',
'The Longest Day (1962)',
'Jason And The Argonauts (1963)',
'The 7 Up docu-series (1964, 1971, 1978, etc)',
'Cool Hand Luke (1967)',
'Planet Of The Apes (1968)',
'2001: A Space Odyssey (1968)',
'Yellow Submarine (1968)',
'THX 1138 (1971)',
'Willy Wonka And The Chocolate Factory (1971)',
'Italianamerican (1974)',
'Grave Of The Fireflies (1988)',
'UHF (1989)',
"Gulliver's Travels (1996)",
'Life Is Beautiful (1997)',
'Mary And Max (2009)',
'My Way (2011)',
'What We Do In The Shadows (2014)',
'The Fall (2006)',
'The Cell (2000)',
'The Imaginarium Of Doctor Parnassus (2009)',
'Crouching Tiger, Hidden Dragon (2000)',
'Hero (2002)',
'House Of Flying Daggers (2004)',
'The Dark Crystal (1982)',
'Labyrinth (1986)',
"Pan's Labyrinth (2006)",
'Delicatessen (1991)',
'Micmacs (2009)',
'The City Of Lost Children (1995)',
];

document.getElementById("randmovie").addEventListener("click", function(){
var randMov = Math.floor(Math.random()*movsugg.length);

document.getElementById("movie").value = movsugg[randMov]});