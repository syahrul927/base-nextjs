import Head from "next/head"

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<"div"> {
	title?: string
	justify?: "items-center" | "items-start"
}
const PrimaryLayout: React.FC<IPrimaryLayout> = ({
	children,
	justify = "items-center",
	title,
	...divProps
}) => {
	return (
		<>
			<Head>
				<title>{title ? title : "Base Project"}</title>
			</Head>
			<div {...divProps} className={`min-h-screen flex flex-col ${justify}`}>
				<main className="px-5">{children}</main>
			</div>
		</>
	)
}
export default PrimaryLayout
