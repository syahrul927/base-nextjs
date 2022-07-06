import { NextPage } from "next"
import {
	ComponentType,
	ReactElement,
	ReactNode,
} from "react-syntax-highlighter/node_modules/@types/react"

export type NextPageWithLayout<P = {}> = NextPage<P> & {
	getLayout?: (_page: ReactElement) => ReactNode
	layout?: ComponentType
}
