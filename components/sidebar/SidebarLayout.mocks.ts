import {
	faCircleQuestion,
	faIdCard,
	faPieChart,
	faSignature,
} from "@fortawesome/free-solid-svg-icons"
import {
	SidebarGroupMenuProps,
	SidebarMenuProps,
	SidebarProps,
} from "./SidebarLayout"

const menus: SidebarMenuProps[] = [
	{
		label: "Dashboard",
		url: "#",
		icon: {
			icon: faPieChart,
		},
	},
	{
		label: "Kartu Tanda Penduduk",
		url: "#",
		icon: {
			icon: faIdCard,
		},
	},
	{
		label: "Akte Kelahiran",
		url: "#",
		icon: {
			icon: faSignature,
		},
	},
]
const content: SidebarGroupMenuProps[] = [
	{
		groupName: "Administrasi",
		menus,
	},
	{
		menus: [
			{
				label: "Help",
				url: "#",
				icon: {
					icon: faCircleQuestion,
				},
			},
		],
	},
]
const base: SidebarProps = {
	title: "BekasiCare",
	logo: "https://bpkad.bekasikota.go.id/wp-content/uploads/2016/09/cropped-logo-pemkot-bekasi-1-e1476172065119.png",
	content,
}

export const mockSidebarTemplate = {
	base,
}
