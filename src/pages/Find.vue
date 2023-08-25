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
				<div class="repos__wrapper" v-if="repos && repos?.length != 0">
					<div class="repos-item" v-for="repo in repos" :key="repo.id">
						<div class="repos-info">
							<a class="link" :href="repo.html_url" target="_blank">{{ repo.name }}</a>
							<span>{{ repo.stargazers_count }}⭐</span>
						</div>
					</div>
				</div>
				<div v-else-if="repos != null && repos?.length == 0" class="no-repos">There is no public repos!</div>
			</div>
		</section>
	</div>
</template>

<script>
import search from "@/components/Search.vue"
import axios from "axios"
import getApi from "@/api"
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
				.get(getApi(this.search))
				.then(res => {
					this.error = null
					this.repos = res.data
				})
				.catch(err => {
					this.repos = null
					this.error = "Can't find this user"
				})
		},
	},
	created() {
		document.body.addEventListener("keyup", e => {
			if (e.key === "Enter") this.getRepos()
		})
	},
}
</script>

<style lang="scss" scoped>
.wrapper-content {
	min-height: calc(100vh - 105px);
}

.container {
	display: flex;
	align-items: center;
	flex-direction: column;

	button {
		margin: 10px;
	}
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

.no-repos {
	font-size: 20px;
	text-decoration: underline;
	margin-top: 10px;
}

@media (max-width: 480px) {
	.repos__wrapper {
		max-width: 350px;
	}
}
</style>
