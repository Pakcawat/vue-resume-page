<template>
    <div class="flex-box">
        <div class="item">
            <div class="resume_right">
                <div class="resume_item resume_about">
                    <div class="resume_item resume_work">
                        <div class="title">
                            <div>
                                <p class="text-work-header" style="font-size: 40px;text-decoration: underline;">WORK EXPERIENCE</p>
                            </div>
                            <hr>
                        </div>
                        <ul>
                            <li>
                                <div class="text-work-header" style="text-decoration: underline;font-size: 30px;">PERSONAL PROJECT</div>
                                <div class="item_resume_right">
                                    <p class="text-work-header">Responsibilities: IT Developer</p>
                                    <p class="text-work">&nbsp; Local website with spring boot framework. A website that has a
                                        system for registering and
                                        verifying your
                                        identity via email and has a function that can store user data in SQL, show data for
                                        each user.</p>
                                </div>
                            </li>
                            <hr>
                            <li>
                                <div class="text-work-header" style="text-decoration: underline;font-size: 30px;">INTERNSHIP</div>
                                <div class="item_resume_right">
                                    <p class="text-work-header">Responsibilities: IT Developer</p>
                                    <p class="text-work">&nbsp; The work is a find the coordinates of the various stores from the
                                        API and develop a website
                                        that can show
                                        the
                                        location of the store, such as 7-11, Big C, etc. That can see an overview of the
                                        stores in website and can
                                        analyze commercial competition so as not to have too much monopoly.
                                        Office of Trade Competition Commission
                                        (OTCC / สำนักงานคณะกรรมการการแข่งขันทางการค้า)</p>
                                </div>
                            </li>
                            <hr>
                            <li>
                                <div class="text-work-header" style="text-decoration: underline;font-size: 30px;">DURING UNIVERSITY</div>
                                <div class="item_resume_right">
                                    <p class="text-work-header">Experienced in machine learning and deep learning.</p>
                                    <p class="text-work">&nbsp; I have done 3 projects: 1. AI prediction
                                        of
                                        glaucoma 2. Face
                                        recognition 3. AI prediction for depression.The third project is a collaboration
                                        with a doctor from Siriraj
                                        and
                                        a linguist. If this project is successfully developed, it will be implemented in
                                        practice to help relieve
                                        the
                                        workload of doctors</p>
                                </div>
                            </li>
                            <li>
                                <div class="item_resume_right">
                                    <p class="text-work-header">Experienced in implementing IoT integration with Line
                                        messaging API</p>

                                    <p class="text-work">&nbsp; A system capable of monitoring status,
                                        temperature, humidity, pressure, and can analyze movement and alert users via Line
                                        if pots are moved.
                                        Experienced in using NodeMCU ESP8266 and device to measure temperature,humidity and
                                        electric current in
                                        Datacenter of the faculty and can be displayed in Line chatbot and stored in
                                        database which can be viewed as
                                        a graph via chatbots.</p>
                                </div>
                            </li>
                            <hr>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Saira');
@import url('https://fonts.googleapis.com/css2?family=Lato');

:root {
    --gray: rgb(70, 69, 69);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: Lato;
    transition: 0.5s;
}

body {
    background-color: #ffffff;
}

.wrapper {
    max-width: 1100px;
    margin: auto;
    padding: 0 20px;
    /* border: 1px solid red; */
}

p {
    color: var(--gray);
    font-size: 15px;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

i {
    cursor: pointer;
}

hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 2px solid #ccc;
    margin: 1em 0;
    padding: 0;
}

.flex-box {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 5% 10% 0% 20%;
    border-radius: 8px;

}

.item {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 5px;
    font-family: 'Lato';
	font-size: 20px;

}

.item_resume_right {
    display: block;
    box-sizing: border-box;
    height: 200px;
}

.text-work-header {
    font-family: 'Saira';
    font-size: 25px;
    font-weight: 1000;
    margin-bottom: 20px;
}

.text-work {
    font-family: 'Lato';
    font-size: 18px;
    font-weight: 100;
}

.resume_right {
    width: 1000px;
    background: #fff;
    padding: 25px;
}

.resume_right .bold {
    color: #0bb5f4;
}

.resume_right .resume_work ul,
.resume_right .resume_education ul {
    padding-left: 40px;
    overflow: hidden;
}

.resume_right ul li {
    position: relative;
}

.resume_right ul li .date {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 15px;
}

.resume_right ul li .info {
    margin-bottom: 20px;
}

.resume_right ul li:last-child .info {
    margin-bottom: 0;
}

.resume_right .resume_work ul li:before,
.resume_right .resume_education ul li:before {
    content: "";
    position: absolute;
    top: 5px;
    left: -25px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 2px solid #0bb5f4;
}

.resume_right .resume_work ul li:after,
.resume_right .resume_education ul li:after {
    content: "";
    position: absolute;
    top: 14px;
    left: -21px;
    width: 2px;
    height: 80%;
    background: #0bb5f4;
}

.resume_right .resume_hobby ul {
    display: flex;
    justify-content: space-between;
}

.resume_right .resume_hobby ul li {
    width: 80px;
    height: 80px;
    border: 2px solid #0bb5f4;
    border-radius: 50%;
    position: relative;
    color: #0bb5f4;
}

.resume_right .resume_hobby ul li i {
    font-size: 30px;
}

.resume_right .resume_hobby ul li:before {
    content: "";
    position: absolute;
    top: 40px;
    right: -52px;
    width: 50px;
    height: 2px;
    background: #0bb5f4;
}

.resume_right .resume_hobby ul li:last-child:before {
    display: none;
}
</style>
