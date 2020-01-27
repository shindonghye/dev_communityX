/* 스터디 멤버 리스트 레이아웃 */
<template>
	<ul>
		<li
			v-for="member in members"
			:key="member.id">
				{{ member.name }} <br>
			<button
				:disabled="member.gender != 'male'"
				@click="searchProfile(member)">
					Profile
			</button>
		</li>
	</ul>
</template>


<script>
import { mapState, mapActions } from 'vuex'

export default {
	computed: mapState({
		members: state => state.member.all
	}),
	methods: mapActions('profile', [
		'searchProfile'
		
	]),
	created () {
		this.$store.dispatch('member/getAllMembers')
	}
}
</script>