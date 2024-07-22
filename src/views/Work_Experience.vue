<template>
    <div class="flex-box">
        <div class="item">
            <div class="resume_right">
                <div class="resume_item resume_about">
                    <div class="resume_item resume_work">
                        <div class="title">
                            <div>
                                <p class="text-work-header" style="font-size: 40px;text-decoration: underline;">WORK
                                    EXPERIENCE</p>
                            </div>

                        </div>
                        <ul>
                            <li>
                                <div class="text-work-header" style="text-decoration: underline;font-size: 30px;">PERSONAL
                                    PROJECT</div>
                                <div class="item_resume_right">
                                    <p class="text-work-header">Responsibilities: IT Developer</p>
                                    <p class="text-work">&nbsp; Local website with spring boot framework. A website that has
                                        a
                                        system for registering and
                                        verifying your
                                        identity via email and has a function that can store user data in SQL, show data for
                                        each user.</p>
                                </div>
                            </li>

                            <li>
                                <div class="text-work-header" style="text-decoration: underline;font-size: 30px;">INTERNSHIP
                                </div>
                                <div class="item_resume_right">

                                    <p class="text-work-header">Office of Trade Competition Commission
                                        (OTCC / สำนักงานคณะกรรมการการแข่งขันทางการค้า) Responsibilities: IT Developer </p>

                                    <p class="text-work">&nbsp;
                                        The work is a find the coordinates of the various stores from the API and develop a
                                        website that can show the location of the store, such as 7-11, Big C, etc. That can
                                        see an overview of the stores on the website and can analyze commercial competition
                                        so as not to have too much monopoly.</p>
                                </div>
                            </li>

                            <li>
                                <div class="text-work-header" style="text-decoration: underline;font-size: 30px;">DURING
                                    UNIVERSITY</div>
                                <div class="item_resume_right">
                                    <p class="text-work-header">AI prediction of glaucoma</p>
                                    <p class="text-work">&nbsp; This work is a work in the course to build a model that can
                                        be classified into 3 classes normal, other and glaucoma. To find the dataset we will
                                        find it from the internet and bring it to the Data Augmentation by various methods
                                        such as grayscale roi( region of interest ) and clean dataset and bring it to train
                                        in deep learning</p>
                                </div>
                            </li>
                            <li>
                                <div class="text-work-header" style="text-decoration: underline;font-size: 30px;">DURING
                                    UNIVERSITY</div>
                                <div class="item_resume_right">
                                    <p class="text-work-header">AI prediction of glaucoma</p>
                                    <p class="text-work">&nbsp; This work is a work in the course to build a model that can
                                        be classified into 3 classes normal, other and glaucoma. To find the dataset we will
                                        find it from the internet and bring it to the Data Augmentation by various methods
                                        such as grayscale roi( region of interest ) and clean dataset and bring it to train
                                        in deep learning</p>
                                </div>
                            </li>
                            <li>
                                <div class="item_resume_right">
                                    <p class="text-work-header">Face recognition</p>

                                    <p class="text-work">&nbsp;This work is a job in the course to build a model that can
                                        classify who is and is in a class or not. To find the dataset we will find a person
                                        in the class, which people in the class who takes pictures of themselves from
                                        different angles and brings them to data augmentation using various methods such as
                                        cropface, rotate, and train them in deep learning.</p>
                                </div>
                            </li>
                            <li>
                                <div class="item_resume_right" id="skills1">
                                    <p class="text-work-header">AI prediction for depression</p>

                                    <p class="text-work">&nbsp;This work is a coursework. Make a model that can distinguish
                                        classes whether it's depression or not. To find the dataset, we will take from the
                                        patient in the hospital to answer the questions and record the sound. Then Speech to
                                        Text is applied with ASR and stored in the dataset. Then it is put in train in Lstm.
                                        This project is a collaboration with a doctor from Siriraj and a linguist. If this
                                        project is successfully developed, it will be implemented in practice to help
                                        relieve the workload of doctors.</p>
                                </div>
                            </li>
                            <li>
                                <div class="item_resume_right">
                                    <p class="text-work-header">My project smart datacenter</p>

                                    <p class="text-work">&nbsp;This work is my project. The topic is smart data centers. The
                                        purpose is to be able to recognize various data in the data center room via line
                                        chatbot. Use NodeMCU ESP8266 and various devices to measure temperature, humidity,
                                        and electric current in datacenter of the faculty can display various values in Line
                                        chatbot and store various values in the database which can be viewed as a graph via
                                        chatbots and has received suggestions for adding various features from users such as
                                        alerts in line chatbot when over temperature in the datacenter room, face
                                        recognition in the raspberry pi to detect who came in and notify in Line chatbot.
                                    </p>
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


.flex-box {
    display: flex;
    max-width: 940px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 7% 2% 0% 400px;
    border-radius: 8px;

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

@media screen and (max-width: 700px) {
    .flex-box {
        width: 400px;
        margin: 17% 4% 0% 5%;
    }
}
</style>
