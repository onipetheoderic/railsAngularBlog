export class Post {
	id: number;
	title: string;
	body: string;
	user_id: number;
	user: {
		uid: string;
		id: number;
		name: string;
		nickname: string;
		email: string;
		
	}

}