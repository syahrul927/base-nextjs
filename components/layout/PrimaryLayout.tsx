import Head from "next/head"
import SidebarLayout from "../sidebar/SidebarLayout"
import { mockSidebarTemplate } from "../sidebar/SidebarLayout.mocks"

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<"div"> {
	title?: string
	items?: "items-center" | "items-start" | "items-end"
	justify?: "justify-center" | "justify-start" | "justify-end"
}
const PrimaryLayout: React.FC<IPrimaryLayout> = ({
	children,
	items = "items-center",
	justify = "justify-center",
	title,
	...divProps
}) => {
	return (
		<>
			<Head>
				<title>{title ? title : "Base Project"}</title>
			</Head>
			<div {...divProps} className={`flex flex-row bg-gray-100 min-h-screen`}>
				<SidebarLayout {...mockSidebarTemplate.base} />
				<main className={`flex-1 p-10 flex ${justify} ${items}`}>
					{children}
				</main>
			</div>
		</>
	)
}
export default PrimaryLayout
