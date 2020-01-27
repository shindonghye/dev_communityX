<template>
	<div id="shop">
		<h1>Vuejs, Vuex Study</h1>
		<hr>
		<h2>Study Member</h2>
		<MemberList/>
		<hr>
		<MemberInfo/>
	</div>
</template>

<script>
/* /src -> @ Alias 사용가능. 신동혜  */
import MemberList from '@/components/MemberList.vue'
import MemberInfo from '@/components/MemberInfo.vue'

export default {
	name: 'study',
	components: {
		MemberList,
		MemberInfo
	}
}
</script>