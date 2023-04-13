let promptList = [{name: "Adze", description: "A Vampiric Firefly from African Mythology"},
    {name: "Akaname", description: "A small Greasy Yokai with a long tongue that cleans filthy areas"},
    {name: "Alien", description: ""},
    {name: "Ammit", description: "An Egyptian monster with the head of a crocodile, the front legs of a lion and hinds of a hippo. She ate the hearts of men who failed judgment."},
    {name: "Angel", description: ""},
    {name: "Animatronic", description: ""},
    {name: "Apple of Discord", description: "The apple thrown by Eris goddess of chaos"},
    {name: "Asmodeus", description: "One of the demon princes of hell and demon of lust. He has three faces, a bull, a sheep and a human."},
    {name: "Azathoth", description: "One of the many outer gods of the Lovecraft Mythos. It is the representation of chaos and therefore has no consistent look."},
    {name: "Baba Yaga", description: "A Slavic witch who flies with a mortar and pestle. She lives in a hut that stands on chicken legs."},
    {name: "Bake-Kujira", description: "A Yokai of a large whale skeleton"},
    {name: "Banshee", description: "An Irish Spirit who is known to scream loudly when someone is about to die"},
    {name: "Baphomet", description: "A demonic winged humanoid with a goat head and a flame above it."},
    {name: "Barber", description: ""},
    {name: "Basilisk", description: "Sometimes known as the cockatrice. A creature that can kill with a single look. Sometimes look like a snake or more like reptilian rooster"},
    {name: "Bat-Winged", description: ""},
    {name: "Bat", description: ""},
    {name: "Beauty & the Beast", description: ""},
    {name: "Belly Jail", description: ""},
    {name: "Belly Mouth", description: ""},
    {name: "Bigfoot", description: "Also known as the Sasquatch, is a cryptid from the forest of North America. It is a large hairy humanoid"},
    {name: "Bioluminescent", description: ""},
    {name: "Black Cat", description: "They are known to be familiar’s of witches and bring bad luck to people who cross it"},
    {name: "Black Shuck", description: "It is a large pitch black dog with a pair of glowing red eyes, though in some versions the Black Shuck has a singular eye like a cyclops."},
    {name: "Black Widow Bride", description: "A woman who marries rich men for their money then murders them"},
    {name: "Black-eyed Children", description: "Strange child-like creatures with pitch black eyes."},
    {name: "Bloody Mary", description: "A spirit who is said to appear in the mirror if you chant her name three times."},
    {name: "Bodiless Foot", description: ""},
    {name: "Boogie Man", description: "Monstrous beings who spread nightmares to sleeping children"},
    {name: "Brain Bug", description: ""},
    {name: "Brain and Brawn", description: ""},
    {name: "Brain in a Jar", description: ""},
    {name: "Bride of Frankestien", description: ""},
    {name: "Bugbear", description: "A term for a generic monster and can have a hodgepodge of features. Bugbears can be furry, scaly, slimy, many eyed and more."},
    {name: "Bunyip", description: "A creature from Aboriginal mythology. Though most of the features of the creature are inconsistent from having a dog face to tusk to a horse tail, most agree the creature is aquatic"},
    {name: "Butler/Maid", description: ""},
    {name: "Canine", description: ""},
    {name: "Car", description: ""},
    {name: "Castle", description: ""},
    {name: "Cat-sidhe", description: "An Irish fairy black cat  with a white spot on its chest and king of cats."},
    {name: "Cenobite", description: "A extra-dimensional demon with a sadistic streak and loves torturing people for pleasure"},
    {name: "Centaur", description: "A creature with top half being human and the bottom half"},
    {name: "Cerberus", description: "The three headed dog who guards the gate of the underworld."},
    {name: "Chained", description: ""},
    {name: "Charon", description: "The ferryman who sails the souls of the dead into the underworld in exchange for two coins."},
]

function random(prompts) {
    let n = Math.floor(Math.random() * (prompts.length))
    console.log(n)
    console.log(prompts[n].name)
    console.log(prompts[n].description)
    document.getElementById("prompt").innerHTML=prompts[n].name
    document.getElementById("description").innerHTML=prompts[n].description
}

// {name: "", description: ""}
