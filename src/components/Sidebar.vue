<template>
	<ul>
		<li><router-link to="/about" class="button"><span class="material-icons">description</span><span
					class="text">About</span></router-link></li>
		<li><router-link to="/education" class="button"> <span class="material-icons">school</span>
				<span class="text">Education</span></router-link></li>
		<li><router-link to="/work_experience" class="button"> <span class="material-icons">work</span>
				<span class="text">Work Experience</span></router-link></li>
		<li><router-link to="/skills" class="button"> <span class="material-icons">lightbulb_outline</span>
				<span class="text">Skills</span></router-link></li>
		<li><router-link to="/hobbies" class="button"> <span class="material-icons">favorite</span>
				<span class="text">Hobbies</span></router-link></li>
	</ul>
	<aside>
		<div class="logo">
			<img :src="logoURL" alt="Vue" />
			<h3 style="font-size: 15px; margin-left: 6%;font-family: 'Lato';" >PAKCAWAT ISSARAWISARNPOL  (Nice)</h3>
			<h4 style="font-size: 15px; margin-left: 6%;font-family: 'Lato';" >ภัควัฒน์ อิสระวิศาลพล (ไนซ์)</h4>
		</div>

		<!--url sidebar-->
		<div class="menu">
			<div class="item-sidebar"> <router-link to="/about" class="button">
					<span class="material-icons">description</span>
					<span class="text">About</span>
				</router-link></div>
			<div class="item-sidebar"> <router-link to="/education" class="button">
					<span class="material-icons">school</span>
					<span class="text">Education</span>
				</router-link></div>
			<div class="item-sidebar"> <router-link to="/work_experience" class="button">
					<span class="material-icons">work</span>
					<span class="text">Work Experience</span>
				</router-link></div>
			<div class="item-sidebar"> <router-link to="/skills" class="button">
					<span class="material-icons">lightbulb_outline</span>
					<span class="text">Skills</span>
				</router-link> </div>
			<div class="item-sidebar"> <router-link to="/hobbies" class="button">
					<span class="material-icons">favorite</span>
					<span class="text">Hobbies</span>
				</router-link></div>

		</div>

	</aside>
</template>

<script setup>
import logoURL from '../assets/2506.jpg'

</script>

<style lang="scss" scoped>

ul {
	
	z-index: 99;
	list-style-type: none;
	padding: 10px;
	margin: 0;
	overflow: hidden;
	background-color: rgb(33, 34, 41);
	position:fixed;
	top: 0;
	width: 100%;
	display: none;

	.material-icons {

		color: white;
		transition: 0.2s ease-in-out;
		margin-right: 0.5rem;
	}

}

li {
	float: left;
	margin-left: 10px;

}

li a {
	display: block;
	color: var(--light);
	text-decoration: none;
	padding: 7px;

}

li a:hover:not(.active) {
	background-color: #636363;
}


aside {
	position: fixed;
	z-index: 99;
	display: flex;
	flex-direction: column;
	background-color: rgb(33, 34, 41);
	color: var(--light);
	width: var(--sidebar-width);

	overflow: hidden;
	min-height: 100vh;
	padding: 0;
	margin: 0;
	transition: 0.2s ease-in-out;

	div .item-sidebar:hover:not(.active) {
		background-color: #636363;
	}

	.logo {
		margin-bottom: 1rem;

		img {
			display: inline-block;
			width: 90%;
			height: 90%;
			border-radius: 60%;
			margin: 6rem 1rem 2rem 1rem;
			padding: 10px;
			border-style: solid;
			background-repeat: no-repeat;
			background-position: center center;
			background-size: cover;
		}

		h3,
		.button .text {
			opacity: 1;
		}

		h3 {
			text-align: center;
			color: white;
			font-size: 0.9875rem;
			margin-bottom: 0.5rem;
			text-transform: uppercase;
			margin: 0rem 1rem 1rem 2rem;

		}
		h4 {
			text-align: center;
			color: white;
			font-size: 0.7875rem;
			margin-bottom: 0.5rem;
			text-transform: uppercase;
			margin: 0rem 0rem 0rem 2rem;

		}
	}

	.material-icons {
		margin-right: 1rem;
	}

	.menu {
		margin: 2rem -1rem 2rem 0rem;


		.button {
			display: flex;
			align-items: center;
			text-decoration: none;
			margin-bottom: 10px;

			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;

			.material-icons {
				font-size: 2rem;
				color: white;
				transition: 0.2s ease-in-out;
			}

			.text {
				color: var(--light);
				transition: 0.2s ease-in-out;
			}
		}
	}
}

.item-sidebar{
    width: 100%;
    padding: 5px;
    font-family: 'Lato';
	font-size: medium;
	border-bottom: 1px solid white;

}

@media screen and (max-width: 700px) {
	aside {
		display: none;
		
	}

	ul {
		display: block;
	}
}
</style>