<template>
    <div class="grid-box">
        <div class="item">
            <div class="resume_education">

                <div class="title">
                    <div>
                        <p class="text-work-header" style="font-size: 40px;text-decoration: underline;">EDUCATION</p>
                    </div>
                    <hr>
                </div>
                <ul>
                    <li style="margin-bottom: 50px;">
                        <div class="item_resume_education1">
                            <div class="text-work-header">Thammasat University 2018-2022 </div>

                            <p class="text-work-header"></p>
                            <p class="text-work">&nbsp; I graduated with a bachelor’s degree in engineering computer
                                Engineering GPA 2.94</p>
                        </div>
                    </li>
                    <li style="margin-bottom: 50px; ">
                        <div class="item_resume_education2">
                            <div class="text-work-header">Suankularb wittayalai rangsit school 2015 - 2018</div>

                            <p class="text-work-header"></p>
                            <p class="text-work">I'm in the Mathematics-Science Programme.</p>
                        </div>
                    </li>
                    <li style="margin-bottom: 50px;">
                        <div class="item_resume_education3">
                            <div class="text-work-header">Beaconhouse yamsaard school rangsit 2012 - 2015</div>

                            <p class="text-work-header"></p>

                            <p class="text-work"></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<style>
.grid-box {
    max-width: 940px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
	margin: 10% 2% 0% 400px;
}

.grid-box {
    display: grid;

    div:nth-of-type(even) {
        grid-column: 5;
    }
}

.item_resume_education2 {
    box-shadow: 0 0 0 2px rgb(102, 195, 218), 8px 8px 0 0 rgb(102, 195, 218);
    border: 2px solid rgba(255, 9, 181, 0.644);
    padding: 1em;
    grid-row: 2;


}

.item_resume_education1 {
    box-shadow: 0 0 0 2px rgb(255, 21, 13), 8px 8px 0 0 rgb(255, 21, 13);
    border: 2px solid yellow;
    padding: 1em;

}

.item_resume_education3 {
    box-shadow: 0 0 0 2px yellow, 8px 8px 0 0 yellow;
    border: 2px solid rgb(0, 174, 255);
    padding: 1em;
    grid-row: 3;
}

@media screen and (max-width: 700px) {
    .grid-box {
        margin: 17% 24% 0% 25%;
    }
}
</style>