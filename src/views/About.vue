<template>
	<div class="flex-box-About">
		<div class="item-About">
			<p class="text-work-header-About" style="font-size: 60px;">WELCOME TO MY RESUME!

				<span class="text-work" style="display: block; font-size:20px;">
					<div class="text-work-item">khlong 3 ,Pathum Thani 12150 </div>&nbsp &nbsp
					<div class="text-work-item"><a href="tel:+66618368168" class="item-icon">
							<font-awesome-icon icon="fa-solid fa-phone" size="2xl" /> &nbsp +66 6 1836 8168</a></div>
					&nbsp &nbsp <div class="text-work-item"><a href="mailto:pakcawat.iss@gmail.com" class="item-icon">
							<font-awesome-icon icon="fa-solid fa-envelope" size="2xl" /> &nbsp
							pakcawat.iss@gmail.com</a></div>
					<div class="text-work-item"><a href="https://github.com/Pakcawat" class="icon">
							<v-btn href="https://github.com/Pakcawat">
								<font-awesome-icon :icon="['fab', 'github']" size="2xl" />
							</v-btn>
						</a></div>
					<div class="text-work-item"><a href="https://line.me/ti/p/5ovO1GsjEE" class="icon"
							style="color:rgba(147, 218, 41, 0.733);">
							<v-btn href="https://github.com/Pakcawat">
								<font-awesome-icon :icon="['fab', 'line']" size="2xl" />
							</v-btn></a></div>
					<hr>
				</span>
			</p>
		</div>
		<div class="item-About">
			<p class="text-work-About">&nbsp; Hello ,My name is Pakcawt Issarawisarnpol ,I'am graduated with a bachelor's
				degree in
				computer
				engineering from Thammasat University.
				My passion is for solving problems and developing myself to be able to solve them.
				My MBTI is intj , <a style="margin: auto;color:red;border:5px;"
					href="https://www.16personalities.com/th/intj-%E0%B8%9A%E0%B8%B8%E0%B8%84%E0%B8%84%E0%B8%A5%E0%B8%B4%E0%B8%81%E0%B8%A0%E0%B8%B2%E0%B8%9E">CLICK
					HERE</a>
				for more details about MBTI

			</p>
		</div>
	</div>
</template>

<style>
.icon {
	display: inline;
	font-size: 30px;
	padding-left: 25px;
	margin-top: 100px;
}

.item-icon {
	color: rgb(152, 0, 257);
	padding-left: 10px
}

.flex-box-About {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	flex-wrap: wrap;
	margin: 15% 23% 0% 400px;
}

.item-About {
	display: block;
	box-sizing: border-box;
	width: 100%;
	padding: 5px;


}

.text-work-header-About {
	font-family: 'Saira';
	font-size: 25px;
	font-weight: 1000;
	margin-bottom: 1%;
	display: inline-block;
}

.text-work-About {
	font-family: 'Lato';
	font-size: 20px;
	font-weight: 500;
}

.text-work-item {
	display: inline-block;
	padding: 5px;
}

@media screen and (max-width: 700px) {
	.flex-box-About {
		margin: 17% 24% 0% 25%;
	}
}
</style>