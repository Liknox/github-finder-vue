<template>
	<div class="wrapper-content wrapper-content--fixed">
		<section>
			<div class="container">
				<h1 class="title">Find your account</h1>
				<div class="error" v-if="error" style="margin: 20px 0; color: #ff6868">
					<p>{{ error }}</p>
				</div>
				<search :value="search" placeholder="Type username..." @search="search = $event" />
				<button v-if="!repos" class="btn btnPrimary" @click="getRepos">Search!</button>
				<button v-else class="btn btnPrimary" @click="getRepos">Search again!</button>
				<div class="repos__wrapper" v-if="repos">
					<div class="repos-item" v-for="repo in repos" :key="repo.id">
						<div class="repos-info">
							<a class="link" :href="repo.html_url" target="_blank">{{ repo.name }}</a>
							<span>{{ repo.stargazers_count }}⭐</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import search from "@/components/Search.vue"
import axios from "axios"
export default {
	components: {
		search,
	},
	data() {
		return {
			search: "",
			error: null,
			repos: null,
		}
	},
	methods: {
		getRepos() {
			axios
				.get(`https://api.github.com/users/${this.search}/repos`)
				.then((res) => {
					console.log(res)
					this.error = null
					this.repos = res.data
				})
				.catch((err) => {
					console.log(err)
					this.repos = null
					this.error = "Can't find this user"
				})
		},
	},
	created() {
		document.body.addEventListener("keyup", (e) => {
			if (e.keyCode === 13) this.getRepos()
		})
	},
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	align-items: center;
	flex-direction: column;
}

.repos__wrapper {
	width: 400px;
	margin: 30px 0;
}
.repos-info {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 10px;
	padding: 10px 0;
	border-bottom: 1px solid #dbdbdb;
}
.link {
	border-bottom: none;
}
.title {
	margin: 0;
	font-weight: normal;
}

@media (max-width: 480px) {
	.repos__wrapper {
		max-width: 350px;
	}
}
</style>
