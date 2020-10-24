var  navMenuAnchorTag = document.querySelectorAll('.nav-menu a');
//console.log(a);
for(i =0; i < navMenuAnchorTag.length; i++)
{
    navMenuAnchorTag[i].addEventListener('click',function(){
        event.preventDefault();

        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);

        var interval = setInterval(function(){
            var targetSectioncoordinate = targetSection.getBoundingClientRect();
            if(targetSectioncoordinate.top <= 0)
            {
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);

        }, 20);

    });

}


var progressBars = document.querySelectorAll(".skill-progress > div");
var skillsContainer = document.getElementById('skill-container');
var animationDone = false;



function initialiseBars() {
    for (var bar of progressBars) {
        bar.style.width = 0 + '%';
    }
}

initialiseBars();



function fillBars() {

    for (let bar of progressBars) {
        let currentWidth = 0;
        let interval = setInterval(function () {
            let targetWidth = bar.getAttribute('data-bar-width');
            if (currentWidth >= targetWidth) {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 2);
    }
}



function checkScroll() {

    var coordinates = skillsContainer.getBoundingClientRect();
    if (!animationDone && coordinates.top <= window.innerHeight) {
        animationDone = true;
        fillBars();
    } else if (coordinates.top > window.innerHeight) {
        animationDone = false;
        initialiseBars();
    }
}



window.addEventListener("scroll", checkScroll);










