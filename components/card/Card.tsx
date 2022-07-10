const Card: React.FC<React.ComponentPropsWithoutRef<"div">> = (
	props: React.ComponentPropsWithoutRef<"div">
) => (
	<div className="m-2 p-10 w-fit shadow-lg bg-white rounded-lg">
		{props.children}
	</div>
)

export default Card
