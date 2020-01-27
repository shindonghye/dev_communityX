/* 스터디 멤버 정보 레이아웃 */
<template>
	<div class="profile">
		<h2>{{ memberInfo[0].name }} Profile</h2>
		<p v-show="!memberInfo.length">
			<i></i>
		</p>
		<ul>
			<li
				v-for="member in memberInfo"
				:key="member.id"
			>
				{{ member.name }} <br/>
				{{ member.phone }} <br/>
				{{ member.gender }} <br/>
				{{ member.address }}
			</li>
		</ul>
		
	</div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
	computed: {
		...mapState({
			//checkoutStatus: state => state.profile.checkoutStatus
			
		}),
		...mapGetters('profile', {
			memberInfo: 'clickMember'
		})
	},
	methods: {
	
	}
}
</script>