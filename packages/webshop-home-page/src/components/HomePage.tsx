type Props = {
	hello: string;
};

export function HomePage({ hello }: Props) {
	return <div>Welcome to the {hello} home page!</div>;
}
