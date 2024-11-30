let apiurl = "https://official-joke-api.appspot.com/random_joke";
let joke_text = document.getElementById('joke');
let punchline = document.getElementById('punchline');
function user_offline(){
    let generate = document.getElementById('gen_btn');
    alert('You Are Offline');
    generate.classList.add('hidden');
    joke_text.classList.add('text-red-500')
    joke_text.classList.add('text-3xl')
    joke_text.innerHTML = "Oops!! You Are Offline!!!"
    punchline.innerHTML=''
    console.log("You Are Offline");
}

onload = function defaultjoke() {
        let joke_default = fetch(apiurl);
        joke_default.then((joke_d) => {
            return joke_d.json();
        }).then((actual_jok) => {
            joke_text.innerHTML = actual_jok.setup
            punchline.innerHTML = actual_jok.punchline
        })
}
function generateJoke() {
    let joke = fetch(apiurl);
    joke.then((joke_data) => {
        return joke_data.json();
    }).then((actual_joke) => {
        joke_text.innerHTML = actual_joke.setup
        punchline.innerHTML = actual_joke.punchline
    })
}
