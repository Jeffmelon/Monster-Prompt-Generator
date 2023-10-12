let promptList = ['<a href="https://mythlok.com/ammit/">Ammit</a>',
    'Alien',
    '<a href="https://mythlok.com/ammit/">Ammit</a>',
    'Angel',
    'Apple',
    '<a href="https://www.pbs.org/video/baba-yaga-the-ancient-origins-of-the-famous-witch-ivcn5f/">Baba Yaga</a>',
    '<a href="https://yokai.com/bakekujira/">Bake-Kujira</a>',
    '<a href="https://www.pbs.org/video/banshee-irelands-screaming-harbinger-of-death-crgwer/">Banshee</a>',
    '<a href="https://www.britannica.com/topic/Baphomet">Baphomet</a>',
    'Barber',
    '<a href="https://www.pbs.org/video/basilisk-or-cockatrice-the-mysterious-king-of-serpents-rqozd1/">Basilisk</a>',
    'Bat-Winged',
    'Belly Jail',
    'Belly Mouth',
    '<a href="https://www.pbs.org/video/uncovering-the-enigma-sasquatch-sightings-iaxxnw/">Bigfoot</a>',
    'Bioluminescent',
    'Black Blade',
    'Black Cat',
    '<a href="https://www.pbs.org/video/is-yuki-onna-the-most-terrifying-snow-monster-pyjhia/">Bloody Mary</a>',
    'Bodiless Foot',
    'Boogie Man',
    'Brain and Brawn',
    'Brain Bug',
    'Brain in a Jar',
    'Bride of Frankenstein',
    '<a href="https://bogleech.com/halloween/hallbest-bugbears">Bugbears</a>',
    'Butler/Maid',
    'Car',
    'Castle',
    'Cenobite',
    '<a href="https://www.pbs.org/video/hero-beast-or-both-the-complex-lore-of-the-centaur-jbidsk/">Centaur</a>',
    'Cerberus',
    'Charon',
    'Chef',
    '<a href="https://www.pbs.org/video/how-chimaera-mythology-became-reality-mg1ljc/">Chimera</a>',
    '<a href="https://www.pbs.org/video/el-chupacabras-a-modern-mystery-qeyye6/">Chupacabra</a>',
    'Clown',
    'Coffin',
    'Colony',
    'Compound Eyes',
    '<a href="https://bogleech.com/halloween/hallbest-candlegast">Corpse Candles</a>',
    'Crystal Creature',
    '<a href="https://www.youtube.com/watch?v=N0bE6wYeqlo">Cthulhu</a>',
    '<a href="https://www.pbs.org/video/are-cyborgs-really-monsters-tb5gq3/">Cyborg</a>',
    '<a href="https://www.pbs.org/video/cyclops-the-origin-story-of-this-terrifying-one-eyed-giant-n8drj6/">Cyclops</a>'
]

function random(prompts) {
    let n = Math.floor(Math.random() * (prompts.length))
    console.log(n)
    document.getElementById("prompt").innerHTML=prompts[n]
}

// {name: "", description: ""}