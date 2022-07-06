import { ComponentMeta, ComponentStory } from "@storybook/react"
import BaseTemplate, { IBaseTemplate } from "./BaseTemplate"
import { mockbaseTemplateProps } from "./BaseTemplate.mocks"

export default {
	title: "templates/BaseTemplate",
	component: BaseTemplate,
	argTypes: {},
} as ComponentMeta<typeof BaseTemplate>
const Template: ComponentStory<typeof BaseTemplate> = (args) => (
	<BaseTemplate {...args} />
)

export const Base = Template.bind({})
Base.args = {
	...mockbaseTemplateProps.base,
} as IBaseTemplate
