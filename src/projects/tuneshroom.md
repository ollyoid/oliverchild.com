---
title: TuneShroom
date: 2019-10-02
date_display: 2019
image: src/images/tuneshroom.jpg
description: A USB MIDI controller
permalink: /tuneshroom/index.html
external_links:
  - text: Video
    url: https://twitter.com/OliverChild/status/1187731057216573441?s=20&t=TDsanM6tQnwF0QMW6Hc2qg
  - text: Github
    url: https://github.com/ollyoid/TuneShroom
  - text: Writeup
    url: /tuneshroom
tags: project
layout: layouts/project.njk
---
So I made another PCB and it’s awesome! It makes noises and looks like a mushroom. I used [svg2shenzhen](https://github.com/badgeek/svg2shenzhen), [KiCad](http://www.kicad-pcb.org/), and [Inkscape](https://inkscape.org/). It’s just a USB MIDI controller wih lots of capacitive touch pads. Checkout the [github repo](https://github.com/ollyoid/TuneShroom) for code and gerbers.

{% image "src/images/posts/TuneShroom.jpg", "The Board", "100vw" %}

## The Prototype

I started off by making a proof of concept out of the worlds greatest material, CARDBOARD! I used aluminium foil tape to make contacts and threaded rainbow cable through the back to an “Arduino” Pro Micro. This was quick to build but I felt a little limited by the number of pins available on the Pro Micro and through the arduino layer so decided to explore the world of bare metal programming!

{% image "src/images/posts/TuneShroomPrototype.jpg", "The prototype", "100vw" %}

## The Board

I ordered the PCBs from JLCPCB, They were super cheap and came within a week to my university halls. Unfortunately the same can’t be said for the components I ordered from TaoBao. They got lost somewhere between Shenzhen and Hong Kong. Fortunately, I also got my Chinese visa last week, So it was a perfect opportunity to go and visit the electronics markets at HQB and spend more money than I needed to on all sorts of exciting electronics! Anyway, I managed to source all the parts and soldered them up at [Dimsum Labs](https://www.dimsumlabs.com/) in Hong Kong.

## The Code

As mentioned above, I started off in the comfort of the Arduino environment but felt as though I was pushing the boundaries of what it should be used for. I decided it was time to graduate to real bare metal programming. I used the [LUFA](https://github.com/abcminiuser/lufa) library to help me with all the USB stuff. Apart from working out all the DDRs, PINs and the PORTs it was fairly painless, and I look forward to working on some other more advanced embedded projects.

## Programming

I built myself a little programmer with some pogo pins I picked up at HQB. It’s a little dodgy but it seems to do the trick. I would love to try out building some real programming jigs though. Maybe a future project…

{% image "src/images/posts/TuneShroomprogramming.jpg", "Programmer", "100vw" %}

## What’s Next?

I’m not sure really how to progress with this project. It was fun, but I feel making MIDI controllers is cheating a bit because it isn’t really that difficult. I really want to have a go at making some real synths. I’ve got a list of things to improve if there were to be a v2. More LEDs and maybe easier to use.
