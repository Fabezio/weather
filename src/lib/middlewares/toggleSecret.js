import { secretReleased } from "../store/secret.js"

console.log($secretReleased)
export default function toggleSecretCMP() {
  $secretReleased = !secretReleased
		// $page.url.searchParams.append()
		// $page.url.href = "http://localhost:3000/secret"
		// return {
		// 	status: 302,
		// 	url: {pathname: "/secret"}

		// }
		
	}