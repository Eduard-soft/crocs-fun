import request, {gql} from "graphql-request"

export const getCrocsList = async() => {
	const query = gql`
	query CrocsLists {
		crocsLists {
			createdAt
			id
			name
			model
			price
			size
			publishedAt
			updatedAt
			image {
				url
			}
		}
	}
	`

	const result = await request('https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cls4xp487027c01uqrer5lzxd/master', query);
	return result;
}
