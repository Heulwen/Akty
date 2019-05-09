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
	"<strong>Popis díla:</strong> Pozice znázorňuje vztah mezi @padprvni a @paddruhy. Kdo začíná jako @zacinapodjm brzy ho změní @zmenihopodjm, až zůstane jen @zustanepodjm. Ve společnosti, kde @kde, zbývá pozorovateli jen @cinnost.",
];


var phrases = [
	"Odhadátor popisů aktů by Vaši pózu popsal následovně:",
];

var jmeno = document.getElementById("nameForm");


var labels = [
	"Odhadnout popis!",
];


/*
	Auto Generated from wtftwitter4.0.csv
*/


corpus = {};

corpus.padprvni 		    = ["na alkoholu závislýma pterodaktylama","individualisty","dříči","analytiky kamarillí hierarchie","sběrateli jistých informací","klíční kostí","Venuší","cvokařem","kolemjdoucím","beznohýma fomorama","kočkou","cechem kosmetiček","diskem na obloze","smradem ze sklepa","kokoty","agresivními kritiky čehokoliv","patou Brujaha","lebkou proměněného vlkodlaka","vášnivým krokodýlem","kolenem","designerem umírajícím na Parukářce","dvěma dušema v jednom diableristovi","polibkem od Tremera","leskem v očích aristokratek","přírodní srstí Gangrelů","fanatickými lovci","kulturními barbary","těmi, co vypadají nejistí a opravdu jsou","tváří Nosferatky","Ventruem zvracícím po vypití nevhodné krve","špatně načasovaným malkaviáním vtipem","dítětem v mikrovlnce","Slovenskem","zády francouzského prince","jednou z Attilových žen","gangrelí saunou","skautkami naivně zvonícími u dveří černých spirál"];

corpus.paddruhy	    = ["terorismem","hypochondrií","islámem","Marsem","smrtí","nevěrou","hermetismem","inverzí","komunismem","vraždou ze žárlivosti","ohořelým klackem","košíkem koťátek","hebkou kůží","zkroucenou páteří","mučením","diverzitou univerza","kakofonií chamtivosti","políbením múzy","postmodernou","dočasnou nadvládou jednoho klanu","humanitou","sexualitou","pružností","úniky větrů","ohněm","sluncem","třema cihlama","kruhem zla","casanovama dobrýma v jistých situacích","osobní inventurou","spravedlností","touhou","potřebou lásky","chlupatými údy","robotizací","meditací","spiritualitou přírazové vrtačky","zoofilií"];

corpus.zacinapodjm	    	    = ["introvert","nemajetný","malý člověk","zásadový člověk","člověk","optimista","Toreador","mrtvý člověk","smradlavá onuce","oblý lívaneček","fomora","svačina pro vyšší formy","nabondovaná bakterie","incident","vyvrhel","dokonale naondulovaná modelka","někdo se smyslem pro humor","romantická duše","nezávislý pozorovatel","sběratel kalhotek","inovátor","stavitel vzdušných zámků","praktický a veselý člen společnosti","zaujatý vyvíječ vlastní disciplíny","žárlivý a sobecký","úzce zaměřený na jistou věc","přemýšlivý a plachý jedinec","kompetitivní jedinec","důvěřivec, co kdekomu sedne na lep a na klín","nejaktivnější ze všech prvků","pouhý ohřívač vzduchu","čisté srdce odtržené od minulosti"];

corpus.zmenihopodjm	        = ["jisté bohaté emoční zážitky","dostatek blahobytu","pochlebování placených lokajů","temnota noci","bezstarostné plýtvání krví","uvědomění nesmyslnosti všech rozkazů","pití krve mladých žen","sériové ztráty všech blízkých","vábení Černé bohyně","malé dávky krve mágů v šampaňském","neustálé vstávání levou nohou napřed","lobotomie","vydýchaný vzduch v Elysiu","pomluvy a křivá obvinění","systematické rány lžičkou","velká rána do hlavy","poznání limitů jeho vlastní mysli","alkohol a kořeněná jídla","jisté stagnace","tlak v podbřišku","nátlak z vyšších sfér","odháčkování","repetitivní volání svým kontaktům","nutnost účastnit se pořád stejných bojů","absence vyššího smyslu bytí","nové impulsy z temných míst Elysia","pocit sucha a bezpečí","nutnost regulování vlastního hladu","pád do cirkulárky","nechtěné závazky"];

corpus.zustanepodjm 	= ["zima, chlad a halucinace z podvýživy","anorexie a bulimie","prázdnota","zbytek ohlodaných kostí","smutek hluboko na malkaviánské síti","prach","zpěv ptáků a slunce vysoko na obloze","skupina Toreadorů","osina v zadku","ostrý loket tlačící jeho tvář ke stolu","uvolněný post primogena","dramatická scéna objevitelná auspexem","pochcaný roh telefonní budky","hromádka hnusu k odklizení ekologickou likvidací","prázdný obal","někdo, kdo kdysi býval bytostí","jako opařený stát v prázdném Elysiu","osamělý bezdomovec živící se česnekem","kvalitní sbírka mentálních poruch a komplexů","pečlivě udržovaná asociálnost","čistá pravda","Bestie","zběsilé krmení se na vlastních kamarádech","vzpomínka na někdejší senešalku","přemýšlení do nejnechutnějších detailů","vztah ke své noze","obraz té nejodpornější z disciplín","sklon k vysušení"];

corpus.kde	        = ["kdekdo tweetuje opilý","se tabuizují drogy a pedofilie","každý chrání jen svá vlastní záda","smrdí ližprdelství jako kufr starého Ventrua","se Rodní roztékají do černých kaluží","stíny ukrývají dávné nepřátele","to smrdí wyrmem","se udávají i vlastní děti","je každý krok lesem boj na život a na smrt","nemůžete věřit ani svému příteli","osoby nosí po kapsách kolíky","jste necháni napospas zvěři","vládne přetvářka a lži","kdekdo sní o opravdu divných věcech","se sekají za prohřešky údy","cokoliv dělat je jako házet šišku salámu do chodby","nikdo nechce být submisivní","můžete být zase úspěšní, pokud vám podrží rodina","vše smrdí jako ryba","byl poslední Gangrelí primogen před pěti lety","si lidé stoupají před kameru a myslí si, že by je takhle někdo vyfotitl na akt","chybí jeden konkrétní druh umění: komunikace","kde si jedinci volí své partnery pouze na základě zápachu z úst","mají jedinci nejryzejší vztah pouze se svýma cetkama","chybí schopnost opouštět staré"];
 
corpus.cinnost	        = ["držet krok a prdel","smysl pro zpochybňování holocaustu","touha po přežití","víra v sebenaplnění","absurdita ne-lidského bytí","toužit a milovat","doufat v nekonečnost noci","zůstat v havenu","ležet stulený do klubíčka a představovat si, že je ježek","zabodnout si z hecu kůl do srdce","naghúlovat si rosomáka","okusovat si nehty u nohou","urvat si hlavu a hodit ji po nepřátelích","vzít tyčový mixér a vyvrtat si oči","útěcha, že má ještě obě nohy","stát se také workoholikem posedlým úspěchem","zamířit k k vyhynutí","útěcha z filozofie","restart počítače","silná vizualizace prdele","obvykle jasný názor, často však ne dobře promyšlený","koupit si květinu","pečovat o své tělo","nezapomenout na okurku","umění trollingu","investovat do zviditelnění se","mateřská láska ke svému šatníku","odhodit šaty","meandrovat v rytmu bigbítu"];

