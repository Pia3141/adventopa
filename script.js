const calendar = document.getElementById('calendar');
const modal = document.getElementById('imageModal');
const field = document.getElementById('modal-body');
const title = document.getElementById('title');
const myModal = new bootstrap.Modal(modal);

const list = 
    [
        {day: '1', title: 'Auf der Vogelwiese', link:'https://open.spotify.com/embed/track/2UWL0Js3B6pY5aUlB1dcEZ?utm_source=generator&si=e03a840a9f214bbe'},
        {day: '2', title: 'Böhmischer Traum', link:'https://open.spotify.com/embed/track/2Gra5abgzOrtL8bxx3XDOm?utm_source=generator&si=681c53f19c8a42ca'},
        {day: '3', title: 'Alte Kameraden', link:'https://open.spotify.com/embed/track/67VJb9wa2SmKPvDRNv14gS?utm_source=generator&si=cb5f50c3e6db4b94'},
        {day: '4', title: 'Fliegermarsch', link:'https://open.spotify.com/embed/track/4nB1F8stNcgVBXoStqKJ3R?utm_source=generator&si=b39e046c93034d4e'}, 
        {day: '5', title: 'Jodler der Berge', link:'https://open.spotify.com/embed/track/4sbgL3gESvBF7byxJIwxaV?utm_source=generator&si=9f0be17c33904532'},
        {day: '6', title: 'Tochter Zion', link:'https://open.spotify.com/embed/track/7GX6TAbOx2ycTtGnsJtjl0?utm_source=generator&si=1191d22173c34315'},
        {day: '7', title: 'Böhmische Liebe', link:'https://open.spotify.com/embed/track/0QGg6Ctuf3AvyGXtO9wJMJ?utm_source=generator&si=39d2cbfb038e4c7f'},
        {day: '8', title: 'Bayerischer Defiliermarsch', link:'https://open.spotify.com/embed/track/53gnbdMCZHrbUM8867J7Fv?utm_source=generator&si=26f2bd04335248eb'},
        {day: '9', title: 'Schneeflöckchen, Weissröckchen', link:'https://open.spotify.com/embed/track/4xWXehhXrboBrvxXAqbAyi?utm_source=generator&si=a848aa111376481a'},
        {day: '10', title: 'Grüne Tannen', link:'https://open.spotify.com/embed/track/6Rf5bpKjzvWdDj2dU7c834?utm_source=generator&si=c55fffd389014a99'},
        {day: '11', title: 'Bella Ciao', link:'https://open.spotify.com/embed/track/7F71zXajIOpOi4z9blmvAa?utm_source=generator&si=48c5a6643576432c'},
        {day: '12', title: 'Schneekristalle', link:'https://open.spotify.com/embed/track/4f2rQOX5cfElL6LWs9w7ag?utm_source=generator&si=9cf7be397a1a4b03'},
        {day: '13', title: "Es ist ein Ros' entsprungen", link:'https://open.spotify.com/embed/track/4uJ9zP4Qxt1sPWP0sz8tAx?utm_source=generator&si=4d9a203956954759'},
        {day: '14', title: 'Dahoam is Dahoam', link:'ttps://open.spotify.com/embed/track/5RYIS5rNbsVkkV1T56ROA8?utm_source=generator&si=3636bac854b0402b'},
        {day: '15', title: 'Gott mit dir, du Land der Bayern', link:'https://open.spotify.com/embed/track/4KfyQReaZw9UK05gNLF6W5?utm_source=generator&si=4c1a5a4a93dc42ac'},
        {day: '16', title: 'Leise rieselt der Schnee', link:'https://open.spotify.com/embed/track/5XyWnqOc6UAdcE20vkcF4f?utm_source=generator&si=222de783a635445a'},
        {day: '17', title: 'Dem Land Tirol die Treue', link:'"https://open.spotify.com/embed/track/4sbgL3gESvBF7byxJIwxaV?utm_source=generator&si=54eacbd8103c4efd'},
        {day: '18', title: '3 Haselnüsse für Aschenbrödel', link:'https://open.spotify.com/embed/track/2IMKeGQitBiNyrCyC1Frgs?utm_source=generator&si=088b90fd28ee4a3c'},
        {day: '19', title: 'Die Gedanken sind frei', link:'https://open.spotify.com/embed/track/2PioVNqVkJnkKJNlVCrf0y?utm_source=generator&si=4c62e6c4eb4b4410'},
        {day: '20', title: 'In der Weihnachtsbäckerei', link:'https://open.spotify.com/embed/track/5RxYjZmEaCYgYZ5Yht7Xc7?utm_source=generator&si=961504214a7c4c2d'},
        {day: '21', title: 'Märchenwalzer', link:'https://open.spotify.com/embed/track/1HdA7Ln0p0GImPdHwzQj02?utm_source=generator&si=917c8c1089d04f07'},
        {day: '22', title: 'Oh du fröhliche',link:'https://open.spotify.com/embed/track/0qeHqtIOMGK0nViz5ZxM1R?utm_source=generator&si=341ac78e4e514c1f'},
        {day: '23', title: 'Süßer die Glocken nie klingen', link:'https://open.spotify.com/embed/track/17RpilnWcFQl3Fqh6kBo84?utm_source=generator&si=a3af1b8f1b6c430f'},
        {day: '24', title: 'Stille Nacht', link:'https://open.spotify.com/embed/track/3h4w5f6c0jpT6obFfGRChm?utm_source=generator&si=f8cbc9a4fbca4113'},
    ]

for(let i = 1; i <= 24; i++){
    calendar.innerHTML += `<div class="door col" id=${i}>${i}</div>`;
}


let doors = Array.from(document.getElementsByClassName('door'));
   

let show = (e) =>{
    let id = Number(e.target.id);
    let today = new Date();
    let open = new Date(); // !!!ÄNDERN

    if (open <= today){
        title.innerText = `${id}. Dezember - ${list[id-1]['title']}`;
        
        field.innerHTML = `<iframe data-testid="embed-iframe" style="border-radius:12px" src="${list[id-1]['link']}" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
           

    
        myModal.show();

}}

doors.forEach((d)=>{
    d.addEventListener('click', show);
})

