For at kører webpack'en:
npm install
npm start

Opgavebesvarelsen kan tilgås på:
https://blackphlox.github.io/JavaScript/itu
eller via GitHub:
https://github.com/BlackPhlox/blackphlox.github.io/tree/master/JavaScript/itu

Alt matriale ift. udviklingen kan tilgås i undermappen:
itu/assets

Afl. 1

Relevante file-paths:

itu/assets

itu/assets/sketches

Kort begrundelse:

/home
Efter jeg havde lavet de 3 sketches, valgte jeg at tage 
udgangspunkt i den 3. da den 2. ville være svær at implementere.
Derudover ønsket jeg at menuen skulle være inline, så der var 
mere fokus på indholdet på siden frem for menuen.

/links
Efter de tre udkast valgte jeg den 2. for den ladet ikke 
til at være svær at implementere og den ville kunne give mest
mulig infomation ved at udgøre en mindre del af skærmen i forhold til
de 2 andre udkast.

/contact
På baggrund af de 3 skitser, valgte jeg de mest simplistiske(01).
Da den giver indtrykket af en lineær process/navigationsstruktur.
Både fordi den er typisk, så brugerne er hurtig klar over
hvordan de bruger siden.

Afl. 2

Relevante file-path:

itu\assets\feedback

Feedback:

Bruger 1:
    
	Det ser fint ud, men jeg kan ikke rigtig lide den grå farve.
Bruger 2:

    Layout-mæssigt er det nemt at finde rundt på siden. 
	Da det vises i toppen af siden.
    Har ingen umiddelbare indvending ift. valg af layout. 
	Det skalere også fint, og kan godt lidt at farve markeringerne hopper ned under boxene, 
	når siden skaleres meget.

Bruger 3:

    Kunne være fedt med skiftevis blåt sidebar "rækker" af information.
    Tekstfeltet burde matche input feltets størrelse.
    Footer i bunden af siden på Contact.

Bruger 1 | Ændringer foretaget

- Ændret den grå farve til en der var en smule lysere. 
	Den farven forbliver grå, da det var intentionen at der skulle 
	være en stor kontrast mellem baggrunden og teksten.
	For at give visuelt feedback til brugeren om hjemmesidens opdelingn struktur. 

Bruger 2 | Overvejelser

- Bekræfter det valgt jeg tog ift. måden at 
	skalere artiklerne(content-box- left/right) med flexbox.
    
Bruger 3 | Ændringer foretaget

- Har gjort artiklerne til at skifte mellem den blå border på højre og venstre side.
    (Se billede BeforeFB01 & AfterFB01)
	
- Har centeret "form"-feltet i contact-us, samt har givet tekstfeltet 
	den samme bredde som navn og email-feltet.
    (Se billede BeforeFB02 & AfterFB02_A & AfterFB02_B)
    
- Valgte ikke at footeren skal være i bunden, men en forlægnelse af siden. 
	Da det vil betyde at footeren skal være sættes til at være absolute, 
	og dermed fylde en del af siden, uanset hvor man befinder sig.
    (Se billede BeforeFB02 & AfterFB02_A & AfterFB02_B)

Yderligere ændringer:  

- Ændret skrifttypen fra monospace til serif, for at vise seriøsitet 
	og at man antyder at itu er en institution der læser og vender tilbage til afsenderen. 
    (Se billede BeforeFB02 & AfterFB02_A & AfterFB02_B)

- Har hertil også brugt flexbox på alle dom-elementer der har med 
	skalering af web-browseren, så alt skaleres og er tilpasset browserens bredde. 
	Jeg valgte at bruge flexbox fordi dens måde skaleres bedre på siden frem 
	for at gøre brug af grids.  
	
Afl. 3 React intergration

	
	

By Mikkel Luja Rasmussen | milr@itu.dk 2018
