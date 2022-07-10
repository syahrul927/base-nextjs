import { ComponentMeta, ComponentStory } from "@storybook/react"
import Card from "./Card"
import { mockCardProps } from "./Card.mocks"

export default {
	title: "Card",
	component: Card,
} as ComponentMeta<typeof Card>
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Base = Template.bind({})
Base.args = {
	...mockCardProps.base,
} as React.ComponentPropsWithoutRef<"div">
