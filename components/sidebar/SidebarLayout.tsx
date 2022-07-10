import {
	faAngleLeft,
	faAngleRight,
	faEllipsis,
} from "@fortawesome/free-solid-svg-icons"
import {
	FontAwesomeIcon,
	FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome"
import { Tooltip } from "flowbite-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export interface SidebarProps {
	title: string
	logo?: string
	content: SidebarGroupMenuProps[]
}
export interface SidebarGroupMenuProps {
	groupName?: string
	menus: SidebarMenuProps[]
}
export interface SidebarMenuProps {
	label: string
	icon?: FontAwesomeIconProps
	url: string
}
const SidebarLayout: React.FC<SidebarProps> = (props: SidebarProps) => {
	const [isOpen, setIsOpen] = React.useState<boolean>(true)
	const renderLogo = (logo: string) => (
		<Image src={logo} width={"40"} height={"40"} alt={"iconApp"} />
	)
	const { content } = props
	const renderGroupMenu = () => {
		return content.map((item, idx) => (
			<div key={idx} className="flex flex-col ">
				{item.groupName && (
					<p className="font-extralight text-gray-500 uppercase mt-2 ">
						{isOpen && item.groupName}
					</p>
				)}
				<div className={`flex flex-col ${!isOpen && "items-center"} `}>
					{renderMenu(item.menus)}
				</div>
			</div>
		))
	}
	const renderMenu = (menus: SidebarMenuProps[]) => {
		return menus.map((item, idx) => {
			const icon: FontAwesomeIconProps = item.icon
				? { ...item.icon }
				: { icon: faEllipsis }
			return (
				<Link href={item.url} key={idx}>
					<Tooltip
						content={<p className="whitespace-nowrap">{item.label}</p>}
						style="light"
						placement="right"
						trigger="hover"
					>
						<div className="flex gap-3 items-center group hover:text-mine-hover hover:drop-shadow-md active:drop-shadow-lg active:text-mine-dark cursor-pointer font-normal text-sm py-3">
							<FontAwesomeIcon
								{...icon}
								className={`${
									!isOpen && "text-lg"
								} text-gray-300 group-hover:text-mine-hover group-active:text-mine-dark`}
							/>
							{isOpen && item.label}
						</div>
					</Tooltip>
				</Link>
			)
		})
	}
	return (
		<aside
			className={`${
				isOpen ? "w-60" : "w-16"
			} transition-all ease-linear delay-50 left-0 top-0 bottom-0 h-screen bg-white shadow-lg border-1 relative`}
		>
			<div className=" bg-gray-100 h-6 w-6 flex justify-center cursor-pointer items-center border-gray-300 border absolute -right-2.5 top-8 rounded-full z-10">
				<FontAwesomeIcon
					icon={isOpen ? faAngleLeft : faAngleRight}
					onClick={() => setIsOpen(!isOpen)}
				/>
			</div>
			<div className="flex flex-col h-screen overflow-y-auto justify-start">
				<div
					className={`w-full py-5 ${
						isOpen ? "px-5" : "px-1"
					} justify-center items-end gap-1 flex sticky top-0 bg-white shadow-sm `}
				>
					{props.logo && renderLogo(props.logo)}
					<div className="text-mine-default font-extralight text-2xl ">
						{isOpen && props.title}
					</div>
				</div>
				{/* group menu */}
				<div className="flex m-5 flex-col gap-1 divide-y-2">
					{renderGroupMenu()}
				</div>
			</div>
		</aside>
	)
}

export default SidebarLayout
