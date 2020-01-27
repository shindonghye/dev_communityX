const memberList = [
	{"id": 1, "name": "정광민", "phone": "010-7277-7904", "gender": "male", "address": "종로"},
	{"id": 2, "name": "신동혜", "phone": "010-6858-1115", "gender": "male", "address": "천호"},
	{"id": 3, "name": "오범진", "phone": "010-3070-0864", "gender": "male", "address": "길동"},
	{"id": 4, "name": "X그녀", "phone": "010-XXXX-XXXX", "gender": "female", "address": "모름"}
	
]

export default {
	getMemberList (data) {
		setTimeout(() => data(memberList), 100)
	}
}