<template>
	<div class="wrapper">
      <header class="navbar">
			<div class="container">
				<div class="navbar-content">
					<div class="logo">Github Finder</div>
				</div>
			</div>
		</header>
		<router-view />
		<section class="demo">
			<div class="demo-content">
				<p>Minor Api, using the most popular one - Github for instance</p>
				<div class="container">
					<ul class="ul-line">
						<li>Creating UI components for search</li>
						<li>Tracking data from Input</li>
						<li>Sending requests with user data</li>
						<li>Processing request-response</li>
						<li>Adding received data</li>
					</ul>
				</div>
			</div>
		</section>
	</div>
</template>

<style lang="scss">
.title {
	font-weight: 700 !important;
}
.container {
	width: 600px !important;
}
.logo {
	margin: 0 auto;
}
.demo {
	margin: 0 auto;
	font-size: 1.2rem;
	width: 100%;
	h2 {
		font-size: 1.6rem;
		padding-bottom: 0.66rem;
		text-align: center;
	}
	div {
		text-align: center;
	}
	.mb {
		margin-top: 30px;
	}
	&-content {
		padding: 40px 0;
		background-color: #fff;
		/* margin-top: 120px; */
	}
	.ul-line li {
		text-align: left;
		position: relative;
		list-style: none;
		display: flex;
		padding-left: 0.625rem;
	}
	.ul-line li::before {
		content: "\2013";
		display: block;
		margin-right: 0.625rem;
	}
	.ul-line {
		margin-top: 30px;
	}
}
section,
.section {
	padding: 0 !important;
}
@media (max-width: 400px) {
	.mb {
		margin-top: 10px !important;
	}
}
</style>
