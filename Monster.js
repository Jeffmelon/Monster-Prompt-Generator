let promptList = ['Antler',
    '<a target="_blank" href="https://mythlok.com/ammit/">Ammit</a>',
    'Alien',
    '<a target="_blank" href="https://mythlok.com/ammit/">Ammit</a>',
    'Angel',
    'Apple',
    '<a target="_blank" href="https://www.pbs.org/video/baba-yaga-the-ancient-origins-of-the-famous-witch-ivcn5f/">Baba Yaga</a>',
    '<a target="_blank" href="https://yokai.com/bakekujira/">Bake-Kujira</a>',
    '<a target="_blank" href="https://www.pbs.org/video/banshee-irelands-screaming-harbinger-of-death-crgwer/">Banshee</a>',
    '<a target="_blank" href="https://www.britannica.com/topic/Baphomet">Baphomet</a>',
    'Barber',
    '<a target="_blank" href="https://www.pbs.org/video/basilisk-or-cockatrice-the-mysterious-king-of-serpents-rqozd1/">Basilisk</a>',
    'Bat-Winged',
    'Beastmaster',
    'Belly Jail',
    'Belly Mouth',
    '<a target="_blank" href="https://www.pbs.org/video/uncovering-the-enigma-sasquatch-sightings-iaxxnw/">Bigfoot</a>',
    'Bioluminescent',
    'Black Cat',
    '<a target="_blank" href="https://www.pbs.org/video/is-yuki-onna-the-most-terrifying-snow-monster-pyjhia/">Bloody Mary</a>',
    'Bodiless Foot',
    'Boogie Man',
    'Brain and Brawn',
    'Brain Bug',
    'Brain in a Jar',
    'Bride of Frankenstein',
    '<a target="_blank" href="https://bogleech.com/halloween/hallbest-bugbears">Bugbears</a>',
    'Butler/Maid',
    'Car',
    'Castle',
    'Cenobite',
    '<a target="_blank" href="https://www.pbs.org/video/hero-beast-or-both-the-complex-lore-of-the-centaur-jbidsk/">Centaur</a>',
    'Cerberus',
    'Charon',
    'Chef',
    '<a target="_blank" href="https://www.pbs.org/video/how-chimaera-mythology-became-reality-mg1ljc/">Chimera</a>',
    '<a target="_blank" href="https://www.pbs.org/video/el-chupacabras-a-modern-mystery-qeyye6/">Chupacabra</a>',
    'Clown',
    'Coffin',
    'Colony',
    'Compound Eyes',
    '<a target="_blank" href="https://bogleech.com/halloween/hallbest-candlegast">Corpse Candles</a>',
    'Crystal Creature',
    '<a target="_blank" href="https://www.youtube.com/watch?v=N0bE6wYeqlo">Cthulhu</a>',
    'Cursed Blade',
    '<a target="_blank" href="https://www.pbs.org/video/are-cyborgs-really-monsters-tb5gq3/">Cyborg</a>',
    '<a target="_blank" href="https://www.pbs.org/video/cyclops-the-origin-story-of-this-terrifying-one-eyed-giant-n8drj6/">Cyclops</a>',
    '<a target="_blank" href=https://en.wikipedia.org/wiki/Death_Coach"">Death Coach</a>',
    'Devil',
    'Dinosaur',
    'Dolphin',
    'Doomsday Device',
    'Double-Ended',
    'Dr. Jekyll & Mr. Hyde',
    'Dr. Moreau Monster',
    'Dragon',
    'Dragonborn',
    '<a target="_blank" href="https://australian.museum/learn/animals/mammals/drop-bear/">Drop Bears</a>',
    '<a target="_blank" href="https://www.pbs.org/video/the-original-headless-horseman-zytorf/">Dullahan</a>',
    '<a target="_blank" href="http://www.lib.lumberwoods.org/fc/dungavenhooter.html">Dungavenhooter </a>',
    'Eel',
    'Eerie Elevator',
    'Elemental Spirit',
    'Eldritch',
    '<a target="_blank" href="https://www.pbs.org/video/el-silbon-the-deadly-whistler-of-the-grasslands-fdpxj8/">El Sulbón</a>',
    'Empty Eye Sockets',
    'Evil Animatronic',
    'Evil Doll',
    'Evil Henchman',
    'Evil Overlord',
    'Exposed Brains',
    '<a target="_blank" href="https://bogleech.com/halloween/hallbest-eyebell">Eyebells </a>',
    'Eyestalks',
    '<a target="_blank" href="https://blog.vkngjewelry.com/en/fafnir/">Fafnir</a>',
    'Fairy',
    'Fallen Angel',
    'Fish Men',
    'Flaming Skull',
    '<a target="_blank" href="https://braxtonwv.org/the-flatwoods-monster/">Flatwoods Monster</a>',
    'The Fly',
    'Fortune Teller',
    "Frankenstein's Monster",
    '<a target="_blank" href="https://allthatsinteresting.com/fresno-nightcrawler">Fresno Nightcrawlers</a>',
    '<a target="_blank" href="https://yokai.com/futakuchionna/">Futakuchi-Onna</a>',
    'Gargoyle',
    '<a target="_blank" href="https://yokai.com/gashadokuro/">Gashadokuro</a>',
    'Genie',
    'Ghost',
    'Ghost Ship',
    'Ghost Train',
    'Gibbet',
    '<a target="_blank" href="https://artincontext.org/h-r-giger-art/">Gigeresque</a>',
    'Goblin',
    'Golem',
    'Gorgon',
    'Gravedigger',
    'Gremlin',
    'Grimoire',
    'Grim Reaper',
    'Guillotine',
    '<a target="_blank" href="https://abookofcreatures.com/2017/05/19/yohualtepoztli/">Hacha Nocturna</a>',
    '<a target="_blank" href="https://www.scaryforkids.com/eight-feet-tall/">Hachishaku-Sama</a>',
    'Harpy',
    '<a target="_blank" href="https://en.wikipedia.org/wiki/Hastur">Hastur</a>',
    'Haunted Armor',
    'Haunted House',
    'Haunted Woods',
    'Hazmat Suit',
    'Head-Hands',
    'Headless Horseman',
    'Hellhound',
    '<a target="_blank" href="http://www.lib.lumberwoods.org/fc/hidebehind.html">Hidebehind</a>',
    'Hitchhiker',
    '<a target="_blank" href=https://bogleech.com/halloween/hallbest-pocus"">Hocus & Pocus</a>',
    '<a target="_blank" href="http://www.lib.lumberwoods.org/fc/hodag.html">Hodag</a>',
    'Horror Host',
    'Horseman of Conquest',
    'Horseman of Death',
    'Horseman of Famine',
    'Horseman of War',
    'Hydra',
    'Igor',
    'Inner Jaws',
    'Invisible',
    'Iron Maiden',
    '<a target="_blank" href="https://en.wikipedia.org/wiki/Jersey_Devil">Jersey Devil</a>',
    '<a target="_blank" href="https://en.wikipedia.org/wiki/Jiangshi">Jiangshi</a>',
    '<a target="_blank" href="https://yokai.com/jorougumo/">Jorogumo</a>',
    '<a target="_blank" href="https://bogleech.com/halloween/hallbest-junkins">Junkin</a>',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
]

function random(prompts) {
    let n = Math.floor(Math.random() * (prompts.length))
    console.log(n)
    document.getElementById("prompt").innerHTML=prompts[n]
}

// {name: "", description: ""}