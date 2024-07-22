<template>
    
    <div class="grid-skill">
        <div class="item">
            <p class="text-work-header" style="font-size: 40px;text-decoration: underline;">SKILLS
            </p>

        </div>

        <p>
        <div class="content">
            <p class="text-work-header">Experience programming language</p>
            <hr>

            <p class="text-work">Css</p>
            <p class="text-work">Java</p>
            <p class="text-work">Node.js</p>
            <p class="text-work">HTML5</p>
            <p class="text-work">Python</p>
            <p class="text-work">Javascript</p>

        </div>
        <div class="content">
            <p class="text-work-header">Experience databases</p>
            <hr>

            <p class="text-work">MySQL</p>
            <p class="text-work">Firebase</p>
            <p class="text-work">MongoDB</p>
            <p class="text-work">Firebase Realtime</p>
        </div>
        <div class="content">
            <p class="text-work-header">Experience framework</p>
            <hr>

            <p class="text-work">Git</p>
            <p class="text-work">VueJS</p>
            <p class="text-work">Django</p>
            <p class="text-work">Express.js</p>
            <p class="text-work">Dialogflow</p>
            <p class="text-work">Spring boot</p>
            <p class="text-work">Arduino IDE</p>
        </div>

        </p>
    </div>
</template>

<style>

.grid-skill {
    display: grid;
    max-width: 940px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
	margin: 7% 2% 0% 400px;

}

.content {
    color: #242424;
    font-weight: 600;
    text-align: left;
    border: solid 2px rgb(0, 0, 0);
    box-sizing: border-box;
    height: 100%;
    padding: 10px;
    border-radius: 26px;
}
.item {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 5px;
    font-family: 'Lato';
    font-size: 20px;
}

@media screen and (max-width: 700px) {
    .grid-skill {
        margin: 17% 24% 0% 25%;
    }
}
</style>
