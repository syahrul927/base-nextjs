import { ComponentMeta, ComponentStory } from "@storybook/react"
import SidebarLayout, { SidebarProps } from "./SidebarLayout"
import { mockSidebarTemplate } from "./SidebarLayout.mocks"

export default {
	title: "sidebar/SidebarLayout",
	component: SidebarLayout,
	argType: {},
} as ComponentMeta<typeof SidebarLayout>

const template: ComponentStory<typeof SidebarLayout> = (args) => (
	<SidebarLayout {...args} />
)

export const Base = template.bind({})
Base.args = {
	...mockSidebarTemplate.base,
} as SidebarProps
