<template>
    <div class="flex-box-Hobbies">
        <div class="boxs">
            <div class="item">
            </div>
            <div class="item">
                <p class="text-work-header">
                    <font-awesome-icon icon="fa-solid fa-basketball" shake size="2xs" style="color: #eb811e;" />&nbsp;
                    Basketball
                </p>
                <p class="text-work">&nbsp; I play basketball in the evening. The playing position is point guard.
                </p>
            </div>
            <div class="item">
                <p class="text-work-header">
                    <font-awesome-icon icon="fa-solid fa-gamepad" bounce size="xs" style="color: #005eff;" />&nbsp;Game
                </p>
                <p class="text-work">&nbsp; I play game from hoyoverse that genshin impact and honkai star rail and game co
                    op with
                    my
                    friend.</p>
            </div>
            <div class="item">
                <p class="text-work-header">
                    <font-awesome-icon :icon="['fas', 'chess']" shake size="2xs" style="color: #000000;" />
                    Chess</p>

                <p class="text-work">&nbsp; I play chess when I want excitement.i play chess in <a
                        href="https://www.chess.com/">https://www.chess.com/</a>.</p>
            </div>
            <div class="item">
                <p class="text-work-header">
                    <font-awesome-icon :icon="['fas', 'walking']" />
                    Yoga</p>
                <p class="text-work">&nbsp; I do yoga to stretch my body. and no pain in various points in the body,
                    especially in
                    the
                    back.</p>
            </div>
            <div class="item">
                <p class="text-work-header">
                    <font-awesome-icon :icon="['fas', 'book']" flip size="2xs" style="color: #79543e;" />
                    Read novel and book</p>
                <p class="text-work">&nbsp; I read fantasy novels, detective novels, and martial arts novels. The books I
                    read are
                    about history.</p>
            </div>
            <div class="item">
                <p class="text-work-header">
                    <font-awesome-icon :icon="['fas', 'keyboard']" />
                    Code challenge</p>
                <p class="text-work">&nbsp; I am write code at Codewar and leetcode When I feel like I've forgotten
                    something</p>
            </div>

        </div>
    </div>
</template>
<style>
.box {
    background-color: aquamarine;
    border-radius: 8px;
    display: grid;
    place-content: center;
    padding: 50px;
    border: 5px solid green;
}

.flex-box-Hobbies {
    max-width: 940px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 7% 2% 0% 400px;
}

@media screen and (max-width: 700px) {
    .flex-box-Hobbies {
        margin: 20% 24% 0% 25%;
    }
}
</style>