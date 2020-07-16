const moony = "M34 55C34 85.3757 55 110 55 110C24.6243 110 0 85.3757 0 55C0 24.6243 24.6243 0 55 0C55 0 34 24.6243 34 55Z";

const sunny = "M110 55C110 85.3757 85.3757 110 55 110C24.6243 110 0 85.3757 0 55C0 24.6243 24.6243 0 55 0C85.3757 0 110 24.6243 110 55Z";

const maraud = document.querySelector("#maraud");
let toggle = false;

//Make the sun clickable
maraud.addEventListener('click', () => {

    /** Using anime.js
     * We need to setup a Timeline */
    const timeline = anime.timeline({
        duration: 750, 
        easing: "easeOutExpo"
    });

    //Add different animations to the timeline
    timeline.add({
        targets: ".sun" ,
        d: [ {value: toggle ? sunny : moony}
            /**You can add more than one value here
             * eg. {value: moony}, {value: starry}
             */
        ]
    })
    .add({
        targets: "#maraud",
        rotate: toggle ? 40 : 320
    }, '-=650')
    /**You can add more animations here
     * eg. .add({}) .add({})... .add({});
     */
    .add({
        targets: "section",
        backgroundColor: toggle ? 'rgb(255, 255, 255)' : 'rgb(20, 20, 20)',
        color: toggle ? 'rgb(44, 1, 44)' : 'rgb(240, 240, 240)'
    }, '-=680');

    //Toggle everytime we click on the sun
    if(!toggle)
    {
        toggle = true;
    }
    else
    {
        toggle = false;
    }
});