/*
 * WTF Engine
 * https://github.com/soulwire/WTFEngine
 *
 * Copyright 2011, Justin Windle
 * http://blog.soulwire.co.uk/
 * Code Licensed under the MIT licence.
 * https://github.com/soulwire/WTFEngine/blob/master/MIT-LICENSE.txt
 *
 * Concept based on WTFSIMFD
 * http://whatthefuckshouldimakefordinner.com/
 * by Zach Golden
 * http://www.zachgolden.com/
 *
 */
 
var templates = [
	"<strong>Charakteristika:</strong> @pridavne @podstatne, @pridavne @podstatne, potřebují @pad. @charakteristika @picovina. Pozor na @pad. @finalni <br/><strong>Barva:</strong> zelená <br/><strong>Doplňky na noc:</strong> @doplnek <br/><strong>Vhodné směry:</strong> @direction <br/><strong>Doporučení:</strong> @doporuceni @finalni",
];


var phrases = [
	"Zde je Váš Feng-šuej profil:",
];

var jmeno = document.getElementById("nameForm");


var labels = [
	"Vypočítat!",
];


/*
	Auto Generated from wtftwitter4.0.csv
*/


corpus = {};

corpus.pridavne		    = ["nezávislí","na alkoholu závislí","výjimeční","spirituální","kontemplativní","fyzicky větší","nepraktičtí","nejpraktičtější","plynulí","zahřívající se","dokonale organizovaní","noční","impulzivní a politicky nekorektní","přemýšliví","plaší","introspektivní","do detailů myslící","pohodlní","vodu zadržující","romantičtí","děsivě adaptabilní","znudění","spravedliví","žárliví","sobečtí","majetničtí"];

corpus.podstatne	    = ["individualisté","dříči","samorosti","sexbombáci","hypochondři","analytici","sběratelé","saláti s tvůrčím potenciálem","partneři","barbaři","mistři","ožralové","prostředníci v konfliktech","workoholici posedlí úspěchem","kulturisté","samurajové","jedlíci z dobrých restaurací","intelektuálové","virtuální transvestité","illumináti","gymnasti a hypnozizéři","introverti","guruové Járové","specialisté na sebepoznání v druhých","podpantofláci","usurpátoři","trollové","princezny","ninjové","geekové","stavitelé vzdušných zámků","perfekcionisté","fanatici","inovátoři","pterodaktylové"];

corpus.pad	    	    = ["úniky větrů","sucho a sushi","více ohně","soudní spory","ryby","tvrdost","jisté stagnace","periskopické fungování","záření společenské aktivity","syntézu, kondenzaci a bifurkaci","Polouše","svá tajemství","jisté bohaté emoční zážitky","zátěž na plíce","hluboké závazky","jisté kulminace","dobré plánování","odtržení od minulosti","vykročení do neznáma","rok proměn","nový start","pružnost","silnou vizualizaci","sklony k vysušení","křupky","soukromí","regulování vlastního ohně","vyvíjení vlastní disciplíny","ticketing","nové impulsy","tmu","alkohol a kořeněná jídla","odháčkování"];

corpus.picovina	        = ["spektrum vlastní síly","záření","úplný přerod","vztah k majetkům druhých","osobní inventura despotismu","odlehčení","téma tváře","spektrum vlastní síly","nejplodnější země","vztah ke své noze","obraz disciplíny","návrat spirituality","záření","mateřská láska k šatníku","nejsilnější vliv","jarní energie","energetická proměna","spirituální proměna","starostlivá proměna"]

corpus.charakteristika 	= ["Často mění směr a polohu.","Rádi volí své partnery.","Fungují jako stroboskop.","Smrdí jako ryba.","Pijí až do (úplného) konce.","Expandují všemy směry.","Jednají jako vnoučata.","Fungují jako centrálhní počítač. (Mají výpadky.)","Mají smysl pro vrásu.","Přemýšlejí až do nejnechutnějších detailů.","Jako muži bývají přísní, po operaci jsou v pohodě.","Vyšší sexualita.","Ohnivé srdce a prdel.","Jasně zářivé oči a ledviny.","Vypadají nejistí a opravdu jsou.","Setkávají se s problémy, když jsou uprostřed.","Mají dobrou mluvu a bulvu.","Nechtějí být submisivní.","Ráno je bolí hlava a játra.","Jejich rána jsou těžká.","Nesnášejí svou závislost.","Často úzce zaměření na jistou věc.","Aktivní energie v jisté oblasti.","Jsou důvěřiví a kdekomu sednou na lep a klín.","Obvykle jasný názor, často však ne dobře promyšlený.","Nejaktivnější ze všech prvků.","Pokud jim podrží rodina, jsou zase úspěšní.","Často tweetují opilí."];

corpus.finalni	        = ["Zakořenit!","Nezadržovat vodu!","Nový design!","Odhodit šaty!","Investovat do zviditelnění se!","Meditovat v horizontální nebo lososové poloze!","Spojení je zásadní!","Nahoru a dolů!","Zahřívat se!","Možnost budovat hmotu!","Studium imaterializace!","Pouštět staré!","Dávat přednost klidu!","Dávat přednost lidu!","Pěstovat zrní!","Močový měchýř!","Prát a žehlit!","Nestěhovat se!","Udržovat teplo!","Nezapomenout na okurku!","Odlehčovat se jistým pohybem!","Sledovat vítr!","Práce s půdou!","Pečovat o tělo!","Budovat hmotné statky!","Pokračovat v životě!","Nepadat do cirkulárky!","Akcentovat potenciál!","Meandrovat!","Mikrovlnky vraždí jídlo!","Jet obchvatem!"];
 
corpus.doplnek	        = ["Kruh", "3 ohřívače", "3.6 x 9 květiny", "2 x 4 květiny", "3 květiny", "4 květiny","3 x 8 květiny","amulet na cestu","mísa","kámen","vlhký hadr","voda","čtverec","lahváč","sklo","kov","mrkev","kedluben","sandál","dopravní kužel","cihly","mince","2 ohřívače"];

corpus.direction	   	= ["k baru","do postele","do hospody","vzhůru","dolů","pod bar","127.0.0.1","žena","dadaismus","dekadence","naturalismus","WC","k ohni","do kotle","kupředu","k hoře","ke kovu","do dna","dozadu, na konci doleva, a pak doprava","do detailu","User/local"];

corpus.doporuceni	   	= ["Nutno pěstovat systematickou činnost jistého druhu.","Pěstovat radost z ledvin.","Nepřeceňovat konečník.","Je nutné učit se pouštět nebo hrozí potíže s tlustým střevem v pozdním věku.","Přidat zemi a dvě chilli papričky.","Pečujte o druhé na třetí.","Hledat nové pulzy a magnetická pole.","Pracujte se svaly a ledvinami.","Věk 30-40 je zátěžový na játra a mozek.","Pro zdraví jsou kritická játra.","Je nutné pracovat na romantice.","Věnovat se jedné jisté věci.","Udržovat vyvážené teplo na venek.","Co se dnes započne, bude pokračovat 9 let.","Pozor na prochladnutí - udržovat plynutí a průchodnost.","Pokud nebudou v centru centrem, hrozí potíže s levým palcem u pravé nohy.","Dávat pozor na konstituci – nepřidávat oheň.","Do pánské ložnice více kovu a dřeva.","Změnit šatník, noční stolek, jednu židli u stolu a květináč."];