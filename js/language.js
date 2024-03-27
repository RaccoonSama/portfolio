$(document).ready(function() {

   $('#body-anim').addClass('intro-fade');


var fr = true;


$('#fr').click(
    function() {
            location.reload(true);
       
    }
)
$('#en').click(
    function() {
        fr = false;
        console.log($('#GTdesc'));


        $('#header-prp').text(lang.eng.about);
        $('#header-xp').text(lang.eng.xp);
        $('#header-ctc').text(lang.eng.contact);
        $('#propos h2').text(lang.eng.aboutTitle);
        $('#propos p').text(lang.eng.aboutTxt);
        $('#exp h2').text(lang.eng.real);
        // GT
        $('#GTdesc').text(lang.eng.gtWiki);
        // React
        $('#reactSchool').text(lang.eng.gtWiki);
        // Bakery
        $('#bakeryTitle').text(lang.eng.aapTitle);
        $('#bakerySite').text(lang.eng.aapDesc);
        // Html test
        $('#funHtmlTitle').text(lang.eng.randomTitle);
        $('#funHtmlDesc').text(lang.eng.randomDesc);
        // css test
        $('#funCssTitle').text(lang.eng.randomCssTitle);
        $('#funCssDesc').text(lang.eng.randomCssDesc);
        // Gamejam
        $('#gameDevTitle').text(lang.eng.gameDevTitle);
        $('#gameDevDesc').text(lang.eng.gameDevDesc);
        // other
        $('.site-link').text(lang.eng.site);
        $('#site-link-extra').text(lang.eng.site2)
        $('#coord h1').text(lang.eng.contactTitle);
        $('#hide-info').text(lang.eng.button);
        $('#resume-a').text(lang.eng.cv);
        
    }
)




const lang = {

    eng: {
        about : "About",
        xp : "Experience",
        contact : "Contact-me",
        aboutTitle : "Young web devlopper, always learning",
        aboutTxt : "Front end developper who likes to learn and code. I love js and anything related to it !. Bilingual English-French, self-taught, smart, resourceful and motivated",
        real : "Realisations",
        site : "Visit site",
        site2 : "See other project",
        // gt
        gtWiki: "Wiki of an animated serie on youtube, creation of templates and modification of extensions. The website is sadly down as of today so please refer to the picture or wayback machine.",
        // react
        reactTitle : "React prototype",
        reactDesc: "React website prototypes, implementation tests with databases",
        // bakery
        aapTitle : "Audrey-Anna bakery website",
        aapDesc : "Design and incorporation of templates in odoo for the website of Audrey-Anne Patisserie",
        // fun html
        randomTitle : "fun main page of a website",
        randomDesc : "POC of a home page design as well as a style switcher in js",
        // fun css
        randomCssTitle: "Kirby css",
        randomCssDesc: "Kirby entirely made in css, small personal test made for fun",
        // gamedev
        gameDevTitle: "Game Dev !",
        gameDevDesc: "GameJam where we had to create a game under 48h, other link is a procedural dungeon map generator made by me for fun",
        contactTitle : "Contact-me",
        button : "see infos",
        cv : "Download my resume"
    }
    
}

});