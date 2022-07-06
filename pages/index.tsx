import PrimaryLayout from "../components/layout/PrimaryLayout"
import { NextPageWithLayout } from "./page"

const Home: NextPageWithLayout = () => {
	return <div>Hello Home Page</div>
}

export default Home
Home.getLayout = (page) => {
	return <PrimaryLayout title="Home Page">{page}</PrimaryLayout>
}
