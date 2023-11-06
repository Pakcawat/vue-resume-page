<template>
    <div class="flex-box">


        <div class="item">
            <div class="resume_right2">
                <div class="resume_item2 resume_about2">
                    <div class="resume_item2 resume_work2">
                        <div class="title">
                            <div>
                                <p class="text-work-header" style="font-size: 40px;text-decoration: underline;">EDUCATION</p>
                            </div>
                            <hr>
                        </div>
                        <ul>
                            <li style="margin-bottom: 50px;">
                                <div class="text-work-header">Thammasat University 2018-2022</div>
                                <div class="item_resume_right2">
                                    <p class="text-work-header"></p>
                                    <p class="text-work">I graduated with a bachelor’s degree in engineering computer Engineering GPA 2.94</p>
                                </div>
                            </li>
                            <li style="margin-bottom: 50px;">
                                <div class="text-work-header">Suankularb wittayalai rangsit school 2015 - 2018</div>
                                <div class="item_resume_right2">
                                    <p class="text-work-header"></p>
                                    <p class="text-work"></p>
                                </div>
                            </li>
                            <li style="margin-bottom: 50px;">
                                <div class="text-work-header">Beaconhouse yamsaard school rangsit 2012 - 2015</div>
                                <div class="item_resume_right2">
                                    <p class="text-work-header"></p>

                                    <p class="text-work"></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<style>
.resume_right2 {
    width: 1000px;
    background: #fff;
    padding: 25px;
}

.resume_right2 .bold {
    color: #0bb5f4;
}

.resume_right2 .resume_work2 ul,
.resume_right2 .resume_education2 ul {
    padding-left: 40px;
    overflow: hidden;
}

.resume_right2 ul li {
    position: relative;
}

.resume_right2 ul li .date {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 15px;
}

.resume_right2 ul li .info {
    margin-bottom: 20px;
}

.resume_right2 ul li:last-child .info {
    margin-bottom: 0;
}

.resume_right2 .resume_work2 ul li:before,
.resume_right2 .resume_education2 ul li:before {
    content: "";
    position: absolute;
    top: 5px;
    left: -25px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 2px solid #0bb5f4;
}

.resume_right2 .resume_work2 ul li:after,
.resume_right2 .resume_education2 ul li:after {
    content: "";
    position: absolute;
    top: 14px;
    left: -21px;
    width: 2px;
    height: 100%;
    background: #0bb5f4;
}

.resume_right2 .resume_hobby2 ul {
    display: flex;
    justify-content: space-between;
}

.resume_right2 .resume_hobby2 ul li {
    width: 80px;
    height: 80px;
    border: 2px solid #0bb5f4;
    border-radius: 50%;
    position: relative;
    color: #0bb5f4;
}

.resume_right2 .resume_hobby2 ul li i {
    font-size: 30px;
}

.resume_right2 .resume_hobby2 ul li:before {
    content: "";
    position: absolute;
    top: 40px;
    right: -52px;
    width: 50px;
    height: 2px;
    background: #0bb5f4;
}

.resume_right2 .resume_hobby2 ul li:last-child:before {
    display: none;
}
</style>