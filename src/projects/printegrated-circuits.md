---
title: Printegrated Circuits
date: 2025-05-30
date_display: Ongoing
image: src/images/printegrated.jpg
description: Embedded PCBs in 3D Prints
permalink: /printegratedcircuits/index.html
external_links:
  - text: Writeup
    url: /printegratedcircuits
  - text: Github
    url: https://github.com/ollyoid/Printegrated-Circuits?tab=readme-ov-file
  - text: Preprint
    url: https://arxiv.org/abs/2509.08459#
tags: project
layout: layouts/project.njk
---
{% image "src/images/posts/Printegrated_creatures.png", "", "100vw" %}

These Cute creatures are Printegrated Circuits: fully functional 3D
Printed digital devices with embedded PCBs.

**Why?** Low-volume production is hard. What if we could
use the technologies already available, to make making interactive
devices easier, more customisable and scalable?

This project’s goal was to explore how off-the-shelf digital
fabrication technologies like 3D printing can support people engage with
materials in craft-like way and lower barriers to making scalable
hardware.

Printegrated Circuits pair general-purpose microcontroller-based PCBs
like dev-boards and prototyping platforms with 3D printed structures
printed out of conductive and non conductive PLA.

**What?** Digitally designed multi-material parts can be
used to do different kinds of sensing: capacitive touch, contact, or
resistance based. Printed 3D structures offer a huge design spaces and
diversity of sensing structures.

{% image "src/images/posts/Printegrated_mushroom.png", "", "100vw" %}

While current affordable printing technologies like carbon black
conductive PLA don’t support power transfer though conductive filament,
On-PCB actuation can support this kind of thing.

**How?** Printegrated circuits are embedded during a
mid-print pause into a designed cavity, just like when printing an
embedded magnet, nut, or bit of fabric.

{% image "src/images/posts/Printegrated_prinjection.gif", "", "100vw" %}

{% image "src/images/posts/Printegrated_prinjected.jpg", "", "100vw" %}

The heart of the printegrated circuits approach though is
*prinjection*. Unlike traditional print pause print workflows,
with Printegrated Circuits, we have to add custom movements to the print
to create reliable connections between the Conductive materials and PCB.
without this step traces do not adhere to the surface and good contact
isn’t made.

The slicer post-processing script for this is on [GitHub](https://github.com/ollyoid/PrusaPrintegration), but be
warned it is experimental and ugly.
