var storyContent = ﻿{"inkVersion":20,"root":[[{"->":"Start"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"Start":["^You wake up in a dimly lit room with a mysterious atmosphere. There's a poster on the wall. \"YOU HAVE ENTERED THE UVA ESCAPE ROOM. SOLVE THE PUZZLES TO ESCAPE. YOU HAVE EXACTLY 27 MINUTES TO ESCAPE.\" UH OH! You have been zapped into the game you were creating for your literary games class!","\n",{"->":"Begin"},{"#f":1}],"Begin":[["ev","str","^Start the escape","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Look around the room","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^You notice a sign pointing to different locations: Pavilion, Rotunda, Beta Bridge, Library, and Amphitheater. Choose your first destination wisely.","\n",{"->":"Locations"},{"#f":5}],"c-1":["\n","^There is a door with a digital lock on it. It is waiting for a 5 digit binary code...","\n",{"->":"Begin"},{"#f":5}]}],{"#f":1}],"Locations":[{"->":".^.all_locations"},{"all_locations":[[["^You will explore _______ next.","\n",[["ev",{"^->":"Locations.all_locations.0.g-0.2.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Pavilion",{"->":"$r","var":true},null]}],["ev",{"^->":"Locations.all_locations.0.g-0.2.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^Rotunda",{"->":"$r","var":true},null]}],["ev",{"^->":"Locations.all_locations.0.g-0.2.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Beta Bridge",{"->":"$r","var":true},null]}],["ev",{"^->":"Locations.all_locations.0.g-0.2.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^Library",{"->":"$r","var":true},null]}],["ev",{"^->":"Locations.all_locations.0.g-0.2.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^Amphitheater",{"->":"$r","var":true},null]}],["ev",{"^->":"Locations.all_locations.0.g-0.2.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":18},{"s":["^Explore the metaverse",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Locations.all_locations.0.g-0.2.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"Pavilion"},{"#f":5}],"c-1":["ev",{"^->":"Locations.all_locations.0.g-0.2.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":"Rotunda"},{"#f":5}],"c-2":["ev",{"^->":"Locations.all_locations.0.g-0.2.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"Beta_bridge"},{"#f":5}],"c-3":["ev",{"^->":"Locations.all_locations.0.g-0.2.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":"Library"},{"#f":5}],"c-4":["ev",{"^->":"Locations.all_locations.0.g-0.2.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"Amphitheater"},{"#f":5}],"c-5":["ev",{"^->":"Locations.all_locations.0.g-0.2.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","^You walk around, noting that much of this digital UVA looks similar to the real world. Everyone seems not to notice you are even there. Is this Paradise? You stroll down Emmet St seeing Alumni Hall on your right.","\n",[["ev",{"^->":"Locations.all_locations.0.g-0.2.c-5.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Visit Alumni Hall to investigate",{"->":"$r","var":true},null]}],"ev","str","^Continue Exploring","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["ev",{"^->":"Locations.all_locations.0.g-0.2.c-5.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"Alumni"},{"#f":5}],"c-1":["^ ",{"->":"void"},"\n",{"#f":5}]}],{"#f":5}]}],{"*":".^.c-0","flg":24},{"c-0":[{"->":"Check_Binary_Code"},"\n",{"#f":5}],"#f":5,"#n":"g-0"}],null],{"#f":1}],"#f":1}],"Pavilion":[["^You will explore [the Pavilion] next. You discover a hidden clue at the Pavilion. It's a trivia question!","\n","ev","str","^Answer the trivia question","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Skip this location","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^What is the official mascot of the University of Virginia?","\n",["ev","str","^Answer: Wahoos","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Answer: Cavalier","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^You get the binary digit 0.","\n",{"->":"Locations"},{"#f":5}],"c-1":["\n","^Correct! You get the binary digit 1.","\n",[["ev",{"^->":"Pavilion.0.c-0.3.c-1.3.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^next location ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Pavilion.0.c-0.3.c-1.3.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"Locations"},{"#f":5}]}],{"#f":5}]}],{"#f":5}],"c-1":[{"->":"Locations"},"\n",{"#f":5}]}],{"#f":1}],"Alumni":[["^You find a locked safe at Alumni Hall and a note.","\n","ev","str","^read note","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Skip this location","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^What is the official Jim Ryan's Birthday of the University of Virginia?","\n",["ev","str","^Answer to unlock the safe","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^next location","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",["ev","str","^January 8","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^June 16","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^September 21","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^November 11","/str","/ev",{"*":".^.c-3","flg":20},{"c-0":["\n","^Incorrect, you will now continue the escape room","\n",{"->":"Locations"},{"#f":5}],"c-1":["\n","^Incorrect, you will now continue the escape room","\n",{"->":"Locations"},{"#f":5}],"c-2":["\n","^You have now solved the escape room code: 11011","\n",{"->":"Check_Binary_Code"},{"->":"Locations"},{"#f":5}],"c-3":["\n","^Incorrect, you will now continue the escape room","\n",{"->":"Locations"},{"#f":5}]}],{"#f":5}],"c-1":["\n",{"->":"Locations"},{"#f":5}]}],{"#f":5}],"c-1":[{"->":"Locations"},"\n",{"#f":5}]}],{"#f":1}],"Rotunda":[["^You explore [the Rotunda] and find a mysterious riddle.","\n","ev","str","^Solve the riddle","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Skip this location","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^What statue stands at the South Lawn of the UVA campus?","\n",["ev","str","^Answer: Homer","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Answer: Jefferson","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^Correct! You get the binary digit 1","\n",{"->":"Locations"},{"#f":5}],"c-1":["\n","^You get the binary digit 0.","\n",{"->":"Locations"},{"#f":5}]}],{"#f":5}],"c-1":[{"->":"Locations"},"\n",{"#f":5}]}],{"#f":1}],"Beta_bridge":[["^You will explore [Beta Bridge] next. At Beta Bridge, you notice a hidden message.","\n","ev","str","^Decode the message","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Skip this location","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^What is the founding year of the University of Virginia?","\n",["ev","str","^Answer: 1819","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Answer: 1821","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^Correct! You get the binary digit 0.","\n",{"->":"Locations"},{"#f":5}],"c-1":["\n","^You get the binary digit 1.","\n",{"->":"Locations"},{"#f":5}]}],{"#f":5}],"c-1":[{"->":"Locations"},"\n",{"#f":5}]}],{"#f":1}],"Library":[["^You will explore [the Library] next. Inside the library, you find a locked chest.","\n","ev","str","^Unlock the chest","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Skip this location","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^You find a note with a question: Which of the following is the name of a basketball coach at UVA?\"","\n",["ev","str","^Answer: Tony Bennett","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Answer: Tony Elliot","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Skip this location","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n","^Correct! You get the binary digit 1.","\n",{"->":"Locations"},{"#f":5}],"c-1":["^ ","\n","^You get the binary digit 0.","\n",{"->":"Locations"},{"#f":5}],"c-2":["\n",{"->":"Locations"},{"#f":5}]}],{"#f":5}],"c-1":["\n",[{"*":".^.c-0","flg":24},{"c-0":[{"->":"Locations"},"\n",{"#f":5}]}],{"#f":5}]}],{"#f":1}],"Amphitheater":[["^You will explore [Amphitheater] next. You explore the Amphitheater and discover a hidden panel.","\n","ev","str","^Open the panel","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^skip this location","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^You find a question: What is the UVA go to bagel place?","\n",["ev","str","^Answer: Bodo's","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Answer: Panera","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^Correct! You get the binary digit 1.","\n",{"->":"Locations"},{"#f":5}],"c-1":["\n","^You get the binary digit 0.","\n",{"->":"Locations"},{"#f":5}]}],{"#f":5}],"c-1":["\n",{"->":"Locations"},{"#f":5}]}],{"#f":1}],"Check_Binary_Code":[["^You now return to the original room to enter the correct binary code. You see the sign above the door. \"YOU HAVE ENTERED THE UVA ESCAPE ROOM. SOLVE THE PUZZLES TO ESCAPE. YOU HAVE EXACTLY 27 MINUTES TO ESCAPE\"","\n","ev","str","^Type: 11001","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Type: 11011","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Type: 01011","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^Type: 01001","/str","/ev",{"*":".^.c-3","flg":20},"ev","str","^Type: 11000","/str","/ev",{"*":".^.c-4","flg":20},"ev","str","^do nothing","/str","/ev",{"*":".^.c-5","flg":20},{"c-0":["\n",["ev","str","^walk through","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^do nothing","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"Lost"},{"#f":5}],"c-1":[{"->":"void"},"\n",{"#f":5}]}],{"#f":5}],"c-1":["\n","^The door opens.","\n",["ev","str","^walk through","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^do nothing","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"Escape"},{"#f":5}],"c-1":["^ ",{"->":"void"},"\n",{"#f":5}]}],{"#f":5}],"c-2":["\n",["ev","str","^walk through","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^do nothing","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"Lost"},{"#f":5}],"c-1":[{"->":"void"},"\n",{"#f":5}]}],{"#f":5}],"c-3":["\n",["ev","str","^walk through","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^do nothing","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"Lost"},{"#f":5}],"c-1":[{"->":"void"},"\n",{"#f":5}]}],{"#f":5}],"c-4":["\n",["ev","str","^walk through","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^do nothing","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"Lost"},"\n",{"#f":5}],"c-1":[{"->":"void"},"\n",{"#f":5}]}],{"#f":5}],"c-5":[{"->":"void"},"\n",{"#f":5}]}],{"#f":1}],"Win":["^Congratulations! You successfully escaped from the UVA-themed escape room. You're free!","\n",{"->":"Escape"},{"#f":1}],"void":["^You have chosen to accept the metaverse. Enjoy kicking back and never having work again!","\n","end",{"#f":1}],"Escape":["^You return back to the real world, where your eager professor waits to try your newly developed game.","\n","end",{"#f":1}],"Lost":["^You are lost in the computer void. Try again to conquer the UVA escape room.","\n","done","^HELLO WORLD","\n","end",{"#f":1}],"#f":1}],"listDefs":{}};