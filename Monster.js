let promptList = ['<a href="https://mythlok.com/ammit/">Ammit</a>',
'Alien',
'<a href="https://mythlok.com/ammit/">Ammit</a>',
'Angel',
'Apple',
'<a href="https://www.pbs.org/video/baba-yaga-the-ancient-origins-of-the-famous-witch-ivcn5f/">Baba Yaga</a>',
]

function random(prompts) {
    let n = Math.floor(Math.random() * (prompts.length))
    console.log(n)
    document.getElementById("prompt").innerHTML=prompts[n]
}

// {name: "", description: ""}