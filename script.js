function page1() {
    var tl = gsap.timeline()

    tl.from("nav h1, nav h4, nav button", {
        y: -40,
        opacity: 0,
        dealay: 1,
        duration: 0.8,
        stagger: 0.2
    })

    tl.from(".center-part1 h1", {
        x: -200,
        opacity: 0,
        duration: 0.6
    })
    tl.from(".center-part1 p", {
        x: -100,
        opacity: 0,
        duration: 0.4
    })
    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.3
    })
    tl.from(".center-part2 img", {
        opacity: 0,
        duration: 0.4,
        x: 100
    }, "-=0.5")

    tl.from(".section1bottom img", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.6
    })
}
page1()

function page2(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            start: "top 80%",
            end: "top 0%",
            scrub: 2,
    
        }
    })
    tl2.from(".services h3",{
        x: -200,
        opacity: 0,
        duration: 0.5,
    })
    tl2.from(".services p",{
        opacity: 0,
        duration: 0.5,
    })
    tl2.from(".elem.line1.left", {
        x: -300,
        opacity: 0,
        duration: 1,
    }, "anime")
    tl2.from(".elem.line1.right", {
        x: 300,
        opacity: 0,
        duration: 1,
    }, "anime")
    tl2.from(".elem.line2.left", {
        x: -300,
        opacity: 0,
        duration: 1,
    }, "anime2")
    tl2.from(".elem.line2.right", {
        x: 300,
        opacity: 0,
        duration: 1,
    }, "anime2")
    
}
page2()

function page3(){
    var gptl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section3",
            scroller: "body",
            start: "top 80%",
            end: "top 0%",
            scrub: 2,
        }
    });
    gptl.from(".image-div img",{
        x:-200,
        duration:0.7,
        opacity:0
    },"same")
    gptl.from(".content-div h1",{
        y:-100,
        opacity:0,
        duration:0.7
    },"same")
    gptl.from(".content-div h4",{
        x:100,
        duration:0.7,
        opacity:0
    },"same")
    gptl.from(".content-div p",{
        y:100,
        duration:0.7,
        opacity:0,
    },"same")
}
page3()

function page4(){
    var cardtime = gsap.timeline({
        scrollTrigger:{
            trigger:".section4",
            scroller:"body",
            start:"top 70%",
            end:"top 0%",
            scrub:2
        }
    });
    cardtime.from("#left-card",{
        x:-100,
        duration:0.4,
        opacity:0,
    },"card");
    cardtime.from("#bottom-card",{
        y:-100,
        duration:0.4,
        opacity:0
    },"card");
    cardtime.from("#right-card",{
        x:100,
        duration:0.4,
        opacity:0
    },"card");
    
    var card2time = gsap.timeline({
        scrollTrigger:{
            trigger:".section4",
            scroller:"body",
            start:"top 40%",
            end:"top 0%",
            scrub:2
        }
    })
    card2time.from("#left-card2",{
        x:-100,
        duration:0.4,
        opacity:0
    },"card2")
    card2time.from("#bottom-card2",{
        y:-100,
        duration:0.4,
        opacity:0
    },"card2")
    card2time.from("#right-card2",{
        x:100,
        duration:0.4,
        opacity:0
    },"card2")
    
}
page4()

$(document).ready(function(){
    $(".hide-content h1,#first-click").click(function(){
        $(".hide-content p").slideToggle(300)
    });
});
$(document).ready(function(){
    $(".hide-content2 h1,#second-click").click(function(){
        $(".hide-content2 p").slideToggle(300)
    });
});
$(document).ready(function(){
    $(".hide-content3 h1,#third-click").click(function(){
        $(".hide-content3 p").slideToggle(300)
    });
});