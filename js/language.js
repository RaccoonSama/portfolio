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
        console.log(fr);


        $('#header-prp').text(lang.eng.about);
        $('#header-xp').text(lang.eng.xp);
        $('#header-ctc').text(lang.eng.contact);
        $('#propos h2').text(lang.eng.aboutTitle);
        $('#propos p').text(lang.eng.aboutTxt);
        $('#exp h2').text(lang.eng.real);
        $('.site-link').text(lang.eng.site);
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
        aboutTxt : "Student in multimedia who likes to learn et code. I like Video Games, music, roleplay and animated series bust most likely web. Bilingual English-French, self-taught, smart, resourceful and motivated",
        real : "Realisations",
        site : "Visit site",
        reactTitle : "React prototype",
        wpTitle : "Main page wordpress",
        randomTitle : " fun main page of a website",
        contactTitle : "Contact-me",
        button : "see infos",
        cv : "Download my resume"
    }
    
}

});